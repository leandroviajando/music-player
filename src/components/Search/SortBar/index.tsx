import React from "react";
import "../../../styles.css";

interface SortBarProps {
  sortBySongLength(): void;
  sortByGenre(): void;
  sortByPrice(): void;
}

export const SortBar: React.FC<SortBarProps> = ({
  sortBySongLength,
  sortByGenre,
  sortByPrice
}) => {
  return (
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
};

export default SortBar;
