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
    <Link href={`/${props.slug}`} passHref legacyBehavior>
      <ProjectCardWrapper>
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
          <CardHeaderWrapper>
            <ProjectTitle>{props.name}</ProjectTitle>
            <Links>
              {props.repo && <Button text={"View Repo"} to={props.repo} />}
              {props.type && <Button text={"Visit Site"} to={props.liveURL} />}
            </Links>
          </CardHeaderWrapper>
          <DescriptionWrapper>{props.description}</DescriptionWrapper>
        </CardContentsWrapper>
      </ProjectCardWrapper>
    </Link>
  );
};

const ProjectCardWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.blue};
  box-shadow: 1px 4px 9px 0px #cecece;
  border-radius: 0.25rem;
  cursor: pointer;
  max-width: 500px;

  &:hover {
    box-shadow: 2px 5px 9px 0px #bebebe;
  }
`;

const DescriptionWrapper = styled.div``;

const Links = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  gap: 1rem;
  justify-content: right;
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
  flex-direction: row;
  border-radius: 0.25rem 0.25rem 0 0;
  color: ${(props) => props.theme.darkBlue};
  align-items: center;
  font-family: "Inter", sans-serif;
  width: 100%;
  opacity: 1;
  text-align: center;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.greenPrimary};
  margin: 0;
`;

const CardContentsWrapper = styled.div`
  align-self: center;
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
