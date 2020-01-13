import React from "react";
import { Link } from "react-router-dom";
import "../../../styles.css";

interface PreviewBarProps {
  trackName: string;
  artistName: string;
}

const PreviewBar: React.FC<PreviewBarProps> = ({ trackName, artistName }) => {
  return (
    <div className="flex-row-space-between nav-bar">
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div>
        {trackName} by {artistName}
      </div>
      <div></div>
    </div>
  );
};

export default PreviewBar;
