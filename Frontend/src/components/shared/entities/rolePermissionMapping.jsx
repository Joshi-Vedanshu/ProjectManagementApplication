import React, { useRef, useState } from "react";

export default function RolePermissionMapping() {
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const location = useRef("");
  const dateOfBirth = useRef("");
  const yearsOfExperience = useRef("");
  const email = useRef("");
  const number = useRef("");
  const dateOfHire = useRef("");
  const projectAccess = useRef("");
  const teamAccess = useRef("");
  const organizationAccess = useRef("");
  const sprintAccess = useRef("");
  const teamUserAccess = useRef("");
  const projectTeamAccess = useRef("");

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
  };

  const [isChecked1, setIsChecked1] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange1 = (event) => {
    setIsChecked1({
      ...isChecked1,
      [event.target.name]: event.target.checked,
    });
  };

  const [isChecked2, setIsChecked2] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange2 = (event) => {
    setIsChecked2({
      ...isChecked2,
      [event.target.name]: event.target.checked,
    });
  };

  const [isChecked3, setIsChecked3] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange3 = (event) => {
    setIsChecked3({
      ...isChecked3,
      [event.target.name]: event.target.checked,
    });
  };

  const [isChecked4, setIsChecked4] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange4 = (event) => {
    setIsChecked4({
      ...isChecked4,
      [event.target.name]: event.target.checked,
    });
  };

  const [isChecked5, setIsChecked5] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange5 = (event) => {
    setIsChecked5({
      ...isChecked5,
      [event.target.name]: event.target.checked,
    });
  };

  const [isChecked6, setIsChecked6] = useState({
    create: false,
    read: false,
    update: false,
    delete: false,
  });

  const handleCheckBoxChange6 = (event) => {
    setIsChecked6({
      ...isChecked6,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            ADD USER TO ORGANIZATION
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
            <div className="col">
              <div>
                <label htmlFor="paccess" className="form-label">
                  Project Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked1.create}
                      onChange={handleCheckBoxChange1}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked1.read}
                      onChange={handleCheckBoxChange1}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked1.update}
                      onChange={handleCheckBoxChange1}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked1.delete}
                      onChange={handleCheckBoxChange1}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="taccess" className="form-label">
                  Team Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked2.create}
                      onChange={handleCheckBoxChange2}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked2.read}
                      onChange={handleCheckBoxChange2}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked2.update}
                      onChange={handleCheckBoxChange2}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked2.delete}
                      onChange={handleCheckBoxChange2}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="oaccess" className="form-label">
                  Organization Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked3.create}
                      onChange={handleCheckBoxChange3}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked3.read}
                      onChange={handleCheckBoxChange3}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked3.update}
                      onChange={handleCheckBoxChange3}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked3.delete}
                      onChange={handleCheckBoxChange3}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="saccess" className="form-label">
                  Sprint Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked4.create}
                      onChange={handleCheckBoxChange4}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked4.read}
                      onChange={handleCheckBoxChange4}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked4.update}
                      onChange={handleCheckBoxChange4}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked4.delete}
                      onChange={handleCheckBoxChange4}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="tuaccess" className="form-label">
                  Team User Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked5.create}
                      onChange={handleCheckBoxChange5}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked5.read}
                      onChange={handleCheckBoxChange5}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked5.update}
                      onChange={handleCheckBoxChange5}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked5.delete}
                      onChange={handleCheckBoxChange5}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div>
                <label htmlFor="ptaccess" className="form-label">
                  Project Team Access
                </label>
                <div className="border rounded p-1">
                  <label>
                    Create
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="create"
                      checked={isChecked6.create}
                      onChange={handleCheckBoxChange6}
                    />
                  </label>
                  <label>
                    Read
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="read"
                      checked={isChecked6.read}
                      onChange={handleCheckBoxChange6}
                    />
                  </label>
                  <label>
                    Update
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="update"
                      checked={isChecked6.update}
                      onChange={handleCheckBoxChange6}
                    />
                  </label>
                  <label>
                    Delete
                    <input
                      className="mr-3"
                      type="checkbox"
                      name="delete"
                      checked={isChecked6.delete}
                      onChange={handleCheckBoxChange6}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="btn btn-success mx-auto">Add To Organization</div><br/>
      </div>
    </>
  );
}
