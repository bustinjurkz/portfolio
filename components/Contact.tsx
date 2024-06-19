import React from "react";
import styled from "styled-components";

import { HeaderWrapper, Header } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ZebraPattern } from "./ZebraPattern";

export const Contact = () => {
  return (
    <>
      <HeaderWrapper>
        <Header>CONTACT</Header>
        <ZebraPattern />
      </HeaderWrapper>
      <ContactWrapper>
        <ContactMessage>
          Whether you want to collaborate, or simply have a question - <br />
          Feel free to reach out.
        </ContactMessage>
        <LogosWrapper>
          <a
            href="https://github.com/bustinjurkz"
            target={"_blank"}
            rel="noreferrer"
            aria-label="Dustin Jurkaulionis GitHub Account"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/dustinjurkaulionis/"
            target={"_blank"}
            rel="noreferrer"
            aria-label="Dustin Jurkaulionis LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="mailto: dustinjurkaulionis@gmail.com"
            aria-label="Dustin Jurkaulionis E-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </LogosWrapper>
      </ContactWrapper>
    </>
  );
};

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: baseline;

  a {
    > * {
      color: ${(props) => props.theme.primary};
      width: 40px;
    }
  }
`;

const ContactMessage = styled.span`
  margin-top: 2rem;
`;

const ContactWrapper = styled.div``;
