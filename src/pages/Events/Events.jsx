import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import getEvents from "../../api/GetEvents";
import Loading from "../../components/Loading";
import SearchField, { useSearch } from "../../components/SearchField";
import AdvancedFilters from "./AdvancedFilters";
import { applyFilters, dateFilter, daysFilter, multiDayFilter } from "./DataTransforms";
import { FinishDatePicker, StartDatePicker } from "./DatePicker";
import EventsGrid from "./EventsGrid";
import "./styles.css";

const searchIndex = useSearch({
  ignoreLocation: true,
  keys: [
    {
      name: ["title"],
      weight: 0.5
    },
    {
      name: ["description"],
      weight: 0.2
    },
    {
      name: ["hosts", "name"],
      weight: 0.2
    },
    {
      name: ["categories"],
      weight: 0.1
    }
  ]
});

export default function Events() {
  const [eventData, setEventData] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [hideMultiDay, setHideMultiDay] = useState(false);
  const [byInterval, setByInterval] = useState(false);
  const [days, setDays] = useState([...Array(7).keys()]);

  useEffect(() => {
    getEvents()
      .then((data) => {
        const midnightToday = new Date();
        midnightToday.setHours(0);
        midnightToday.setMinutes(0);
        midnightToday.setSeconds(0);
        setStartDate(midnightToday);
        setEventData(data);
        searchIndex.init(data);
      });
  }, []);

  // Search for events first
  const searchedEvents = useMemo(() => {
    if (eventData === null) {
      return null;
    }
    return searchIndex.search(eventData, searchString);
  }, [eventData, searchString]);

  // Then, apply filters on the search results
  const displayedEvents = useMemo(() => {
    if (searchedEvents === null) {
      return null;
    }
    const filtered = applyFilters(searchedEvents, [
      daysFilter(days),
      multiDayFilter(hideMultiDay),
      dateFilter(startDate, finishDate, byInterval)
    ]);
    return filtered;
  }, [searchedEvents, startDate, finishDate, hideMultiDay, days, byInterval]);

  if (displayedEvents === null) {
    return <Loading caption="Fetching events..." />;
  }

  return (
    <Container>
      <Box my={4} p={2}>
        <Grid component={Paper} container p={3}>
          <Grid item md={4} width="100%" p={1}>
            <SearchField
              title="Search for events"
              onSearch={setSearchString}
            />
          </Grid>
          <Grid item md={4} width="100%" p={1}>
            <StartDatePicker
              label={byInterval ? "Start time" : "Starts after"}
              startDate={startDate}
              finishDate={finishDate}
              setDate={setStartDate}
            />
          </Grid>
          <Grid item md={4} width="100%" p={1}>
            <FinishDatePicker
              label={byInterval ? "End time" : "Ends before"}
              startDate={startDate}
              finishDate={finishDate}
              setDate={setFinishDate}
            />
          </Grid>
          <Grid item md={12} width="100%" p={1} mt={1}>
            <AdvancedFilters
              days={days}
              setDays={setDays}
              hideMultiDay={hideMultiDay}
              setHideMultiDay={setHideMultiDay}
              byInterval={byInterval}
              setByInterval={setByInterval}
            />
          </Grid>
        </Grid>
      </Box>
      <EventsGrid data={displayedEvents} />
    </Container>
  );
}


