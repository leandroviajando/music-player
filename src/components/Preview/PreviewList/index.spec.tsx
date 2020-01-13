import React from "react";
import ReactDOM from "react-dom";
import PreviewList from "./index";
import { getMockSearchResults } from "../../../utils/mocks";

describe("PreviewList component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PreviewList searchResult={getMockSearchResults()[0]} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
