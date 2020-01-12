import React from "react";
import { Link } from "react-router-dom";
import "../../../styles.css";

interface PreviewBarProps {
  trackName: string;
  artistName: string;
}

const PreviewBar: React.FC<PreviewBarProps> = ({ trackName, artistName }) => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <button>Back</button>
      </Link>
      <div>
        {trackName} by {artistName}
      </div>
    </div>
  );
};

export default PreviewBar;
