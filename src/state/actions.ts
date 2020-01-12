import { Action, SearchResult } from "../interfaces";
import {
  SET_SEARCH_TERM,
  GET_SEARCH_RESULTS,
  SET_SORTED_SEARCH_RESULTS
} from "./action-types";

export function setSearchTerm(searchTerm: string): Action<string> {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getSearchResults(searchTerm: string): Action<string> {
  return { type: GET_SEARCH_RESULTS, payload: searchTerm };
}

export function setSortedSearchResults(
  searchResults: SearchResult[]
): Action<SearchResult[]> {
  return { type: SET_SORTED_SEARCH_RESULTS, payload: searchResults };
}
