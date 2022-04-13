import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import { BounceIn } from "../components/BounceIn";
import Image from "next/image";
import Speaking from "../public/genia/speaking.jpg";
import FP_Clipboard from "../public/genia/factoryplanner-clipboard.png";
import FP_Main from "../public/genia/factoryplanner-main.png";
import PS_Main from "../public/genia/profilesheets-main.png";
import PS_Print from "../public/genia/profilesheets-print.png";
import TS_Kiln from "../public/genia/tsrunner-kiln.png";
import TS_Run from "../public/genia/tsrunner-run.png";
import UNI_PRINT from "../public/genia/universalprint-main.png";

import Promo from "../public/genia/promo.jpg";
import { handleScroll } from ".";
import {
  ArrowStyle,
  ListStyle,
  PageDetailsStyle,
  SpecialListStyle,
} from "../styles/PageDetailsStyle";
import { Fade } from "react-awesome-reveal";

const Genia = () => {
  useEffect(() => {
    gradualFade("banner", true);
  }, []);

  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "genia/header.jpg", speed: -10 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">GENIA</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>
      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT MY TIME HERE</h1>
            <div className="snapshot">
              <div className="tagline">
                I helped modernize Genia&apos;s business processes and
                spearheaded their consumer apps.
              </div>
              <div className="container">
                <div className="description">
                  After graduating from my second bachelors, I was tired of
                  school and keen to enter my new industry as a Full Stack Web
                  Developer. While I had unquestionable self-belief that I could
                  offer something valuable to any organization that would give
                  me a chance, it seemed on paper I was a dime-a-dozen in the
                  Toronto area.
                  <p>
                    A family-run lumber company in Motueka (a town of 4000 in
                    the rugged South Island of New Zealand), gave me that
                    chance. I will be forever grateful for it.
                  </p>
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Full Stack Web Developer</div>
                  </div>

                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">Dec 2019 - Current</div>
                  </div>
                </div>
              </div>
              <div className="visit">
                <Button
                  text={"VISIT THE WEBSITE"}
                  to={"https://www.genia.co.nz/"}
                />
              </div>
            </div>
          </section>
        </Fade>
        <section>
          <div className="experience">
            <p>
              As a full-stack developer specializing in the front-end at MLC,
              the apps I have been involved with eliminate the amount of manual
              administrative work require and help automate the inventory system
              of the complicated lumber industry. For example, I have helped
              make apps that scan custom barcodes on outgoing packs of lumber,
              update the inventory/cost-spreading in the database, and informs
              the clients in real-time on the changes.
            </p>
          </div>
        </section>

        <section>
          These apps are designed for iPads, or mobile-first, since a lot of the
          apps are used on wireless scanner devices. I&apos;ve developed such
          apps keeping in mind the key stakeholders, whether that be an older
          crane-driver using a handheld scanner, or a seasoned administrative
          employee savvy with timber-specific applications. These apps were made
          using scrum methodology and I help continuously deploy them to
          development, user-acceptance testing, and finally production.
        </section>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={UNI_PRINT}
              aria-label="Universal Print Main"
              width={935}
              height={643}
              layout={"responsive"}
            />
            <div className="label">
              This app simplifies the labelling process in real-time for the
              workers who stack timber on bales and attach a product label.
              Previously they had to tediously write out the label manually.{" "}
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={TS_Run}
              aria-label="TimberSmart Runner Run Section"
              width={302}
              height={511}
              layout={"responsive"}
            />
            <div className="label">
              This app helps the admin staff integrate with the main timber
              database software (TimberSmart). I was personally involved with
              the wire-framing and UX research for this app from the start and
              developed a significant portion of it.
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={TS_Kiln}
              aria-label="TimberSmart Runner Kiln Section"
              width={301}
              height={509}
              layout={"responsive"}
            />
            <div className="label">TODO</div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={PS_Print}
              aria-label="Profile Sheets Print"
              width={948}
              height={880}
              layout={"responsive"}
            />
            <div className="label">
              The screen in Profile Sheets for printing product specs. I was
              recently involved in refactoring the entire app and giving it a UI
              overhaul.
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={PS_Main}
              aria-label="Profile Sheets Main"
              width={1905}
              height={904}
              layout={"responsive"}
            />
            <div className="label">
              Profile Sheets is where admin staff and remote workers who
              authenticate can create and print product specs.
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={FP_Clipboard}
              aria-label="FP Clipboard"
              width={1011}
              height={898}
              layout={"responsive"}
            />
            <div className="label">
              My main contribution to the Factory Planner app was to implement a
              clipboard system. This allows a given user to store useful
              processes/items for another session.
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={FP_Main}
              aria-label="FP"
              width={1912}
              height={879}
              layout={"responsive"}
            />
            <div className="label">
              Sample section of our Factory Planner app. This replaces a tedious
              whiteboard system.
            </div>
          </div>
        </BounceIn>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={Promo}
              aria-label="Promo Image"
              width={602}
              height={418}
              layout={"responsive"}
            />
            <div className="label">
              Here is me and fellow Canadian Alana pretending we are architects
              for an internet ad.
            </div>
          </div>
        </BounceIn>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={Speaking}
              aria-label="Promo Image"
              width={1100}
              height={1179}
              layout={"responsive"}
            />
            <div className="label">
              Formerly MLC Group, Genia asked me to speak at their new brand
              launch - with 4 minutes notice in front of 150+. I was happy to be
              the token Canadian.
            </div>
          </div>
        </BounceIn>

        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">APP HIGHLIGHTS</h1>
            <span>
              Below are some of the apps I have helped create or made
              significant contributions to:
            </span>
            <SpecialListStyle>
              <b>TS-Runner</b> - This app helps automate the repetitive and
              tedious tasks surrounding the administrative work required in
              TimberSmart (a prominent lumber database) by office staff. This
              app aids in the streamlining of 4 main timber industry related
              processes: the Opti, Filleting, Kiln drying, and stock-take. I was
              involved in the initial wireframing and a substantial amount of
              the development.
            </SpecialListStyle>

            <SpecialListStyle>
              <b>Transit Tracker</b> - Helps automate the inventory actions
              required when transitioning transfers of stock between stock
              locations. Operators use the scanning devices to create and send
              stock transfers; admin staff receive the transfers into their
              destination and can edit them if required.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Genia API</b> - This api ties everything together. More
              technically, it is a federated GraphQL microservice architecture.
              I have made changes to key microservices for new features.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>TimberSmart Addons</b> - Reduces the manual labour involved in
              receipting incoming inventory. Delivery dockets sent from
              suppliers are automatically consumed into the application. Factory
              staff scan in the physical packs that arrive into the factory,
              then the app delivers the information to TimberSmart without
              manual intervention. In the case that there are errors, e.g. pack
              number not in the system, then the user can provide the required
              missing information to the delivery documents.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Profile Sheets</b> - This app allows admin staff to view and
              generate a spec sheet for a chosen customer, unit number, and
              product, which they can then print out.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Factory-Planner</b> - Genia&apos;s custom software for planning
              operations in the factory. This is done primarily with the concept
              of <b>resources</b>, <b>items</b>, and <b>chaining</b>. The app
              can be used to view and modify items, configure resources, and
              view recent changes on the board. This app was already in
              development when I started. I personally was involved in making
              key improvements to the app, such as the ability for a specific
              user to copy/paste items to a <b>clipboard</b> which helps the UX
              and allows them to store useful processes/items for another
              session.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Universal Print</b> - The two main portions of the app that I
              wireframed and helped develop from the ground-up is used for
              real-time pack label printing during a shift. Users are able to
              enter a product code or scan the barcode of a pack in realtime.
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Planter</b> - The gardening helper as{" "}
              <Link href="/planter">
                <a target={"_blank"}>mentioned here.</a>
              </Link>
            </SpecialListStyle>
            <SpecialListStyle>
              <b>Trelli</b> - The trellis/panel/gate customizer as{" "}
              <Link href="/trelli">
                <a target={"_blank"}>mentioned here.</a>
              </Link>
            </SpecialListStyle>
          </section>
        </Fade>
        <Fade fraction={0} triggerOnce>
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  While I am technically a Full Stack Developer, what really
                  separates me is my attention to detail with the front-facing
                  portion of our apps. I can be quite obsessed with whitespace
                  and the <u>vibe</u> of the app perhaps a bit more than I
                  should be
                </li>
                <li>
                  The importance of writing well-defined user-stories so that
                  scope-creep, while tempting, does not happen
                </li>
                <li>
                  Scoring dev tickets with story-points as a team can be a fun
                  way to estimate the size of a sprint
                </li>
                <li>
                  Sprint retrospectives should be fun and provide a way to share
                  development learnings across the wider team, e.g.{" "}
                  <b>gotchas</b> in services like the Shopify API
                </li>
                <li>
                  If I ever run a software team or business in the future, I
                  will borrow a lot of ideas from Genia. They have done an
                  amazing job expanding to a medium-sized company while keeping
                  the vibe of a small-town family-run company that takes special
                  care of individual employees
                </li>
                <li>
                  Year-end holiday gifts are taken very seriously in New Zealand
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>
        <section className="actions">
          <div className="next">
            <Link href="/agora" passHref>
              <a>
                <Button text={"NEXT PROJECT"} />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </PageDetailsStyle>
  );
};

export default Genia;
