import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  // TODO put icons here
  return (
    <FooterStyle>
      HANDCRAFTED WITH LOVE © {new Date().getFullYear()}
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  padding: 50px 0px;
  display: inline-flex;
`;
