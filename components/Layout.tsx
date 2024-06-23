import React from "react";
import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <ChildrenStyle>{children}</ChildrenStyle>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  width: 100%;
`;

const ChildrenStyle = styled.div`
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
