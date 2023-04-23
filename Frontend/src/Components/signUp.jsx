import React, { useState, useRef } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs'; // import bcryptjs library

var saltRounds = 10


var saltRounds = 10

function UserSignUp(props) {


  const [loading, setLoading] = useState(false);
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const contactNumber = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");


  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;
  const firstNameRegex = /^[A-Za-z]+$/;
  const lastNameRegex = /^[A-Za-z]+$/;
  const middleNameRegex = /^[A-Za-z]*$/;
  const contactNumberRegex = /^\d{2}[ -]?\d{3}[ -]?\d{4}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const SignUp = async (e) => {
    console.log(email.current.value);
    console.log(contactNumber.current.value);
    console.log(password.current.value);
    console.log(firstName.current.value);
    e.preventDefault();
    setError(null);
    setLoading(true);

    //password match
    if (password.current.value !== confirmPassword.current.value) {
      setError("Passwords do not match.please Try again");
      setLoading(false);
      return;
    }

    const passwordValid = passwordRegex.test(password.current.value);
    if (!passwordValid) {
    setError("Password must have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character");
    setLoading(false);
    return;
}

    
    // let password = password.current.value.toString();
    // const hashPassword = bcrypt.hashSync(password,10);
    console.log("hashing pass");
    const hashedPassword = bcrypt.hashSync(password.current.value, saltRounds);
    console.log(hashedPassword);
    axios.post('http://localhost:3005/auth/register',
      {
        email: email.current.value.toString(),
        contactNumber: contactNumber.current.value.toString(),
        password:hashedPassword
       
      }).then((response) => {
      console.log(response);
      setSuccessMessage("User successfully signed up.");
    }).catch(error => {

      console.log(error);
      // if (error.response.status === 401) setError(error.response.data.message);
      setError("User already exists. Please change your email..! ");
    });
  }

  return (
    <>
      <main>
        {/* <form className="signin-card" onSubmit={SignUp}> */}
          <h3 className="heading">FARV Sign In</h3>
          <div className="grid-style">
            <article className="fname-container">
              <label className="fname-label">First Name*</label>
              <input type="text" placeholder="John" required ref={firstName} id="fname" pattern={firstNameRegex}></input>
            </article>

            <article className="mname-container">
              <label className="mname-label">Middle Name</label>
              <input type="text" placeholder="C" id="mname" pattern={middleNameRegex} ></input>
            </article>

            <article className="lname-container">
              <label className="lname-label" id="lname">Last Name*</label>
              <input type="text" placeholder="Parker" required pattern={lastNameRegex}></input>
            </article>

            <article className="email-container">
              <label className="email-label">Email*</label>
              <input type="text" placeholder="John@abc.com" ref={email} required id="email" pattern={emailRegex}></input>
            </article>

            <article className="phone-number-container">
              <label className="phone-label">Phone Number*</label>
              <input type="text" placeholder="91x-xxx-xxxx" ref={contactNumber} required id="cnum" pattern={contactNumberRegex}></input>
            </article>

            <article className="password-container">
              <label className="password-label">Password*</label>
              <input type="password" placeholder="password" required ref={password} id="password"></input>
            </article>

            <article className="confirm-password-container">
              <label className="confirm-password-label"> Confirm Password*</label>
              <input type="password" placeholder="Retype password"  required ref={confirmPassword} id="confirmPassword"></input>
            </article>
            <article className="error-container">
              {error && <p className="error-message">{error}</p>}
            </article>
            
            <article className="success-container">
            {successMessage && <p className="success-message">{successMessage}</p>}
            </article>  

            <p className="forgot-password">Already have an Account?</p>

            <article className="button-container">
            <button className="submit-button btn btn-success" onClick={SignUp} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
            </button>
          </article>

          </div>

        {/* </form> */}
      </main>

    </>

  );
}


export default UserSignUp;