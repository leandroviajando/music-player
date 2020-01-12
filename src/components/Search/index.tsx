import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import SearchResultsList from "./SearchResultsList";
import {
  setSearchTerm,
  getSearchResults,
  setSortedSearchResults
} from "../../state/actions";
import { State, SearchResult } from "../../interfaces";
import { sort } from "../../utils";
import "../../styles.css";

interface SearchProps {
  searchTerm: string;
  searchResults: SearchResult[];
  setSearchTerm(searchTerm: string): void;
  getSearchResults(searchTerm: string): void;
  setSortedSearchResults(searchResults: SearchResult[]): void;
}

const UnconnectedSearch: React.FC<SearchProps> = ({
  searchTerm,
  searchResults,
  setSearchTerm,
  getSearchResults,
  setSortedSearchResults
}) => {
  function sortBySongLength(): void {
    setSortedSearchResults(sort(searchResults, "trackTimeMillis"));
  }
  function sortByGenre(): void {
    setSortedSearchResults(sort(searchResults, "primaryGenreName"));
  }
  function sortByPrice(): void {
    setSortedSearchResults(sort(searchResults, "trackPrice"));
  }

  return (
    <div className="Search">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        getSearchResults={getSearchResults}
      />
      <SortBar
        sortBySongLength={sortBySongLength}
        sortByGenre={sortByGenre}
        sortByPrice={sortByPrice}
      />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
};

function mapStateToProps(state: State) {
  return { searchTerm: state.searchTerm, searchResults: state.searchResults };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm)),
    getSearchResults: (searchTerm: string) =>
      dispatch(getSearchResults(searchTerm)),
    setSortedSearchResults: (searchResults: SearchResult[]) =>
      dispatch(setSortedSearchResults(searchResults))
  };
}

const Search = connect(mapStateToProps, mapDispatchToProps)(UnconnectedSearch);

export default Search;
