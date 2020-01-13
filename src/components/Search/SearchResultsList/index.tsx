import React from "react";
import SearchResultsListItem from "../SearchResultsListItem";
import { SearchResult } from "../../../interfaces";
import "../../../styles.css";

interface SearchResultListProps {
  searchResults: SearchResult[];
}

export const SearchResultsList: React.FC<SearchResultListProps> = ({
  searchResults
}) => {
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

export default SearchResultsList;
