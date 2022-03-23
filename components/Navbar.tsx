import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Logo from "../public/logo.png";
import Image from "next/image";

export const NAVBAR_HEIGHT = 160;

const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <div className="logo-container">
        <Image src={Logo} alt="Logo" aria-label="Planter Logo" />
      </div>
      <div className="nav-links">
        <div className="link">Work</div>
        <div className="link">About</div>
        <div className="link">Contact</div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  max-width: 1500px;
  margin: auto auto;
  .logo-container {
    cursor: pointer;
    width: 115px;
  }
  .nav-links {
    display: flex;
    .link {
      cursor: pointer;
      :hover {
        color: red;
      }
    }
  }
`;
