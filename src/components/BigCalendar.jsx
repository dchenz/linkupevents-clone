import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function BigCalendar({ styleClass, ...props }) {
  return (
    <div className={styleClass}>
      <Calendar
        localizer={localizer}
        {...props}
      />
    </div>
  );
}