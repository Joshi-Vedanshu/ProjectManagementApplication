import React, { useState, useRef } from "react";
import "../css/loginPage.css";
import axios from 'axios';
// import {Link, useHistory} from 'react-router-dom';

function UserLogin(props) {
  const user = useRef("")
  const password = useRef("")
  const [error, setError] = useState(null);
  const [data,setData] = useState([])

  // let history = useHistory();

  const login = () => {
    // console.log(user)
    // console.log(password)
    setError(null);
    axios.post('http://localhost:3005/auth/login', { email:user.current.value, 
    password:password.current.value}).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.config.data))
      console.log(response.config.data.password);
      
      console.log(JSON.parse(localStorage.getItem("user")).email);
      console.log(JSON.parse(localStorage.getItem("user")).password);
      // console.log(response);
      // console.log(user);


    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  };

  return (
    <>
    <main className="login-card">
          <h3 className="heading">FARV Login</h3>

          <article className="user-container">
            <label className="username-label">Username</label>
            <input type="text" ref={user}></input>
          </article>

          <article className="password-container">
          <label className="password-label">Password</label>
            <input type="text" ref={password}></input>
          </article>
          <p className="forgot-password">Forgot password?</p>
            
          <article className="button-container">
            <button className="submit-button btn btn-success" onClick={login}>Submit</button>
          </article>
          <p className="info-tag">For sign in contact admin of your organization</p>
      </main>

    </>

  );
}

export default UserLogin;

