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
        <div onClick={() => handleScroll("projects")} className="link">
          Projects
        </div>
        <div onClick={() => handleScroll("experience")} className="link">
          Experience
        </div>
        <div onClick={() => handleScroll("contact")} className="link">
          Contact
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
  width: 100px;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  font-weight: 600;
  letter-spacing: 3px;
  gap: 1.5rem;

  .link {
    transition: 0.5s;
    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
      color: ${(props) => props.theme.secondary};
    }
  }
`;
