import React, { useState } from "react";
import { Button, ButtonMixin } from "./Button";
import Image from "next/legacy/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ProjectType } from "../pages";
import { css, styled } from "styled-components";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [expandPreview, setExpandPreview] = useState("");

  const handleExpand = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setExpandPreview(`/${props.name.toLowerCase()}-preview.png`);
  };

  return (
    <>
      <Link href={`/${props.slug}`} passHref legacyBehavior>
        <ProjectCardWrapper>
          <CardImageWrapper>
            {props.name !== "Handits" && (
              <ExpandButton onClick={(e: any) => handleExpand(e)}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlassPlus}
                  className="expand-icon"
                />
              </ExpandButton>
            )}

            {props.name !== "Handits" ? (
              <Image
                onClick={(e: any) => handleExpand(e)}
                loading="eager"
                className="image"
                src={`/${props.name.toLowerCase()}-preview.png`}
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
          </CardImageWrapper>

          <CardInfoWrapper>
            <CardHeaderWrapper>
              <ProjectTitle>{props.name}</ProjectTitle>
              <Links>
                {props.liveURL && (
                  <VisitLink
                    href={props.liveURL}
                    target="_blank"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      e.stopPropagation()
                    }
                  >
                    VISIT SITE
                  </VisitLink>
                )}
                <StyledLink href={`/${props.slug}`}>Learn More</StyledLink>
              </Links>
            </CardHeaderWrapper>
            <DescriptionWrapper>{props.description}</DescriptionWrapper>
          </CardInfoWrapper>
        </ProjectCardWrapper>
      </Link>
      <Lightbox
        open={!!expandPreview}
        close={() => setExpandPreview("")}
        slides={[{ src: expandPreview, width: 1000 }]}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgb(0 0 0 / 80%)" } }}
        controller={{ closeOnBackdropClick: true }}
        render={{ buttonNext: () => null, buttonPrev: () => null }}
      />
    </>
  );
};

const ProjectCardWrapper = styled.div`
  padding: 2.05rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.theme.blue};
  border: 11px solid #3b425008;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    border-color: #3b425017;
  }
`;

const DescriptionWrapper = styled.div``;

const Links = styled.div`
  display: flex;
  width: 100%;
  gap: 0.45rem;
  justify-content: right;
`;

const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.25rem 0.25rem 0 0;
  color: ${(props) => props.theme.darkBlue};
  align-items: center;
  width: 100%;
  opacity: 1;
  text-align: center;
  margin-top: 2.25rem;
  margin-bottom: 1.15rem;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.primary};
  margin: 0;
  white-space: nowrap;
`;

const CardContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
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

const ExpandButton = styled.button`
  position: absolute;
  top: 8px;
  right: 9px;
  border: none;
  background-color: black;
  color: #eceff4;
  z-index: 1;
  border-radius: 0.25rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: zoom-in;

  &:hover > .expand-icon {
    color: ${(props) => props.theme.red};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondary};
  }

  .expand-icon {
    width: 20px;
    height: 20px;
    z-index: 2;
  }
`;

export const StyledLink = styled(Link)<{ $isLarge?: boolean }>`
  ${ButtonMixin};

  ${(props) =>
    props.$isLarge &&
    css`
      padding: 0.75rem 1rem;
      font-size: 14px;
      min-width: 180px;
    `}
`;

const VisitLink = styled.a`
  transition: 0.5s;
  font-size: 0.75rem;
  align-content: center;
  margin-right: 10px;

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.secondary};
  }
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 500px;
  .image {
    &:hover {
      cursor: zoom-in;
    }
  }
`;
