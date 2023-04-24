import React, { useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export default function Project() {
  const projectName = useRef("");
  const projectDescription = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");

  const projectRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      projectName,
      projectDescription,
      startDate,
      endDate,
    });
    // Call API to create project here
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">PROJECTS</h6>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label for="pname" class="form-label">
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
              <label for="tarea" class="form-label">
                Project Description
              </label>
              <textarea
                className="col-md-12"
                id="tarea"
                placeholder="Type your project description here..."
                ref={projectDescription}
              />
            </div>

            <div class="col-md-12 row mb-6">
              <div className="col-sm-6">
                <label for="sdate" class="form-label">
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
                <label for="edate" class="form-label">
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
          <div className="btn btn-primary">Create Project</div>
          <div className="btn btn-success float-right">Update Project</div>
        </div>
      </div>
    </>
  );
}
