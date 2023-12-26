import React from "react";
import { createRoot } from "react-dom/client";
import { SearchResultsList } from "./index";

describe("SearchResultList component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const root = createRoot(div);
    root.render(<SearchResultsList searchResults={[]} />);

    root.unmount();
  });

  test.todo(
    "renders a SearchResultListItem component for each search result received as props"
  );
});
