import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project } from "../Projects";
import UserLogin from "./loginPage";
import UserSignUp from "./signUp";
import UserProfile from "./userProfile";
import UpdateUserProfile from "./updateUserProfile"

// add your page add Route below between switch and inside route add your component

export default class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/signup" element={<UserSignUp/>}/>
            <Route path="/userProfile" element={<UserProfile/>}/>
            <Route path="/updateUserProfile" element = {<UpdateUserProfile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}