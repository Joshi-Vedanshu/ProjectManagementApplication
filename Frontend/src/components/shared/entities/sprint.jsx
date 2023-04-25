import React, { useRef, useState } from "react";

export default function Sprint() {
  const sprintName = useRef("");
  const sprintDescription = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");

  const sprintRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      sprintName,
      sprintDescription,
      startDate,
      endDate,
    });
    // Call API to create project here
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
              <label htmlFor="pname" className="form-label">
                Sprint Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Sprint 1"
                required
                ref={sprintName}
                id="pname"
                pattern={sprintRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="tarea" className="form-label">
                Sprint Description
              </label>
              <textarea
                className="col-md-12"
                id="tarea"
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
                  pattern={dateRegex}
                />
              </div>
            </div>
          </div>
          <div className="btn btn-primary float-left">Create Sprint </div>
          <div className="btn btn-success float-right">Update Sprint </div>
        </div>
      </div>
    </>
  );
}
