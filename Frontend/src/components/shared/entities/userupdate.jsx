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
          <h6 className="m-0 font-weight-bold text-primary">
            UPDATE USER INFO
          </h6>
        </div>
        <div className="card-body">
          <div class="row">
            <div class="col">
              <div>
                <label for="pname" class="form-label">
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
            <div class="col">
              <div>
                <label for="mname" class="form-label">
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
            <div class="w-100"></div>
            <div class="col">
              <div>
                <label for="lname" class="form-label">
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
            <div class="col">
              <div>
                <label for="loc" class="form-label">
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
            <div class="w-100"></div>
            <div class="col">
              <div>
                <label for="bdate" class="form-label">
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
            <div class="col">
              <div>
                <label for="yoj" class="form-label">
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
            <div class="w-100"></div>
            <div class="col">
              <div>
                <label for="email" class="form-label">
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
            <div class="col">
              <div>
                <label for="number" class="form-label">
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
            <div class="w-100"></div>
            <div class="col">
              <div>
                <label for="hdate" class="form-label">
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
            <div class="col"></div>
          </div>
        </div>
        <div className="btn btn-success mx-auto">Update User</div>
      </div>
    </>
  );
}
