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
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let history = useHistory();
  return (
    <>
      {/* <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars color="#fff" />
        </Link>
      </div> */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose color="#fff" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.title === "Logout" ? (
                  <Link
                    to="/"
                    onClick={() => {
                      signOut(() => {
                        history.push("/");
                      });
                    }}
                  >
                    <FaIcons.FaEnvelopeOpenText />
                    <span>Logout</span>
                  </Link>
                ) : (
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default AdminDashNav;

