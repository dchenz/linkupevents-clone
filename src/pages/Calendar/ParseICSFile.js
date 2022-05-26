import { isAfter, parse } from "date-fns";
import ICalParser from "ical-js-parser";

const ttStorageKey = "TIMETABLE-DATA";

export function loadTimetableFromCache() {
  const dataString = localStorage.getItem(ttStorageKey);
  if (!dataString) {
    return null;
  }
  try {
    const cachedData = JSON.parse(dataString);
    formatTimetableEvents(cachedData);
    return cachedData;
  } catch {
    // eslint-disable-next-line no-empty
  }
  return null;
}

export function saveTimetableToCache(timetable) {
  try {
    if (!timetable) {
      localStorage.removeItem(ttStorageKey);
    } else {
      localStorage.setItem(ttStorageKey, JSON.stringify(timetable));
    }
  } catch {
    // eslint-disable-next-line no-empty
  }
}

export const readTimetableFile = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const icalData = parseICalData(reader.result);
    if (!icalData) {
      reject();
    } else {
      saveTimetableToCache(icalData);
      formatTimetableEvents(icalData);
      resolve(icalData);
    }
  };
  reader.onerror = reject;
  reader.readAsText(file);
});

function parseICalData(textValue) {
  try {
    const calendar = ICalParser.toJSON(textValue);
    if (calendar.errors?.length) {
      console.warn("Errors detected in iCal parsing", calendar.errors);
    }
    const events = calendar.events;
    return events.map((event) => ({
      title: event.summary ?? "Class",
      start: event.dtstart.value,
      end: event.dtend.value
    }));
  } catch {
    // eslint-disable-next-line no-empty
  }
  return null;
}

function formatTimetableEvents(timetableEvents) {
  for (const event of timetableEvents) {
    event.start = timestampToDate(event.start);
    event.end = timestampToDate(event.end);
  }
  timetableEvents.sort((e1, e2) =>
    isAfter(e1.start, e2.start) ? 1 :
      isAfter(e2.start, e1.start) ? -1 : 0);
}

function timestampToDate(ts) {
  // Expected timestamp format: 20220526T193000Z
  return parse(ts, "yyyyMMdd'T'HHmmssX", new Date());
}