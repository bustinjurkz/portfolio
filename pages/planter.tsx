import React from "react";
import styled from "styled-components";
import Logo from "../public/planter/header.jpg";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

const Planter = () => {
  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "planter/header.jpg", speed: 20 }]}
        className="parallax-container"
      >
        <div className="name-container">
          <h1 className="name">PLANTER</h1>
        </div>
      </ParallaxBanner>
      <div>
        <div className="about">ABOUT PLANTER</div>
        <div className="tagline">body text!</div>
        <div className="description">body text!</div>
        <div className="role">ABOUT PLANTER</div>
        <div className="client">body text!</div>
        <div className="date">body text!</div>
        <div className="what">ABOUT PLANTER</div>
        <div className="how">body text!</div>
        <div className="learnings">body text!</div>
        <div className="repo">body text!</div>
        <div className="repo">body text!</div>
        <div className="previous">body text!</div>
        <div className="next">body text!</div>
      </div>
    </PageDetailsStyle>
  );
};

export default Planter;

export const PageDetailsStyle = styled.div`
  .parallax-container {
    height: 70vh;
    .name-container {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .name {
        font-size: 5rem;
        background-color: ${(props) => props.theme.darkBlue};
        padding: 20px;
        border-radius: 20px;
        color: ${(props) => props.theme.white};
      }
    }
  }
`;
