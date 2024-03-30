import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { gradualFade } from "../gradualFade";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import Level from "../public/handits/game-level.jpg";
import Whiteboard from "../public/handits/whiteboard.jpg";
import Throwing from "../public/handits/throwing-anim.gif";
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
        layers={[{ image: "handits/header.jpg", speed: -20 }]}
        className="parallax-container"
        id="banner"
      >
        <div className="name-container">
          <h1 className="name">HANDITS</h1>
          <ArrowStyle onClick={() => handleScroll("start")} />
        </div>
      </ParallaxBanner>

      <div className="project-container" id="start">
        <Fade fraction={0} triggerOnce>
          <section className="intro">
            <h1 className="header">ABOUT THE GAME</h1>
            <div className="snapshot">
              <div className="tagline">
                Explore strange worlds & solve puzzles as a group of bandits
                with bold hands!
              </div>
              <div className="container">
                <div className="description">
                  The Capstone course at McMaster University&apos;s Computer
                  Science Dept. was a year-long course where small groups had to
                  complete a large project. Ideally, these projects would
                  incorporate the learnings from the years prior. I was lucky
                  enough to be able to make my first video game under the
                  supervision of{" "}
                  <Link href={"http://www.cas.mcmaster.ca/~smiths/"}>
                    Dr. Spencer Smith.
                  </Link>
                  <p>
                    I think a video game really incorporates everything there is
                    about computer science. Handits is a co-op 2D
                    puzzler/platformer where the mouse (or right joystick)
                    controls your character&apos;s hand in 360°. Players
                    manipulate the handit&apos;s hand and toss, grab, snap,
                    slap, pull, wave, push, and shoot in order to safely collect
                    hidden relics.
                  </p>
                </div>
                <div className="notes">
                  <div className="note-container">
                    <div className="label">ROLE</div>
                    <div className="role">Developer</div>
                    <div className="role">Audio</div>

                    <div className="role">Level Design</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">School</div>
                    <div className="client">McMaster University</div>
                  </div>
                  <div className="note-container">
                    <div className="label date">DATE</div>
                    <div className="date">2018-2019</div>
                  </div>
                  <div className="note-container">
                    <div className="label client">Teammates</div>
                    <div className="client">Evan Reaume</div>
                    <div className="client">Danny Stewart</div>
                    <div className="client">Ming Liu</div>
                    <div className="client">Kong Zhijun</div>
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
              src={Level}
              alt="handits-level-one"
              aria-label="Level One"
              width={1287}
              height={729}
              layout={"responsive"}
            />
            <div className="label">
              Level 1 - both players must reach the end. The solution is to
              hoist your partner over the middle block so they detonate the TNT.
              The TNT makes the boulder fall, so one player must grab the torch
              and set fire to the barrel to expose the little safety ditch
              beforehand.
            </div>
          </div>
        </BounceIn>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              alt="level-one-throwing"
              src={Throwing}
              aria-label="Level One"
              width={275}
              height={163}
              layout={"responsive"}
            />
            <div className="label">
              Grabbing and throwing physics. More wonkier than anticipated but
              it added an extra layer of hilarity. The goal was to make it as
              frustrating as possible before the point of annoyance.
            </div>
          </div>
        </BounceIn>

        <BounceIn>
          <div className="image-container">
            <Image
              priority
              className="image"
              alt="select-mentors"
              src={Whiteboard}
              aria-label="Mentors Select"
              width={1200}
              height={757}
              layout={"responsive"}
            />
            <div className="label">
              Evan and I posing in front of a whiteboard after an early game
              design session.
            </div>
          </div>
        </BounceIn>

        <Fade fraction={0} triggerOnce>
          <section className="technical">
            <h1 className="header">GAME FEATURES</h1>

            <ListStyle>
              <ul>
                <li>
                  Navigate through dangerous terrain by walking, jumping, or by
                  any means necessary.
                </li>
                <li>
                  Use objects, items, and weapons such as torches, guns,
                  smoke-bombs, and daggers.
                </li>
                <li>
                  Pickpocket enemies and pilfer items from the environment in
                  order to successfully progress through the level.
                </li>
                <li>Work with 1-3 of their friends over local multiplayer</li>
              </ul>
            </ListStyle>
          </section>
        </Fade>

        <Fade fraction={0} triggerOnce>
          <section>
            <h1 className="header">HOW IT WAS MADE</h1>
            <ListStyle>
              <ul>
                <li>
                  The game engine used was Unity and involves many C# scripts.
                </li>
                <li>
                  Game design principles were studied. The creation of an
                  on-going Game Design Document helped to organize our many
                  ideas.
                </li>
                <li>
                  The first deliverable was a Proof of Concept involving the
                  main mechanics. It was then subjected to playtesting in order
                  to continuously refine the game.
                </li>
                <li>
                  The aesthetics were both custom-made from scratch and modified
                  using openly licensed files.
                </li>
                <li>
                  My group dynamic was efficient due to our use of Scrum
                  methodology in order to accomplish the most out of the 2
                  full-time semesters my peers and I had. We would do weekly
                  sprint plan meetings and divide up the many tasks that pertain
                  to game development.
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>

        <Fade fraction={0} triggerOnce>
          <section className="learnings">
            <h1 className="header">WHAT I LEARNED</h1>
            <ListStyle>
              <ul>
                <li>
                  I would love to return to video game design one day. I feel it
                  provides me with a great creative outlet and fuller
                  utilization of my skills, since I also love creating music.
                </li>
                <li>
                  It is easier to make it as an actor than a video game
                  developer. The amount of respect I have for those grinding it
                  out in the gaming industry is astronomical.
                </li>
                <li>
                  Constant playtesting (or UX testing in web development) is
                  tantamount to the success of your project.
                </li>
              </ul>
            </ListStyle>
          </section>
        </Fade>
        <section className="actions">
          <div className="repo">
            <Button
              text={"VIEW REPO"}
              to="https://github.com/Evan-HR/Handits"
            />
          </div>
          <div className="repo">
            <Button text={"VIEW BLOG"} to="http://handits.ca/part1.html" />
          </div>
          <div className="next">
            <Link href="/planter" passHref>
              <Button text={"NEXT PROJECT"} />
            </Link>
          </div>
        </section>
      </div>
    </PageDetailsStyle>
  );
};

export default Agora;
