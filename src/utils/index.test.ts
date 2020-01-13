import { serialise } from ".";
import { mockSearchResult } from "./mocks";

describe("Utils test suite", () => {
  test("serialise returns searchResults serialised by their index number", () => {
    const searchResults = [mockSearchResult];
    expect(searchResults[0]._id).toBe(undefined);
    const sortedSearchResults = serialise(searchResults);
    expect(sortedSearchResults[0]._id).toBe(0);
  });
});
