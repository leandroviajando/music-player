import { Dispatch } from "redux";
import { Action } from "../interfaces";
import { SET_SEARCH_RESULTS, RESET_SEARCH_RESULTS } from "./action-types";

export function setSearchResultsMiddleware({
  dispatch
}: {
  dispatch: Dispatch;
}) {
  return function(next: Dispatch) {
    return function(action: Action<any>) {
      if (action.type === SET_SEARCH_RESULTS) {
        if (action.payload === "") {
          return dispatch({ type: RESET_SEARCH_RESULTS });
        }
      }
      return next(action);
    };
  };
}
