import React from "react";
import { Button } from "./Button";
import Image from "next/legacy/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { ProjectType } from "../pages";
import { styled } from "styled-components";

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
  return (
    <ProjectPreviewCardStyle>
      <Link href={`/${props.slug}`} passHref legacyBehavior>
        <CardHeaderWrapper>
          <ProjectTitle>{props.name}</ProjectTitle>
        </CardHeaderWrapper>
      </Link>

      <CardContentsWrapper>
        <Link href={`/${props.slug}`} passHref legacyBehavior>
          <>
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
              <VideoWrapper>
                <iframe
                  width="1668"
                  height="865"
                  src="https://www.youtube.com/embed/abJWSL5FRzs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </VideoWrapper>
            )}
          </>
        </Link>
        <DescriptionWrapper>{props.description}</DescriptionWrapper>

        <Links>
          {props.repo && <Button text={"View Repo"} to={props.repo} />}
          {props.type && <Button text={"Visit Site"} to={props.liveURL} />}
        </Links>
      </CardContentsWrapper>
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

  .client {
    color: ${(props) => props.theme.white};
    .name {
      margin-left: 10px;
      font-size: x-large;
      font-weight: 600;
    }
  }
`;

const DescriptionWrapper = styled.div`
  margin: 30px 0px;
`;

const Links = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-flow: wrap;

  @media screen and (min-width: 768px) {
    justify-content: right;
  }
  gap: 1rem;
`;

export const Tool = styled.div`
  padding: 8px;
  border-radius: 10px;
  background: ${(props) => props.theme.grey};
  cursor: default;
  color: ${(props) => props.theme.white};
  margin: 5px 20px 5px 0px;
  &:hover {
    transform: scale(1.02);
  }
`;

const CardHeaderWrapper = styled.div`
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
  &:hover {
    opacity: 0.93;
  }
`;

const ProjectTitle = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-size: clamp(32px, 4vw, 48px);
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const CardContentsWrapper = styled.div`
  max-width: 1200px;
  align-self: center;
  padding: 0px 25px;
  @media screen and (min-width: 768px) {
    padding: 0px 35px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
