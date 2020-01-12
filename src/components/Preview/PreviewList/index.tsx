import React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

interface PreviewListProps {
  previousSearchResult: SearchResult | undefined;
  searchResult: SearchResult;
  nextSearchResult: SearchResult | undefined;
}

const PreviewList: React.FC<PreviewListProps> = ({
  previousSearchResult,
  searchResult,
  nextSearchResult
}) => {
  return (
    <div className="list-container">
      <div className="list-item">
        {searchResult.collectionName}
        {searchResult.releaseDate}
        <img
          alt={String(searchResult.trackId)}
          src={searchResult.artworkUrl100}
        ></img>
        {searchResult.trackTimeMillis}
        {searchResult.primaryGenreName}
        {searchResult.trackPrice}
        {previousSearchResult && (
          <Link
            to={{
              pathname: `/preview/${previousSearchResult._id}`
            }}
          >
            <button>Previous</button>
          </Link>
        )}
        <Iframe url={searchResult.previewUrl} width="250px" height="75px" />
        {nextSearchResult && (
          <Link
            to={{
              pathname: `/preview/${nextSearchResult._id}`
            }}
          >
            <button>Next</button>
          </Link>
        )}
        <button>Share on Facebook</button>
      </div>
    </div>
  );
};

export default PreviewList;
