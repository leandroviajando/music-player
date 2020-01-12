import React from "react";
import ReactDOM from "react-dom";
import { SearchBar } from "./index";

describe("SearchBar component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchBar
        searchTerm="nirvana"
        setSearchTerm={(searchTerm = "nirvana") => {}}
        getSearchResults={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
