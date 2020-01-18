import React from "react";
import ReactDOM from "react-dom";
import { SearchResultsList } from "./index";

describe("SearchResultList component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchResultsList searchResults={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test.todo(
    "renders a SearchResultListItem component for each search result received as props"
  );
});
