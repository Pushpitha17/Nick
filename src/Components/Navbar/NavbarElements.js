import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1000px;
  @media screen and (max-width: 960px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 99;
    /* transform: translate(-100%, 60%); */
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: ${({ click }) => (click ? "0" : "-1000px")};
    right: 0;
    opacity: 0.95;
    z-index: 49;
    transform: all 0.5s ease;
    background: #f5f5f5;
  }
`
export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: #ecf0f1;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #34495e;

    &:hover {
      color: #524714;
      transition: all 0.3s ease;
    }
  }
`
export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
