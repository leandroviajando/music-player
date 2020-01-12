import React from "react";
import SearchResultsListItem from "../SearchResultsListItem";
import "../../../styles.css";

const SearchResultsList: React.FC = () => {
  return (
    <div className="list-container">
      <SearchResultsListItem />
    </div>
  );
};

export default SearchResultsList;
