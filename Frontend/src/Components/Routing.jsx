import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project } from "../Projects";
import UserLogin from "./loginPage";
import UserSignUp from "./signUp";
import CreateIssue from "./createNewIssue";
import UpdateIssue from "./updateIssue";
import IssueList from "./listOfIssues";
import UserProfile from "./viewUserProfile";
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
            <Route path="/createNewIssue" element={<CreateIssue/>}/>
            <Route path="/updateIssue" element={<UpdateIssue/>}/>
            <Route path="/IssueList" element={<IssueList/>}/>
            <Route path="/UpdateUserProfile" element={<UpdateUserProfile/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}