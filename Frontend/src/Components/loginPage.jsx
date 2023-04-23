import React, { useState, useRef } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs'; // import bcryptjs library

var saltRounds = 10
function UserLogin(props) {
  const user = useRef("")
  const password = useRef("")
  const [error, setError] = useState(null);
  const [data,setData] = useState([])

  

  const login = async () => {
    // console.log(user)
    // console.log(password)
    setError(null);
    console.log("hashing pass");
    const hashedPassword = bcrypt.hashSync(password.current.value, saltRounds);
    console.log(hashedPassword);
    axios.post('http://localhost:3005/auth/login', { email:user.current.value, 
    password:hashedPassword}).then((response) => {
      console.log(response.data.accessToken)
      const dataString = JSON.stringify(response.data.accessToken.toString());
      localStorage.setItem("accesstoken", dataString)
      setData(response.data)
      console.log(dataString)
      console.log( localStorage.getItem("accesstoken"));
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