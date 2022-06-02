import React, { useState } from "react";
import CalendarContext from "./Context/CalendarContext";
import EventCalendar from "./EventCalendar";
import "./styles.css";
import { Helmet } from "react-helmet";

export default function Calendar() {
  const [calendar, setCalendar] = useState({
    events: null,
    timetable: null,
    isModalOpen: false
  });
  return (
    <CalendarContext.Provider value={{ calendar, setCalendar }}>
      <Helmet>
        <title>LinkUp - Events Calendar</title>
      </Helmet>
      <EventCalendar />
    </CalendarContext.Provider>
  );
}



