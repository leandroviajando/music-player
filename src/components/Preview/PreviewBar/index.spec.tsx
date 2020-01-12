import React from "react";
import ReactDOM from "react-dom";
import PreviewBar from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PreviewBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
