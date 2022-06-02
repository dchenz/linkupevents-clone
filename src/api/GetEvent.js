import { Properties } from "../configuration/properties";
import { applyCustomHostsToEvent, getCustomHosts } from "./GetCustomHosts";
import { getDate, jsonFetch } from "./Helpers";

export default async function getEvent(id) {
  const url = Properties.eventAPI + encodeURIComponent(id);
  const eventData = await jsonFetch(url);
  const customHosts = await getCustomHosts();
  applyCustomHostsToEvent(customHosts, eventData);
  eventData["time_start"] = getDate(eventData["time_start"]);
  eventData["time_finish"] = getDate(eventData["time_finish"]);
  return eventData;
}