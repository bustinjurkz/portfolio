import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <div className="contents">
        HANDCRAFTED WITH LOVE © {new Date().getFullYear()}
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.whiteContrast};
  padding: 2em 0;
  display: inline-flex;
  width: 100vw;
  position: relative;
  font-weight: 600;
  font-size: large;
  /*Push the container to the exact middle of the browser window with left: 50%
  then pull it back to the left edge with negative -50vw margin.  
  This ensures the footer is full width despite a limited parent container
  */
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .contents {
    margin: auto;
  }
`;
