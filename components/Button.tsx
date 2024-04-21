import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  text?: string;
  to?: string;
  disabled?: boolean;
  isLarge?: boolean;
  secondary?: boolean;
}

export const Button = ({
  text,
  to,
  disabled,
  isLarge,
  secondary,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && to) {
      window.open(to, "_blank");
    }
  };

  return (
    <ButtonStyle
      role="button"
      target="_blank"
      href={to}
      $disabled={disabled}
      onClick={handleClick}
      $isLarge={isLarge}
      $secondary={secondary}
    >
      {text}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.a<{
  $disabled?: boolean;
  $isLarge?: boolean;
  $secondary?: boolean;
}>`
  text-align: center;
  display: inline-block;
  padding: 0.4rem 0.65rem;
  min-width: 110px;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  white-space: nowrap;

  ${(props) =>
    props.$isLarge &&
    css`
      padding: 0.75rem 1rem;
      font-size: 14px;
      min-width: 180px;
    `}

  &:hover {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.theme.secondary};
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.primary};
    border-radius: 10rem;
    z-index: -2;

    ${(props) =>
      props.$secondary &&
      css`
        background-color: transparent;
        font-weight: 600;
      `}
  }
  &:hover {
    color: #fff;
  }
  &:hover:before {
    width: 100%;
  }

  ${(props) =>
    props.$secondary &&
    css`
      font-weight: 600;
      color: ${(props) => props.theme.primary};
    `}
`;
