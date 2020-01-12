import { Action } from "../interfaces";
import { SET_SEARCH_TERM, SET_SEARCH_RESULTS } from "./action-types";

export function setSearchTerm(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function setSearchResults(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_RESULTS, payload: searchTerm };
}
