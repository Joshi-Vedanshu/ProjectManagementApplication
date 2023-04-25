import React, { useRef, useState } from "react";

export default function UserUpdate() {
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const location = useRef("");
  const dateOfBirth = useRef("");
  const yearsOfExperience = useRef("");
  const email = useRef("");
  const number = useRef("");
  const dateOfHire = useRef("");

  const nameRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      middleName,
      lastName,
    });
    // Call API to create project here
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            UPDATE USER INFO
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div>
                <label htmlFor="pname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={firstName}
                  id="pname"
                  pattern={nameRegex}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="mname" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={middleName}
                  id="mname"
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={lastName}
                  id="lname"
                  pattern={nameRegex}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="loc" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  required
                  ref={location}
                  id="loc"
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="bdate" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  placeholder="DOB"
                  ref={dateOfBirth}
                  id="bdate"
                  pattern={dateRegex}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="yoj" className="form-label">
                  Year of Joining
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  placeholder="yyyy"
                  ref={yearsOfExperience}
                  id="YOJ"
                  required
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-user"
                  required
                  ref={email}
                  id="email"
                  pattern={emailRegex}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="number" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control form-control-user"
                  ref={number}
                  id="number"
                  required
                />
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="hdate" className="form-label">
                  Date of Hire
                </label>
                <input
                  type="date"
                  className="form-control form-control-user"
                  placeholder="DOH"
                  ref={dateOfHire}
                  id="hdate"
                  pattern={dateRegex}
                  required
                />
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="btn btn-success mx-auto">Update User</div>
        <br />
      </div>
    </>
  );
}
