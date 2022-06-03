import { ExpandMore, HelpOutline } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Tooltip, Typography } from "@mui/material";
import React from "react";
import SetCheckbox from "../../components/SetCheckbox";

// Sorted in render order
// DAYS[0] is the result of Date.getDay
const DAYS = [
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [0, "Sunday"]
];

const intervalHelpText = `Select this option to include
all events that overlap the given time range.
It is useful if you don't mind arriving late or leaving early.`;

export default function AdvancedFilters(props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>
          Advanced filters
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup row>
          {
            DAYS.map(([k, day]) =>
              <FormControlLabel
                key={k}
                label={day}
                control={
                  <SetCheckbox
                    set={props.days}
                    item={k}
                    onChange={props.setDays}
                  />
                }
              />
            )
          }
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            label="Hide multi-day events"
            control={
              <Checkbox
                checked={props.hideMultiDay}
                onChange={(e) => props.setHideMultiDay(e.target.checked)}
              />
            }
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              label="Filter by interval overlap"
              control={
                <Checkbox
                  checked={props.byInterval}
                  onChange={(e) => props.setByInterval(e.target.checked)}
                />
              }
            />
            <Tooltip arrow title={<Typography>{intervalHelpText}</Typography>}>
              <HelpOutline />
            </Tooltip>
          </div>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}