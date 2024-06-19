import React from "react";
import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle id="main">
      <ChildrenStyle>{children}</ChildrenStyle>
    </LayoutStyle>
  );
};

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
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
