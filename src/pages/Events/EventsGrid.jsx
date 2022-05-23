import { Grid } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";

export default function EventsGrid(props) {
  return (
    <Grid container spacing={5} mb={5}>
      {
        props.data.map((event, k) =>
          <EventCard key={k} event={event} />
        )
      }
    </Grid>
  );
}