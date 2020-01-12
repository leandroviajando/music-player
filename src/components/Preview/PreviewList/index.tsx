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
  const URL_FOR_SHARING_ON_SOCIAL_MEDIA = "https%3A%2F%2Fwww.google.com%2F";
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
        <Iframe
          url={`https://www.facebook.com/plugins/share_button.php?href=${URL_FOR_SHARING_ON_SOCIAL_MEDIA}&layout=button&size=small&width=67&height=20&appId`}
          width="67"
          height="20"
          scrolling="no"
          allow="encrypted-media"
        ></Iframe>
      </div>
    </div>
  );
};

export default PreviewList;
