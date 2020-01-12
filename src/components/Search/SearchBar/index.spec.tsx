import React from "react";
import ReactDOM from "react-dom";
import { UnconnectedSearchBar } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <UnconnectedSearchBar
      searchTerm="nirvana"
      setSearchTerm={(searchTerm = "nirvana") => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
