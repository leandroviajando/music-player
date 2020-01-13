import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../state/store";
import Router from ".";

describe("Router test suite", () => {
  it("renders Search as start page", () => {
    const { getAllByPlaceholderText } = render(
      <Provider store={store}>
        <Router />
      </Provider>
    );
    const linkElements = getAllByPlaceholderText(/search/i);
    expect(linkElements.length).toBeGreaterThan(0);
  });
});
