import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import Quote from "../public/trelli/quote-summary.png";
import Award from "../public/trelli/innovation.jpg";
import Tradeshow from "../public/trelli/tradeshow.jpg";
import { handleScroll } from ".";
import {
  ArrowStyle,
  ListStyle,
  PageDetailsStyle,
} from "../styles/PageDetailsStyle";
import { Fade } from "react-awesome-reveal";
import { BounceIn } from "../components/BounceIn";

const Trelli = () => {
  useEffect(() => {
    gradualFade("banner", true);
  }, []);

  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "trelli/header.jpg", speed: -20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">TRELLI</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>
      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT THE PROJECT</h1>
            <div className="snapshot">
              <div className="tagline">
                An award-winning app that provides instant quotes for custom
                Trellis products.
              </div>
              <div className="container">
                <div className="description-container">
                  <div className="description">
                    Genia&apos;s sales department needed to give a presentation
                    to hardware stores throughout New Zealand to launch their
                    new line of custom Trellis, Panels, and Gates. An idea was
                    pitched that would allow these hardware retail stores to
                    receive instant quotes for these products and make their
                    jobs easier. Prior to this, a sales rep would have to
                    manually call and ask our company for a quote. The challenge
                    was to finish a prototype before the presentation in 2
                    working days. Thomas (backend) and I ended up getting it in
                    done in two iconic 11 hour shifts. Since then, the app has
                    evolved and continues to receive rave reviews from hardware
                    stores throughout NZ, increasing sales for the Motueka
                    Pickets brand. In 2022, I received Genia&apos;s Innovation
                    Award for this app which contributes towards the goal of
                    continuous improvement and innovation.
                  </div>
                  <div className="visit">
                    <Button
                      text={"VISIT THE WEBSITE"}
                      to={"https://trelli.co.nz/"}
                    />
                  </div>
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Full Stack</div>
                    <div className="role">Some Design</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">CLIENT</div>
                    <div className="client">
                      <Link href="https://www.genia.co.nz/">Genia</Link>
                    </div>
                  </div>
                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">Early 2020 - Current</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">Teammates</div>
                    <Link href="https://thomaspearson.me/">Thomas Pearson</Link>
                    <Link href="https://www.linkedin.com/in/jesse-drummond">
                      Jesse Drummond
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={Quote}
              alt="trelli-quote"
              aria-label="Quote"
              width={776}
              height={653}
              layout={"responsive"}
            />
            <div className="label">
              A customer or sales rep selected two products with these custom
              specs.
            </div>
          </div>
        </BounceIn>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              alt="trelli-tradeshow"
              className="image"
              src={Tradeshow}
              aria-label="Tradeshow"
              width={1131}
              height={751}
              layout={"responsive"}
            />

            <div className="label">
              Trelli on the bottom right during a tradeshow in Auckland.
            </div>
          </div>
        </BounceIn>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={Award}
              alt="trelli-award"
              aria-label="Award Image"
              width={1200}
              height={900}
              layout={"responsive"}
            />
            <div className="label">
              My coworkers and I receiving the first ever Innovation Award at
              the company-wide meeting in Motueka. It was a nice surprise. Had I
              known prior I probably would not have worn my Biggie Smalls tee in
              front of 100+ people with a Microsoft Teams blanket fort
              background (pictured on the two screens live from Wellington, NZ).
            </div>
          </div>
        </BounceIn>

        <Fade fraction={0} triggerOnce>
          <section className="technical">
            <h1 className="header">HOW IT WORKS</h1>

            <div className="content">
              <p>
                Once a customer or sales rep selects their custom Trellis,
                Pickets/Panels, and/or Gates, they submit their e-mail where our
                backend will calculate the price, generate a spec-sheet, and
                send PDFs to the sales team, manufacturing team, and the
                customer.
              </p>
            </div>
          </section>
        </Fade>

        <Fade fraction={0} triggerOnce>
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  I am able to crank out an app for demo-purposes in under 20
                  hours. While quick, the code I produced was not carefully
                  thought of prior. Thus, architecturally, the app was built on
                  shaky grounds. As the app became more widely adopted, we
                  continued to build on-top of the codebase until realizing that
                  adding simple features was harder than it should be. This
                  resulted in a lengthy architectural refactor down the line.
                </li>
                <li>
                  It is very easy to go overboard with animations. During
                  development, I had to take a step back and realize Trelli is a
                  simple calculator-like app for sales people and DIY renovation
                  folk. Another 10 valuable hours of fancy animations would not
                  necessarily produce a big ROI. The full fledged consumer app
                  version will be made in the future and so maybe then would
                  slicker animations suffice. Know your audience!
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>
        <section className="actions">
          <div className="next">
            <Link href="/genia" passHref>
              <Button text={"NEXT PROJECT"} />
            </Link>
          </div>
        </section>
      </div>
    </PageDetailsStyle>
  );
};

export default Trelli;
