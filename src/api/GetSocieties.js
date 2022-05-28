import { Properties } from "../configuration/properties";
import { jsonFetch } from "./Helpers";

export default async function getSocieties(page, search, categories, tags) {
  const queryPayload = {
    page: page ?? 0,
    query: search ?? "",
    filters: createFilterQuery(page, search, categories, tags) ?? ""
  };
  return await jsonFetch(Properties.discover.url, {
    method: "POST",
    headers: {
      "X-Algolia-Application-Id": Properties.discover.clientID,
      "X-Algolia-API-Key": Properties.discover.clientKey
    },
    body: JSON.stringify(queryPayload)
  });
}

function createFilterQuery(page, search, categories, tags) {
  const components = [];
  if (categories?.length) {
    const categoryFilter = categories.map((c) => `categories:"${c}"`).join(" OR ");
    components.push("(" + categoryFilter + ")");
  }
  if (tags?.length) {
    const tagFilter = categories.map((t) => `tags:"${t}"`).join(" AND ");
    components.push(tagFilter);
  }
  return components.join(" AND ");
}