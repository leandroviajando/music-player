import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Preview from "./components/Preview";
import "./styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Search} />
      <Route path="/preview" component={Preview} />
    </Router>
  );
};

export default App;
