import React, { useState } from "react";
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
  SubSection,
  ProjectDetailsBackgroundSection,
  Tool,
  StackWrapper,
} from "../styles/PageDetailsStyle";

import { StyledLink } from "../components/ProjectPreviewCard";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import { Button } from "../components/Button";
import Image from "next/legacy/image";
import BookedModal from "../public/agora/meeting-booked.webp";
import Mentors from "../public/agora/book-mentor.webp";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/anims";

const Agora = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const agoraProjectData = projectData.projects.find(
    (project) => project.name === "Agora Mentoring"
  );

  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>AGORA MENTORING</ProjectDetailsHeader>

        <VisitWebsiteLink>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text={"VISIT THE WEBSITE"} to={"https://planter.co.nz"} />
          </motion.div>
        </VisitWebsiteLink>
      </ProjectDetailsHeaderWrapper>
      <ProjectDetailsIntroWrapper>
        <ProjectSnapshotWrapper>
          <SnapshotSection>
            <SnapshotHeader>ROLE</SnapshotHeader>
            <SnapshotValue>Technical Lead</SnapshotValue>
            <SnapshotValue>Full Stack Developer</SnapshotValue>
            <SnapshotValue>Dash of UI/UX</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>TEAMMATES</SnapshotHeader>
            <SnapshotValue>
              <a
                href="https://www.linkedin.com/in/atinder-b-571877130"
                target="_blank"
              >
                Atinder Bharaj
              </a>
            </SnapshotValue>
            <SnapshotValue>
              <a
                href="https://www.linkedin.com/in/mariumshahana"
                target="_blank"
              >
                Marium Shahana
              </a>
            </SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>June - November 2021</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            In early 2021, my gym buddy, a Data Scientist at TD Bank, proposed a
            solution for the challenge of connecting young professionals with
            mentors in large organizations. Many companies use outdated tools or
            lack systems to schedule meetings with potential hires. This
            inspired the Agora Mentoring project demo, which leverages data
            science to efficiently pair mentees with mentors. By optimizing
            these connections, we enhance the chances of successful career
            guidance and employment opportunities.
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {agoraProjectData?.swatch?.map((color) => (
          <SwatchColor $color={color} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <p>
          When you sign up, you choose whether to be a Mentor or a Mentee. Next,
          you provide your demographic and technical information. Mentors can
          also share their available time slots.
        </p>
        <p>
          Mentees can request a Mentor based on a match rating. This rating is
          calculated using the provided demographic and technical information,
          combined with our proprietary scoring algorithm. Once a request is
          made, the Mentor must accept and choose a time slot when both parties
          are available.
        </p>
        <p>
          After a Mentor agrees to meet with a Mentee, both receive a Google
          Meet link via email. This link allows them to connect at the scheduled
          time.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, BookedModal.src)}
          src={BookedModal}
          aria-label="Booking Modal"
          width={752}
          height={718}
          alt="booking-modal"
        />
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Mentors.src)}
          src={Mentors}
          alt="select-mentors"
          aria-label="Mentors Select"
          width={1004}
          height={714}
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {agoraProjectData?.tools?.map((tool, index) => (
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
          <StyledLink href="/handits" passHref $isLarge scroll={false}>
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

export default Agora;
