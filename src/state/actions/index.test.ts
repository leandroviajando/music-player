import * as actions from ".";
import * as types from "./types";
import { getMockSearchTerm, getMockSearchResults } from "../../utils/mocks";
import { SearchResult } from "../../interfaces";

describe("Actions test suite", () => {
  let searchTerm: string;
  let searchResults: SearchResult[];

  beforeAll(() => {
    searchTerm = getMockSearchTerm();
    searchResults = getMockSearchResults();
  });

  test("should create an action to set the search term in the store", () => {
    expect(actions.setSearchTerm(searchTerm)).toEqual({
      type: types.SET_SEARCH_TERM,
      payload: searchTerm
    });
  });

  test("should create an action to get the search results for a given search term from the API", () => {
    expect(actions.getSearchResults(searchTerm)).toEqual({
      type: types.GET_SEARCH_RESULTS,
      payload: searchTerm
    });
  });

  test("should create an action to update the store with sorted search results", () => {
    expect(actions.setSortedSearchResults(searchResults)).toEqual({
      type: types.SET_SORTED_SEARCH_RESULTS,
      payload: searchResults
    });
  });
});
