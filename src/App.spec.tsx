import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Search as start page", () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/search/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
