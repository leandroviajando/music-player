import React from "react";
import ReactDOM from "react-dom";
import { SortBar } from "./index";

describe("SortBar component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SortBar
        sortBySongLength={() => {}}
        sortByGenre={() => {}}
        sortByPrice={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
