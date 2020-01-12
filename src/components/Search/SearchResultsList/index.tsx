import React from "react";
import { connect } from "react-redux";
import SearchResultsListItem from "../SearchResultsListItem";
import { State, SearchResult } from "../../../interfaces";
import "../../../styles.css";

interface SearchResultListProps {
  searchResults: SearchResult[];
}

export const UnconnectedSearchResultsList: React.FC<SearchResultListProps> = ({
  searchResults
}) => {
  return (
    <div className="list-container">
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

function mapStateToProps(state: State) {
  return { searchResults: state.searchResults };
}

const SearchResultsList = connect(mapStateToProps)(
  UnconnectedSearchResultsList
);

export default SearchResultsList;
