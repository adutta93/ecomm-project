import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../SidebarData";
import "./index.css";
import { isAuthenticated, signOut } from "../../Auth/api";
import { useHistory } from "react-router-dom";

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
      <div>
        <h1>Hi Admin!</h1>
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
