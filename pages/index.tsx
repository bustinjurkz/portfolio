import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import Image from "next/image";
import Hero from "../public/dustin_hero_background.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { Fade } from "react-awesome-reveal";
import { gradualFade } from "../gradualFade";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

const Home: NextPage = () => {
  // SSR requires document to be loaded first
  useEffect(() => {
    gradualFade("hero");
  }, []);

  const { ref } = useParallax<HTMLDivElement>({
    speed: 15,
  });

  return (
    <HomeStyle>
      <div className="hero">
        <div className="gradient-container" id="hero">
          <Image
            priority
            className="image"
            src={Hero}
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
            who loves good design. I am available for full-time & freelance
            projects.
          </div>
        </div>
      </div>

      <div id="work" className="section">
        <SectionHeader text={"WORK"} />

        <div className="projects">
          {data.projects.map((x, i) => {
            return (
              <Fade key={i} fraction={0}>
                <ProjectPreviewCard
                  client={x.client}
                  description={x.description}
                  name={x.name}
                  tools={x.tools}
                  repo={x.repo}
                  liveURL={x.liveURL}
                  key={i}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  .hero {
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
  }
  .section {
    margin-top: 100px;
  }
`;
