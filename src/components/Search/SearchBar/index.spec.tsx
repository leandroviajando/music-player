import React from "react";
import ReactDOM from "react-dom";
import { SearchBar } from "./index";
import { getMockSearchTerm } from "../../../utils/mocks";

describe("SearchBar component test suite", () => {
  it("renders without crashing", () => {
    const searchTerm = getMockSearchTerm();
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={searchTerm => {}}
        getSearchResults={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
