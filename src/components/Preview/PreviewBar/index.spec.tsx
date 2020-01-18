import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PreviewBar from "./index";

describe("PreviewBar component test suite", () => {
  const trackName = "Smells Like Teen Spirit";
  const artistName = "Nirvana";

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <PreviewBar trackName={trackName} artistName={artistName} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays the track and artist names", () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <PreviewBar trackName={trackName} artistName={artistName} />
      </BrowserRouter>
    );
    const trackNameElements = getAllByText(/Smells Like Teen Spirit/i);
    const artistNameElements = getAllByText(/Nirvana/i);
    expect(trackNameElements.length).toBe(1);
    expect(artistNameElements.length).toBe(1);
  });

  it("has a Back button", () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <PreviewBar trackName={trackName} artistName={artistName} />
      </BrowserRouter>
    );
    const backButtonElements = getAllByText(/Back/i);
    expect(backButtonElements.length).toBe(1);
  });

  test.todo("redirects to Search component when clicking on Back button");
});
