import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project } from "../Projects";
import UserLogin from "./loginPage";
import UserSignUp from "./signUp";
import AddProject from "./../AddProject";
import { Backlog } from "../Backlog";
import { Sprint } from "../Sprint";

// add your page add Route below between switch and inside route add your component

export default class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/backlog" element={<Backlog />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/signup" element={<UserSignUp/>}/>
            <Route path="/addproject" element={<AddProject/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}