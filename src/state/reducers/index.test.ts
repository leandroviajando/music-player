import reducer from ".";
import * as types from "../actions/types";
import {
  getMockInitialState,
  getMockSearchTerm,
  getMockSearchResults
} from "../../utils/mocks";
import { State, SearchResult } from "../../interfaces";

describe("Reducers test suite", () => {
  let initialState: State;
  let searchTerm: string;
  let searchResults: SearchResult[];

  beforeAll(() => {
    searchTerm = getMockSearchTerm();
    searchResults = getMockSearchResults();
  });

  beforeEach(() => {
    initialState = getMockInitialState();
    console.error = jest.fn();
  });

  test("should return the initial state", () => {
    expect(reducer(initialState, { type: "", payload: "" })).toEqual({
      searchTerm: "",
      searchResults: []
    });
  });

  test("should handle SET_SEARCH_TERM", () => {
    expect(
      reducer(initialState, {
        type: types.SET_SEARCH_TERM,
        payload: searchTerm
      })
    ).toEqual({
      searchTerm: searchTerm,
      searchResults: []
    });
  });

  test("should handle RESET_SEARCH_RESULTS", () => {
    expect(
      reducer(initialState, {
        type: types.RESET_SEARCH_RESULTS,
        payload: []
      })
    ).toEqual(initialState);
  });

  test("should handle GET_SEARCH_RESULTS_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_SEARCH_RESULTS_SUCCESS,
        payload: searchResults
      })
    ).toEqual({
      searchTerm: initialState.searchTerm,
      searchResults: searchResults
    });
  });

  test("should handle GET_SEARCH_RESULTS_FAILURE", () => {
    expect(
      reducer(initialState, {
        type: types.GET_SEARCH_RESULTS_FAILURE,
        payload: "500: Server Error"
      })
    ).toEqual(initialState);
  });

  test("should log error message from GET_SEARCH_RESULTS_FAILURE", () => {
    reducer(initialState, {
      type: types.GET_SEARCH_RESULTS_FAILURE,
      payload: "500: Server Error"
    });
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  test("should handle SET_SORTED_SEARCH_RESULTS", () => {
    expect(
      reducer(initialState, {
        type: types.SET_SORTED_SEARCH_RESULTS,
        payload: searchResults
      })
    ).toEqual({
      searchTerm: initialState.searchTerm,
      searchResults: searchResults
    });
  });
});
