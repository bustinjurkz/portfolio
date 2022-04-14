import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <div className="contents">
        <a
          href="https://github.com/bustinjurkz/portfolio"
          target={"_blank"}
          rel="noreferrer"
        >
          Made with ❤️ © {new Date().getFullYear()}
        </a>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.whiteContrast};
  padding: 3em 0;
  font-size: large;
  text-align: center;
`;
