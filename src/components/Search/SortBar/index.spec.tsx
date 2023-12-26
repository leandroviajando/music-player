import React from "react";
import { createRoot } from "react-dom/client";
import { SortBar } from "./index";

describe("SortBar component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const root = createRoot(div);
    root.render(
      <SortBar
        sortBySongLength={() => {}}
        sortByGenre={() => {}}
        sortByPrice={() => {}}
      />
    );

    root.unmount();
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
