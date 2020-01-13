import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "../components/Search";
import Preview from "../components/Preview";
import "../styles.css";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Search} />
      <Route path="/preview/:searchResultId" component={Preview} />
    </BrowserRouter>
  );
};

export default Router;
