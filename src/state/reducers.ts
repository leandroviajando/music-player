import { State, Action } from "../interfaces";
import {
  SET_SEARCH_TERM,
  RESET_SEARCH_RESULTS,
  SEARCH_RESULTS_LOADED,
  SEARCH_RESULTS_API_ERRORED
} from "./action-types";
import { serialise } from "../utils";

export const INIT_ITEMS_COUNT = 0;

const initialState: State = {
  searchTerm: "",
  searchResults: [],
  selectedItemId: INIT_ITEMS_COUNT
};

function rootReducer(state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return Object.assign({}, state, {
        searchTerm: action.payload
      });
    }
    case RESET_SEARCH_RESULTS: {
      return Object.assign({}, state, {
        searchResults: serialise(initialState.searchResults)
      });
    }
    case SEARCH_RESULTS_LOADED: {
      return Object.assign({}, state, {
        searchResults: serialise(action.payload)
      });
    }
    case SEARCH_RESULTS_API_ERRORED: {
      console.log(action.payload.message);
      return Object.assign({}, state);
    }
    default:
      return state;
  }
}

export default rootReducer;
