import React from "react";
import styled from "styled-components";
import Logo from "../public/script_logo.webp";
import Image from "next/legacy/image";
import Link from "next/link";
import router from "next/router";
import { motion } from "framer-motion";

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

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Link href="/" passHref>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src={Logo}
              alt="Logo"
              aria-label="Dustin  Logo"
              width={115}
              height={38}
            />
          </motion.div>
        </Link>
      </LogoWrapper>
      <NavLinksWrapper>
        <NavLink onClick={() => handleScroll("projects")}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Projects
          </motion.div>
        </NavLink>
        <NavLink onClick={() => handleScroll("experience")}>
          {" "}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Experience{" "}
          </motion.div>
        </NavLink>
        <NavLink onClick={() => handleScroll("contact")}>
          {" "}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact{" "}
          </motion.div>
        </NavLink>
      </NavLinksWrapper>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 100px;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  font-weight: 600;
  letter-spacing: 3px;
  gap: 1.5rem;
`;

const NavLink = styled.div`
  transition: 0.5s;
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.secondary};
  }
`;
