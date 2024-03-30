import React from "react";
import { styled } from "../styles/theme";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectType } from "../pages";

export interface ProjectPreviewCardProps {
  name: string;
  type: ProjectType;
  description: string;
  tools: string[];
  client?: string;
  current?: boolean;
  slug: string;
  repo?: string;
  liveURL?: string;
  key: number;
}

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  ...props
}) => {
  const whoForPrettier = () => {
    switch (props.type) {
      case ProjectType.Contract:
        return (
          <div className="client">
            <span>Client: </span>
            <span className="name">{props.client}</span>
          </div>
        );
      case ProjectType.Personal:
        return (
          <div className="client">
            <span className="name">Personal Project</span>
          </div>
        );
      case ProjectType.FullTime:
        return (
          <div className="client">
            <span> {props.current ? "Current" : "Past"} Job at</span>
            <span className="name">{props.client}</span>
          </div>
        );
      case ProjectType.School:
        return (
          <div className="client">
            <span className="name">{props.client}</span>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        key={props.key}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        <ProjectPreviewCardStyle>
          <Link href={`/${props.slug}`} passHref legacyBehavior>
            <div className="header">
              <h1 className="project-name">{props.name}</h1>
              {whoForPrettier()}
            </div>
          </Link>

          <div className="inner-container">
            <Link href={`/${props.slug}`} passHref legacyBehavior>
              <AnimatePresence>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  variants={{
                    visible: { scale: 1 },
                    hidden: { scale: 0.9 },
                  }}
                >
                  <div className="image-container">
                    {props.name !== "Handits" ? (
                      <Image
                        priority
                        className="image"
                        src={
                          props.name === "Timber Industry Apps"
                            ? "/genia-preview.png"
                            : `/${props.name.toLowerCase()}-preview.png`
                        }
                        alt={`/${props.name.toLowerCase()}-preview`}
                        aria-label="Planter Preview Image"
                        width={1668}
                        height={865}
                        layout={"responsive"}
                      />
                    ) : (
                      <div className="video-container">
                        <iframe
                          width="1668"
                          height="865"
                          src="https://www.youtube.com/embed/abJWSL5FRzs"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>

            <DividerStyle />
            <div className="description-container">
              <h2 className="about">
                About{" "}
                {props.name !== "Timber Industry Apps"
                  ? props.name
                  : "Timber Industry Apps"}
              </h2>
              <div className="description">{props.description}</div>
            </div>
            <div className="tools">
              {props.tools.map((tool, i) => (
                <div className="tool" key={i}>
                  {tool}
                </div>
              ))}
            </div>
            <div className="links">
              <div className="external">
                {props.repo && (
                  <div className="repo">
                    <Button text={"View Repo"} to={props.repo} />
                  </div>
                )}
                {props.name === "Agora Mentoring" && (
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
                    <Button text={"View Repo"} />
                  </div>
                )}
                {props.type && (
                  <div className="url">
                    <Button
                      text={
                        props.name === "Handits" ? "View Blog" : "View Live"
                      }
                      to={props.liveURL}
                    />
                  </div>
                )}
              </div>
              <div className="internal">
                <Link href={`/${props.slug}`} passHref legacyBehavior>
                  <div className="more-info">
                    <Button text={"More Info"} to={""} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ProjectPreviewCardStyle>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectPreviewCardStyle = styled.div`
  font-size: larger;
  margin: auto;
  max-width: 1200px;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  background: ${(props) => props.theme.blue};
  border-radius: 20px;
  box-shadow: 0px 2px 15px 0px rgb(158 162 171);

  .inner-container {
    max-width: 1200px;
    align-self: center;
    padding: 0px 25px;
    @media screen and (min-width: 768px) {
      padding: 0px 35px;
    }
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 30px;
      height: 0;
      overflow: hidden;
      iframe,
      .video-container object,
      .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.darkBlue};
    border-radius: 20px 20px 0px 0px;
    color: ${(props) => props.theme.darkBlue};
    padding: 30px 15px;
    margin-bottom: 60px;
    align-items: center;
    font-family: "Inter", sans-serif;

    width: 100%;
    opacity: 1;
    text-align: center;
    transition: 0.4s;
    justify-content: center;
    @media screen and (min-width: 430px) {
      padding: 30px 40px;
      justify-content: space-between;
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: 30px 40px;
      justify-content: space-between;
    }
    cursor: pointer;
    :hover {
      opacity: 0.93;
    }
    .project-name {
      margin: 0;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.white};
      font-size: clamp(32px, 4vw, 48px);
      @media screen and (min-width: 768px) {
        margin: 0;
      }
    }
  }
  .client {
    color: ${(props) => props.theme.white};
    .name {
      margin-left: 10px;
      font-size: x-large;
      font-weight: 600;
    }
  }

  .tools {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    margin: 50px 0px;
    font-size: 1rem;
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }

    .tool {
      padding: 8px;
      border-radius: 10px;
      background: ${(props) => props.theme.grey};
      cursor: default;
      color: ${(props) => props.theme.white};
      margin: 5px 20px 5px 0px;
      :hover {
        transform: scale(1.02);
      }
    }
  }

  .description-container {
    margin: 30px 0px;
    .about {
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: start;
      }
    }
  }

  .links {
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-flow: wrap;

    @media screen and (min-width: 768px) {
      justify-content: right;
    }
    gap: 1.5%;
    .internal,
    .external {
      gap: 3%;
      @media screen and (min-width: 768px) {
        display: flex;
      }
    }

    .repo {
      min-width: fit-content;
    }
    .url {
      min-width: fit-content;
    }
  }
`;

export const DividerStyle = styled.hr`
  margin-top: 40px;
  margin-bottom: 40px;
  border: none;
  height: 9px;
  background: linear-gradient(120deg, #4f5d75 0%, #f5d9d5 100%);
  border-radius: 20px;
  width: 50%;
  filter: opacity(0.2);
`;
