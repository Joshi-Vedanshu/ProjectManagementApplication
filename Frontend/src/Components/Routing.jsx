import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Project } from "./shared/Projects";
import UserLogin from "./shared/loginPage";
import UserSignUp from "./shared/signUp";
// import UserProfile from "./shared/userProfile";
// import UpdateUserProfile from "./shared/updateUserProfile";
// import SearchUser from "./primary/searchUser";
// import SprintAndStoryPermissions from "./primary/permissonProvide";

// import AddProject from "./shared/AddProject";
// import { Backlog } from "./shared/Backlog";
// import { Sprint } from "./shared/Sprint";
import Dashboard from "./shared/dashboard";
import axios from "axios";

// add your page add Route below between switch and inside route add your component



export default class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/app" element={<Dashboard />} />
            {/* <Route path="/projects" element={<Project />} /> */}
            {/* <Route path="/backlog" element={<Backlog />} />
            <Route path="/sprint" element={<Sprint />} /> */}
            <Route path="/register" element={<UserSignUp />} />
            {/* <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/updateUserProfile" element={<UpdateUserProfile />} />
            <Route path="/searchUser" element={<SearchUser />} />
            <Route
              path="providepermisson"
              element={<SprintAndStoryPermissions />}
            /> */}
            {/* <Route path="/addproject" element={<AddProject />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
