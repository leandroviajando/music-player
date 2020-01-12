import actionTypeConstants from "./action-type-constants";

const initialState = {
  searchTerm: "",
  searchResults: [],
  selectedItemId: null
};

function rootReducer(state = initialState, action: any) {
  if (action.type === actionTypeConstants.UPDATE_SEARCH_RESULTS) {
    return Object.assign({}, state, {
      searchResults: action.payload
    });
  }
  return state;
}

export default rootReducer;
