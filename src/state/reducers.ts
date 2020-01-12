import { State, Action } from "../interfaces";
import { SET_SEARCH_TERM } from "./action-types";

const initialState: State = {
  searchTerm: "",
  searchResults: [],
  selectedItemId: null
};

function rootReducer(
  state: State = initialState,
  action: Action<string>
): State {
  if (action.type === SET_SEARCH_TERM) {
    return Object.assign({}, state, {
      searchTerm: action.payload
    });
  }
  return state;
}

export default rootReducer;
