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
import RolePermissionMapping from "./entities/rolePermissionMapping";
import OrganizationListView from "./listviews/organizationlistview";
import UserTeam from "./entities/userTeam";
import ProjectTeam from "./entities/projectTeam";
import ProjectListView from "./listviews/projectListView";
import TeamListView from "./listviews/teamListView";
import SprintListView from "./listviews/sprintListView";
import CardListView from "./listviews/cardListView";

export default function Dashboard() {
  const navigateTo = useNavigate();
  let nav_links = [["Organization"], []];
  let viewName = "";
  const [nav, setNav] = useState([]);
  const [view, setView] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

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
    nav_links[1] = [];
    switch (data.role.type) {
      case 0:
        setNav(nav_links[0]);
        viewSet(nav_links[0][0]);
        break;
      case 2:
        if (parseInt(data.permission.projectAccess, 2) > 0) {
          nav_links[1].push("Project");
        }
        if (parseInt(data.permission.projectTeamMappingAccess, 2) > 0) {
          nav_links[1].push("Project-Team");
        }
        if (parseInt(data.permission.sprintAccess, 2) > 0) {
          nav_links[1].push("Sprint");
        }
        if (parseInt(data.permission.teamAccess, 2) > 0) {
          nav_links[1].push("Team");
        }
        if (parseInt(data.permission.teamUserMappingAccess, 2) > 0) {
          nav_links[1].push("Team-User");
        }
        nav_links[1].push("Cards");
        setNav(nav_links[1]);
        viewSet(nav_links[1][0]);
        break;
      default:
        if (parseInt(data.permission.projectAccess, 2) > 0) {
          nav_links[1].push("Project");
        }
        if (parseInt(data.permission.projectTeamMappingAccess, 2) > 0) {
          nav_links[1].push("Project-Team");
        }
        if (parseInt(data.permission.sprintAccess, 2) > 0) {
          nav_links[1].push("Sprint");
        }
        if (parseInt(data.permission.teamAccess, 2) > 0) {
          nav_links[1].push("Team");
        }
        if (parseInt(data.permission.teamUserMappingAccess, 2) > 0) {
          nav_links[1].push("Team-User");
        }
        nav_links[1].push("Cards");
        setNav(nav_links[1]);
        viewSet(nav_links[1][0]);
        break;
    }
  }, []);

  useEffect(() => {
    let tempRole = JSON.parse(localStorage.getItem("role"));
    console.log(tempRole.type);
    if (tempRole.type === 2) {
      setIsAdmin(true);
    }
  }, [isAdmin]);

  const viewSet = (link, flag, data) => {
    //alert(link);
    console.log(link);
    switch (link) {
      case "Project":
        setView(<ProjectListView key={"Project"} addView={viewSet} />);
        break;
      case "Team":
        setView(<TeamListView addView={viewSet} />);
        break;
      case "Sprint":
        setView(<SprintListView addView={viewSet} />);
        break;
      case "Organization":
        setView(<OrganizationListView addView={viewSet} />);
        break;
      case "Cards":
        setView(<CardListView addView={viewSet} />);
        break;
      case "Team-CU":
        setView(<Team View={viewSet} add={flag} updateData={data} />);
        break;
      case "Sprint-CU":
        setView(<Sprint View={viewSet} add={flag} updateData={data} />);
        break;
      case "Card-CU":
        setView(<Cards View={viewSet} add={flag} updateData={data} />);
        break;
      case "Project-CU":
        setView(<Project View={viewSet} add={flag} updateData={data} />);
        break;
      case "SetPermission":
        setView(<RolePermissionMapping userData={data} View={viewSet} />);
        break;
      case "Project-Team":
        setView(<ProjectTeam />);
        break;
      case "Team-User":
        setView(<UserTeam />);
        break;
    }
  };

  return (
    <>
      <section>
        <div id="wrapper">
          <Sidebar viewChange={viewSet} links={nav} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar viewChange={viewSet} isNotify={isAdmin} />

              <div className="container-fluid">
                <Content value={view} />
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
