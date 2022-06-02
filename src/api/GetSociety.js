import { Properties } from "../configuration/properties";
import { jsonFetch } from "./Helpers";


export default async function getSociety(id) {
  const url = Properties.societyAPI + encodeURIComponent(id);
  return (await jsonFetch(url)).club;
}