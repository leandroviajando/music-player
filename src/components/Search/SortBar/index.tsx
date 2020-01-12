import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sortBy } from "../../../state/actions";
import "../../../styles.css";

interface SortBarProps {
  sortBy(property: string): void;
}

export const UnconnectedSortBar: React.FC<SortBarProps> = ({ sortBy }) => {
  return (
    <div className="nav-bar">
      <button onClick={() => sortBy("trackTimeMillis")}>
        Sort by song length
      </button>
      <button onClick={() => sortBy("primaryGenreName")}>Sort by genre</button>
      <button onClick={() => sortBy("trackPrice")}>Sort by price</button>
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    sortBy: (property: string) => dispatch(sortBy(property))
  };
}

const SortBar = connect(null, mapDispatchToProps)(UnconnectedSortBar);

export default SortBar;
