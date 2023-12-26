import { Action } from "../../interfaces";
import {
  GET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SORT_SEARCH_RESULTS
} from "./types";

export function setSearchTerm(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getSearchResults(searchTerm: string): Action<string> {
  return { type: GET_SEARCH_RESULTS, payload: searchTerm };
}

export function sortSearchResults(property: string): Action<string> {
  return { type: SORT_SEARCH_RESULTS, payload: property };
}
