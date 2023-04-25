import React, { useRef, useState } from "react";

export default function Organization() {
  const name = useRef("");
  const code = useRef("");
  const contact = useRef("");

  const nameRegex = /^[A-Za-z]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      code,
      contact,
    });
    // Call API to create project here
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">ORGANIZATION</h6>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-md-12 mb-3 mb-sm-0">
              <label name="name" className="form-label">
                Organization Name
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Ex. Techno Inc."
                required
                ref={name}
                id="name"
                pattern={nameRegex}
              />
            </div>

            <div className="col-md-12 mb-3 mb-sm-0">
              <label name="code" className="form-label">
                Organization Code
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                id="code"
                ref={code}
              />
            </div>
            <div className="col-md-12 mb-3 mb-sm-0">
              <label name="number" class="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                className="form-control form-control-user"
                ref={contact}
                id="number"
                required
              />
            </div>
          </div>
          <div className="btn btn-primary float-left">Create Organization </div>
          <div className="btn btn-success float-right">Update Organization</div>
        </div>
      </div>
    </>
  );
}
