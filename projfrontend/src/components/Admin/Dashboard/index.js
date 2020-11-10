import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../SidebarData";
import "./index.css";
import { isAuthenticated, signOut } from "../../Auth/api";
import { useHistory } from "react-router-dom";

const {user:{firstName, lastName, email, mobileNumber}} = isAuthenticated()

const AdminDashNav = () => {
  const adminNav = () => {
    return (
      <div className="">
        {" "}
        <div className="link-container">
          <Link className="links" to="/">
            Profile
          </Link>
          <Link className="links" to="/">
            Create Categories
          </Link>
          <Link className="links" to="/">
            Create Products
          </Link>
          <Link className="links" to="/">
            Manage Products
          </Link>
          <Link className="links" to="/">
            Manage Orders
          </Link>
        </div>
      </div>
    );
  };

  const dashDetails = () => {
    return (
      <div className="dashdetails">
        <h3>Name: {firstName + " " + lastName}</h3>
        <h4>Email: {email}</h4>
        <h4>Mobile Number: {mobileNumber}</h4>
      </div>
    );
  };
  return (
    <div className="container p-3">
      <h1>Admin Dashboard</h1>
      <div className="row ">
        <div className="col-3">{adminNav()}</div>
        <div className="col-9">{dashDetails()}</div>
      </div>
    </div>
  );
};

export default AdminDashNav;
