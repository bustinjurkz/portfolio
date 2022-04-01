import React from "react";
import styled from "styled-components";

export interface SectionHeaderProps {
  text: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({ ...props }) => {
  return (
    <SectionHeaderStyle>
      <div className="text">{props.text}</div>
    </SectionHeaderStyle>
  );
};

const SectionHeaderStyle = styled.div`
  .text {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: ${(props) => props.theme.bigFont};
    background-image: ${(props) => props.theme.gradient};
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    width: min-content;
  }
  margin-bottom: 50px;
`;
