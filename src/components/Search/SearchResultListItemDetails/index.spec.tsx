import React from "react";
import ReactDOM from "react-dom";
import SearchResultsListItemDetails from "./index";
import { getMockSearchResults } from "../../../utils/mocks";

describe("SearchResultListItem component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchResultsListItemDetails
        searchResult={getMockSearchResults()[0]}
        displayTitleArtistAndCollection={true}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
