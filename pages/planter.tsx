import React, { useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import Calendar from "../public/planter/calendar.webp";
import Cart from "../public/planter/cart.webp";
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
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/anims";

const Planter = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const planterProjectData = projectData.projects.find(
    (project) => project.name === "Planter"
  );

  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>PLANTER</ProjectDetailsHeader>

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
            <SnapshotValue>Project Lead</SnapshotValue>
            <SnapshotValue>Developer</SnapshotValue>
            <SnapshotValue>UX Testing</SnapshotValue>
            <SnapshotValue>Dash of Design</SnapshotValue>
          </SnapshotSection>

          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>2021</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>CLIENT</SnapshotHeader>
            <Link href="https://getgrowing.nz/">Genia - Get Growing</Link>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            During the Covid era, the popularity of gardening in New Zealand
            surged. Genia's Marketing team created a printable plant calendar
            that advises Kiwis on optimal planting times based on their climate
            zone. Recognizing the potential for a captivating and interactive
            user experience, we conceived Planter, Genia's inaugural consumer
            app.
          </p>
          <p>
            In my role as Project Lead, I collaborated closely with the
            Marketing team, a designer based in Auckland, and my fellow
            developers. We wireframed and implemented the app, iterating through
            multiple rounds of UX testing to refine it into its current form.
            Planter serves a dual purpose: boosting Genia's social metrics and
            driving sales for their gardening division, Get Growing.
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {planterProjectData?.swatch?.map((color, index) => (
          <SwatchColor $color={color} key={index} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <p>
          Users begin by selecting their region in New Zealand, which then
          prompts the app to display a curated list of viable plants for the
          current month. By tapping on a plant, users can access detailed
          information about it and add it to their cart. Each plant
          recommendation aligns with the optimal climate zone for the selected
          region and month. For instance, if a user is in Wellington, New
          Zealand, categorized under a Temperate climate zone, and the month is
          May, the app suggests plants such as Bok Choy, Carrot, and Chives.
        </p>

        <p>
          Upon agreeing to sign up for marketing emails from Genia, users
          receive a personalized calendar through an Azure Function, Mailchimp,
          and SendGrid integration. This calendar (seen below) provides guidance
          on when to sow or pot seeds and when to harvest all the selected
          plants. Leveraging our proprietary React-to-PDF templating tool, we've
          crafted the calendar to ensure its effectiveness and
          user-friendliness.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Calendar.src)}
          alt="planer-preview"
          src={Calendar}
          aria-label="Planter Preview Image"
          width={782}
          height={786}
        />
        <Image
          loading="lazy"
          onClick={(e: any) => handleExpand(e, Cart.src)}
          src={Cart}
          aria-label="Planter Preview Image"
          width={839}
          height={732}
          alt="planter-preview-two"
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>UX TESTING</h2>I conducted my first formal UX testing sessions for
        this project, which proved to be quite enjoyable and energizing for the
        test subjects in the office. Each session was organized into three major
        sections:
        <SubSection>
          <b>Think-Aloud</b> - Users vocalized their thoughts as they interacted
          with the app, sharing their impressions and understanding of its
          purpose.
        </SubSection>
        <SubSection>
          <b>Tasks</b> - Users were tasked with completing specific actions,
          such as: "You are interested in growing tomatoes and need information
          on sunlight levels and planting times. How would you proceed?" I then
          evaluated the difficulty they encountered in completing these tasks.
        </SubSection>
        <SubSection>
          <b>Adjectives</b> - Users were prompted to select 5 adjectives out of
          a list of 100 that best described their feelings about the UI and
          branding. The key discovery was that users initially did not perceive
          the app as a tool for creating a gardening timeline. As a result, the
          designer developed an alternative landing page yielding much clearer
          results.
        </SubSection>
      </ProjectDetailsSection>
      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {planterProjectData?.tools?.map((tool, index) => (
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
          <StyledLink href="/stellargaze" passHref $isLarge scroll={false}>
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

export default Planter;
