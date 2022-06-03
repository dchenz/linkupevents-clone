import { Pending, Refresh } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import getEvents from "../api/GetEvents";
import IconButton from "./IconButton";

export default function LastUpdateTime(props) {
  const [isLoading, setLoading] = useState(false);
  const reloadEvents = () => {
    setLoading(true);
    getEvents()
      .then((data) => {
        props.onRefresh(data);
        setLoading(false);
      });
  };
  return (
    <Box>
      <Typography variant="span">
        Last updated: {props.date}
      </Typography>
      &nbsp;
      {
        isLoading ?
          <IconButton disabled>
            <Pending />
          </IconButton> :
          <IconButton
            tooltip="Refresh events"
            onClick={reloadEvents}
          >
            <Refresh />
          </IconButton>
      }
    </Box>
  );
}