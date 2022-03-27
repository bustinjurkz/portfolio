import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../public/script_logo.png";
import Image from "next/image";
export const NAVBAR_HEIGHT = 160;

const Navbar: React.FC = () => {
  const scrollIntoView = require("scroll-into-view");
  const [container, setContainer] = useState<any>(undefined);

  // Main scrolling container is 'main' component in this app
  useEffect(() => {
    setContainer(document.getElementById("work"));
  }, []);
  return (
    <NavbarStyle>
      <div className="logo-container">
        <Image src={Logo} alt="Logo" aria-label="Dusty  Logo" />
      </div>
      <div className="nav-links">
        <div
          className="link"
          onClick={() =>
            scrollIntoView(container, { align: { topOffset: 1050 } })
          }
        >
          WORK
        </div>
        <div className="link about">ABOUT</div>
        <div className="link">CONTACT</div>
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
  height: 80px;
  padding: 0px 15px;
  max-width: 1400px;
  margin: auto auto;
  .logo-container {
    cursor: pointer;
    width: 115px;
  }
  .nav-links {
    display: flex;
    font-weight: 600;
    .link {
      font-size: large;
      :hover,
      :active,
      :focus {
        cursor: pointer;
        transform: scale(1.05);
        background-image: ${(props) => props.theme.gradient};
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 88%;
        width: min-content;
      }
    }
    .about {
      margin: 0px 40px;
    }
  }
`;
