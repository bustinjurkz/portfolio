import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";

import { SectionHeader } from "../components/SectionHeader";
import { Fade } from "react-awesome-reveal";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <Hero />
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
        <Contact />
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  .section {
    margin-top: 100px;
    margin-bottom: 40px;
  }
`;
