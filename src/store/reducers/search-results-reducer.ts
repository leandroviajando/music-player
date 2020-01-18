import { State, Action } from "../../interfaces";
import { sort } from "../../utils";
import {
  RESET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAILURE,
  SORT_SEARCH_RESULTS
} from "../actions/types";

const initialState: State["searchResults"] = [];

function searchResultsReducer(
  state: State["searchResults"] = initialState,
  action: Action<any>
): State["searchResults"] {
  switch (action.type) {
    case RESET_SEARCH_RESULTS: {
      return initialState;
    }
    case GET_SEARCH_RESULTS_SUCCESS: {
      return action.payload;
    }
    case GET_SEARCH_RESULTS_FAILURE: {
      console.error(action.payload);
      return state;
    }
    case SORT_SEARCH_RESULTS: {
      return sort(state, action.payload);
    }
    default:
      return state;
  }
}

export default searchResultsReducer;
