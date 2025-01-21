import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from "../Pages/Filter page/FilterP";
import ReportP from "../Pages/Filter page/ReportP";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/report" element={<ReportP />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default Routing;
