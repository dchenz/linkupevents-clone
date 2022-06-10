import { Container, Grid, Typography } from "@mui/material";
import { isThisMonth, isThisWeek, isToday, isTomorrow } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import getEvents from "../../api/GetEvents";
import LastUpdateTime from "../../components/LastUpdateTime";
import LoadingHomePage from "../../components/Loading/LoadingHomePage";
import EventCategory from "./EventCategory";

export default function HomePage() {

  const [events, setEvents] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const loadEvents = (data) => {
    setEvents(data.events);
    setLastUpdate(data.lastUpdate);
  };

  useEffect(() => {
    getEvents()
      .then(loadEvents);
  }, []);

  const categories = useMemo(() => {
    if (events) {
      return groupEventsByCategory(events);
    }
  }, [events]);

  if (events === null) {
    return <LoadingHomePage />;
  }

  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={12} px={2} py={4} sx={{  textAlign: { md: "center" } }}>
          <Typography variant="h1">
            UNSW Event Tracker
          </Typography>
          <LastUpdateTime
            date={lastUpdate}
            onRefresh={loadEvents}
          />
        </Grid>
        <EventCategory title="Events on today" data={categories.onToday} />
        <EventCategory title="Events on tomorrow" data={categories.onTomorrow} />
        <EventCategory title="Events on this week" data={categories.onThisWeek} />
        <EventCategory title="Events on this month" data={categories.onThisMonth} />
      </Grid>
    </Container>
  );
}

function groupEventsByCategory(events) {
  const onToday = [];
  const onTomorrow = [];
  const onThisWeek = [];
  const onThisMonth = [];
  const futureEvents = [];
  for (const event of events) {
    if (isToday(event.time_start)) {
      onToday.push(event);
    } else if (isTomorrow(event.time_start)) {
      onTomorrow.push(event);
    } else if (isThisWeek(event.time_start)) {
      onThisWeek.push(event);
    } else if (isThisMonth(event.time_start)) {
      onThisMonth.push(event);
    } else {
      futureEvents.push(event);
    }
  }
  return {
    onToday,
    onTomorrow,
    onThisWeek,
    onThisMonth,
    futureEvents
  };
}
