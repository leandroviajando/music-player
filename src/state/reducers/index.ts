import { State, Action } from "../../interfaces";
import {
  SET_SEARCH_TERM,
  RESET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAILURE,
  SET_SORTED_SEARCH_RESULTS
} from "../actions/types";

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
      return { ...state, searchResults: initialState.searchResults };
    }
    case GET_SEARCH_RESULTS_SUCCESS: {
      return { ...state, searchResults: action.payload };
    }
    case GET_SEARCH_RESULTS_FAILURE: {
      console.log(action.payload);
      return { ...state };
    }
    case SET_SORTED_SEARCH_RESULTS: {
      return { ...state, searchResults: action.payload };
    }
    default:
      return state;
  }
}

export default rootReducer;
