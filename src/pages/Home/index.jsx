import { Container, Grid, Typography } from "@mui/material";
import { isToday, isTomorrow } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import getEvents from "../../api/GetEvents";
import Loading from "../../components/Loading";
import EventCategory from "./EventCategory";

export default function Home() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    getEvents()
      .then(() => setEventData([]));
  }, []);

  const categories = useMemo(() => {
    if (eventData) {
      return groupEventsByCategory(eventData);
    }
  }, [eventData]);

  if (eventData === null) {
    return <Loading caption="Fetching events..." />;
  }

  return (
    <Container>
      <Grid container my={4}>
        <EventCategory title="Events on today" data={categories.onToday} />
        <EventCategory title="Events on tomorrow" data={categories.onTomorrow} />
        {
          eventData.length ? null :
            <Grid item>
              <Typography variant="h3">
                No events
              </Typography>
            </Grid>
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
