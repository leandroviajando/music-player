import { combineReducers } from "redux";
import searchTermReducer from "./search-term-reducer";
import searchResultsReducer from "./search-results-reducer";

export default combineReducers({
  searchTerm: searchTermReducer,
  searchResults: searchResultsReducer
});
