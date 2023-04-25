import React, { useState, useRef } from "react";
import axios from "axios";
import bcrypt from "bcryptjs"; // import bcryptjs library
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserLogin(props) {
  const user = useRef("");
  const password = useRef("");
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accesstoken") !== null) {
      axios
        .post(
          "http://localhost:3005/auth/login",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage
                .getItem("accesstoken")
                .replace(/^"(.*)"$/, "$1")}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 202) {
            navigateTo("/app");
          }
        });
    }
  }, []);

  const login = async () => {
    setError(null);
    const hashedPassword = bcrypt.hashSync(
      password.current.value,
      "$2a$10$1hUhzKenVi7zJnoJECxbfOitjjjAfrWpqqXFNFSfEMQK"
    );
    axios
      .post("http://localhost:3005/auth/login", {
        email: user.current.value,
        password: hashedPassword,
      })
      .then(async (response) => {
        if (response.status === 201) {
          const dataString = JSON.stringify(response.data.accessToken);
          localStorage.setItem("accesstoken", dataString);
          setData(response.data);
          let permissions = await axios.get(
            "http://localhost:3005/users/permissions",
            {
              headers: {
                Authorization: `Bearer ${response.data.accessToken}`,
              },
            }
          );
          localStorage.setItem(
            "permissions",
            JSON.stringify(permissions.data[0])
          );
          let role = await axios.get("http://localhost:3005/users/role", {
            headers: {
              Authorization: `Bearer ${response.data.accessToken}`,
            },
          });
          localStorage.setItem("role", JSON.stringify(role.data[0]));
        } else {
          setError("Invalid credentials ");
        }
        navigateTo("/app");
      })
      .catch((error) => {
        console.log("error");
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
                        <a
                          href="#"
                          className="btn btn-primary btn-user btn-block"
                          onClick={login}
                        >
                          Login
                        </a>
                      </form>
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
