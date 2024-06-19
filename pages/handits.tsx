import React, { useState } from "react";
import projectData from "../data/projects.json";
import Level from "../public/handits/game-level.webp";
import Throwing from "../public/handits/throwing-anim.gif";

import {
  ProjectDetailsIntroWrapper,
  ProjectDetailsWrapper,
  ProjectDetailsHeader,
  ProjectSnapshotWrapper,
  SnapshotHeader,
  SnapshotSection,
  SnapshotValue,
  NextButtonWrapper,
  ProjectImagesWrapper,
  ProjectDetailsHeaderWrapper,
  ProjectDetailsSection,
  Swatch,
  SwatchColor,
  ProjectDetailsBackgroundSection,
  Tool,
  StackWrapper,
} from "../styles/PageDetailsStyle";

import { StyledLink } from "../components/ProjectPreviewCard";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import Image from "next/legacy/image";

const Handits = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const agoraProjectData = projectData.projects.find(
    (project) => project.name === "Handits"
  );

  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>HANDITS</ProjectDetailsHeader>
      </ProjectDetailsHeaderWrapper>
      <ProjectDetailsIntroWrapper>
        <ProjectSnapshotWrapper>
          <SnapshotSection>
            <SnapshotHeader>ROLE</SnapshotHeader>
            <SnapshotValue>Developer</SnapshotValue>
            <SnapshotValue>Sound Design</SnapshotValue>
            <SnapshotValue>Level Design</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>School</SnapshotHeader>
            <SnapshotValue>McMaster University</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>TEAMMATES</SnapshotHeader>
            <SnapshotValue>Evan Reaume</SnapshotValue>
            <SnapshotValue>Danny Stewart</SnapshotValue>
            <SnapshotValue>Ming Liu</SnapshotValue>
            <SnapshotValue>Kong Zhijun</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>2018-2019</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            The Capstone course at McMaster University's Computer Science
            Department is a year-long project where small teams complete a major
            project using the knowledge gained from the previous years. I had
            the opportunity to create my first video game under the supervision
            of{" "}
            <a href={"http://www.cas.mcmaster.ca/~smiths/"} target="_blank">
              Dr. Spencer Smith.
            </a>
          </p>
          <p>
            The game (an intro-level demo), is a 2D puzzler/platformer that
            challenges players to control a character's hand using a mouse or
            joystick. Players use the hand to manipulate the environment by
            tossing, grabbing, pulling, and pushing pushing to safely navigate a
            dangerous world."
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {agoraProjectData?.swatch?.map((color) => (
          <SwatchColor $color={color} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WAS MADE</h2>
        <p>
          The game engine we used for the project was Unity, and we developed
          many C# scripts to control the game's functionality.
        </p>
        <p>
          We applied game design principles and maintained an ongoing Game
          Design Document to organize our ideas and plan the development
          process. Our first deliverable was a Proof of Concept showcasing the
          main mechanics. Playtesting allowed us to continually refine the game
          and improve its playability.
        </p>

        <p>
          Our group effectively employed Scrum methodology to maximize
          productivity during our two full-time semesters. We held weekly sprint
          planning meetings and divided tasks related to game development. This
          project utilized various aspects of our computer science education,
          including programming, algorithms, and software engineering
          principles. It also involved problem-solving, teamwork, and project
          management skills."
        </p>
      </ProjectDetailsSection>

      <ProjectDetailsSection>
        <h2>LEVEL 1</h2>
        <p>
          In Level 1, both players must reach the end to complete the stage. To
          solve the puzzle, one player must lift their partner over the middle
          block so they can detonate the TNT. The TNT causes a boulder to fall,
          so one player must grab a torch and ignite a barrel beforehand to
          clear a safety
        </p>
        <p>
          The grabbing and throwing mechanics were less precise than expected,
          but this added an element of humor. The aim was to create a
          challenging experience that pushed the players to the edge of
          frustration without losing the fun.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Throwing.src)}
          alt="handits throwing"
          src={Throwing}
          aria-label="Handits throwing"
          width={800}
        />
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Level.src)}
          src={Level}
          alt="handits level one"
          aria-label="Level One"
          width={1287}
          height={729}
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {agoraProjectData?.tools?.map((tool) => (
            <Tool>{tool}</Tool>
          ))}
        </StackWrapper>
      </ProjectDetailsSection>
      <NextButtonWrapper>
        <StyledLink href="/planter" passHref $isLarge>
          NEXT PROJECT
        </StyledLink>
      </NextButtonWrapper>
      <Lightbox
        open={!!expandPreview}
        close={() => setExpandPreview("")}
        slides={[{ src: expandPreview, width: 1000 }]}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgb(0 0 0 / 80%)" } }}
        controller={{ closeOnBackdropClick: true }}
        render={{ buttonNext: () => null, buttonPrev: () => null }}
      />
    </ProjectDetailsWrapper>
  );
};

export default Handits;
