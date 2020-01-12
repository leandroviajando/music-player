import React from "react";
import "../../../styles.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
  getSearchResults(searchTerm: string): void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  getSearchResults
}) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search for a song..."
      onChange={event => {
        const searchTerm = event.currentTarget.value;
        setSearchTerm(searchTerm);
        getSearchResults(searchTerm);
      }}
    ></input>
  );
};

export default SearchBar;
