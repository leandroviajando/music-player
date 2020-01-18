import React from "react";
import "../../../styles.css";

export const SearchBar: React.FC<PropTypes> = ({
  searchTerm,
  setSearchTerm,
  getSearchResults
}) => {
  return (
    <div className="center nav-bar">
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
    </div>
  );
};

interface PropTypes {
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
  getSearchResults(searchTerm: string): void;
}

export default SearchBar;
