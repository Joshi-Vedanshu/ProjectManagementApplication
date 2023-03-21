import React, { useState, useRef } from "react";
import "../css/loginPage.css";
import axios from 'axios';
// import Button from "./Button.js";

function UserLogin(props) {
  const user = useRef("")
  const password = useRef("")
  // const email = "random.email";
  // const password = "12345";
  const [error, setError] = useState(null);
  // const [user, setUser] = useState(null);

  const login = () => {
    console.log(user)
    console.log(password)
    axios.post('http://localhost:3005/auth/login', { email:user.current.value, password:password.current.value}).then((response) => {
      // setUser( response.data);
      console.log(response);
      console.log(user);

      // localStorage.setItem("user",JSON.stringify(response.data));
      // console.log(JSON.parse(localStorage.getItem("user")).email);
      // console.log(JSON.parse(localStorage.getItem("user")).uid);
      // history.push('/');

    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Invalid credentials ");
    });
  };

  return (
    <>
      <main>
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

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const userChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: userChange
  }
}

export default UserLogin;
