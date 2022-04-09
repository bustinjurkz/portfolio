import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import MainApp from "../public/stellargaze/main-app.png";
import Data from "../public/stellargaze/data.jpg";
import { handleScroll } from ".";
import {
  ArrowStyle,
  ListStyle,
  PageDetailsStyle,
  SpecialListStyle,
} from "../styles/PageDetailsStyle";
import { Fade } from "react-awesome-reveal";

const Stellargaze = () => {
  useEffect(() => {
    gradualFade("banner", true);
  }, []);

  const imageRef1 = useParallax<HTMLDivElement>({
    translateX: [-3, 3],
  }).ref;

  const imageRef2 = useParallax<HTMLDivElement>({
    translateX: [3, -3],
  }).ref;

  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "stellargaze/header.jpg", speed: 20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">STELLARGAZE</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>
      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT THE PROJECT</h1>
            <div className="snapshot">
              <div className="tagline">
                There are roughly 5000 stars visible at night - where are they?
              </div>
              <div className="container">
                <div className="description">
                  STELLARGAZE is a React web project which helps find areas with
                  low light pollution and ranks them in real-time according to
                  both the moon phase and the nightly weather forecasts of
                  humidity and cloud coverage. It is made for both space
                  enthusiasts and casual observers of the sky. This was my first
                  ever experience with React and my first real project after
                  completing my Bachelors in Computer Science. I decided to
                  become a professional web developer after; I had so much fun
                  working on this with close friends at cafes all throughout
                  Hamilton, Ontario. There are future plans to make this an
                  experiential meditative stargazing experience using React
                  Native and my more honed skills after working 3 years in the
                  industry.
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Full Stack Developer</div>
                    <div className="role">Design</div>
                    <div className="role">Research</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">CLIENT</div>
                    <div className="client">Personal Project</div>
                  </div>
                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">June - October 2019</div>
                  </div>
                </div>
              </div>
              <div className="visit">
                <Button
                  text={"VISIT THE WEBSITE"}
                  to={"https://stellar-gaze.herokuapp.com/"}
                />
              </div>
            </div>
          </section>
        </Fade>

        <div className="image-container" ref={imageRef1}>
          <Image
            priority
            className="image"
            src={MainApp}
            aria-label="Stellargaze Preview Image"
            width={1719}
            height={914}
            layout={"responsive"}
          />
          <div className="label">
            With an average score of 46% for these public areas, the app does
            not recommend stargazing in the current conditions, as there is high
            humidity and high cloud coverage.
          </div>
        </div>

        <Fade fraction={0} triggerOnce>
          <section className="technical">
            <h1 className="header">HOW IT WORKS</h1>

            <div className="content">
              <p>
                Helps users in North America, Australia, and New Zealand find
                nearby parks with low light pollution, cloud coverage, humidity,
                and moon illumination. These parks are ranked according to our
                proprietary algorithm - approved by an astronomer from McMaster
                University - which assigns a score indicating naked-eye star
                visibility. A score of 80% or greater represents good
                visibility.
              </p>
              <p>
                This saves time and energy by not having to read light pollution
                maps. Currently, the search query &quot;where to stargaze&quot;
                returns blogs and niche websites with either minimal or complex
                information.
              </p>
              <p>The dataset consists of:</p>
              <SpecialListStyle>
                <b>Satellite Data</b> - a satellite image provided by the Earth
                Observations Group (EOG) at the{" "}
                <Link href={"https://ngdc.noaa.gov/"}>
                  <a target={"_blank"} rel="noreferrer">
                    National Centers for Environmental Information.
                  </a>
                </Link>{" "}
                This Day/Night Band image captures the average radiance values
                of North America, Australia, and New Zealand. The pixel values
                we extract correspond to a number on the Bortle scale, which
                gives an approximate measure of the night sky&apos;s brightness
                at a particular location.
              </SpecialListStyle>
              <SpecialListStyle>
                <b>GIS/Park Data</b> - Parks within 140km of the user in lower
                light-pollution zones are ranked based on not only the light
                pollution, but cloud coverage (the % of the sky covered by
                clouds), humidity %, and moon phase.
              </SpecialListStyle>
              <SpecialListStyle>
                <b>Weather Forecast Data</b> - Weather forecast data is obtained
                from OpenWeather. Due to the data limitations and the wide area
                required for forecasting, doing forecast requests for each park
                individually was infeasible, as well as not financially viable.
                As a result, a k-means clustering algorithm was used to cluster
                nearby parks together, since all parks in an area could share a
                forecast. After some testing, there was not a significant
                difference between using nearest neighbor and the more elaborate
                methods, so nearest neighbor was used. As a result, the centroid
                of each cluster of parks is used as the forecast request point,
                and all parks in a cluster share the same forecast.
              </SpecialListStyle>
              <p>
                More detailed information can be found on the{" "}
                <Link href={"https://stellar-gaze.herokuapp.com/FAQ"}>
                  <a target={"_blank"} rel="noreferrer">
                    FAQs
                  </a>
                </Link>
              </p>
            </div>
          </section>
        </Fade>

        <div className="image-container" ref={imageRef2}>
          <Image
            priority
            className="image"
            src={Data}
            aria-label="Park Satellite Image"
            width={1044}
            height={697}
            layout={"responsive"}
          />
          <div className="label">
            The result of mixing the satellite data with the GIS park data.
            Stored parks coloured according to light pollution - the lighter the
            colour, the more light pollution.
          </div>
        </div>
        <Fade fraction={0} triggerOnce>
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  React has a fairly steep learning curve. Bringing engineering
                  principles (state...) to the front-end made me thankful I got
                  a degree prior.
                </li>
                <li>
                  I was shocked that no one has attempted to create a visibility
                  metric with respect to naked-eye stargazing. Functions were
                  used based on 4 factors: light pollution, moon illumination,
                  humidity %, and cloud coverage. For example, if the moon
                  illumination at a given time is over 50%, it will assign a
                  score of 0 to the moon. This means that since the moon
                  illumination is high, obfuscating the stars, it will result in
                  a lower overall score for that park
                </li>
                <li>
                  You can do anything to avoid unnecessary expenses, however it
                  might result in less maintainable code. For example, to avoid
                  calling a better api to assess the real-time park weather in a
                  given radius, we used a complicated k-means script to get an
                  approximate score. This resulted in free api requests, but
                  with less accurate data.
                </li>
                <li>
                  I grew a lot as a developer since this project. While I am
                  very proud that this was my first ever hobby project, I am not
                  particularly proud of the code and architecture of the app
                  itself. When it comes time to refactor for a consumer app, I
                  will make sure the backend is a lot more modular, make use of
                  Typescript, and avoid the amount of client-side logic used
                  currently. To see my progress as a developer, compare this
                  repo with the{" "}
                  <Link href="/agora">
                    <a>Agora project.</a>
                  </Link>
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>
        <section className="actions">
          <div className="repo">
            <Link href="https://github.com/bustinjurkz/StellarGaze" passHref>
              <a target={"_blank"}>
                <Button text={"VIEW REPO"} />
              </a>
            </Link>
          </div>
          <div className="next">
            <Link href="/trelli" passHref>
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

export default Stellargaze;
