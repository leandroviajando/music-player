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
    <div className="nav-bar">
      <button onClick={sortBySongLength}>Sort by song length</button>
      <button onClick={sortByGenre}>Sort by genre</button>
      <button onClick={sortByPrice}>Sort by price</button>
    </div>
  );
};

export default SortBar;
