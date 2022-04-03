import React from "react";
import styled from "styled-components";
import { SectionHeader } from "../components/SectionHeader";
import Image from "next/image";
import Github from "../public/icon-github.png";
import LinkedIn from "../public/icon-linkedin.png";
import Mail from "../public/icon-mail.png";

export const Contact = () => {
  return (
    <ContactStyle>
      <SectionHeader text={"Contact"} />
      <h1>Let&apos;s collaborate! Anytime, anywhere.</h1>
      <div className="logos">
        <div className="logo-container">
          <Image src={Github} alt="Github Logo" aria-label="Github" />
        </div>
        <div className="logo-container middle">
          <Image src={LinkedIn} alt="LinkedIn Logo" aria-label="LinkedIn" />
        </div>
        <div className="logo-container">
          <Image src={Mail} alt="Mail Logo" aria-label="Mail" />
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  .logos {
    display: flex;
    align-items: self-end;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .logo-container {
    cursor: pointer;
    max-width: 50px;
    transition: 0.3s;
    :hover {
      transform: translateY(-10px);
    }
  }
  .middle {
    margin: 0px 20px;
  }
`;
