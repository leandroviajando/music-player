import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
