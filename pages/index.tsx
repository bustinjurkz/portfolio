import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectPreviewCard } from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
    <HomeStyle>
      <Hero />
      <div id="work" className="section">
        <h1 style={{ fontSize: 70 }}>WORK</h1>
        <div className="projects">
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
        </div>
      </div>
      <div id="contact" className="section">
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
