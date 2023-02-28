import React, { useState } from "react";
import Button from "./Button.js";
import "../Css/SignUp.css";

const UserSignUp = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //to avoid page refreshing

    //alert();
    console.log(
      "First Name: " +
        form.fname +
        " Last Name: " +
        form.lname +
        " Email: " +
        form.email +
        " Password: " +
        form.password +
        " Contact: " +
        form.contact
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="heading">F R A V</h1>
        <h3>SIGN - UP </h3>
      </div>
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          type="text"
          value={form.fname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name </label>
        <input
          id="lname"
          type="text"
          value={form.lname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact </label>
        <input
          id="contact"
          type="tel"
          value={form.contact}
          onChange={handleChange}
        />
      </div>

      {/* <button type="submit">SIGN UP</button> */}
      <article>
        <Button
          type="submit"
          buttonStyle={"btn----solid"}
          buttonSize={"btn--medium"}
        >
          SIGN UP
        </Button>
      </article>
    </form>
  );
};

export default UserSignUp;
