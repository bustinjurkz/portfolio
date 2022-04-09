import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "../public/script_logo.png";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

export function handleScroll(scrollTo: string) {
  const elem = document.getElementById(scrollTo);

  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    router.push("/#work");
  }
}
const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <div className="logo-container">
        <Link href="/" passHref>
          <Image src={Logo} alt="Logo" aria-label="Dusty  Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <div onClick={() => handleScroll("work")} className="link work">
          WORK
        </div>
        <div onClick={() => handleScroll("contact")} className="link">
          CONTACT
        </div>
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
    .work {
      margin-right: 40px;
    }
  }
`;
