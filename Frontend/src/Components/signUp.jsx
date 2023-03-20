import React, { useState, useFormInput } from "react";
import "../css/signUp.css";
// import {Link, useHistory} from 'react-router-dom'
// import Button from "./Button.js";

function UserSignUp(props) {
    // const [loading, setLoading] = useState(false);
    // const firstName = useFormInput('');
    // const lastName = useFormInput('');
    // const email = useFormInput('');
    // const phoneNumber= useFormInput('');
    // const password = useFormInput('');
    // const confirmPassword = useFormInput('');
    // const [error, setError] = useState(null);

    // let history = useHistory();


//   const signin = (e) => {
//     setError(null)
    
//   };

  return (
    <>
      <main>
      <form className="signin-card">
          <h3 className="heading">FARV Sign In</h3>
        <div className="grid-style">
        <article className="fname-container">
            <label className="fname-label">First Name*</label>
            <input type="text" placeholder="John" required></input>
          </article>

          <article className="mname-container">
            <label className="mname-label">Middle Name</label>
            <input type="text" placeholder="C"></input>
          </article>

          <article className="lname-container">
            <label className="lname-label">Last Name*</label>
            <input type="text" placeholder="Parker" required></input>
          </article>

          <article className="email-container">
            <label className="email-label">Email*</label>
            <input type="text" placeholder="John@abc.com" required></input>
          </article>

          <article className="phone-number-container">
            <label className="phone-label">Phone Number*</label>
            <input type="text" placeholder="91x-xxx-xxxx" required></input>
          </article>

          <article className="password-container">
          <label className="password-label">Password*</label>
            <input type="text" placeholder="password" required></input>
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
