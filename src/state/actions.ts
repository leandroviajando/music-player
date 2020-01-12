import { Action } from "../interfaces";
import { SET_SEARCH_TERM, SET_SEARCH_RESULTS, SORT_BY } from "./action-types";

export function setSearchTerm(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function setSearchResults(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_RESULTS, payload: searchTerm };
}

export function sortBy(property: string): Action<string> {
  return { type: SORT_BY, payload: property };
}
