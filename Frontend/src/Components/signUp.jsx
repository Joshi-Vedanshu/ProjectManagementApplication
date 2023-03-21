import React, { useState, useRef } from "react";
import "../css/signUp.css";
import axios from 'axios';
// import {Link, useHistory} from 'react-router-dom'
// import Button from "./Button.js";

function UserSignUp(props) {


  const [loading, setLoading] = useState(false);
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const contactNumber = useRef("");
  const password = useRef("");
  const confirmPassword = "";
  const [error, setError] = useState(null);



  //   const signin = (e) => {
  //     setError(null)

  //   };

  const SignUp = (e) => {
    console.log(email.current.value);
    console.log(contactNumber.current.value);
    console.log(password.current.value);
    console.log(firstName.current.value);
    e.preventDefault();
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3005/auth/register',
      {
        email: email.current.value.toString(),
        contactNumber: contactNumber.current.value.toString(),
        password: password.current.value.toString()
      }).then((response) => {
      console.log(response);
      // setLoading(false);
      // setUserSession(response.data.token, response.data.email);
      // setError("Registered");
      // history.push('/login');
    }).catch(error => {
      // setLoading(false);
      console.log(error);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("User already exists. Please change your email..! ");
    });
  }

  return (
    <>
      <main>
        <form className="signin-card" onSubmit={SignUp}>
          <h3 className="heading">FARV Sign In</h3>
          <div className="grid-style">
            <article className="fname-container">
              <label className="fname-label">First Name*</label>
              <input type="text" placeholder="John" required ref={firstName} id="fname"></input>
            </article>

            <article className="mname-container">
              <label className="mname-label">Middle Name</label>
              <input type="text" placeholder="C" id="mname"></input>
            </article>

            <article className="lname-container">
              <label className="lname-label" id="lname">Last Name*</label>
              <input type="text" placeholder="Parker" required></input>
            </article>

            <article className="email-container">
              <label className="email-label">Email*</label>
              <input type="text" placeholder="John@abc.com" ref={email} required id="email"></input>
            </article>

            <article className="phone-number-container">
              <label className="phone-label">Phone Number*</label>
              <input type="text" placeholder="91x-xxx-xxxx" ref={contactNumber} required id="cnum"></input>
            </article>

            <article className="password-container">
              <label className="password-label">Password*</label>
              <input type="text" placeholder="password" required ref={password} id="password"></input>
            </article>

            <article className="confirm-password-container">
              <label className="confirm-password-label"> Confirm Password*</label>
              <input type="text" placeholder="Retype password" required></input>
            </article>
            <p className="forgot-password">Already have an Account?</p>

            <article className="button-container">
              <button className="submit-button btn btn-success">Submit</button>
            </article>

          </div>

        </form>
      </main>

    </>

  );
}


export default UserSignUp;
