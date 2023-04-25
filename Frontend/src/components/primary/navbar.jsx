import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isNotify, viewChange }) {
  const navigateTo = useNavigate();
  const [notifications, setNotifications] = useState([]);

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
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("role");
        localStorage.removeItem("permissions");
        console.log(`user is deleted`);
        navigateTo("/");
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
    fetch("http://localhost:3005/notifications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);

  const handleNotificationClick = async (notification) => {
    let userId = notification.requesterId;
    viewChange("SetPermission", false, userId);
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {isNotify ? (
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw"></i>

                <span className="badge badge-danger badge-counter">
                  {notifications.length}+
                </span>
              </a>
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Notifications</h6>

                {notifications.map((notification) => (
                  <a
                    key={notification.id}
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div onClick={() => handleNotificationClick(notification)}>
                      <div className="small text-gray-500">
                        {notification.createdAt}
                      </div>
                      New user wants to join your organization!
                    </div>
                  </a>
                ))}
              </div>
            </li>
          ) : (
            ""
          )}

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                User
              </span>
              <img
                className="img-profile rounded-circle"
                src={"/images/undraw_profile.svg"}
                alt="un drawa profile"
              />
            </a>

            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={logout}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
