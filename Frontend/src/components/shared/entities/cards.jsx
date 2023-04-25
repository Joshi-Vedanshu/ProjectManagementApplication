import React, { useRef, useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export default function Cards({ View, add, updateData }) {
  const type = useRef("");
  const name = useRef("");
  const description = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");
  const parent = useRef("");
  const username = useRef("");
  const reporter = useRef("");
  const status = useRef("");
  const storypoint = useRef("");
  const duration = useRef("");
  const comment = useRef("");
  const attachment = useRef("");
  const sprintId = useRef("");

  const nameRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  useEffect(() => {
    // document.getElementById("type").value = add ? "" : updateData.type;
    document.getElementById("name").value = add ? "" : updateData.name;
    document.getElementById("description").value = add
      ? ""
      : updateData.description;
    document.getElementById("sdate").value = add ? "" : updateData.startdate;
    document.getElementById("edate").value = add ? "" : updateData.enddate;
    // document.getElementById("parent").value = add ? "" : updateData.parent;
    // document.getElementById("username").value = add ? "" : updateData.username;
    // document.getElementById("reporter").value = add ? "" : updateData.reporter;
    document.getElementById("status").value = add ? "" : updateData.status;
    document.getElementById("storypoint").value = add
      ? ""
      : updateData.storypoint;
    document.getElementById("duration").value = add ? "" : updateData.duration;
    document.getElementById("comment").value = add ? "" : updateData.comment;
    document.getElementById("file").value = add ? "" : updateData.file;
    // document.getElementById("sprint").value = add ? "" : updateData.sprint;
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      type: type.current.value,
      name: name.current.value,
      description: description.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      parent: parent.current.value,
      username: username.current.value,
      reporter: reporter.current.value,
      status: status.current.value,
      storypoint: storypoint.current.value,
      duration: duration.current.value,
      comment: comment.current.value,
      attachment: attachment.current.value,
      sprint: sprintId.current.value,
    };
    await fetch("http://localhost:3005/card", {
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
      .then((data) => console.log(data));
    View("Card", false, null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    let obj = {
      type: type.current.value,
      name: name.current.value,
      description: description.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      parent: parent.current.value,
      username: username.current.value,
      reporter: reporter.current.value,
      status: status.current.value,
      storypoint: storypoint.current.value,
      duration: duration.current.value,
      comment: comment.current.value,
      attachment: attachment.current.value,
      sprint: sprintId.current.value,
    };
    await fetch("http://localhost:3005/card", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify(obj),
    }).then((response) => response.json());
    View("Card", false, null);
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">CARD</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div>
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <Typeahead
                  id="type"
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
            <div className="col">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={name}
                  id="mname"
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label name="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={description}
                  id="description"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label name="sdate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  ref={startDate}
                  id="sdate"
                  pattern={dateRegex}
                  required
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="edate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  ref={endDate}
                  id="edate"
                  pattern={dateRegex}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label name="parent" className="form-label">
                  Parent
                </label>
                <Typeahead
                  id="parent"
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["User1", "User2", "User3", "User4"]}
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label name="username" className="form-label">
                  Username
                </label>
                <Typeahead
                  id="username"
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["User1", "User2", "User3", "User4"]}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label name="reporter" className="form-label">
                  Reporter
                </label>
                <Typeahead
                  id="reporter"
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["User1", "User2", "User3", "User4"]}
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label name="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-control form-control-user"
                  required
                  ref={status}
                  id="status"
                >
                  <option value="Testing">Testing</option>
                  <option value="In-Testing">In-Testing</option>
                  <option value="Open">Open</option>
                  <option value="Failed">Failed</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Development">Development</option>
                  <option value="In-Development">In-Development</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div>
                <label name="storypoint" className="form-label">
                  Story Point
                </label>
                <input
                  type="number"
                  className="form-control form-control-user"
                  ref={storypoint}
                  id="storypoint"
                  required
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label name="duration" className="form-label">
                  Duration
                </label>
                <input
                  type="number"
                  className="form-control form-control-user"
                  ref={duration}
                  id="duration"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={comment}
                  id="comment"
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="file" className="form-label">
                  File Upload
                </label>
                <input
                  type="file"
                  className="form-control form-control-user"
                  required
                  ref={attachment}
                  id="file"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label name="sprint" className="form-label">
                  Sprint
                </label>
                <Typeahead
                  id="sprint"
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["Sprint1", "Sprint2", "Sprint3", "Sprint4"]}
                />
              </div>
            </div>
          </div>
          <br />
          {add ? (
            <div onClick={handleSubmit} className="btn btn-primary float-left">
              Create Card
            </div>
          ) : (
            <div onClick={handleUpdate} className="btn btn-success float-right">
              Update Card
            </div>
          )}
        </div>
      </div>
    </>
  );
}
