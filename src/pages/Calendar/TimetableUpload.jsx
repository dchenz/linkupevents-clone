import { Delete, UploadFile } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useContext } from "react";
import CalendarContext, { setEvents, setTimetable } from "./Context/CalendarContext";
import { readTimetableFile, saveTimetableToCache } from "./ParseICalFile";
import "./styles.css";

export default function TimetableUpload() {
  const {calendar, setCalendar} = useContext(CalendarContext);

  const handleICalUpload = (e) => {
    if (e.target.files) {
      readTimetableFile(e.target.files[0])
        .then((data) => {
          setEvents(setCalendar, [...calendar.events, ...data]);
          setTimetable(setCalendar, data);
        });
    }
  };

  const handleTimetableDelete = () => {
    if (!calendar.timetable) {
      return;
    }
    // Timetable events were appended to end of array hence it's easy to remove
    setEvents(setCalendar, [...calendar.events.slice(0, calendar.events.length - calendar.timetable.length)]);
    setTimetable(setCalendar, null);
    saveTimetableToCache(null);
  };

  return (
    <Box>
      <Typography variant="h6">
        UNSW timetable
      </Typography>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          {
            calendar.timetable == null ?
              <ImportButton onChange={handleICalUpload} /> :
              <TimetableStatsField timetable={calendar.timetable} />
          }
        </Box>
        {
          calendar.timetable ?
            <Box>
              <IconButton onClick={handleTimetableDelete}>
                <Delete />
              </IconButton>
            </Box> : null
        }
      </Box>
    </Box>
  );
}

function ImportButton(props) {
  return (
    <Button component="label" startIcon={<UploadFile />}>
      Import ICal from Notangles
      <input type="file" hidden accept=".ics" onChange={props.onChange} />
    </Button>
  );
}

function TimetableStatsField(props) {
  const lowerDateRange = format(props.timetable[0].start, "dd/MM/yyyy");
  const upperDateRange = format(props.timetable[props.timetable.length - 1].start, "dd/MM/yyyy");
  return (
    <Typography>
      Showing {props.timetable.length} classes
      ({lowerDateRange} - {upperDateRange})
    </Typography>
  );
}