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
        {children} <Footer />
      </ChildrenStyle>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  position: absolute;
  overflow-y: scroll;
  top: 80px;
  overflow-x: hidden;
  width: 100%;
  bottom: 0;
  background-color: ${(props) => props.theme.lightestGreen};
`;

const ChildrenStyle = styled.div`
  height: 100%;
  /* max-width: 1400px; */
  margin: 0px auto;
  /* padding: 40px 20px 0px 20px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
