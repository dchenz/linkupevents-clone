import React, { useState } from "react";
import CalendarContext from "./Context/CalendarContext";
import EventCalendar from "./EventCalendar";
import "./styles.css";

export default function Calendar() {
  const [calendar, setCalendar] = useState({
    events: null,
    timetable: null,
    isModalOpen: false
  });
  return (
    <CalendarContext.Provider value={{ calendar, setCalendar }}>
      <EventCalendar />
    </CalendarContext.Provider>
  );
}



