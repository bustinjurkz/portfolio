import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import Calendar from "../public/planter/calendar.png";
import Cart from "../public/planter/cart.png";
import { handleScroll } from ".";
import {
  ArrowStyle,
  ListStyle,
  PageDetailsStyle,
  SpecialListStyle,
} from "../styles/PageDetailsStyle";
import { Fade } from "react-awesome-reveal";

const Planter = () => {
  useEffect(() => {
    gradualFade("banner", true);
  }, []);

  const imageRef1 = useParallax<HTMLDivElement>({
    translateX: [-3, 3],
  }).ref;

  const imageRef2 = useParallax<HTMLDivElement>({
    translateX: [-3, 3],
  }).ref;

  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "planter/header.jpg", speed: 20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">PLANTER</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>
      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT THE PROJECT</h1>
            <div className="snapshot">
              <div className="tagline">Automating your garden plan!</div>
              <div className="container">
                <div className="description">
                  Genia&apos;s Marketing Director made a static planting
                  calendar which tells kiwis when to plant a fruit or vegetable
                  subject to a particular climate zone. We realized that this
                  could be a fun, dynamic user-experience, and thus Planter was
                  born - Genia&apos;s first consumer app. As the Project Lead, I
                  collaborated with the marketing team, an Auckland-based
                  designer, and my fellow developers. It was quickly wire-framed
                  and implemented, and through several rounds of UX testing
                  which I conducted, it was further refined into the app today.
                  The purpose is to drive Genia&apos;s social metrics and
                  generate sales for their gardening division - Get Growing. In
                  the future, this app will integrate with Shopify in order to
                  further streamline the gardening process.
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Project Lead</div>
                    <div className="role">Developer (Mostly Front-End)</div>
                    <div className="role">UX Testing / Some Design</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">CLIENT</div>
                    <div className="client">Get Growing (Genia)</div>
                  </div>
                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">2021 - Current</div>
                  </div>
                </div>
              </div>
              <div className="visit">
                <Button
                  text={"VISIT THE WEBSITE"}
                  to={"https://planter.co.nz"}
                />
              </div>
            </div>
          </section>
        </Fade>

        <div className="image-container" ref={imageRef1}>
          <Image
            priority
            className="image"
            src={Calendar}
            aria-label="Planter Preview Image"
            width={782}
            height={786}
            layout={"responsive"}
          />
          <div className="label">
            This is the PDF calendar that is sent, ordered by starting month.
            Some seeds can be planted straight into the ground depending on the
            climate zone, and others will need to start in a pot.
          </div>
        </div>

        <Fade fraction={0} triggerOnce>
          <section className="technical">
            <h1 className="header">HOW IT WORKS</h1>

            <div className="content">
              <p>
                Users first select their region in NZ, then will be presented
                with viable plants for the month. They can tap a plant for more
                specific info, and add plants to their cart.
              </p>
              <p>
                Each plant has an optimal climate zone. For example, if you are
                in Wellington, New Zealand, a Temperate climate zone, and the
                month is May, then the app will suggest plants like Bok Choy,
                Carrot and Chives.
              </p>
              <p>
                The user receives a calendar if they agree to sign-up for
                marketing e-mails from Genia, via an Azure Function, Mailchimp,
                and SendGrid.
              </p>
              <p>
                This calendar tells users when to sow or pot a seed, and when to
                harvest all their selected plants. The calendar itself was made
                using our proprietary React-to-PDF templating tool.
              </p>
            </div>
          </section>
        </Fade>

        <div className="image-container" ref={imageRef2}>
          <Image
            priority
            className="image"
            src={Cart}
            aria-label="Planter Preview Image"
            width={839}
            height={732}
            layout={"responsive"}
          />
          <div className="label">
            These 8 plants the user added will be simply displayed in the
            calendar.
          </div>
        </div>

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
            <Link href="/stellargaze" passHref>
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

export default Planter;
