import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from "../Pages/Filter page/FilterP";
import GestionD from "../Pages/Gestion_Disponibilidad_Pages/GestionD";



const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/disponibilidad" element={<GestionD />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
