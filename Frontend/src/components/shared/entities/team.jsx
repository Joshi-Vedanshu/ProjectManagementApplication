import React, { useRef, useState } from "react";

export default function Team() {
  const teamName = useRef("");
  const teamDescription = useRef("");

  const teamRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      teamName,
      teamDescription,
    });
    // Call API to create project here
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">TEAMS</h6>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label for="pname" class="form-label">
                Team Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Sprint 1"
                required
                ref={teamName}
                id="pname"
                pattern={teamRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label for="tarea" class="form-label">
                Team Description
              </label>
              <textarea
                className="col-md-12"
                id="tarea"
                placeholder="Type your team description here..."
                ref={teamDescription}
              />
            </div>
          </div>
          <div className="btn btn-primary float-left">Create Team </div>
          <div className="btn btn-success float-right">Update Team</div>
        </div>
      </div>
    </>
  );
}
