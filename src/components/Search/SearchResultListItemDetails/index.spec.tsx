import React from "react";
import { createRoot } from "react-dom/client";
import { getMockSearchResults } from "../../../utils/mocks";
import SearchResultsListItemDetails from "./index";

describe("SearchResultListItem component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const root = createRoot(div);
    root.render(
      <SearchResultsListItemDetails
        searchResult={getMockSearchResults()[0]}
        displayTitleArtistAndCollection={true}
      />
    );

    root.unmount();
  });
});
