import React from "react";
import "../../../styles.css";

export const SortBar: React.FC<PropTypes> = ({
  sortBySongLength,
  sortByGenre,
  sortByPrice
}) => (
  <div className="center">
    <button className="margin-1pc" onClick={sortBySongLength}>
      Sort by song length
    </button>
    <button className="margin-1pc" onClick={sortByGenre}>
      Sort by genre
    </button>
    <button className="margin-1pc" onClick={sortByPrice}>
      Sort by price
    </button>
  </div>
);

interface PropTypes {
  sortBySongLength(): void;
  sortByGenre(): void;
  sortByPrice(): void;
}

export default SortBar;
