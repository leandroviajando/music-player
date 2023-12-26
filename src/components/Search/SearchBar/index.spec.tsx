import React from "react";
import { createRoot } from "react-dom/client";
import { getMockSearchTerm } from "../../../utils/mocks";
import { SearchBar } from "./index";

describe("SearchBar component test suite", () => {
  it("renders without crashing", () => {
    const searchTerm = getMockSearchTerm();
    const div = document.createElement("div");

    const root = createRoot(div);
    root.render(
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(_: string) => {}}
        getSearchResults={() => {}}
      />
    );

    root.unmount();
  });

  test.todo("contains an input field with placeholder 'Search for a song...'");

  test.todo("onChange setSearchTerm and getSearchResults are called");
});
