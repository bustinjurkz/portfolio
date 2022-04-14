import React from "react";
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
    router.push(`/#${scrollTo}`);
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
        color: ${(props) => props.theme.green};
      }
    }
    .work {
      margin-right: 1rem;
      @media screen and (min-width: 430px) {
        margin-right: 2rem;
      }
      @media screen and (min-width: 800px) {
        margin-right: 3rem;
      }
      @media screen and (min-width: 1000px) {
        margin-right: 4rem;
      }
    }
  }
`;
