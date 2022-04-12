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
            <div className="label">TODO</div>
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
            <div className="label">TODO</div>
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
            <div className="label">TODO</div>
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
            <div className="label">TODO</div>
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
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  The importance of writing well-defined user-stories so that
                  scope-creep, while tempting, does not happen
                </li>
                <li>
                  UX Testing can be quite fun and can energize the test subjects
                  in the office. I organized each session into 3 major sections:
                  <SpecialListStyle>
                    <b>Think-Aloud</b> - Users say out loud what they think the
                    app is for and what the general impressions are.
                  </SpecialListStyle>
                  <SpecialListStyle>
                    <b>Tasks</b> - Users are asked to complete tasks, such as:
                    &quot;You are keen to grow tomatoes. You want to know what
                    level of sunlight tomatoes need and when to begin planting.
                    How would you go about doing this?&quot;
                  </SpecialListStyle>
                  <SpecialListStyle>
                    <b>Adjectives</b> - Users are asked to circle 5 out of 100
                    adjectives which indicate how they feel about the UI /
                    branding.
                  </SpecialListStyle>
                  The main finding was that users initially did not the goal of
                  the app was to help create a plan/calendar. Thus, the designer
                  drafted a different landing page and the results were much
                  better
                </li>
                <li>
                  Working within a smaller tech team is great - I can wear
                  multiple hats: full-stack, design, and UX
                </li>
                <li>
                  For storing data on a small app, JSON can be used in lieu of a
                  costly database
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
