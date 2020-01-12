import React from "react";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import SearchResultsList from "./SearchResultsList";
import "../../styles.css";

const Search: React.FC = () => {
  return (
    <div className="Search">
      <SearchBar />
      <SortBar />
      <SearchResultsList />
    </div>
  );
};

export default Search;
