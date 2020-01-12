import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SearchResultsListItem from "./index";
import { mockSearchResult } from "../../../mocks";

describe("SearchResultListItem component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <SearchResultsListItem searchResult={mockSearchResult} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
