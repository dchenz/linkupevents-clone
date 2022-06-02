import { Properties } from "../configuration/properties";
import { jsonFetch } from "./Helpers";

export default async function getLastUpdateTime() {
  return await jsonFetch(Properties.lastUpdatedAPI);
}