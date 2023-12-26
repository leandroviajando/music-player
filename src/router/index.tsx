import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "../components/Preview";
import Search from "../components/Search";
import "../styles.css";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/preview/:searchResultId" element={<Preview />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
