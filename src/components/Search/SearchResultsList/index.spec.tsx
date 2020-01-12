import React from "react";
import ReactDOM from "react-dom";
import SearchResultsList from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchResultsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
