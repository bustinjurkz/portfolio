import React from "react";
import styled from "styled-components";

import { BarHeaderWrapper, BlackBar, Header, HeaderWrapper } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/dustinjurkaulionis/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="mailto: dustinjurkaulionis@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
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

    > * {
      font-size: 2rem;
    }
  }
`;
