import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import logo from "../../images/logo.png"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

export const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleclick = () => setClick(!click)

  return (
    <React.Fragment>
      <Nav click={click}>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="logo" />
          </NavLogo>
          <IconContext.Provider value={{ color: "#bdc3c7", size: "20" }}>
            <MobileIcon onClick={handleclick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </IconContext.Provider>
          <NavMenu onClick={handleclick} click={click}>
            <NavItem>
              <NavLinks to="/about"> About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/music"> Music </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/connect"> Contact </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}
