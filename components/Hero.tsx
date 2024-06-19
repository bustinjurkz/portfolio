import React from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/legacy/image";
import HeroImage from "../public/dustin_hero_graffiti.webp";
import { handleScroll } from "../pages";
import { TechStack } from "./TechStack";

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroTextTitle>
          FRONT END <br /> DEVELOPER
        </HeroTextTitle>
        <HeroGradientWrapper id="hero">
          <Image
            priority
            src={HeroImage}
            alt="Dustin Hero"
            aria-label="Hero Image"
            width={605}
            height={186}
            loading="eager"
          />
        </HeroGradientWrapper>
        <HeroTextTitle $isName>
          DUSTIN <br />
          JURKAULIONIS
        </HeroTextTitle>
        <ArrowStackWrapper>
          <ArrowBox onClick={() => handleScroll("projects")}>
            <Arrow />
          </ArrowBox>
          <TechStack />
        </ArrowStackWrapper>
      </HeroWrapper>
    </>
  );
};

const fadeInAnimation = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: auto;
  animation: ${fadeInAnimation} 1.25s ease-out;
  margin-right: auto;
  line-height: initial;
  gap: 1.5rem;
  height: calc(100vh - 80px - 2rem);
`;

const HeroTextTitle = styled.h1<{ $isName?: boolean }>`
  white-space: nowrap;
  color: ${(props) => props.theme.primary};
  margin: 0;
  line-height: 70px;
  letter-spacing: 4px;
  font-size: 4rem;

  ${(props) =>
    props.$isName &&
    css`
      text-align: right;
      line-height: 100px;
      font-size: 6rem;
    `}
`;

const HeroGradientWrapper = styled.div`
  width: 55%;
`;

const ArrowStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Arrow = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  background: ${(props) => props.theme.primary};
  height: 60px;
  width: 5px;
  transition: transform 0.75s ease;

  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-bottom: 5px solid;
    border-right: 5px solid;
    border-color: ${(props) => props.theme.primary};
    transform: rotate(45deg);
    bottom: 0px;
    left: -6px;
  }
`;

const ArrowBox = styled.div`
  height: 60px;
  width: 40px;
  transform: translateX(-13px);

  :first-child {
    margin: auto;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${Arrow} {
    transform: translateY(5px);
  }
`;
