import React from "react";
import ReactDOM from "react-dom";
import { UnconnectedSearchResultsList } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UnconnectedSearchResultsList searchResults={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
