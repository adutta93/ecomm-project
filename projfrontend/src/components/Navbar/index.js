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
          <NavLinks to="/posts">Posts</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/manageprofile">Profile</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="https://github.com/akash-dutta-au7">GitHub</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/premium">
            <Button value="Premium" transparent />
          </NavLinks>
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
          <NavLinks to="/blog">GitHub</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/signin">Sign In</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/sign-in">
            <Button value="Log In" transparent />
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

        <Fragment>{isAuthenticated ? authUserLink : guestUserLink}</Fragment>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
