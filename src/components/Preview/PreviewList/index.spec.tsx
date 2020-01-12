import React from "react";
import ReactDOM from "react-dom";
import PreviewList from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PreviewList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
