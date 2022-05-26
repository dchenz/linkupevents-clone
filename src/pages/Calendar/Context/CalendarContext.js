import { createContext } from "react";

export const initState = {
  events: null,
  timetable: null,
  isModalOpen: false
};

export default createContext({
  calendar: initState,
  setCalendar: null
});

// Helper functions

export function setEvents(setContext, events) {
  setContext((prev) => {
    prev.events = events;
    return {...prev};
  });
}

export function setTimetable(setContext, timetable) {
  setContext((prev) => {
    prev.timetable = timetable;
    return {...prev};
  });
}

export function setModalOpen(setContext, state) {
  setContext((prev) => {
    prev.isModalOpen = state;
    return {...prev};
  });
}