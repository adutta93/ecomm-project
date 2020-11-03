import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Button";

import {
  Nav,
  NavbarContainer,
  Logo,
  Icon,
  HamburgerMenu,
  NavMenu,
  NavLinks,
  NavItem,
} from "./index.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuToggle = () => {
    setClick(!click);
  };

  const authUserLink = (
    <Fragment>
      <HamburgerMenu onClick={menuToggle}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavMenu onClick={menuToggle} click={click}>
        <NavItem>
          <NavLinks to="/posts">Home</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/manageprofile">Profile</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/premium">
            <Button value="Premium" transparent />
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/cart">Cart</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/">
            <AiOutlineArrowRight /> Log Out
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Fragment>
  );

  const guestUserLink = (
    <Fragment>
      <HamburgerMenu onClick={menuToggle}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavMenu onClick={menuToggle} click={click}>
        <NavItem>
          <NavLinks to="/">Home</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/sign-in">Log in</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/cart">Cart</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/sign-up">
            <Button value="Register" transparent />
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Fragment>
  );

  const isAuthenticated = false;
  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">
          <Icon />
          Cartman
        </Logo>
        <input
          placeholder="Search"
          style={{ height: "2.2rem", marginTop: "1.5rem", width: "20rem" }}
        />

        <Fragment>{isAuthenticated ? authUserLink : guestUserLink}</Fragment>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
