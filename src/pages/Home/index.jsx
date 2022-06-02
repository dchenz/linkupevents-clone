import { Container, Grid, Typography } from "@mui/material";
import { isToday, isTomorrow } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import getEvents from "../../api/GetEvents";
import LastUpdateTime from "../../components/LastUpdateTime";
import Loading from "../../components/Loading";
import EventCategory from "./EventCategory";
import NoEvents from "./NoEvents";

export default function Home() {
  const [events, setEvents] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data.events);
        setLastUpdate(data.lastUpdate);
      });
  }, []);

  const categories = useMemo(() => {
    if (events) {
      return groupEventsByCategory(events);
    }
  }, [events]);

  if (events === null) {
    return <Loading caption="Fetching events..." />;
  }

  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={12} px={2} py={4}>
          <Typography variant="h1">
            UNSW Event Tracker
          </Typography>
          <LastUpdateTime
            date={lastUpdate}
            onRefresh={(newEvents, updateTime) => {
              setEvents(newEvents);
              setLastUpdate(updateTime);
            }}
          />
        </Grid>
        <EventCategory title="Events on today" data={categories.onToday} />
        <EventCategory title="Events on tomorrow" data={categories.onTomorrow} />
        {
          events.length ? null :
            <NoEvents />
        }
      </Grid>
    </Container>
  );
}

function groupEventsByCategory(events) {
  const onToday = events.filter((event) => isToday(event.time_start));
  const onTomorrow = events.filter((event) => isTomorrow(event.time_start));
  return {
    onToday,
    onTomorrow
  };
}
