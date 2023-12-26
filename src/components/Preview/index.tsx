import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SearchResult, State } from "../../interfaces";
import "../../styles.css";
import PreviewBar from "./PreviewBar";
import PreviewList from "./PreviewList";

const Preview: React.FC = () => {
  const navigate = useNavigate();
  const { searchResultId } = useParams();
  const searchResults = useSelector((state: State) => state.searchResults);

  const previousSearchResult = findSearchResultAt(1);
  const searchResult = findSearchResultAt(0);
  const nextSearchResult = findSearchResultAt(1);

  function findSearchResultAt(
    positionFromCurrent: number
  ): SearchResult | undefined {
    return searchResults.find(
      searchResult =>
        searchResult._id === Number(searchResultId) + positionFromCurrent
    );
  }

  if (!searchResult) {
    navigate("/");
    return null;
  }

  return (
    <div className="Preview">
      <PreviewBar
        trackName={searchResult.trackName}
        artistName={searchResult.artistName}
      />
      <PreviewList
        previousSearchResult={previousSearchResult}
        searchResult={searchResult}
        nextSearchResult={nextSearchResult}
      />
    </div>
  );
};

export default Preview;
