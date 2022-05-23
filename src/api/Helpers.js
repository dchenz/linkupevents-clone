import { parse } from "date-fns";
import { Properties } from "../configuration/properties";

export async function fetchDataFromAPI(url) {
  const response = await fetch(url);
  return await response.json();
}

export function getDate(originalDate) {
  const date = parse(originalDate, "yyyy-MM-dd'T'HH:mm:ss", new Date());
  return date;
}

export function useCustomHosts() {
  let customHostData = null;

  const init = async () => {
    if (customHostData == null) {
      const response = await fetch(Properties.customHostsFile);
      customHostData = await response.json();
    }
  };

  const apply = (event) => {
    // Must call init function before calling this
    if (!event || !event.hosts || !customHostData) {
      return;
    }
    for (const host of event.hosts) {
      if (host.id in customHostData) {
        host.image = customHostData[host.id];
      }
    }
  };

  return { init, apply };
}