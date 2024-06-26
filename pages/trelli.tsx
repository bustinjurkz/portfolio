import React, { useState } from "react";
import { Button } from "../components/Button";
import Image from "next/legacy/image";
import Quote from "../public/trelli/quote-summary.webp";
import Award from "../public/trelli/innovation.webp";
import Tradeshow from "../public/trelli/tradeshow.webp";
import projectData from "../data/projects.json";

import {
  ProjectDetailsIntroWrapper,
  ProjectDetailsWrapper,
  ProjectDetailsHeader,
  ProjectSnapshotWrapper,
  SnapshotHeader,
  SnapshotSection,
  SnapshotValue,
  VisitWebsiteLink,
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
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/anims";

const Trelli = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const trelliProjectData = projectData.projects.find(
    (project) => project.name === "Trelli"
  );
  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>TRELLI</ProjectDetailsHeader>

        <VisitWebsiteLink>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text={"VISIT THE WEBSITE"} to={"https://trelli.co.nz"} />
          </motion.div>
        </VisitWebsiteLink>
      </ProjectDetailsHeaderWrapper>
      <ProjectDetailsIntroWrapper>
        <ProjectSnapshotWrapper>
          <SnapshotSection>
            <SnapshotHeader>ROLE</SnapshotHeader>
            <SnapshotValue>Frontend</SnapshotValue>
            <SnapshotValue>Bit of Backend</SnapshotValue>
            <SnapshotValue>Dash of Design</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>TEAMMATES</SnapshotHeader>
            <a href="https://thomaspearson.me/" target="_blank">
              Thomas Pearson
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-drummond"
              target="_blank"
            >
              Jesse Drummond
            </a>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>CLIENT</SnapshotHeader>
            <a href="https://www.genia.co.nz/" target="_blank">
              Genia
            </a>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            In early 2020, Genia's sales department needed to present their new
            line of custom Trellis, Panels, and Gates to hardware stores across
            New Zealand. An idea emerged to streamline the process by enabling
            instant quotes for these products, eliminating the need for sales
            reps to call the company every time.
          </p>
          <p>
            The challenge was to develop a prototype before the presentation in
            just two working days. Thomas and I, handling backend and frontend
            respectively, completed the task within two iconic 11-hour shifts.
          </p>
          <p>
            Since its launch, the app has garnered positive feedback from
            hardware stores across NZ, driving sales for the Motueka Pickets
            brand. In 2022, I was honored with Genia's Innovation Award for this
            contribution.
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {trelliProjectData?.swatch?.map((color) => (
          <SwatchColor $color={color} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <p>
          Once a customer or sales rep selects their custom Trellis,
          Pickets/Panels, and/or Gates, they submit their e-mail where our
          backend will calculate the price, generate a spec-sheet, and send PDFs
          to the sales team, manufacturing team, and the customer.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Quote.src)}
          src={Quote.src}
          alt="trelli-quote"
          aria-label="Quote"
          width={776}
          height={653}
        />
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Tradeshow.src)}
          src={Tradeshow.src}
          aria-label="Tradeshow"
          alt="trelli-tradeshow"
          width={1131}
          height={751}
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {trelliProjectData?.tools?.map((tool, index) => (
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
          <StyledLink href="/agora" passHref $isLarge scroll={false}>
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

export default Trelli;
