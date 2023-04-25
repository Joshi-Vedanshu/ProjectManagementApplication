import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./shared/loginPage";
import UserSignUp from "./shared/signUp";
import Dashboard from "./shared/dashboard";
import axios from "axios";
import { Project } from "../Projects";
import UserLogin from "./loginPage";
import UserSignUp from "./signUp";
import UserProfile from "./userProfile";
import UpdateUserProfile from "./updateUserProfile"
import  SearchUser  from "./searchUser";
import SprintAndStoryPermissions from "./permissonProvide"

import AddProject from "./../AddProject";
import { Backlog } from "../Backlog";
import { Sprint } from "../Sprint";
import { Organization } from "../Organization";

// add your page add Route below between switch and inside route add your component

export default class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="/register" element={<UserSignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
