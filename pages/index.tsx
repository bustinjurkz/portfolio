import type { NextPage } from "next";
import styled from "styled-components";
import {
  DividerStyle,
  ProjectPreviewCard,
} from "../components/ProjectPreviewCard";
import data from "../data/projects.json";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/Button";

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
      <DividerStyle className="divider" />
      <div id="work" className="section">
        <div className="work-header">
          <h1 style={{ fontSize: 70 }}>WORK</h1>
          <div className="more-details">
            Tap <Button text="More Info" /> to view full project details
          </div>
        </div>

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
    .more-details {
      text-align: center;
      display: flex;
      align-items: center;
      flex-flow: wrap;
      justify-content: center;
    }

    .work-header {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      align-items: center;
      margin-bottom: 2.5rem;
      a {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding: 0.5rem 0.75rem;
        margin-bottom: 0.5rem;
        @media screen and (min-width: 768px) {
          margin-bottom: 0rem;
        }
      }
      @media screen and (min-width: 768px) {
        text-align: start;
        margin-bottom: 2.5rem;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    h1 {
      text-align: center;
      margin-bottom: 1rem;
      @media screen and (min-width: 768px) {
        text-align: start;
        margin: 0;
      }
    }
  }

  .divider {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    @media screen and (min-width: 1015px) {
      margin-top: 9rem;
    }
  }
`;
