import { Properties } from "../configuration/properties";
import { applyCustomHostsToEvent, getCustomHosts } from "./GetCustomHosts";
import { getDate, jsonFetch } from "./Helpers";

export default async function getSocietyEvents(id) {
  const url = Properties.societyEventsAPI + encodeURIComponent(id);
  const eventsData = await jsonFetch(url);
  // Fetch the custom hosts file
  const customHosts = await getCustomHosts();
  for (const event of eventsData) {
    // Replace host logos with custom image
    applyCustomHostsToEvent(customHosts, event);
    event["time_start"] = getDate(event["time_start"]);
    event["time_finish"] = getDate(event["time_finish"]);
  }
  return eventsData;
}