import { SearchResult } from "./interfaces";
import { INIT_ITEMS_COUNT } from "./state/reducers";

export function serialise(searchResults: SearchResult[]): SearchResult[] {
  let count = INIT_ITEMS_COUNT;
  return searchResults.map(searchResult => {
    count++;
    searchResult._id = count;
    return searchResult;
  });
}

export function sort(searchResults: any[], property: string): SearchResult[] {
  return searchResults.length > 0 && searchResults[0][property]
    ? searchResults.sort((a: any, b: any) => {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;
        return 0;
      })
    : searchResults;
}
