import React from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import PreviewBar from "./PreviewBar";
import PreviewList from "./PreviewList";
import { SearchResult, State } from "../../interfaces";
import "../../styles.css";

interface PreviewProps {
  searchResults: SearchResult[];
}

const UnconnectedPreview: React.FC<PreviewProps> = ({ searchResults }) => {
  const { searchResultId } = useParams();

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
    return <Redirect to="/" />;
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

function mapStateToProps(state: State) {
  return { searchResults: state.searchResults };
}

const Preview = connect(mapStateToProps)(UnconnectedPreview);

export default Preview;
