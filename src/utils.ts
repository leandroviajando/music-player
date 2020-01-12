import { SearchResult } from "./interfaces";
import { INIT_ITEMS_COUNT } from "./state/reducers";

export function serialise(searchResults: SearchResult[]) {
  let count = INIT_ITEMS_COUNT;
  return searchResults.map(searchResult => {
    count++;
    searchResult._id = count;
    return searchResult;
  });
}
