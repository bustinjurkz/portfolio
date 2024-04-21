import React from "react";
import styled from "styled-components";

import { HeaderWrapper, Header } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <HeaderWrapper>
        <Header>CONTACT</Header>
      </HeaderWrapper>
      <ContactWrapper>
        <ContactMessage>
          Feel free to reach out! <br />
          Whether you have a project in mind, want to collaborate, or simply
          have a question, hit me up!
        </ContactMessage>
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

const ContactWrapper = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
`;
