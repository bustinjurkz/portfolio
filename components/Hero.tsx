import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HeroImage from "../public/dustin_hero_background_3.jpg";
import { gradualFade } from "../gradualFade";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  // SSR requires document to be loaded first
  useEffect(() => {
    gradualFade("hero");
  }, []);

  const line1 = "Hello,";
  const line2 = "I'm Dustin";
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <HeroStyle>
      <div className="container">
        <div className="gradient-container" id="hero">
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
        </div>

        <div className="text">
          <AnimatePresence>
            <motion.div
              className="title"
              variants={{
                hidden: {
                  opacity: 1,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
              <br />{" "}
              {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.2 } }}
              className="subtitle"
            >
              I&apos;m a Canadian{" "}
              <a
                href="https://github.com/bustinjurkz"
                target={"_blank"}
                rel="noreferrer"
              >
                full-stack web developer
              </a>{" "}
              who loves cool design and offbeat ideas. <br /> I am available for
              full-time & freelance projects.
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="subtitle-tablet">
        I&apos;m a Canadian{" "}
        <a
          href="https://github.com/bustinjurkz"
          target={"_blank"}
          rel="noreferrer"
        >
          full-stack web developer
        </a>
        who loves cool design and quirky ideas. I am available for full-time &
        freelance projects.
      </div>
    </HeroStyle>
  );
};

const HeroStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 9rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    .gradient-container {
      mask-image: linear-gradient(to bottom, #ffffff 60%, transparent 90%);
      @media screen and (min-width: 768px) {
        mask-image: linear-gradient(to right, #ffffff 60%, transparent 100%);
      }
      width: 100%;
    }

    .text {
      width: 100%;
      max-height: 400px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: 600;

      .title {
        font-family: "Inter", sans-serif;
        font-size: clamp(14.5vw, 10vw, 15vw);
        align-self: center;
        transform: translateY(-10vw);
        white-space: nowrap;
        @media screen and (min-width: 768px) {
          align-self: auto;
          font-size: 4rem;
          transform: translate(-5vw, 0vw);
        }
        @media screen and (min-width: 1025px) {
          font-size: 5rem;
          transform: translate(-5vw, 1vw);
        }
      }

      .subtitle {
        margin-top: 0rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.25rem;
        padding: 0px 20px;
        max-width: 550px;

        @media screen and (min-width: 450px) {
          padding: 0px 30px;
          font-size: 1.5rem;
        }

        @media screen and (min-width: 768px) {
          margin-top: 2rem;
          font-size: xx-large;
          padding: 0px 40px;
        }

        @media screen and (min-width: 768px) and (max-width: 1015px) {
          display: none;
        }
        @media screen and (min-width: 1016px) {
          padding: 30px 50px;
          max-width: 650px;
        }
      }
      a {
        display: contents;
        color: ${(props) => props.theme.darkGrey};
        font-weight: 600;
      }
    }
  }
  .subtitle-tablet {
    @media screen and (max-width: 767px) {
      display: none;
    }
    @media screen and (min-width: 1016px) {
      display: none;
    }
    font-size: xx-large;
    margin-right: auto;
    font-size: 1.5rem;
    padding: 0px 60px;
    max-width: 600px;
    font-weight: 600;
    a {
      display: contents;
      color: ${(props) => props.theme.darkGrey};
      font-weight: 600;
    }
  }
`;
