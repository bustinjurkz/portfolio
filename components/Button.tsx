import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  text?: string;
  to?: string;
}

export const Button: React.VFC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonStyle href={props.to} role="button" target="_blank">
      {props.text}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.a`
  cursor: pointer;
  text-align: center;
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #546178;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #404754;
    border-radius: 10rem;
    z-index: -2;
  }
  :hover {
    color: #fff;
  }
  :hover:before {
    width: 100%;
  }
`;
