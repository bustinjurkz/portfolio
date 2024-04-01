import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Github from "../public/icon-github.png";
import LinkedIn from "../public/icon-linkedin.png";
import Mail from "../public/icon-mail.png";
import { BarHeaderWrapper, BlackBar, Header, HeaderWrapper } from "../pages";

export const Contact = () => {
  return (
    <>
      <HeaderWrapper>
        <BarHeaderWrapper>
          <BlackBar />
          <Header>CONTACT</Header>
        </BarHeaderWrapper>
      </HeaderWrapper>

      <LogosWrapper>
        <a
          href="https://github.com/bustinjurkz"
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            priority
            src={Github}
            alt="Github Logo"
            width={50}
            aria-label="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dustinjurkaulionis/"
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            priority
            src={LinkedIn}
            alt="LinkedIn Logo"
            aria-label="LinkedIn"
            width={50}
          />
        </a>
        <a href="mailto: dustinjurkaulionis@gmail.com">
          <Image
            priority
            src={Mail}
            alt="Mail Logo"
            aria-label="Mail"
            width={50}
          />
        </a>
      </LogosWrapper>
    </>
  );
};

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;

  a {
    &:hover {
      transform: scale(1.03);
    }
  }
`;
