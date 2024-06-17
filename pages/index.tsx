import type { NextPage } from "next";
import styled, { css } from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Timeline } from "../components/Timeline";
import { TechStack } from "../components/TechStack";
import { Button } from "../components/Button";
import { keyframes } from "styled-components";

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
    if (router.asPath.split("#")[1] === "projects") {
      handleScroll("projects");
    }
    if (router.asPath.split("#")[1] === "experience") {
      handleScroll("experience");
    }
    if (router.asPath.split("#")[1] === "contact") {
      handleScroll("contact");
    }
  }, [router]);

  return (
    <>
      <Hero />
      <SectionWrapper>
        <ArrowStackWrapper>
          <ArrowBox onClick={() => handleScroll("projects")}>
            <Arrow />
          </ArrowBox>
          <TechStack />
        </ArrowStackWrapper>
      </SectionWrapper>

      <SectionWrapper id="projects" $first>
        <HeaderWrapper>
          <Header>PROJECTS</Header>

          <MoreInfoWrapper>
            Tap <Button text="Learn More" disabled /> for full project details
          </MoreInfoWrapper>
        </HeaderWrapper>

        <ProjectsWrapper>
          {data.projects.map((x, i) => {
            return (
              <ProjectPreviewCard
                type={x.type as ProjectType}
                client={x.client}
                description={x.description}
                name={x.name}
                tools={x.tools}
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

const SectionWrapper = styled.div<{ $first?: boolean }>`
  margin-top: 5rem;
  margin-bottom: 9rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.$first &&
    css`
      margin-top: 13rem;
    `}
`;

const MoreInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: center;
  margin-left: auto;

  a {
    margin: 0 0.5rem;
  }

  svg {
    width: 20px;
    margin-right: 0.4rem;
  }
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 3px;

  @media screen and (min-width: 768px) {
    text-align: start;
    margin: 0;
  }
`;

export const HeaderWrapper = styled.div<{ $noBottomRadius?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const ProjectsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const ArrowStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  background: ${(props) => props.theme.primary};
  height: 60px;
  width: 5px;
  transition: transform 0.75s ease;

  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-bottom: 5px solid;
    border-right: 5px solid;
    border-color: ${(props) => props.theme.primary};
    transform: rotate(45deg);
    bottom: 0px;
    left: -6px;
  }
`;

const ArrowBox = styled.div`
  height: 60px;
  width: 40px;
  transform: translateX(-13px);

  :first-child {
    margin: auto;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${Arrow} {
    transform: translateY(5px);
  }
`;
