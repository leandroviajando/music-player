import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import SearchResultsList from "./SearchResultsList";
import { SONG_LENGTH, GENRE, PRICE } from "../../constants";
import {
  setSearchTerm,
  getSearchResults,
  sortSearchResults
} from "../../store/actions";
import { State } from "../../interfaces";
import "../../styles.css";

const Search: React.FC = () => {
  const searchTerm = useSelector((state: State) => state.searchTerm);
  const searchResults = useSelector((state: State) => state.searchResults);
  const dispatch = useDispatch();

  return (
    <div className="Search">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={searchTerm => dispatch(setSearchTerm(searchTerm))}
        getSearchResults={searchTerm => dispatch(getSearchResults(searchTerm))}
      />
      <SortBar
        sortBySongLength={() => dispatch(sortSearchResults(SONG_LENGTH))}
        sortByGenre={() => dispatch(sortSearchResults(GENRE))}
        sortByPrice={() => dispatch(sortSearchResults(PRICE))}
      />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
};

export default Search;
