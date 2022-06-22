import { Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";

export default function EventTime({ start, finish }) {
  const isOneDayEvent = start.toDateString() == finish.toDateString();
  const startTime = isOneDayEvent ? format(start, "do MMMM yyyy (EEE.)") : format(start, "do MMMM yyyy (EEE.) - h:mmaaa");
  let finishTime;
  if (isOneDayEvent) {
    finishTime = format(start, "h:mmaaa");
    // Same time, same day - Don't repeat it twice
    if (start.toTimeString() != finish.toTimeString()) {
      finishTime += " - " + format(finish, "h:mmaaa");
    }
  } else {
    finishTime = format(finish, "do MMMM yyyy (EEE.) - h:mmaaa");
  }
  return (
    <React.Fragment>
      <Typography fontWeight={700}>
        {startTime}
      </Typography>
      <Typography fontWeight={700}>
        {finishTime}
      </Typography>
    </React.Fragment>
  );
}