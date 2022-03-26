import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import Image from "next/image";
import Hero from "../public/dustin_hero_cropped.png";

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <div className="hero">
        <div className="gradient-container">
          <div className="image-container">
            <Image
              className="image"
              src={Hero}
              alt="Dustin Hero"
              aria-label="Hero Image"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="projects">
        {data.projects.map((x, i) => {
          return (
            <ProjectPreviewCard
              client={x.client}
              description={x.description}
              name={x.name}
              tools={x.tools}
              repo={x.repo}
              liveURL={x.liveURL}
              key={i}
            />
          );
        })}
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  .hero {
    .gradient-container {
      width: 100%;
      height: 400px;
      position: relative;
      background: red;
      .image-container {
        .image {
          object-fit: contain;
        }
      }
    }
  }
`;
