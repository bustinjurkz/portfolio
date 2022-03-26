import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Logo from "../public/logo.png";
import Image from "next/image";
import { Button } from "./Button";

export const NAVBAR_HEIGHT = 160;

const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <div className="logo-container">
        <Image src={Logo} alt="Logo" aria-label="Planter Logo" />
      </div>
      <div className="nav-links">
        <Button text="Work" />
        <Button text="About" />
        <Button text="Contact" />
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background: ${(props) => props.theme.background};
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0px 15px;
  max-width: 1500px;
  margin: auto auto;
  .logo-container {
    cursor: pointer;
    width: 115px;
  }
  .nav-links {
    display: flex;
  }
`;
