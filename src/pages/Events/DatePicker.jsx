import { Box, TextField, Typography } from "@mui/material";
import { isAfter } from "date-fns";
import React, { forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";

export function StartDatePicker(props) {
  return (
    <Box className="date-range-group">
      <Typography>{props.label}</Typography>
      <DatePicker
        selectsStart
        selected={props.startDate}
        startDate={props.startDate}
        endDate={props.finishDate}
        onChange={props.setDate}
        showTimeInput
        customInput={<MUIDateInput />}
        dateFormat="dd/MM/yyyy h:mmaaa"
        isClearable={props.startDate != null}
        closeOnScroll
      />
    </Box>
  );
}

export function FinishDatePicker(props) {

  useEffect(() => {
    // Clear finish date if there's an invalid interval
    if (props.startDate && props.finishDate && isAfter(props.startDate, props.finishDate)) {
      props.setDate(null);
    }
  }, [props.startDate, props.finishDate]);

  return (
    <Box className="date-range-group">
      <Typography>{props.label}</Typography>
      <DatePicker
        selectsEnd
        selected={props.finishDate}
        startDate={props.startDate}
        endDate={props.finishDate}
        minDate={props.startDate}
        onChange={(value) => props.setDate((prev) => {
          if (prev == null && value != null) {
            value.setHours(23);
            value.setMinutes(59);
            value.setSeconds(59);
          }
          return value;
        })}
        showTimeInput
        customInput={<MUIDateInput />}
        dateFormat="dd/MM/yyyy h:mmaaa"
        isClearable={props.finishDate != null}
        closeOnScroll
      />
    </Box>
  );
}

const MUIDateInput = forwardRef((props, ref) =>
  <TextField
    ref={ref}
    variant="standard"
    sx={{ width: "100%" }}
    value={props.value}
    onClick={props.onClick}
  />
);
MUIDateInput.displayName = "date";