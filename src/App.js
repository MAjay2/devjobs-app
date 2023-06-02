import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data.json";
import Home from "./components/Home";
import Jobdetails from "./components/Jobdetails";


import { FilterProvider } from "./components/FilterContext";


export const ThemeContext = createContext(null)


function App() {
  const [darkMode,setDarkMode]=useState(false)
  
function toggleDarkMode(){
  setDarkMode(prevMode=>!prevMode)
}
  

  return (
    
      <ThemeContext.Provider value={{darkMode,toggleDarkMode}} >

      <Router>
        <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path="/jobdetails/:id" element={<Jobdetails />}/>
        </Routes>
      </Router>
        


      </ThemeContext.Provider>
    
  );
}

export default App;

