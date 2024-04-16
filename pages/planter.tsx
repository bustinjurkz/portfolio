import React from "react";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import Calendar from "../public/planter/calendar.png";
import Cart from "../public/planter/cart.png";
import {
  ListStyle,
  ProjectDetailsIntroDescription,
  ProjectDetailsIntroWrapper,
  ProjectDetailsWrapper,
  ProjectDetailsHeader,
  ProjectSnapshotWrapper,
  SnapshotHeader,
  SnapshotSection,
  SnapshotValue,
  SpecialListStyle,
  VisitWebsiteLink,
  NextButtonWrapper,
  ImageContainer,
  ProjectImagesWrapper,
  ImageLabel,
} from "../styles/PageDetailsStyle";
import { StyledLink } from "../components/ProjectPreviewCard";

const Planter = () => {
  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeader>PLANTER</ProjectDetailsHeader>
      <ProjectDetailsIntroWrapper>
        <ProjectDetailsIntroDescription>
          <span>
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
          </span>

          <VisitWebsiteLink>
            <Button
              text={"VISIT THE WEBSITE"}
              to={"https://planter.co.nz"}
              isLarge
            />
          </VisitWebsiteLink>
        </ProjectDetailsIntroDescription>

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
            <SnapshotValue>2021 - Current</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
      </ProjectDetailsIntroWrapper>

      <h2>HOW IT WORKS</h2>
      <div>
        <p>
          Users first select their region in NZ and will be presented with
          viable plants for the month. They can tap a plant for more specific
          info, and add plants to their cart. Each plant has an optimal climate
          zone. For example, if you are in Wellington, New Zealand - a Temperate
          climate zone - and the month is May, then the app will suggest plants
          like Bok Choy, Carrot and Chives.
        </p>
        <p>
          The user receives a calendar if they agree to sign-up for marketing
          e-mails from Genia, via an Azure Function, Mailchimp, and SendGrid.
          This calendar tells users when to sow or pot a seed, and when to
          harvest all their selected plants. The calendar itself was made using
          our proprietary React-to-PDF templating tool.
        </p>
      </div>
      <ProjectImagesWrapper>
        <ImageContainer>
          <Image
            priority
            className="image"
            alt="planer-preview"
            src={Calendar}
            aria-label="Planter Preview Image"
            width={782}
            height={786}
            layout={"responsive"}
          />
          <ImageLabel>
            This is the PDF calendar that is sent, ordered by starting month.
            Some seeds can be planted straight into the ground depending on the
            climate zone, and others will need to start in a pot.
          </ImageLabel>
        </ImageContainer>
      </ProjectImagesWrapper>
      <ImageContainer>
        <Image
          priority
          className="image"
          src={Cart}
          aria-label="Planter Preview Image"
          width={839}
          height={732}
          alt="planter-preview-two"
          layout={"responsive"}
        />
        <ImageLabel>
          These 8 plants the user added will be simply displayed in the
          calendar.
        </ImageLabel>
      </ImageContainer>

      <section>
        <h2>WHAT I LEARNED</h2>

        <ul>
          <li>
            The importance of writing well-defined user-stories so that
            scope-creep, while tempting, does not happen
          </li>
          <li>
            UX Testing can be quite fun and can energize the test subjects in
            the office. I organized each session into 3 major sections:
          </li>
          <ul>
            <li>
              <b>Think-Aloud</b> - Users think out loud what they feel the app
              is for and what the general impressions are
            </li>
            <li>
              <b>Tasks</b> - Users are asked to complete tasks, such as:
              &quot;You are keen to grow tomatoes. You want to know what level
              of sunlight tomatoes need and when to begin planting. How would
              you go about doing this?&quot; I then assessed how difficult it
              was for them
            </li>
            <li>
              <b>Adjectives</b> - Users are asked to circle 5 out of 100
              adjectives which indicate how they feel about the UI / branding
              The main finding was that users initially did not feel the app was
              to help create a plan/calendar. Thus, the designer drafted a
              different landing page and the results were much better
            </li>
          </ul>

          <li>
            Working within a smaller tech team is great - I like wearing
            multiple hats: full-stack, design, and UX
          </li>
          <li>
            For storing data on a small app, JSON can be used in lieu of a
            database
          </li>
        </ul>
      </section>
      <NextButtonWrapper>
        <StyledLink href="/stellargaze" passHref $isLarge>
          NEXT PROJECT
        </StyledLink>
      </NextButtonWrapper>
    </ProjectDetailsWrapper>
  );
};

export default Planter;
