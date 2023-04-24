import React, { useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export default function Cards() {
  const type = useRef("");
  const name = useRef("");
  const description = useRef("");
  const startDate = useRef("");
  const endDate = useRef("");
  const parent = useRef("");
  const currentUser = useRef("");
  const reporter = useRef("");
  const status = useRef("");
  const storypoint = useRef("");
  const duration = useRef("");
  const comment = useRef("");
  const attachment = useRef("");
  const sprintId = useRef("");

  const nameRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      description,
    });
    // Call API to create project here
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">CARD</h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div>
                <label for="type" class="form-label">
                  Type
                </label>
                <Typeahead
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
                <label for="name" className="form-label">
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
                <label name="sdate" classname="form-label">
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
                <label for="edate" classname="form-label">
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
                <label name="parent" class="form-label">
                  Parent
                </label>
                <Typeahead
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
                <label name="username" class="form-label">
                  Username
                </label>
                <Typeahead
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["User1", "User2", "User3", "User4"]}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label name="reporter" class="form-label">
                  Reporter
                </label>
                <Typeahead
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
                <label name="storypoint" classname="form-label">
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
                <label name="duration" classname="form-label">
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
                <label for="comment" className="form-label">
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
                <label for="file" className="form-label">
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
                <label name="sprint" class="form-label">
                  Sprint
                </label>
                <Typeahead
                  onChange={(selected) => {
                    // Handle selections...
                  }}
                  options={["Sprint1", "Sprint2", "Sprint3", "Sprint4"]}
                />
              </div>
            </div>
          </div>
          <div className="btn btn-primary float-left">Create Card </div>
          <div className="btn btn-success float-right">Update Card </div>
        </div>
      </div>
    </>
  );
}
