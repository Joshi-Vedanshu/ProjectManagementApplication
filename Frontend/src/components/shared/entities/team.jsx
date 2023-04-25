import React, { useRef, useState, useEffect } from "react";

export default function Team({ View, add, updateData }) {
  const teamName = useRef("");
  const teamDescription = useRef("");

  const teamRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  useEffect(()=>{
    document.getElementById("pname").value = add ? "" : updateData.name;
    document.getElementById("tarea").value =add ? "" : updateData.description;
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      name: teamName.current.value,
      description: teamDescription.current.value
    }
    await fetch("http://localhost:3005/team", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json());
    View("Team", false, null);
    // Call API to create project here
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    let obj = {
      id: updateData.id,
      name: teamName.current.value,
      description: teamDescription.current.value
    }
    await fetch("http://localhost:3005/team", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json());
    View("Team", false, null);
  }

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">TEAM</h4>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="pname" className="form-label">
                Team Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Team 1"
                required
                ref={teamName}
                id="pname"
                pattern={teamRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label htmlFor="tarea" className="form-label">
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
          {add ? (<div onClick={handleSubmit} className="btn btn-primary float-left">Create Team </div>)
            : (<div onClick={handleUpdate} className="btn btn-success float-right">Update Team</div>)}
        </div>
      </div>
    </>
  );
}
