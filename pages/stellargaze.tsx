import React, { useState } from "react";
import { Button } from "../components/Button";
import projectData from "../data/projects.json";
import Image from "next/legacy/image";
import MainApp from "../public/stellargaze/main-app.webp";
import Data from "../public/stellargaze/data.webp";
import {
  NextButtonWrapper,
  ProjectDetailsBackgroundSection,
  ProjectDetailsHeader,
  ProjectDetailsHeaderWrapper,
  ProjectDetailsIntroWrapper,
  ProjectDetailsSection,
  ProjectDetailsWrapper,
  ProjectImagesWrapper,
  ProjectSnapshotWrapper,
  SnapshotHeader,
  SnapshotSection,
  SnapshotValue,
  StackWrapper,
  SubSection,
  Swatch,
  SwatchColor,
  Tool,
  VisitWebsiteLink,
} from "../styles/PageDetailsStyle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { StyledLink } from "../components/ProjectPreviewCard";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/anims";

const Stellargaze = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const stellargazeProjectData = projectData.projects.find(
    (project) => project.name === "Stellargaze"
  );

  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>STELLARGAZE</ProjectDetailsHeader>

        <VisitWebsiteLink>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text={"VISIT THE WEBSITE"} to={"https://stellargaze.com"} />
          </motion.div>
        </VisitWebsiteLink>
      </ProjectDetailsHeaderWrapper>
      <ProjectDetailsIntroWrapper>
        <ProjectSnapshotWrapper>
          <SnapshotSection>
            <SnapshotHeader>ROLE</SnapshotHeader>
            <SnapshotValue>React Frontend</SnapshotValue>
            <SnapshotValue>Dash of Backend</SnapshotValue>
            <SnapshotValue>Design</SnapshotValue>
            <SnapshotValue>Research</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>Teammates</SnapshotHeader>
            <a href="https://vladfalach.com/" target="_blank">
              Vlad Falach
            </a>
            <SnapshotValue>Evan Reaume</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>June - October 2019</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            Around 5000 stars illuminate the night sky, but where are they
            visible? Meet STELLARGAZE: it identifies low-light pollution areas,
            ranked by moon phase and nightly weather forecasts. Suitable for
            space enthusiasts and casual sky gazers alike, it marked my entry
            into React after completing my Computer Science degree.
          </p>
          <p>
            Made via collaborative sessions in Hamilton, Ontario cafes with my
            friends, it spurred my journey into the professional web development
            industry.
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {stellargazeProjectData?.swatch?.map((color, index) => (
          <SwatchColor $color={color} key={index} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <p>
          STELLARGAZE assists users in North America, Australia, and New Zealand
          by locating nearby parks with optimal conditions for stargazing. These
          parks are evaluated based on factors such as light pollution, cloud
          coverage, humidity, and moon illumination. Our proprietary algorithm,
          endorsed by an astronomer from McMaster University, assigns a score
          indicating naked-eye star visibility. A score of 80% or higher denotes
          excellent visibility.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, MainApp.src)}
          alt="Stellargaze Preview"
          src={MainApp}
          aria-label="Stellargaze Preview Image"
          width={1719}
          height={914}
        />
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Data.src)}
          src={Data}
          aria-label="Park Satellite Image"
          width={1044}
          height={697}
          alt="Park Satellite Image"
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>DATASET</h2>
        <SubSection>
          <b>Satellite Data</b> - Utilizes satellite images from the Earth
          Observations Group (EOG) at the National Centers for Environmental
          Information (NCEI). These images, captured by the Day/Night Band,
          provide average radiance values for North America, Australia, and New
          Zealand. Extracted pixel values correspond to Bortle scale ratings,
          offering an approximate measure of local sky brightness.
        </SubSection>
        <SubSection>
          <b>GIS/Park Data</b> - Ranks parks within up to 140km of the user
          based on factors such as light pollution, cloud coverage, humidity
          percentage, and moon phase. Prioritizes parks located in lower
          light-pollution zones.
        </SubSection>
        <SubSection>
          <b>Weather Forecast Data</b> - Obtains weather forecasts from
          OpenWeather. Due to data limitations and cost considerations, utilizes
          a k-means clustering algorithm to group nearby parks and share
          forecasts. The centroid of each cluster serves as the forecast request
          point, ensuring all parks within a cluster receive roughly the same
          forecast.
        </SubSection>
        <SubSection>
          For additional information, visit the{" "}
          <a href={"https://stellargaze.com/FAQ"} target="blank">
            FAQs
          </a>
          .
        </SubSection>
      </ProjectDetailsSection>
      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {stellargazeProjectData?.tools?.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Tool>{tool}</Tool>
            </motion.div>
          ))}
        </StackWrapper>
      </ProjectDetailsSection>
      <NextButtonWrapper>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <StyledLink href="/trelli" passHref $isLarge scroll={false}>
            NEXT PROJECT
          </StyledLink>
        </motion.div>
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

export default Stellargaze;
