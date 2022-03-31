import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  text?: string;
  to?: string;
}

export const Button: React.VFC<ButtonProps> = ({ ...props }) => {
  return (
    <form action={props.to} method="get" target="_blank">
      <ButtonStyle role="button" type="submit">
        {props.text}
      </ButtonStyle>
    </form>
  );
};

const ButtonStyle = styled.button`
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  touch-action: manipulation;
  :hover,
  :active {
    background: ${(props) => props.theme.red};
  }
  :active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;
