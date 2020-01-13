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

export function deepCopy(object: object) {
  return JSON.parse(JSON.stringify(object));
}

export function getDateStringFrom(timeStamp: string): string {
  const date = new Date(timeStamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return anyIsNaN(day, month, year) ? timeStamp : `${day}/${month}/${year}`;
}

function anyIsNaN(...args: any): boolean {
  for (let arg of args) {
    if (Number.isNaN(arg)) return true;
  }
  return false;
}

export function getMinutesAndSecondsFrom(milliseconds: number): string {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds < 10 ? 0 : ""}${seconds} mins`;
}
