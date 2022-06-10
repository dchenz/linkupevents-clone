import { Grid, Box } from "@mui/material";
import React from "react";
import LoadingEventCard from "./LoadingEventCard";

export default function LoadingEventsGrid() {
  return (
    <Box mb={3}>
      <Grid container spacing={5}>
        <Grid item md={4} width="100%">
          <LoadingEventCard />
        </Grid>
        <Grid item md={4} width="100%">
          <LoadingEventCard />
        </Grid>
        <Grid item md={4} width="100%">
          <LoadingEventCard />
        </Grid>
      </Grid>
    </Box>
  );
}


