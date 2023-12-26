import { render } from "@testing-library/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import { getMockSearchResults } from "../../../utils/mocks";
import PreviewList from "./index";

describe("PreviewList component test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    act(() => createRoot(div).render(<PreviewList searchResult={getMockSearchResults()[0]} />));
  });

  it("doesn't show Previous or Next buttons if there are no previous or next search results", () => {
    const { queryByText } = render(
      <PreviewList searchResult={getMockSearchResults()[0]} />
    );
    expect(queryByText(/previous/i)).toBe(null);
    expect(queryByText(/next/i)).toBe(null);
  });

  it("shows Previous or Next buttons if there are any", () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <PreviewList
          previousSearchResult={getMockSearchResults()[0]}
          searchResult={getMockSearchResults()[0]}
          nextSearchResult={getMockSearchResults()[0]}
        />
      </BrowserRouter>
    );
    const previousButtonElements = getAllByText(/previous/i);
    const nextButtonElements = getAllByText(/next/i);
    expect(previousButtonElements.length).toBe(1);
    expect(nextButtonElements.length).toBe(1);
  });

  test.todo(
    "redirects to corresponding Preview component when clicking on Previous button"
  );

  test.todo(
    "redirects to corresponding Preview component when clicking on Next button"
  );
});
