import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Timeline } from "../components/Timeline";
import { TechStack } from "../components/TechStack";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <SectionWrapper>
        <HeaderWrapper>
          <Header>MY TECH STACK</Header>
        </HeaderWrapper>
        <TechStack />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <HeaderWrapper>
          <Header>PROJECTS</Header>

          <MoreInfoWrapper>
            <FontAwesomeIcon icon={faCircleInfo} />
            Tap a project to view the full details
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
          <Header>EXPERIENCE</Header>
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
  margin-top: 5rem;
  margin-bottom: 9rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const MoreInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: center;
  margin-left: auto;

  svg {
    width: 20px;
    margin-right: 0.4rem;
  }
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.greenPrimary};
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 7px;

  @media screen and (min-width: 768px) {
    text-align: start;
    margin: 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 40px;
  background: ${(props) => props.theme.pink};
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  background: ${(props) => props.theme.pink};
  justify-content: center;
  padding-bottom: 2.5rem;
`;
