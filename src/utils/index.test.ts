import { getData, serialise, sort } from ".";
import { getMockSearchResults, getMockSearchTerm } from "./mocks";
import { SearchResult } from "../interfaces";

describe("Utils test suite", () => {
  let searchTerm: string;
  let searchResults: SearchResult[];

  beforeAll(() => (searchTerm = getMockSearchTerm()));

  beforeEach(() => (searchResults = getMockSearchResults()));

  test("getData takes a searchTerm as a parameter", async () => {
    expect(async () => await getData(searchTerm)).not.toThrow(Error);
  });

  test("getData returns an object with an array called results which contains the search results", async () => {
    const response = await getData(searchTerm);

    expect(response.results).not.toBe(undefined);
    expect(Array.isArray(response.results));
  });

  test("serialise returns a new searchResults array serialised by index number", () => {
    expect(searchResults[0]._id).toBe(undefined);
    expect(searchResults[1]._id).toBe(undefined);

    const serialisedSearchResults = serialise(searchResults);

    expect(serialisedSearchResults[0]._id).toBe(0);
    expect(serialisedSearchResults[0]).not.toEqual(searchResults[0]);
    expect(serialisedSearchResults[1]._id).toBe(1);
    expect(serialisedSearchResults[1]).not.toEqual(searchResults[1]);
  });

  test("serialise does not mutate the searchResults passed to it", () => {
    const serialisedSearchResults = serialise(searchResults);

    expect(serialisedSearchResults).not.toEqual(searchResults);
  });

  test("sort returns a new searchResults array sorted by the given property", () => {
    const sortedSearchResults = sort(searchResults, "trackPrice");

    expect(searchResults[0].trackId).toBe(sortedSearchResults[1].trackId);
    expect(searchResults[1].trackId).toBe(sortedSearchResults[0].trackId);
  });

  test("sort does not mutate the searchResults passed to it", () => {
    const sortedSearchResults = sort(searchResults, "trackPrice");

    expect(searchResults).not.toEqual(sortedSearchResults);
  });

  test("sort returns original searchResults if a non-existant property is passed", () => {
    const sortedSearchResults = sort(searchResults, "random");

    expect(searchResults).toEqual(sortedSearchResults);
  });
});
