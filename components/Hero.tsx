import React from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/legacy/image";
import HeroImage from "../public/dustin_hero_graffiti.webp";

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
  max-width: 1100px;
  margin-left: auto;
  animation: ${fadeInAnimation} 1.25s ease-out;
  margin-right: auto;
  line-height: initial;
  gap: 1.5rem;
`;

const HeroTextTitle = styled.h1<{ $isName?: boolean }>`
  white-space: nowrap;
  color: ${(props) => props.theme.primary};
  font-size: 4rem;
  margin: 0;
  line-height: 70px;
  letter-spacing: 4px;

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
