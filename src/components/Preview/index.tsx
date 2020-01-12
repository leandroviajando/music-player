import React from "react";
import PreviewBar from "./PreviewBar";
import PreviewList from "./PreviewList";
import "../../styles.css";

const Preview: React.FC = () => {
  return (
    <div className="Preview">
      <PreviewBar />
      <PreviewList />
    </div>
  );
};

export default Preview;
