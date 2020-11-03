import React from "react";
import Button from '../../Button'

const Signup = () => {
  return (
    <div>
      <form>
        <div>
        <label>First name:</label>
        <input type="text" />

        <label>Last name:</label>
        <input type="text" />
        </div>

        <label>Email:</label>
        <input type="email" />

        <label>Password:</label>
        <input type="password" />

        <label>Confirm password:</label>
        <input type="password" />
      </form>
      <Button value='Sign Up'/>
    </div>
  );
};

export default Signup;
