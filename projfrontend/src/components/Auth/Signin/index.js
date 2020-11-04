import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../../Button";
import { signIn, authenticate, isAuthenticated } from "../api";
import Swal from "sweetalert2";

const Signin = () => {
  const [value, setValue] = useState({
    email: "akashdutta1993official@gmail.com",
    password: "akashmaroon5",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = value;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValue({ ...value, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false, loading: true });
    signIn({ email, password })
      .then((data) => {
        if (data.error) {
          setValue({ ...value, error: data.error, success: false });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.error,
          });
        } else {
          authenticate(data, () => {
            setValue({
              ...value,
              didRedirect: true,
              email: "",
              password: "",
            });
          });
          Swal.fire("Success!", "User loggedin successfully!", "success");
        }
      })
      .catch((err) => console.log("From sign in page", err));
  };

  const isLoading = () => {
    return (
      loading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    );
  };
  const doRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  const signInForm = () => {
    return (
      <div>
        <form>
          <label>Email:</label>
          <input type="email" onChange={handleChange("email")} value={email} />

          <label>Password:</label>
          <input
            type="password"
            onChange={handleChange("password")}
            value={password}
          />
        </form>
        <Button value="Log In" onClick={handleSubmit} />
      </div>
    );
  };
  return (
    <div>
      {isLoading()}
      {signInForm()}
      {doRedirect()}
    </div>
  );
};

export default Signin;
