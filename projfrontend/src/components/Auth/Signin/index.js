import React, { useState } from "react";
import Button from "../../Button";
import { signIn } from "../api";
import Swal from "sweetalert2";

const Signin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = value;

  const handleChange = (name) => (event) => {
    setValue({ ...value, error: false, [name]: event.target.value });
  };

  const signInForm = () => {
    return (
      <div>
        <form>
          <label>Email:</label>
          <input 
            type="email" 
            onChange={handleChange("email")} 
            value={email} 
          />

          <label>Password:</label>
          <input
            type="password"
            onChange={handleChange("password")}
            value={password}
          />
        </form>
        <Button value="Log In" />
      </div>
    );
  };
  return <div>{signInForm()}</div>;
};

export default Signin;
