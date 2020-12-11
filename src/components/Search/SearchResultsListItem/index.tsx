import React from "react";
import { Link } from "react-router-dom";
import SearchResultsListItemDetails from "../SearchResultListItemDetails";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

const SearchResultsListItem: React.FC<PropTypes> = ({ searchResult }) => (
  <Link
    to={{
      pathname: `/preview/${searchResult._id}`
    }}
  >
    <div className="flex-row">
      <div className="margin-1pc">
        <img
          alt={String(searchResult.trackId)}
          src={searchResult.artworkUrl100}
        ></img>
      </div>

      <SearchResultsListItemDetails
        searchResult={searchResult}
        displayTitleArtistAndCollection={true}
      />
    </div>
  </Link>
);

interface PropTypes {
  searchResult: SearchResult;
}

export default SearchResultsListItem;
