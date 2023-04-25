import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateUserProfile() {
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [location, setLocation] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // load user profile from local storage
    const userProfile = localStorage.getItem("userProfile");
    console.log(userProfile);

    // set state with loaded values
    if (userProfile) {
      setFirstName(JSON.parse(userProfile)[0][0].firstName);
      setMiddleName(JSON.parse(userProfile)[0][0].middleName);
      setLastName(JSON.parse(userProfile)[0][0].lastName);
      setLocation(JSON.parse(userProfile)[0][0].location);
      setContactNumber(JSON.parse(userProfile)[1][0].contactNumber);
      setEmail(JSON.parse(userProfile)[1][0].email);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // create updated user profile object
    const updatedProfile = [
      [{ firstName, middleName, lastName, location }],
      [{ contactNumber, email }],
    ];

    // save updated profile to local storage
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));

    // display success message to user
    alert("Profile updated successfully!");

    // send updated profile to backend API
    const storedItem = localStorage.getItem("accesstoken");
    const accesstoken = JSON.parse(storedItem);
    const config = {
      headers: { Authorization: `Bearer ${accesstoken}` },
    };
    axios
      .put("http://localhost:3005/Users/userprofile", updatedProfile, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // handle errors here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default UpdateUserProfile;
