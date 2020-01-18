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

  test.todo("displays a button to sort by song length");

  test.todo("displays a button to sort by genre");

  test.todo("displays a button to sort by price");

  test.todo(
    "corresponding function is called when clicking song length button"
  );

  test.todo("corresponding function is called when clicking genre button");

  test.todo("corresponding function is called when clicking price button");
});
