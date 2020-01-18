import { State, Action } from "../../interfaces";
import { SET_SEARCH_TERM } from "../actions/types";

const initialState = "";

function searchTermReducer(
  state: State["searchTerm"] = initialState,
  action: Action<string>
): State["searchTerm"] {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default searchTermReducer;
