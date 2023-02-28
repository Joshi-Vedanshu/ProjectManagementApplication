import React from "react";
import "./App.css";
import Navbar from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./App.css";
//import Routing from "./Components/Routing";
import Home from "./pages/index"
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/annual" element={<AnnualReport/>} />
          <Route path="/team" element={<Teams/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
