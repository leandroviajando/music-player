import * as actions from "../actions";
import * as types from "./types";
import { SONG_LENGTH } from "../../constants";
import { getMockSearchTerm } from "../../utils/mocks";

describe("Actions test suite", () => {
  let searchTerm: string;

  beforeAll(() => (searchTerm = getMockSearchTerm()));

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

  test("should create an action to update the store with search results sorted by a given property", () => {
    expect(actions.sortSearchResults(SONG_LENGTH)).toEqual({
      type: types.SORT_SEARCH_RESULTS,
      payload: SONG_LENGTH
    });
  });
});
