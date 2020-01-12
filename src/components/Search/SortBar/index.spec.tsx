import React from "react";
import ReactDOM from "react-dom";
import { UnconnectedSortBar } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <UnconnectedSortBar sortBy={(property = "relevance") => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
