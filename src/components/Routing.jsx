
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "../data.json";
import Home from "./components/Home";
import Jobdetails from "./components/Jobdetails";

function Routing() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path="/jobdetails/:id" element={<Jobdetails />}/>
      </Routes>
     
    </Router>
  );
}

export default Routing;