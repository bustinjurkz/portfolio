import type { NextPage } from "next";
import styled, { css } from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Timeline } from "../components/Timeline";
import { SectionHeader } from "../components/SectionHeader";

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

      <SectionWrapper id="projects" $first>
        <SectionHeader headerText="PROJECTS" />

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
        <SectionHeader headerText="EXPERIENCE" />

        <Timeline />
      </SectionWrapper>
      <SectionWrapper id="contact" $last>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default Home;

const SectionWrapper = styled.div<{ $first?: boolean; $last?: boolean }>`
  margin-top: 5rem;
  margin-bottom: 7rem;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.$first &&
    css`
      margin-top: 10rem;
    `}

  ${(props) =>
    props.$last &&
    css`
      margin-bottom: 3rem;
    `}
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0;

  @media (min-width: 850px) {
    padding: 0 1.5rem;
  }
`;
