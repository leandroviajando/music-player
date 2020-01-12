import React from "react";
import ReactDOM from "react-dom";
import PreviewList from "./index";
import { mockSearchResult } from "../../../mocks";

describe("PreviewList component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PreviewList searchResult={mockSearchResult} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
