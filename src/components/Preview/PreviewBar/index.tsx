import React from "react";
import { Link } from "react-router-dom";
import "../../../styles.css";

const PreviewBar: React.FC<PropTypes> = ({ trackName, artistName }) => (
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

interface PropTypes {
  trackName: string;
  artistName: string;
}

export default PreviewBar;
