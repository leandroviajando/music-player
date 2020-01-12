import { Action } from "../interfaces";
import { SET_SEARCH_TERM } from "./action-types";

export function setSearchTerm<T = string>(searchTerm: T): Action<T> {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
