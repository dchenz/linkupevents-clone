import { parse } from "date-fns";

export async function jsonFetch(url, options) {
  const response = await fetch(url, options);
  return await response.json();
}

export function getDate(originalDate) {
  const date = parse(originalDate, "yyyy-MM-dd'T'HH:mm:ss", new Date());
  return date;
}