import { Container, Grid, Typography } from "@mui/material";
import { isToday, isTomorrow } from "date-fns";
import React, { useEffect, useState } from "react";
import getEvents from "../../api/GetEvents";
import EventsGrid from "../../components/EventGrid";
import Loading from "../../components/Loading";

export default function Home() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    getEvents()
      .then(setEventData);
  }, []);

  if (eventData === null) {
    return <Loading caption="Fetching events..." />;
  }

  const eventsOnToday = eventData.filter((event) => isToday(event.time_start));
  const eventsOnTomorrow = eventData.filter((event) => isTomorrow(event.time_start));

  return (
    <Container>
      <Grid container my={4}>
        <Grid item md={12}>
          <Typography variant="h1" px={2} py={4}>
            Events on today
          </Typography>
          <EventsGrid
            data={eventsOnToday}
            rows={2}
          />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h1" px={2} py={4}>
            Events on tomorrow
          </Typography>
          <EventsGrid
            data={eventsOnTomorrow}
            rows={2}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
