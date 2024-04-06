import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/Button";
import { Timeline } from "../components/Timeline";
import { TechStack } from "../components/TechStack";

export enum ProjectType {
  FullTime = "Full-Time Workplace",
  Contract = "Contract",
  Personal = "Personal Project",
  School = "School",
}

export function handleScroll(scrollTo: string) {
  const elem = document.getElementById(scrollTo);
  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.split("#")[1] === "work") {
      handleScroll("work");
    }
    if (router.asPath.split("#")[1] === "contact") {
      handleScroll("contact");
    }
  }, [router]);

  return (
    <>
      <Hero />
      <TechStack />
      <SectionWrapper id="projects">
        <HeaderWrapper>
          <BarHeaderWrapper>
            <BlackBar />
            <Header>PROJECTS</Header>
          </BarHeaderWrapper>
          <MoreInfoWrapper>
            Tap <Button text="More Info" disabled /> to view full project
            details
          </MoreInfoWrapper>
        </HeaderWrapper>

        <ProjectsWrapper>
          {data.projects.map((x, i) => {
            return (
              <ProjectPreviewCard
                type={x.type as ProjectType}
                client={x.client}
                current={x.current}
                description={x.description}
                name={x.name}
                tools={x.tools}
                repo={x.repo}
                slug={x.slug}
                liveURL={x.liveURL}
                key={i}
              />
            );
          })}
        </ProjectsWrapper>
      </SectionWrapper>
      <SectionWrapper id="experience">
        <HeaderWrapper>
          <BarHeaderWrapper>
            <BlackBar />
            <Header>EXPERIENCE</Header>
          </BarHeaderWrapper>
        </HeaderWrapper>

        <Timeline />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default Home;

const SectionWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const MoreInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: center;
`;

export const Header = styled.h1`
  font-size: 1.25rem;
  color: ${(props) => props.theme.greenPrimary};
  text-align: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    text-align: start;
    margin: 0;
  }
  letter-spacing: 7px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
  margin-bottom: 2rem;

  a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 0rem;
    }
  }
  @media screen and (min-width: 780px) {
    text-align: start;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BlackBar = styled.div`
  background-color: ${(props) => props.theme.greenPrimary};
  height: 15px;
  width: 250px;
`;

export const BarHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 40px;
  margin-bottom: 2rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
