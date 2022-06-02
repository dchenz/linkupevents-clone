import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Views } from "react-big-calendar";
import getEvents from "../../api/GetEvents";
import BigCalendar from "../../components/BigCalendar";
import Loading from "../../components/Loading";
import CalendarToolbar from "./CalendarToolbar";
import CalendarContext from "./Context/CalendarContext";
import { loadTimetableFromCache } from "./ParseICSFile";
import "./styles.css";

export default function EventCalendar() {
  const { calendar, setCalendar } = useContext(CalendarContext);

  useEffect(() => {
    getEvents()
      .then(({ events }) => {
        const displayedEvents = events.filter(isDisplayedOnCalendar).map(toCalendarEvent);
        const cachedTimetableData = loadTimetableFromCache();
        setCalendar({
          ...calendar,
          events: [...displayedEvents, ...(cachedTimetableData ?? [])],
          timetable: cachedTimetableData,
        });
      });
  }, []);

  if (calendar.events === null) {
    return <Loading caption="Fetching events..." />;
  }

  return (
    <Grid container pt={5}>
      <Grid item className="event-calendar-container">
        <BigCalendar
          styleClass="event-calendar"
          events={calendar.events}
          defaultView={Views.WEEK}
          views={[Views.WEEK]}
          min={new Date(1970, 0, 1, 7, 0, 0)}
          eventPropGetter={getEventClassName}
          components={{
            toolbar: CalendarToolbar
          }}
        />
      </Grid>
    </Grid>
  );
}

function getEventClassName(event) {
  return {
    className: event.source == "fb" ? "calendar-event-facebook" : "calendar-event-timetable"
  };
}

function toCalendarEvent(event) {
  return {
    title: event.title,
    start: event.time_start,
    end: event.time_finish,
    source: "fb"
  };
}

function isDisplayedOnCalendar(event) {
  return event.time_start.toDateString() == event.time_finish.toDateString()
    && event.time_start.toTimeString() != event.time_finish.toTimeString();
}