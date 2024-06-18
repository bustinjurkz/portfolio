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
            className="dustin-hero"
            src={HeroImage}
            alt="Dustin Hero"
            aria-label="Hero Image"
            layout={"responsive"}
          />
        </HeroGradientWrapper>
        <HeroTextTitle $isName>
          DUSTIN <br />
          JURKAULIONIS
        </HeroTextTitle>
        {/* <HeroTextSubtitle>
          I&apos;m a Canadian{" "}
          <StyledLink
            href="https://github.com/bustinjurkz"
            target={"_blank"}
            rel="noreferrer"
          >
            Full Stack Web Developer
          </StyledLink>{" "}
          who loves cool design and offbeat ideas. I am available for full time
          & freelance projects.
        </HeroTextSubtitle> */}
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

const HeroTextSubtitle = styled.h2`
  max-width: 550px;
  font-weight: normal;
`;

const HeroGradientWrapper = styled.div`
  width: 55%;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.secondary};
  font-weight: 600;
  position: relative;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
