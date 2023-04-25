import React, { useEffect, useRef, useState } from "react";

export default function RolePermissionMapping({ userData, View }) {
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const location = useRef("");
  const dateOfBirth = useRef("");
  const yearsOfExperience = useRef("");
  const email = useRef("");
  const number = useRef("");
  const dateOfHire = useRef("");
  const type = useRef(0);
  const name = useRef("");

  const nameRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


  useEffect(() => {
    fetch("http://localhost:3005/users/user?id=" + userData, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
      }
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById("pname").value = data[0][1][0].firstName;
        document.getElementById("mname").value = data[0][1][0].middleName;
        document.getElementById("lname").value = data[0][1][0].lastName;
        document.getElementById("loc").value = data[0][1][0].location;
        document.getElementById("bdate").value = data[0][1][0].dateOfBirth;
        document.getElementById("YOJ").value = data[0][1][0].yearsOfExperience;
        document.getElementById("email").value = data[0][0][0].email;
        document.getElementById("number").value = data[0][0][0].contactNumber;
        document.getElementById("hdate").value = data[0][0][0].dateOfHire;
        document.getElementById("type").value = data[1][0].type;
        document.getElementById("name").value = data[1][0].name;
        let r = ["Create", "Read", "Update", "Delete"];
        if (data[1][0].type !== 0) {
          let c = 0;
          data[2][0].organizationAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("organization" + r[c]).checked = true;
            }
            c += 1;
          });
          c = 0;
          data[2][0].projectAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("project" + r[c]).checked = true;
            }
            c += 1;
          });
          c = 0;
          data[2][0].sprintAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("sprint" + r[c]).checked = true;
            }
            c += 1;
          });
          c = 0;
          data[2][0].teamAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("team" + r[c]).checked = true;
            }
            c += 1;
          });
          c = 0;
          data[2][0].teamUserMappingAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("teamuser" + r[c]).checked = true;
            }
            c += 1;
          });
          c = 0;
          data[2][0].projectTeamMappingAccess.split('').forEach(e => {
            if (e === '1') {
              document.getElementById("projectteam" + r[c]).checked = true;
            }
            c += 1;
          });
        }
        console.log(data);
      });
      
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let obj = {
      requesterId: userData,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      location: location.current.value,
      dateOfBirth: dateOfBirth.current.value,
      yearsOfExperience: yearsOfExperience.current.value,
      email: email.current.value,
      number: number.current.value,
      type: type.current.value,
      name: name.current.value,
      dateOfHire: dateOfHire.current.value,
      organizationAccess: (isChecked3.create ? "1" : "0") + (isChecked3.read ? "1" : "0") + (isChecked3.update ? "1" : "0") + (isChecked3.delete ? "1" : "0"),
      projectAccess: (isChecked1.create ? "1" : "0") + (isChecked1.read ? "1" : "0") + (isChecked1.update ? "1" : "0") + (isChecked1.delete ? "1" : "0"),
      sprintAccess: (isChecked4.create ? "1" : "0") + (isChecked4.read ? "1" : "0") + (isChecked4.update ? "1" : "0") + (isChecked4.delete ? "1" : "0"),
      teamAccess: (isChecked2.create ? "1" : "0") + (isChecked2.read ? "1" : "0") + (isChecked2.update ? "1" : "0") + (isChecked2.delete ? "1" : "0"),
      teamUserMappingAccess: (isChecked5.create ? "1" : "0") + (isChecked5.read ? "1" : "0") + (isChecked5.update ? "1" : "0") + (isChecked5.delete ? "1" : "0"),
      projectTeamMappingAccess: (isChecked6.create ? "1" : "0") + (isChecked6.read ? "1" : "0") + (isChecked6.update ? "1" : "0") + (isChecked6.delete ? "1" : "0")
    }
    console.log(obj);
    await fetch("http://localhost:3005/setuser", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(data => console.log(data));
    View("Project", false, null);
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
                  Year of Experience
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
              <div>
                <label htmlFor="type" className="form-label">
                  Role Type
                </label>
                <select
                  className="form-control form-control-user"
                  required
                  id="type"
                  defaultValue="0"
                  ref={type}
                >
                  <option value="0" disabled>select</option>
                  <option value="3">Manager</option>
                  <option value="4">Developer</option>
                  <option value="5">Tester</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="name" className="form-label">
                  Role Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-user"
                  placeholder="Role Name"
                  ref={name}
                  id="name"
                  pattern={dateRegex}
                  required
                />
              </div>
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
                      id="projectCreate"
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
                      id="projectRead"
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
                      id="projectUpdate"
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
                      id="projectDelete"
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
                      id="teamCreate"
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
                      id="teamRead"
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
                      id="teamUpdate"
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
                      id="teamDelete"
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
                      id="organizationCreate"
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
                      id="organizationRead"
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
                      id="organizationUpdate"
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
                      id="organizationDelete"
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
                      id="sprintCreate"
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
                      id="sprintRead"
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
                      id="sprintUpdate"
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
                      id="sprintDelete"
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
                      id="teamuserCreate"
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
                      id="teamuserRead"
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
                      id="teamuserUpdate"
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
                      id="teamuserDelete"
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
                      id="projectteamCreate"
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
                      id="projectteamRead"
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
                      id="projectteamUpdate"
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
                      id="projectteamDelete"
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
        <div onClick={handleSubmit} className="btn btn-success mx-auto">Add To Organization</div><br />
      </div>
    </>
  );
}
