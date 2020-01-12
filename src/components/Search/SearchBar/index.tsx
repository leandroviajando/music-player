import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setSearchTerm, setSearchResults } from "../../../state/actions";
import { State } from "../../../interfaces";
import "../../../styles.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
  setSearchResults(searchTerm: string): void;
}

export const UnconnectedSearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  setSearchResults
}) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search for a song..."
      onChange={event => {
        setSearchTerm(event.currentTarget.value);
        setSearchResults(event.currentTarget.value);
      }}
    ></input>
  );
};

function mapStateToProps(state: State) {
  return { searchTerm: state.searchTerm };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm)),
    setSearchResults: (searchTerm: string) =>
      dispatch(setSearchResults(searchTerm))
  };
}

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSearchBar);

export default SearchBar;
