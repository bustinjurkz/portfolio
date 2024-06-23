import React, { useRef, useState } from "react";
import { ButtonMixin } from "./Button";
import Image from "next/legacy/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ProjectType } from "../pages";
import { css, styled } from "styled-components";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "framer-motion";

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
    setExpandPreview(`/${props.name.toLowerCase()}-preview.webp`);
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <Link href={`/${props.slug}`} passHref legacyBehavior>
        <motion.div
          ref={ref}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <motion.div>
            <ProjectCardWrapper>
              <CardImageWrapper whileHover={{ scale: 1.01 }}>
                {props.name !== "Handits" && (
                  <ExpandButton
                    onClick={(e: any) => handleExpand(e)}
                    aria-label="expand-button"
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="expand-icon"
                    />
                  </ExpandButton>
                )}

                {props.name !== "Handits" ? (
                  <Image
                    onClick={(e: any) => handleExpand(e)}
                    loading="lazy"
                    src={`/${props.name.toLowerCase()}-preview.webp`}
                    alt={`/${props.name.toLowerCase()}-preview`}
                    aria-label={`/${props.name.toLowerCase()} preview image`}
                    width={1000}
                    height={518}
                    layout={"responsive"}
                  />
                ) : (
                  <VideoWrapper>
                    <iframe
                      width="1668"
                      loading="lazy"
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
                <DescriptionWrapper>
                  <span>{props.description}</span>
                </DescriptionWrapper>
              </CardInfoWrapper>
            </ProjectCardWrapper>
          </motion.div>
        </motion.div>
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
  gap: 2rem;

  border-radius: 32px;
  box-shadow: 11px 11px 20px #dedede, -11px -11px 20px #ffffff;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    box-shadow: 11px 14px 25px #d8d7d7, -11px -11px 20px #ffffff;
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
  align-items: center;
  margin-bottom: 1.15rem;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.primary};
  margin: 0;
  white-space: nowrap;
  font-size: 22px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
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

  height: min-content;

  ${(props) =>
    props.$isLarge &&
    css`
      padding: 0.75rem 1rem;
      font-size: 14px;
      min-width: 180px;
    `};
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
  width: 60%;
`;

const CardImageWrapper = styled(motion.div)`
  position: relative;
  width: 40%;

  .image {
    &:hover {
      cursor: zoom-in;
    }
  }
`;
