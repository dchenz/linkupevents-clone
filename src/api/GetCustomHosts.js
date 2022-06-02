import { Properties } from "../configuration/properties";
import { jsonFetch } from "./Helpers";

/*
  Custom hosts file is only used to replace logos for event hosts (not society logos on the Discover page).
  Some societies don't have host logos but do have society logos under the /clubs?<id> API.
  However, the host ID for a society is different to <id>, so this makes things difficult.
  Need to manually add the API's logo to the custom hosts file for a society without host logo.
*/

export async function getCustomHosts() {
  return await jsonFetch(Properties.customHostsFile);
}

export function applyCustomHostsToEvent(customHosts, event) {
  for (const host of event.hosts) {
    if (host.id in customHosts) {
      host.image = customHosts[host.id];
    }
  }
}