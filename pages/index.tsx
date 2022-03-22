import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <div className="projects">
        {data.projects.map((x, i) => {
          return (
            <ProjectPreviewCard
              client={x.client}
              description={x.description}
              name={x.name}
              tools={x.tools}
              key={i}
            />
          );
        })}
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div``;
