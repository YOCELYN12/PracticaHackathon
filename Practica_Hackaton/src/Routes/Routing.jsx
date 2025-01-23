import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from "../Pages/Filter page/FilterP";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Filter />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
