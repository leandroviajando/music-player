import React from "react";
import SearchResultsListItem from "../SearchResultsListItem";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

export const SearchResultsList: React.FC<PropTypes> = ({ searchResults }) => {
  return (
    <div className="margin-1pc">
      {searchResults.length > 0 &&
        searchResults.map(searchResult => (
          <SearchResultsListItem
            key={searchResult._id}
            searchResult={searchResult}
          />
        ))}
    </div>
  );
};

interface PropTypes {
  searchResults: SearchResult[];
}

export default SearchResultsList;
