import React from "react";
import styled from "styled-components";
import { SectionHeader } from "../components/SectionHeader";

export const Contact = () => {
  return (
    <ContactStyle>
      <SectionHeader text={"Contact"} />
      <h1>Let&apos;s collaborate! Anytime, anywhere.</h1>
    </ContactStyle>
  );
};

const ContactStyle = styled.div``;
