import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HeroImage from "../public/dustin_hero_background.jpg";
import { gradualFade } from "../gradualFade";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

export const Hero = () => {
  // SSR requires document to be loaded first
  useEffect(() => {
    gradualFade("hero");
  }, []);

  const { ref } = useParallax<HTMLDivElement>({
    speed: 15,
  });
  return (
    <HeroStyle>
      <div className="gradient-container" id="hero">
        <Image
          priority
          className="image"
          src={HeroImage}
          alt="Dustin Hero"
          aria-label="Hero Image"
          width={2000}
          height={1382}
          layout={"responsive"}
        />
      </div>

      <div className="text" ref={ref}>
        <div className="title">
          Howdy, <br /> I&apos;m Dusty
        </div>
        <div className="subtitle">
          I&apos;m a Canadian{" "}
          <a
            href="https://github.com/bustinjurkz"
            target={"_blank"}
            rel="noreferrer"
          >
            full-stack web developer
          </a>{" "}
          who loves good design and quirky ideas. I am available for full-time &
          freelance projects.
        </div>
      </div>
    </HeroStyle>
  );
};

const HeroStyle = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 80px;

  .gradient-container {
    width: 100%;
    mask-image: linear-gradient(to right, #ffffff 50%, transparent 100%);

    .image {
      border-radius: 20px;
    }
  }

  .text {
    width: 100%;
    max-height: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-family: "Inter", sans-serif;
      font-size: ${(props) => props.theme.biggestFont};
      font-weight: 600;
      transform: translateX(-70px);
    }
    .subtitle {
      margin-top: 50px;
      font-size: xx-large;
      padding: 0px 40px;
    }
    a {
      display: contents;
      color: ${(props) => props.theme.darkGrey};
      font-weight: 600;
    }
  }
`;
