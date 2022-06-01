import { Grid, Typography } from "@mui/material";
import React from "react";
import EventsGrid from "../../components/EventGrid";

export default function EventsToday(props) {
  if (props.data.length == 0) {
    return null;
  }
  return (
    <Grid item md={12}>
      <Typography variant="h1" px={2} py={4}>
        {props.title}
      </Typography>
      <EventsGrid
        data={props.data}
        rows={2}
      />
    </Grid>
  );
}