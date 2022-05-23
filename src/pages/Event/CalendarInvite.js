import { differenceInMinutes } from "date-fns";
import { createEvent as createICS } from "ics";
import fileDownload from "js-file-download";

export default function downloadICS(event) {

  const date = event.time_start;
  let eventDuration = differenceInMinutes(event.time_finish, event.time_start);
  if (isNaN(eventDuration) || eventDuration <= 0) {
    // Default bad cases to 1 hour duration
    eventDuration = 60;
  }
  const dateValues = [
    date.getFullYear(),
    date.getMonth() + 1, // Zero-indexed
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  ];

  const inviteDetails = {
    start: dateValues,
    duration: { hours: Math.floor(eventDuration / 60), minutes: eventDuration % 60 },
    title: event.title,
    description: event.description,
    location: event.location,
    url: event.url,
    status: "CONFIRMED",
    busyStatus: "BUSY"
  };

  createICS(inviteDetails, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }
    fileDownload(value, `event_${event.id}.ics`);
  });

}