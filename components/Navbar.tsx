import React from "react";
import styled from "styled-components";
import Logo from "../public/script_logo.png";
import Image from "next/legacy/image";
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
        <Link href="/" passHref>
          <Image
            src={Logo}
            alt="Logo"
            aria-label="Dustin  Logo"
            width={115}
            height={38}
          />
        </Link>
      </LogoWrapper>
      <NavLinksWrapper>
        <div onClick={() => handleScroll("projects")} className="link work">
          PROJECTS
        </div>
        <div onClick={() => handleScroll("experience")} className="link work">
          EXPERIENCE
        </div>
        <div onClick={() => handleScroll("contact")} className="link">
          CONTACT
        </div>
      </NavLinksWrapper>
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
  max-width: 1100px;
  margin: auto auto;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  width: 115px;

  &:hover {
    transform: scale(1.03);
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  font-weight: 600;

  .link {
    font-size: large;
    transition: 0.5s;
    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
      color: ${(props) => props.theme.secondary};
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
`;
