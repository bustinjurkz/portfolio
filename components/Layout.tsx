import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyle id="main">
      <ChildrenStyle>
        {children}
        <Footer />
      </ChildrenStyle>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  position: absolute;
  top: 120px;
  width: 100%;
  bottom: 0;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.lightestGreen};
`;

const ChildrenStyle = styled.div`
  height: 100%;
  max-width: 1400px;
  margin: 0px auto;
  padding: 40px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 665px) {
    padding: 0px 40px;
  }
  @media screen and (min-width: 1000px) {
    padding: 40px 40px 0px 40px;
  }
`;
