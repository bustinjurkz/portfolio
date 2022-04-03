import React from "react";
import { styled } from "../styles/theme";
import { Button } from "./Button";
import Image from "next/image";
// import Image1 from "../public/";

export interface ProjectPreviewCardProps {
  name: string;
  description: string;
  tools: string[];
  client: string;
  repo?: string;
  liveURL?: string;
}

const myLoader = ({ src }: any) => {
  return `../public/${src}.png`;
};

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  ...props
}) => {
  return (
    <ProjectPreviewCardStyle>
      <div className="header">
        <h1 className="project-name">{props.name}</h1>
        <div className="client">
          <span>
            {props.client !== "Personal Project" &&
              props.client !== "Capstone - McMaster University" &&
              "Client:"}{" "}
          </span>
          <span className="name">{props.client}</span>
        </div>
      </div>
      <div className="inner-container">
        <div className="image-container">
          {props.name !== "Handits" ? (
            <Image
              priority
              className="image"
              src={`/${props.name.toLowerCase()}-preview.png`}
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
        <hr />
        <div className="description-container">
          <h2 className="about">
            About{" "}
            {props.name !== "Misc Timber Industry Apps"
              ? props.name
              : "Misc Timber Projects"}
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
            {props.liveURL && (
              <div className="url">
                <Button
                  text={props.name === "Handits" ? "View Blog" : "View Live"}
                  to={props.liveURL}
                />
              </div>
            )}
          </div>
          <div className="internal">
            <div className="more-info">
              <Button text={"More Info"} to={""} />
            </div>
          </div>
        </div>
      </div>
    </ProjectPreviewCardStyle>
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

  hr {
    margin-top: 40px;
    margin-bottom: 40px;
    border: none;
    height: 9px;
    background: linear-gradient(120deg, #4f5d75 0%, #f5d9d5 100%);
    border-radius: 20px;
    width: 50%;
    filter: opacity(0.2);
  }

  .inner-container {
    max-width: 1000px;
    align-self: center;
    padding: 0px 25px;
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
    background: rgb(84, 97, 120);
    background: linear-gradient(
      90deg,
      rgba(84, 97, 120, 1) 0%,
      rgba(64, 71, 84, 1) 100%
    );
    border-radius: 20px 20px 0px 0px;
    color: ${(props) => props.theme.white};
    padding: 10px 40px;
    margin-bottom: 60px;
    align-items: center;
    font-family: "Inter", sans-serif;
    justify-content: space-between;
    .project-name {
      text-transform: uppercase;
      color: ${(props) => props.theme.white};
    }
  }
  .client {
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

    .tool {
      padding: 8px;
      border-radius: 10px;
      background: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
      margin: 5px 20px 5px 0px;
      :hover {
        transform: scale(1.02);
      }
    }
  }

  .description-container {
    margin: 30px 0px;
  }

  .links {
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: right;
    .external {
      display: inline-flex;
      margin-right: 20px;
      .repo {
        margin-right: 20px;
      }
    }
  }
`;
