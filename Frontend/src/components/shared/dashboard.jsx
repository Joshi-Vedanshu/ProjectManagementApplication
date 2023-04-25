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
import Organization from "./entities/organization";

export default function Dashboard() {
  const navigateTo = useNavigate();
  const [role, setRole] = useState({ a: "" });
  const [permission, setPermission] = useState({ a: "" });
  let nav_links = [["Organization"], ["Project", "Team"], ["Sprint", "Card"]];
  const [nav, setNav] = useState(nav_links[0]);

  useEffect(() => {
    async function getData() {
      if (localStorage.getItem("accesstoken") !== null) {
        await axios
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
          .then(async (response) => {
            if (response.status !== 202) {
              navigateTo("/");
            }
          })
          .catch((error) => {
            console.log("error in dashboard");
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("role");
            localStorage.removeItem("permissions");
            navigateTo("/");
          });
      } else {
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("role");
        localStorage.removeItem("permissions");
        navigateTo("/");
      }
    }
    getData();
  }, []);

  useEffect(() => {
    let tempRole = JSON.parse(localStorage.getItem("role"));
    let tempPermission = JSON.parse(localStorage.getItem("permissions"));
    let data = {
      role: { type: tempRole.type, userId: tempRole.userId },
      permission: {
        organizationAccess: tempPermission.organizationAccess,
        projectAccess: tempPermission.projectAccess,
        projectTeamMappingAccess: tempPermission.projectTeamMappingAccess,
        roleId: tempPermission.roleId,
        sprintAccess: tempPermission.sprintAccess,
        teamAccess: tempPermission.teamAccess,
        teamUserMappingAccess: tempPermission.teamUserMappingAccess,
      },
    };
    switch (data.role.type) {
      case 0:
        setNav(nav_links[0]);
        console.log(nav);
        break;
      default:
        console.log("here");
        break;
    }
    console.log(data);
    setRole(data.role);
    setPermission(data.permission);
    console.log(role);
    console.log(permission);
  }, [nav]);

  return (
    <>
      <section>
        <div id="wrapper">
          <Sidebar links={nav} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />

              <div className="container-fluid">
                <Content />
                <Cards />
                <Organization />
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
      </section>
    </>
  );
}
