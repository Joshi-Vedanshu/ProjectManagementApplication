import React, { useState } from "react";
import "../css/loginPage.css";
// import Button from "./Button.js";

function UserLogin(props) {
  // const email = useFormInput('')
  // const password = useFormInput('')
  const email = "random.email";
  const password = "12345";
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = () => {
    setError(null);
    console.log(error);
    setUser("admin");
    console.log(user);
  };

  return (
    <>
      <main>
      <form className="login-card">
          <h3 className="heading">FARV Login</h3>

          <article className="user-container">
            <label className="username-label">Username</label>
            <input type="text"></input>
          </article>

          <article className="password-container">
          <label className="password-label">Password</label>
            <input type="text"></input>
          </article>
          <p className="forgot-password">Forgot password?</p>
            
          <article className="button-container">
            <button className="submit-button btn btn-success">Submit</button>
          </article>
          <p class="info-tag">For sign in contact admin of your organization</p>
        </form>
      </main>
        
    </>

  );
}

export default UserLogin;
