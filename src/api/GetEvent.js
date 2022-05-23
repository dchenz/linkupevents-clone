import { Properties } from "../configuration/properties";
import { fetchDataFromAPI, getDate, useCustomHosts } from "./Helpers";

export default async function getEvent(id) {
  const url = Properties.event + encodeURIComponent(id);
  const eventData = await fetchDataFromAPI(url);
  const customHosts = useCustomHosts();
  await customHosts.init();
  customHosts.apply(eventData);
  eventData["time_start"] = getDate(eventData["time_start"]);
  eventData["time_finish"] = getDate(eventData["time_finish"]);
  return eventData;
}