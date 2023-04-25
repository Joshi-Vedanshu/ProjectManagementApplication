import React, { useRef, useState, useEffect } from "react";

export default function Project({ View, add, updateData }) {
  const projectName = useRef("");
  const projectDescription = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");

  const projectRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
  useEffect(() => {
    console.log(updateData);
    document.getElementById("pname").value = add ? "" : updateData.name;
    document.getElementById("pd").value = add ? "" : updateData.description;

    document.getElementById("sdate").value = add
      ? ""
      : updateData.startDate.toString().slice(0, 10);
    document.getElementById("edate").value = add
      ? ""
      : updateData.endDate.toString().slice(0, 10);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(startDate);
    let obj = {
      name: projectName.current.value,
      description: projectDescription.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
    };
    await fetch("http://localhost:3005/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify(obj),
    }).then((response) => response.json());
    View("Project", false, null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    let obj = {
      id: updateData.id,
      name: projectName.current.value,
      description: projectDescription.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
    };
    await fetch("http://localhost:3005/project", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify(obj),
    }).then((response) => response.json());
    View("Project", false, null);
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">PROJECT</h4>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="pname" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Titans"
                required
                ref={projectName}
                id="pname"
                pattern={projectRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="pd" className="form-label">
                Project Description
              </label>
              <textarea
                className="col-md-12"
                id="pd"
                placeholder="Type your project description here..."
                ref={projectDescription}
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
          </div>
          {add ? (
            <div onClick={handleSubmit} className="btn btn-primary float-left">
              Create Project
            </div>
          ) : (
            <div onClick={handleUpdate} className="btn btn-success float-right">
              Update Project
            </div>
          )}
        </div>
      </div>
    </>
  );
}
