import React from "react";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

interface SearchResultsListItemProps {
  searchResult: SearchResult;
}

const SearchResultsListItem: React.FC<SearchResultsListItemProps> = ({
  searchResult
}) => {
  return (
    <div className="list-item">
      {searchResult.trackName}
      {searchResult.artistName}
      More in detail:
      {searchResult.collectionName}
      {searchResult.releaseDate}
      <img
        alt={JSON.stringify(searchResult.trackId)}
        src={searchResult.artworkUrl100}
      ></img>
      {searchResult.trackTimeMillis}
      {searchResult.primaryGenreName}
      {searchResult.trackPrice}
    </div>
  );
};

export default SearchResultsListItem;
