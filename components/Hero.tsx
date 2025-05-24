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
          FULL STACK <br /> DEVELOPER
        </HeroTextTitle>
        <HeroImageWrapper id="hero">
          <Image
            priority
            src={HeroImage}
            alt="Dustin Hero"
            aria-label="Hero Image"
            width={602}
            height={185}
            loading="eager"
          />
        </HeroImageWrapper>
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
  margin-right: auto;
  line-height: initial;
  gap: 1.5rem;
  animation: ${fadeInAnimation} 1.25s ease-out;

  @media (max-height: 758px) {
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
`;

const HeroTextTitle = styled.h1<{ $isName?: boolean }>`
  white-space: nowrap;
  color: ${(props) => props.theme.primary};
  margin: 0;
  line-height: 1;
  letter-spacing: 4px;
  font-size: 4rem;
  letter-spacing: 4px;
  font-size: clamp(1.5rem, 4vw + 0.75rem, 4rem);

  ${(props) =>
    props.$isName &&
    css`
      text-align: right;
      font-size: clamp(1.75rem, 6vw + 1rem, 6rem);
    `}

  @media (max-height: 758px) {
    font-size: clamp(1.75rem, 6vw + 1rem, 4rem);
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    min-width: 500px;
    width: 60%;
  }
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
  display: none;

  @media (min-width: 550px) {
    display: block;
    height: 60px;
    width: 40px;

    :first-child {
      margin: auto;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover ${Arrow} {
      transform: translateY(5px);
    }
  }

  @media (min-width: 768px) {
    transform: translateX(-13px);
  }
`;
