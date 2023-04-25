import React, { useRef, useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";



export default function Sprint({ View, add, updateData }) {
  const sprintName = useRef("");
  const sprintDescription = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");
  const project = useRef([]);
  const [projectList, setProjectList] = useState([]);

  const sprintRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  useEffect(() => {
    document.getElementById("sname").value = add ? "" : updateData.name;
    document.getElementById("sd").value = add ? "" : updateData.description;
    document.getElementById("sdate").value = add ? "" : updateData.startdate;
    document.getElementById("edate").value = add ? "" : updateData.enddate;
    // document.getElementById("project").value = add ? "" : updateData.project;
    //fetch project
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      }
    })
      .then(response => response.json())
      .then(data => setProjectList(data));
    console.log("projectList", projectList)
  },[]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      name: sprintName.current.value,
      description: sprintDescription.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      project: project.current.value,
    };
    await fetch("http://localhost:3005/sprint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => console.log("data"));
    View("Sprint", false, null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    let obj = {
      id: updateData.id,
      name: sprintName.current.value,
      description: sprintDescription.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      project: project.current.value,
    };
    await fetch("http://localhost:3005/sprint", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify(obj),
    }).then((response) => response.json());
    View("Sprint", false, null);
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">SPRINT</h4>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="sname" className="form-label">
                Sprint Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Sprint 1"
                required
                ref={sprintName}
                id="sname"
                pattern={sprintRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="sd" className="form-label">
                Sprint Description
              </label>
              <textarea
                className="col-md-12"
                id="sd"
                placeholder="Type your sprint description here..."
                ref={sprintDescription}
              />
            </div>

            <div className="col-md-12 row mb-6">
              <div className="col-sm-6">
                <label htmlFor="sdate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  placeholder="Start Date"
                  id="sdate"
                  pattern={dateRegex}
                  ref={startDate}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="edate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  placeholder="End Date"
                  id="edate"
                  required
                  ref={endDate}
                  pattern={dateRegex}
                />
              </div>
            </div>
            <div className="col-md-12 row mb-6">
              <div className="col-sm-6">
                <label htmlFor="project" className="form-label">
                  Project
                </label>
                <Typeahead
                  id="project"
                  labelKey="project"
                  placeholder="Enter Project Name"
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={[
                    "Bug",
                    "Sub-Bug",
                    "Story",
                    "Task",
                    "Sub-Task",
                    "Defect",
                  ]}
                />
              </div>
            </div>
          </div>
          {add ? (
            <div onClick={handleSubmit} className="btn btn-primary float-left">
              Create Sprint
            </div>
          ) : (
            <div onClick={handleUpdate} className="btn btn-success float-right">
              Update Sprint
            </div>
          )}
        </div>
      </div>
    </>
  );
}
