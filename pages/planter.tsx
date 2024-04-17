import React, { useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import Calendar from "../public/planter/calendar.png";
import Cart from "../public/planter/cart.png";
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
} from "../styles/PageDetailsStyle";
import { StyledLink } from "../components/ProjectPreviewCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PlanterSwatch = [
  "#73a860",
  "#218000",
  "#4b713c",
  "#e9f0e7",
  "#3e665b",
  "#415939",
  "#757575",
];

const Planter = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>PLANTER</ProjectDetailsHeader>

        <VisitWebsiteLink>
          <Button text={"VISIT THE WEBSITE"} to={"https://planter.co.nz"} />
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
            <SnapshotHeader>CLIENT</SnapshotHeader>
            <Link href="https://www.genia.co.nz/">Genia - Get Growing</Link>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>2021</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <Swatch>
          {PlanterSwatch.map((color) => (
            <SwatchColor $color={color} />
          ))}
        </Swatch>
      </ProjectDetailsIntroWrapper>
      <ProjectDetailsSection>
        <h2>PROJECT INSPIRATION</h2>
        <p>
          Gardening in NZ skyrocketed in the Covid era. Our Marketing team had
          made a printable plant calendar which tells kiwis when to plant a
          fruit or vegetable subject to a particular climate zone. We realized
          that this could also be a fun, dynamic user-experience, and thus
          Planter was born - Genia&apos;s first consumer app. As the Project
          Lead, I collaborated with the Marketing team, an Auckland-based
          designer, and my fellow developers. It was quickly wire-framed and
          implemented, and through several rounds of UX testing which I
          conducted, it was further refined into the app today. The purpose is
          to drive Genia&apos;s social metrics and generate sales for their
          gardening division - Get Growing. In the future, this app will
          integrate with Shopify in order to further streamline the gardening
          process.
        </p>
      </ProjectDetailsSection>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <div>
          <p>
            Users first select their region in NZ and will be presented with
            viable plants for the month. They can tap a plant for more specific
            info, and add plants to their cart. Each plant has an optimal
            climate zone. For example, if you are in Wellington, New Zealand - a
            Temperate climate zone - and the month is May, then the app will
            suggest plants like Bok Choy, Carrot and Chives.
          </p>
          <p>
            The user receives a calendar if they agree to sign-up for marketing
            e-mails from Genia, via an Azure Function, Mailchimp, and SendGrid.
            This calendar tells users when to sow or pot a seed, and when to
            harvest all their selected plants. The calendar itself was made
            using our proprietary React-to-PDF templating tool.
          </p>
        </div>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          priority
          className="image"
          onClick={(e: any) => handleExpand(e, Calendar.src)}
          alt="planer-preview"
          src={Calendar}
          aria-label="Planter Preview Image"
          width={782}
          height={786}
        />
        <Image
          priority
          className="image"
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
        this project. I learned it can be quite fun and can energize the test
        subjects in the office. I organized each session into 3 major sections:
        <SubSection>
          <b>Think-Aloud</b> - Users think out loud what they feel the app is
          for and what the general impressions are
        </SubSection>
        <SubSection>
          <b>Tasks</b> - Users are asked to complete tasks, such as: &quot;You
          are keen to grow tomatoes. You want to know what level of sunlight
          tomatoes need and when to begin planting. How would you go about doing
          this?&quot; I then assessed how difficult it was for them
        </SubSection>
        <SubSection>
          <b>Adjectives</b> - Users are asked to circle 5 out of 100 adjectives
          which indicate how they feel about the UI / branding The main finding
          was that users initially did not feel the app was to help create a
          plan/calendar. Thus, the designer drafted a different landing page and
          the results were much better
        </SubSection>
      </ProjectDetailsSection>
      <NextButtonWrapper>
        <StyledLink href="/stellargaze" passHref $isLarge>
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

export default Planter;
