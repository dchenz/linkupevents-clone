import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EventCard from "./EventCard";

// Every row has 3 event cards, which is set by md={4}
// There are 12 "units" according to MUI container docs,
// so you must have factors of 12 cards per row.
export default function EventsGrid(props) {
  const [expanded, setExpanded] = useState(false);
  let displayedEvents = props.data;
  let hasMoreEvents = false;
  if (!expanded && props.rows) {
    const maximumPreviewCards = props.rows * 3;
    displayedEvents = props.data.slice(0, maximumPreviewCards);
    hasMoreEvents = props.data.length > maximumPreviewCards;
  }
  return (
    <Box mb={hasMoreEvents ? 1 : 3} p={2}>
      <Grid container spacing={5}>
        {
          displayedEvents.map((event, k) =>
            <Grid key={k} item md={4} width="100%">
              <EventCard event={event} />
            </Grid>
          )
        }
      </Grid>
      {
        hasMoreEvents && !expanded ?
          <Box textAlign="center" py={2}>
            <Button
              onClick={() => setExpanded(true)}
              size="large"
              fullWidth
              disableRipple
            >
              Show all events ({props.data.length})
            </Button>
          </Box> : null
      }
    </Box>
  );
}


