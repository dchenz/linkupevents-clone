import { isAfter, isBefore, isEqual } from "date-fns";
import Fuse from "fuse.js";

export function applySort(data, strategy) {
  switch (strategy) {
  case "DATE_ASC":
    return data.sort(({ time_start: a }, { time_start: b }) =>
      isBefore(a, b) ? -1 : isAfter(a, b) ? 1 : 0);
  case "DATE_DSC":
    return data.sort(({ time_start: a }, { time_start: b }) =>
      isBefore(a, b) ? 1 : isAfter(a, b) ? -1 : 0);
  }
  return data;
}

export function applyFilters(data, predicates) {
  return data.filter((event) => predicates.every((pred) => pred(event)));
}

export const daysFilter = (days) => (event) =>
  days.includes(event.time_start.getDay());

export const multiDayFilter = (isHiding) => (event) =>
  !isHiding || event.time_start.toDateString() == event.time_finish.toDateString();

export const dateFilter = (start, finish, byInterval) =>
  byInterval ?
    (event) => dateFilterOverlap(event, start, finish) :
    (event) => dateFilterExact(event, start, finish);

function dateFilterOverlap(event, start, finish) {
  if (start == null && finish == null) {
    return true;
  }
  if (start == null) {
    return isSameOrBefore(event.time_start, finish);
  }
  if (finish == null) {
    return isSameOrAfter(event.time_finish, start);
  }
  return isSameOrBefore(event.time_start, finish) && isSameOrBefore(start, event.time_finish);
}

function dateFilterExact(event, start, finish) {
  if (start == null && finish == null) {
    return true;
  }
  if (start == null) {
    return isSameOrBefore(event.time_finish, finish);
  }
  if (finish == null) {
    return isSameOrAfter(event.time_start, start);
  }
  return isSameOrAfter(event.time_start, start) && isSameOrBefore(event.time_finish, finish);
}

function isSameOrBefore(date1, date2) {
  return isBefore(date1, date2) || isEqual(date1, date2);
}

function isSameOrAfter(date1, date2) {
  return isAfter(date1, date2) || isEqual(date1, date2);
}

const fuseOptions = {
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
};

export function useFuse() {
  let fs = null;

  const init = (data) => {
    if (!fs) {
      fs = new Fuse(data, fuseOptions);
    }
  };

  const search = (data, searchString) => {
    // Must call fuseContext.init before this function
    if (searchString?.trim()) {
      return fs.search(searchString).map((result) => result.item);
    }
    return data;
  };

  return { init, search };
}