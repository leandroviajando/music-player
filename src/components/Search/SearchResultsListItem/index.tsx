import React from "react";
import { Link } from "react-router-dom";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

interface SearchResultsListItemProps {
  searchResult: SearchResult;
}

const SearchResultsListItem: React.FC<SearchResultsListItemProps> = ({
  searchResult
}) => {
  return (
    <Link
      to={{
        pathname: `/preview/${searchResult._id}`
      }}
    >
      <div className="list-item">
        {searchResult.trackName}
        {searchResult.artistName}
        More in detail:
        {searchResult.collectionName}
        {searchResult.releaseDate}
        <img
          alt={String(searchResult.trackId)}
          src={searchResult.artworkUrl100}
        ></img>
        {searchResult.trackTimeMillis}
        {searchResult.primaryGenreName}
        {searchResult.trackPrice}
      </div>
    </Link>
  );
};

export default SearchResultsListItem;
