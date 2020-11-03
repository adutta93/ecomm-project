import React from "react";
import Button from "../../Button";

const Signin = () => {
  return (
    <div>
      <form>
        <label>Email:</label>
        <input type="email" />

        <label>Password:</label>
        <input type="password" />
      </form>
      <Button value="Log In" />
    </div>
  );
};

export default Signin;
