import { API_BASE_URL } from "../config";
import { SearchResult } from "../interfaces";

export function getData(searchTerm: string) {
  return fetch(`${API_BASE_URL}?term=${searchTerm}`).then(response =>
    response.json()
  );
}

export function serialise(searchResults: SearchResult[]): SearchResult[] {
  return deepCopy(searchResults).map(
    (searchResult: SearchResult, index: number) => {
      searchResult._id = index;
      return searchResult;
    }
  );
}

export function sort(searchResults: any[], property: string): SearchResult[] {
  return searchResults.length && searchResults[0][property]
    ? deepCopy(searchResults).sort((a: any, b: any) => {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;
        return 0;
      })
    : searchResults;
}

function deepCopy(object: object) {
  return JSON.parse(JSON.stringify(object));
}
