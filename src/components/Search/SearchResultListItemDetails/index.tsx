import React from "react";
import { SearchResult } from "../../../interfaces";
import { getDateStringFrom, getMinutesAndSecondsFrom } from "../../../utils";
import "../../../styles.css";

const SearchResultsListItemDetails: React.FC<PropTypes> = ({
  searchResult,
  displayTitleArtistAndCollection
}) => (
  <div className="margin-1pc">
    {displayTitleArtistAndCollection && (
      <div>
        {searchResult.trackName} by {searchResult.artistName} (
        {searchResult.collectionName})
      </div>
    )}
    <div>Release date: {getDateStringFrom(searchResult.releaseDate)}</div>
    <div>
      Length: {getMinutesAndSecondsFrom(searchResult.trackTimeMillis)}
    </div>
    <div>Genre: {searchResult.primaryGenreName}</div>
    <div>Price: {searchResult.trackPrice}</div>
  </div>
);

interface PropTypes {
  searchResult: SearchResult;
  displayTitleArtistAndCollection: boolean;
}

export default SearchResultsListItemDetails;
