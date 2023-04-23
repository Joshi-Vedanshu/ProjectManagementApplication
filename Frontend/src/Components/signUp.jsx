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
        password: hashedPassword

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
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" placeholder="First Name" required ref={firstName} id="fname" pattern={firstNameRegex} />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" placeholder="Middle Name" id="mname" pattern={middleNameRegex} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" placeholder="Last Name" id="lname" required pattern={lastNameRegex} />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" placeholder="Email Address" ref={email} required id="email" pattern={emailRegex} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" placeholder="Password" required ref={password} id="password" />
                      </div>
                      <div className="col-sm-6">
                        <input type="password" placeholder="Repeat password" className="form-control form-control-user" required ref={confirmPassword} id="confirmPassword" />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-user btn-block" onClick={SignUp} disabled={loading}>
                      {loading ? 'Loading...' : 'Register Account'}
                    </button>
                  </form>
                  <article className="success-container">
                    {successMessage && <p className="success-message">{successMessage}</p>}
                  </article>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="/forgotpassword">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="/login">Already have an account? Login!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>

  );
}


export default UserSignUp;