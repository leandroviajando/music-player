import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GENRE, PRICE, SONG_LENGTH } from "../../constants";
import { State } from "../../interfaces";
import {
  getSearchResults,
  setSearchTerm,
  sortSearchResults
} from "../../store/actions";
import "../../styles.css";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import SortBar from "./SortBar";

const Search: React.FC = () => {
  const searchTerm = useSelector((state: State) => state.searchTerm);
  const searchResults = useSelector((state: State) => state.searchResults);
  const dispatch = useDispatch();

  return (
    <div className="Search">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(searchTerm: string) => dispatch(setSearchTerm(searchTerm))}
        getSearchResults={_.debounce(
          (searchTerm: string) => dispatch(getSearchResults(searchTerm)),
          500
        )}
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
