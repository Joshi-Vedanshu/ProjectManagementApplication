import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Sidebar from "../primary/sidebar";
import Content from "./content";
import Navbar from "../primary/navbar";
import { useNavigate } from "react-router-dom";
import Project from "./entities/project";
import Sprint from "./entities/sprint";
import Team from "./entities/team";
import UserUpdate from "./entities/userupdate";
import Cards from "./entities/cards";

export default function Dashboard() {
  const navigateTo = useNavigate();

  const logout = async () => {
    try {
      const token = localStorage
        .getItem("accesstoken")
        .replace(/^"(.*)"$/, "$1");
      const response = await fetch("http://localhost:3005/auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
      if (response.ok) {
        console.log(`user is deleted`);
        navigateTo("/login");
      } else {
        console.log(
          `Failed to delete user: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.log(`Failed to delete user: ${error}`);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("accesstoken") !== null) {
      axios
        .post(
          "http://localhost:3005/auth/login",
          {},
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1"),
            },
          }
        )
        .then((response) => {
          if (response.status !== 202) {
            navigateTo("/login");
          }
        })
        .catch((error) => {
          console.log("error", error);
          navigateTo("/login");
        });
    } else {
      navigateTo("/login");
    }
  }, []);

  return (
    <>
      <section>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />

              <div className="container-fluid">
                <Content />
                <Cards />
                <Project />
                <Sprint />
                <Team />
                <UserUpdate />
              </div>
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; FRAV - 2023</span>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" onClick={logout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
