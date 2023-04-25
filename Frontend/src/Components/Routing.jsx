import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./shared/loginPage";
import UserSignUp from "./shared/signUp";
import Dashboard from "./shared/dashboard";
import axios from "axios";

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
