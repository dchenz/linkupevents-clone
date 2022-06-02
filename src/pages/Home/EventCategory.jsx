import { Grid, Typography } from "@mui/material";
import React from "react";
import EventsGrid from "../../components/EventGrid";

export default function EventsToday(props) {
  if (props.data.length == 0) {
    return null;
  }
  return (
    <Grid item md={12}>
      <Typography variant="h2" p={2}>
        {props.title}
      </Typography>
      <EventsGrid
        data={props.data}
        rows={2}
      />
    </Grid>
  );
}