import React from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import "../../styles.css";

const Search: React.FC = () => {
  return (
    <div className="Search">
      <SearchBar />
      <SearchResultsList />
    </div>
  );
};

export default Search;
