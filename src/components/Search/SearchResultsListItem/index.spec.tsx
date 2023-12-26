import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getMockSearchResults } from "../../../utils/mocks";
import SearchResultsListItem from "./index";

describe("SearchResultListItem component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const root = createRoot(div);
    root.render(
      <BrowserRouter>
        <SearchResultsListItem searchResult={getMockSearchResults()[0]} />
      </BrowserRouter>
    );

    root.unmount();
  });

  test.todo("redirects to the corresponding Preview component on clicking");
});
