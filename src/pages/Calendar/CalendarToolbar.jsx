import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { format } from "date-fns";
import React, { useMemo } from "react";
import IconButton from "../../components/IconButton";
import SettingsModal from "./SettingsModal";

export default function CalendarToolbar(props) {

  const goToBack = () => {
    const newDate = new Date(props.date);
    newDate.setDate(newDate.getDate() - 7);
    props.onNavigate("prev", newDate);
  };

  const goToNext = () => {
    const newDate = new Date(props.date);
    newDate.setDate(newDate.getDate() + 7);
    props.onNavigate("next", newDate);
  };

  const goToToday = () => {
    props.onNavigate("current", new Date());
  };

  const dateRange = useMemo(() => getWeekRange(props.date), [props.date]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box flexGrow={1}>
        <IconButton onClick={goToBack}>
          <ArrowLeft />
        </IconButton>
        <Button onClick={goToToday}>
          Today
        </Button>
        <IconButton onClick={goToNext}>
          <ArrowRight />
        </IconButton>
      </Box>
      <Box flexGrow={1}>
        {format(dateRange.lower, "dd/MM/yy")} - {format(dateRange.upper, "dd/MM/yy")}
      </Box>
      <Box>
        <SettingsModal />
      </Box>
    </Box>
  );
}

function getWeekRange(date) {
  const prevSunday = new Date(date);
  prevSunday.setDate(date.getDate() - date.getDay());
  const nextSaturday = new Date(prevSunday);
  nextSaturday.setDate(prevSunday.getDate() + 6);
  return {
    lower: prevSunday,
    upper: nextSaturday
  };
}