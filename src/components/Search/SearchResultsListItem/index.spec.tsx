import React from "react";
import ReactDOM from "react-dom";
import SearchResultsListItem from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchResultsListItem searchResult={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
