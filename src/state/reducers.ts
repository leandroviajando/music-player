import { State, Action } from "../interfaces";
import {
  SET_SEARCH_TERM,
  RESET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS_SUCCESS,
  SET_SEARCH_RESULTS_FAILURE,
  SORT_BY
} from "./action-types";
import { serialise, sort } from "../utils";

export const INIT_ITEMS_COUNT = 0;

const initialState: State = {
  searchTerm: "",
  searchResults: []
};

function rootReducer(state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload };
    }
    case RESET_SEARCH_RESULTS: {
      return { ...state, searchResults: serialise(initialState.searchResults) };
    }
    case SET_SEARCH_RESULTS_SUCCESS: {
      return { ...state, searchResults: serialise(action.payload) };
    }
    case SET_SEARCH_RESULTS_FAILURE: {
      console.log(action.payload);
      return { ...state };
    }
    case SORT_BY: {
      return {
        ...state,
        searchResults: serialise(sort(state.searchResults, action.payload))
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
