import { API_BASE_URL } from "./config";
import { SearchResult } from "./interfaces";

export function getData(searchTerm: string) {
  return fetch(`${API_BASE_URL}?term=${searchTerm}`).then(response =>
    response.json()
  );
}

export function serialise(searchResults: SearchResult[]): SearchResult[] {
  return searchResults.map((searchResult, index) => {
    searchResult._id = index;
    return searchResult;
  });
}

export function sort(searchResults: any[], property: string): SearchResult[] {
  return searchResults.length && searchResults[0][property]
    ? serialise(
        searchResults.sort((a: any, b: any) => {
          if (a[property] > b[property]) return 1;
          else if (a[property] < b[property]) return -1;
          return 0;
        })
      )
    : searchResults;
}
