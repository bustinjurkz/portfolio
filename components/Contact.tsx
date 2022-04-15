import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Github from "../public/icon-github.png";
import LinkedIn from "../public/icon-linkedin.png";
import Mail from "../public/icon-mail.png";
import { AnimatePresence, motion } from "framer-motion";

export const Contact = () => {
  const line1 = "Let's collaborate!";
  const line2 = "Anytime, anywhere.";
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <ContactStyle>
      <h1 style={{ fontSize: 70 }}>Contact</h1>
      <div className="container">
        <AnimatePresence>
          <motion.h2
            className="collab"
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.3, once: true }}
            variants={{
              hidden: {
                opacity: 1,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                  staggerChildren: 0.015,
                },
              },
            }}
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
          </motion.h2>
        </AnimatePresence>
        <div className="logos">
          <a
            className="logo-container"
            href="https://github.com/bustinjurkz"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={Github}
              alt="Github Logo"
              aria-label="Github"
            />
          </a>
          <a
            className="logo-container middle"
            href="https://www.linkedin.com/in/dustinjurkaulionis/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={LinkedIn}
              alt="LinkedIn Logo"
              aria-label="LinkedIn"
            />
          </a>
          <a
            className="logo-container"
            href="mailto: dustinjurkaulionis@gmail.com"
          >
            <Image priority src={Mail} alt="Mail Logo" aria-label="Mail" />
          </a>
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .collab {
      text-align: center;
    }
  }
  .logos {
    display: flex;
    align-items: self-end;
    margin: 1rem 0rem;
  }
  .logo-container {
    cursor: pointer;
    max-width: 50px;
    transition: 0.3s;
    :hover {
      transform: translateY(-3px);
    }
  }
  .middle {
    margin: 0px 20px;
  }
`;
