import { Dispatch } from "redux";
import { Action } from "../interfaces";
import { GET_SEARCH_RESULTS, RESET_SEARCH_RESULTS } from "./action-types";

function middleware({ dispatch }: { dispatch: Dispatch }) {
  return function(next: Dispatch) {
    return function(action: Action<any>) {
      if (action.type === GET_SEARCH_RESULTS) {
        if (action.payload === "") {
          return dispatch({ type: RESET_SEARCH_RESULTS });
        }
      }
      return next(action);
    };
  };
}

export default middleware;
