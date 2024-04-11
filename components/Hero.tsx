import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import HeroImage from "../public/dustin_hero_background_3.jpg";
import { gradualFade } from "../gradualFade";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  useEffect(() => {
    gradualFade("hero");
  }, []);

  return (
    <>
      <HeroWrapper>
        <HeroGradientWrapper id="hero">
          <Image
            priority
            className="dustin_hero"
            src={HeroImage}
            alt="Dustin Hero"
            aria-label="Hero Image"
            width={1000}
            height={1333}
            layout={"responsive"}
          />
        </HeroGradientWrapper>

        <HeroTextWrapper>
          <HeroTextTitle>
            Hello, <br />
            I'm Dustin
          </HeroTextTitle>
          <HeroTextSubtitle>
            I&apos;m a Canadian{" "}
            <StyledLink
              href="https://github.com/bustinjurkz"
              target={"_blank"}
              rel="noreferrer"
            >
              full-stack web developer
            </StyledLink>{" "}
            who loves cool design and offbeat ideas. I am available for
            full-time & freelance projects.
          </HeroTextSubtitle>
        </HeroTextWrapper>
      </HeroWrapper>
    </>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeroTextTitle = styled.h1`
  font-family: "Inter", sans-serif;
  white-space: nowrap;
  color: ${(props) => props.theme.greenPrimary};
  font-size: 5rem;
  margin: 0;
  padding: 0;
`;

const HeroTextSubtitle = styled.h2`
  max-width: 550px;
  font-weight: normal;
`;

const HeroGradientWrapper = styled.div`
  mask-image: linear-gradient(to bottom, #ffffff 60%, transparent 90%);
  @media screen and (min-width: 768px) {
    mask-image: linear-gradient(to right, #ffffff 60%, transparent 100%);
  }
  width: 100%;
`;

const HeroTextWrapper = styled.div`
  width: 100%;
  padding-left: 3.5rem;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.greenSecondary};
  font-weight: 600;
  position: relative;
`;
