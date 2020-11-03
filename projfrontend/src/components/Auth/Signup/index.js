import React, { useState } from "react";
import Button from "../../Button";
import { signUp } from "../api";
import Swal from "sweetalert2";

const Signup = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    password2: "",
    error: "",
    success: false,
  });

  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    password2,
    error,
    success,
  } = value;

  const handleChange = (name) => (event) => {
    setValue({ ...value, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false });
    signUp({ firstName, lastName, email, mobileNumber, password })
      .then((data) => {
        if (data.error) {
          setValue({ ...value, error: data.error, success: false });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.error,
          });
        } else if (password !== password2) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password dose not match!",
          });
        } else {
          setValue({
            ...value,
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            password: "",
            password2: "",
            error: "",
            success: true,
          });
          Swal.fire("Success!", "User registered successfully!", "success");
        }
      })
      .catch((err) => console.log(err));
  };

  const signUpForm = () => (
    <div>
      <form>
        <div>
          <label>First name:</label>
          <input
            type="text"
            onChange={handleChange("firstName")}
            value={firstName}
          />

          <label>Last name:</label>
          <input
            type="text"
            onChange={handleChange("lastName")}
            value={lastName}
          />
        </div>

        <label>Email:</label>
        <input type="email" onChange={handleChange("email")} value={email} />

        <label>Mobile number:</label>
        <input
          type="text"
          onChange={handleChange("mobileNumber")}
          value={mobileNumber}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={handleChange("password")}
          value={password}
        />

        <label>Confirm password:</label>
        <input
          type="password"
          onChange={handleChange("password2")}
          value={password2}
        />
        <Button value="Sign Up" onClick={handleSubmit} />
      </form>

      <p>{JSON.stringify(value)}</p>
    </div>
  );

  return <div>{signUpForm()}</div>;
};

export default Signup;
