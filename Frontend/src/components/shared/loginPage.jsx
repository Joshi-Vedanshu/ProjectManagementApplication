import React, { useState, useRef } from "react";
import axios from "axios";
import bcrypt from "bcryptjs"; // import bcryptjs library

var saltRounds = 10;
function UserLogin(props) {
  const user = useRef("");
  const password = useRef("");
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const login = async () => {
    // console.log(user)
    // console.log(password)
    setError(null);
    console.log("hashing pass");
    const hashedPassword = bcrypt.hashSync(password.current.value, saltRounds);
    console.log(hashedPassword);
    axios
      .post("http://localhost:3005/auth/login", {
        email: user.current.value,
        password: hashedPassword,
      })
      .then((response) => {
        console.log(response.data.accessToken);
        const dataString = JSON.stringify(response.data.accessToken.toString());
        localStorage.setItem("accesstoken", dataString);
        setData(response.data);
        console.log(dataString);
        console.log(localStorage.getItem("accesstoken"));
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Invalid credentials ");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome to FRAV!
                        </h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            ref={user}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            ref={password}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-primary btn-user btn-block"
                          onClick={login}
                        >
                          Login
                        </a>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/register">
                          Create an Account!
                        </a>
                      </div>
                    </div>
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

export default UserLogin;
