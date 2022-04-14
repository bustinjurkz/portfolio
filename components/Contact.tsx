import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Github from "../public/icon-github.png";
import LinkedIn from "../public/icon-linkedin.png";
import Mail from "../public/icon-mail.png";

export const Contact = () => {
  return (
    <ContactStyle>
      <h1 style={{ fontSize: 70 }}>Contact</h1>
      <div className="container">
        <h1>Let&apos;s collaborate! Anytime, anywhere.</h1>
        <div className="logos">
          <a
            className="logo-container"
            href="https://github.com/bustinjurkz"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={Github}
              alt="Github Logo"
              aria-label="Github"
            />
          </a>
          <a
            className="logo-container middle"
            href="https://www.linkedin.com/in/dustinjurkaulionis/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={LinkedIn}
              alt="LinkedIn Logo"
              aria-label="LinkedIn"
            />
          </a>
          <a
            className="logo-container"
            href="mailto: dustinjurkaulionis@gmail.com"
          >
            <Image priority src={Mail} alt="Mail Logo" aria-label="Mail" />
          </a>
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logos {
    display: flex;
    align-items: self-end;
    margin: 1rem 0rem;
  }
  .logo-container {
    cursor: pointer;
    max-width: 50px;
    transition: 0.3s;
    :hover {
      transform: translateY(-3px);
    }
  }
  .middle {
    margin: 0px 20px;
  }
`;
