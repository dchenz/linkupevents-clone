import { Grid } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";

export default function EventsGrid(props) {
  return (
    <Grid container spacing={5} mb={5} p={2}>
      {
        props.data.map((event, k) =>
          <Grid key={k} item md={4} width="100%">
            <EventCard event={event} />
          </Grid>
        )
      }
    </Grid>
  );
}


