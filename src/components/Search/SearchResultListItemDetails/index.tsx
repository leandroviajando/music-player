import React from "react";
import { SearchResult } from "../../../interfaces";
import { getMinutesAndSecondsFrom } from "../../../utils";
import "../../../styles.css";

interface SearchResultsListItemDetailsProps {
  searchResult: SearchResult;
  displayTitleArtistAndCollection: boolean;
}

const SearchResultsListItemDetails: React.FC<SearchResultsListItemDetailsProps> = ({
  searchResult,
  displayTitleArtistAndCollection
}) => {
  return (
    <div className="margin-1pc">
      {displayTitleArtistAndCollection && (
        <div>
          {searchResult.trackName} by {searchResult.artistName} (
          {searchResult.collectionName})
        </div>
      )}
      <div>Release date: {searchResult.releaseDate}</div>
      <div>
        Length: {getMinutesAndSecondsFrom(searchResult.trackTimeMillis)} mins
      </div>
      <div>Genre: {searchResult.primaryGenreName}</div>
      <div>Price: {searchResult.trackPrice}</div>
    </div>
  );
};

export default SearchResultsListItemDetails;
