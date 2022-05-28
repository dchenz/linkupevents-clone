import { Properties } from "../configuration/properties";
import { jsonFetch, getDate, useCustomHosts } from "./Helpers";

export default async function getEvents() {
  // Get last update time from endpoint
  const lastUpdateTime = await jsonFetch(Properties.lastUpdatedAPI);
  // Get cached event data if cached copy is good
  let eventsData = loadCachedEvents(lastUpdateTime);
  if (!eventsData) {
    // Fetch fresh data from API if no good cached copy
    eventsData = await jsonFetch(Properties.allEventsAPI);
    // Save to cache
    saveEventsToCache(eventsData, lastUpdateTime);
  }
  // Fetch the custom hosts file
  const customHosts = useCustomHosts();
  await customHosts.init();
  for (const event of eventsData) {
    // Replace host logos with custom image
    customHosts.apply(event);
    event["time_start"] = getDate(event["time_start"]);
    event["time_finish"] = getDate(event["time_finish"]);
  }
  return eventsData;
}

function loadCachedEvents(lastUpdateTime) {
  try {
    const cacheUpdateTime = localStorage.getItem("LAST-UPDATE-TS");
    // Only fetch from cache if the last update time hasn't changed
    if (lastUpdateTime != cacheUpdateTime) {
      return null;
    }
    return JSON.parse(localStorage.getItem("CACHED-EVENTS"));
    // eslint-disable-next-line no-empty
  } catch {
    // Errors will cause a fresh request to API
  }
  return null;
}

function saveEventsToCache(eventsData, lastUpdateTime) {
  try {
    localStorage.setItem("LAST-UPDATE-TS", lastUpdateTime);
    localStorage.setItem("CACHED-EVENTS", JSON.stringify(eventsData));
  // eslint-disable-next-line no-empty
  } catch {
    // Unlikely, but ignore full localStorage errors
  }
}