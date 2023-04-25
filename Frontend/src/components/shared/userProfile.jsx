import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateUserProfile from "./updateUserProfile";

function Profile(props) {
  const [user, setUser] = useState(null);
  const [updateUserProfile, setUpdateUserProfile] = useState(false);

  const handleClick = () => {
    setUpdateUserProfile(true);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("accesstoken");
    const accesstoken = JSON.parse(storedItem);
    const config = {
      headers: { Authorization: `Bearer ${accesstoken}` },
    };
    axios
      .get("http://localhost:3005/Users/userprofile", config)
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("userProfile", JSON.stringify(response.data));
        console.log(localStorage.getItem("userProfile"));
      })
      .catch((error) => {
        console.log(error);
        // handle errors here
      });
  }, [axios]);

  if (!user) {
    return (
      <>
        <h3>Loading...........</h3>
      </>
    );
  }
  return (
    <>
      {updateUserProfile ? (
        <UpdateUserProfile />
      ) : (
        <>
          {console.log(user)}
          <h3>First Name: {user[0][0].firstName}</h3>
          <h3>Middle Name: {user[0][0].middleName}</h3>
          <h3>Last Name: {user[0][0].lastName}</h3>
          <h3>DOB: {user[0][0].dob}</h3>
          <h3>Joined At: {user[1][0].createdAt}</h3>
          <h3>location: {user[0][0].location}</h3>
          <h3>Email:{user[1][0].email}</h3>
          <h3>Contact Number: {user[1][0].contactNumber}</h3>
          <p>to add skills</p>
          <div>
            <button onClick={handleClick}>Update</button>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
