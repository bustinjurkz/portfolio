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
    <NavbarWrapper>
      <LogoWrapper>
        <Link href="/" passHref legacyBehavior>
          <Image
            src={Logo}
            alt="Logo"
            aria-label="Dustin  Logo"
            width={115}
            height={38}
          />
        </Link>
      </LogoWrapper>
      <div className="nav-links">
        <div onClick={() => handleScroll("projects")} className="link work">
          PROJECTS
        </div>
        <div onClick={() => handleScroll("experience")} className="link work">
          EXPERIENCE
        </div>
        <div onClick={() => handleScroll("contact")} className="link">
          CONTACT
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background: ${(props) => props.theme.background};
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 15px;
  max-width: 1030px;
  margin: auto auto;

  .nav-links {
    display: flex;
    font-weight: 600;
    .link {
      font-size: large;
      &:hover,
      &:active,
      &:focus {
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

export const LogoWrapper = styled.div`
  cursor: pointer;
  width: 115px;

  &:hover {
    transform: scale(1.03);
  }
`;
