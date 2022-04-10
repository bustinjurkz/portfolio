import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import BookedModal from "../public/agora/meeting-booked.png";
import Mentors from "../public/agora/book-mentor.png";
import { handleScroll } from ".";
import {
  ArrowStyle,
  ListStyle,
  PageDetailsStyle,
} from "../styles/PageDetailsStyle";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { BounceIn } from "../components/BounceIn";

const Agora = () => {
  useEffect(() => {
    gradualFade("banner", true);
  }, []);

  return (
    <PageDetailsStyle>
      <ParallaxBanner
        layers={[{ image: "agora/header.jpg", speed: -20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">AGORA MENTORING</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>

      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT THE PROJECT</h1>
            <div className="snapshot">
              <div className="tagline">
                Using AI to find mentors more effectively.
              </div>
              <div className="container">
                <div className="description">
                  In early 2021, my gym buddy (and Data Scientist for TD Bank)
                  approached me with an idea he had stemming from the
                  difficulties in connecting young people with mentors within
                  larger organizations. The problem is companies often use dated
                  tools - or none at all - in order to schedule meetings with
                  potential hires. Thus, Agora Mentoring was born. We use data
                  science wizardry in order to optimally connect a mentee with a
                  mentor, thus increasing the likelihood of successful career
                  advice and employment down the line.
                  <p>
                    <b>
                      This project is on-going and the beta version will be out
                      sometime in 2023. Live preview and repo available upon
                      request.
                    </b>
                  </p>
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Technical Lead</div>
                    <div className="role">Full-Stack Developer</div>
                    <div className="role">Some Design/UX</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">CLIENT</div>
                    <div className="client">Agora</div>
                  </div>
                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">June 2021 - Current</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">Teammates</div>
                    <Link href="https://www.linkedin.com/in/atinder-b-571877130/">
                      <a target="_blank">Atinder Bharaj</a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mariumshahana/">
                      <a target="_blank">Marium Shahana</a>
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
              src={BookedModal}
              aria-label="Booking Modal"
              width={752}
              height={718}
              layout={"responsive"}
            />
            <div className="label">
              The mentor has successfully booked a meeting with a Student
              interested in learning about the Skills for Success with respect
              to the mentor&apos;s industry.
            </div>
          </div>
        </BounceIn>

        <Fade fraction={0} triggerOnce>
          <section className="technical">
            <h1 className="header">HOW IT WORKS</h1>

            <div className="content">
              <p>
                Users sign up as either a Mentor, or a Mentee. They then provide
                demographic and technical information. A mentor optionally
                provides their availabilities.
              </p>
              <p>
                As a mentee, you are able to request a mentor based on a match
                rating. This rating is determined by the demographic and
                technical information as mentioned above, along with our
                proprietary scoring algorithm. Once requested, the mentor must
                accept and select a given time in which both parties are
                available.
              </p>
              <p>
                As a mentor, once you accept a meeting with a mentee, both
                parties are automatically given a Google Meet room link sent to
                their e-mails provided.
              </p>
            </div>
          </section>
        </Fade>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              src={Mentors}
              aria-label="Mentors Select"
              width={1004}
              height={714}
              layout={"responsive"}
            />
            <div className="label">
              The mentee can request a meeting with a mentor based on the match
              percentage - a higher number indicates more potential chemistry in
              the meeting.
            </div>
          </div>
        </BounceIn>
        <Fade fraction={0} triggerOnce>
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  I made this app during the Southern Hemisphere Winter of 2021
                  while holding another full time developer role. I learned
                  coding 55-60 hours per week was not fun.
                </li>
                <li>
                  There is significant interest amongst HR reps for this app. It
                  vastly simplifies their networking/mentoring process.
                </li>
                <li>
                  This was my first attempt at creating an entire backend myself
                  (with a few tips from my coworkers), and I was successful.
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>
        <section className="actions">
          <div
            className="repo"
            onClick={() =>
              Swal.fire({
                icon: "warning",
                title: "Available on Request",
                confirmButtonColor: "#3b4250",
                text: "To assess my current skills via this repo, please send me an e-mail to request access due to an NDA.",
              })
            }
          >
            <Button text={"VIEW REPO"} />
          </div>
          <div className="next">
            <Link href="/handits" passHref>
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

export default Agora;
