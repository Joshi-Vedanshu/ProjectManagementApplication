import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import { Project } from "./Projects";
import Routing from './Components/Routing'


function App() {
  return (
    <div className="App">
      <Routing/>
      {/* <Routing /> */}
      {/* <Router>
        <NavBar />
        <Project/>
        <NavSide/>
      </Router> */}
    </div>
  );
}

export default App;
