import React, { useEffect } from "react";
import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";

const Planter = () => {
  useEffect(() => {
    gradualFade("banner");
  }, []);
  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "planter/header.jpg", speed: 20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">PLANTER</h1>
        </div>
      </ParallaxBanner>
      <div className="project-container">
        <section className="intro">
          <div className="header">ABOUT THE PROJECT</div>
          <div className="snapshot">
            <div className="tagline">Automating your garden plan!</div>
            <div className="container">
              <div className="description">
                Genia&apos;s Marketing Director made a static planting calendar
                which tells kiwis when to plant a fruit or vegetable subject to
                a particular climate zone. We realized that this could be a fun,
                dynamic user-experience, and thus Planter was born -
                Genia&apos;s first consumer app. As the Project Lead, I
                collaborated with the marketing team, an Auckland-based
                designer, and my fellow developers. It was quickly wireframed
                and implemented, and through several rounds of UX testing which
                I conducted, it was further refined into the app today. The
                purpose is to drive Genia&apos;s social metrics and generate
                sales for their gardening division - Get Growing. In the future,
                this app will integrate with Shopify in order to further
                streamline the gardening process.
              </div>
              <div className="notes">
                <div className="note-container">
                  <div className="label">ROLE</div>
                  <div className="role">Project Lead</div>
                  <div className="role">Developer (Mostly Front-End)</div>
                  <div className="role">UX Testing / Some Design</div>
                </div>
                <div className="note-container">
                  <div className="label client">CLIENT</div>
                  <div className="client">Get Growing (Genia)</div>
                </div>
                <div className="note-container">
                  <div className="label date">DATE</div>
                  <div className="date">2021 - Current</div>
                </div>
              </div>
            </div>
            <div className="visit">
              <Button text={"VISIT THE WEBSITE"} to={"https://planter.co.nz"} />
            </div>
          </div>
        </section>

        <section className="technical">
          <div className="header">HOW IT WORKS</div>
          <div className="what">
            Users first select their region in NZ, and then will be presented
            with viable plants for the month. They then receive a calendar if
            they sign-up for marketing e-mails from Genia. This calendar tells
            users when to sow or pot a seed, and when to harvest all their
            selected plants.{" "}
          </div>
          <div className="how">body text!</div>
        </section>
        <section className="learnings">
          <div className="header">WHAT I LEARNED</div>
          <div className="learnings">body text!</div>
        </section>
        <section className="actions">
          <div className="next">
            <Link href="/stellargaze" passHref>
              <a>
                <Button text={"NEXT PROJECT"} />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </PageDetailsStyle>
  );
};

export default Planter;

export const PageDetailsStyle = styled.div`
  .parallax-container {
    height: 100vh;
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

  .project-container {
    margin: 0px 9em;
  }

  section {
    margin: 9rem 0rem;
    .header {
      font-weight: 600;
      font-size: x-large;
      margin-bottom: 1.5rem;
    }
  }

  .intro {
    .snapshot {
      .tagline {
        font-family: "Inter", sans-serif;
        font-size: ${(props) => props.theme.bigFont};
        font-weight: 600;
      }
      .container {
        display: flex;
        margin-top: 3rem;
        height: 100%;
        position: relative;

        .description {
          width: 70%;
          margin-right: 6rem;
        }

        .notes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .role {
            margin-bottom: 0.3rem;
          }
          .label {
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
        }
      }

      .visit {
        margin: 3rem 0rem;
        font-weight: 600;
      }
    }
  }

  .actions {
    display: flex;
    .repo {
      margin-right: 2rem;
    }
  }
`;
