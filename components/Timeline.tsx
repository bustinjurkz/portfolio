import {
  faBriefcase,
  faLocationDot,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timelineData from "../data/timeline.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

export const Timeline = () => {
  return (
    <TimelineWrapper>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={IconStyle}
            icon={
              <FontAwesomeIcon
                icon={item.iconType === "work" ? faBriefcase : faUserGraduate}
              />
            }
          >
            <TimelineHeader>{item.title}</TimelineHeader>
            <OrganizationLocation>
              <OrganizationText>{item.organization}</OrganizationText>

              <LocationWrapper>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="location-icon"
                />
                <LocationText>{item.location}</LocationText>
              </LocationWrapper>
            </OrganizationLocation>

            {item.description && <Description>{item.description}</Description>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineWrapper>
  );
};

const IconStyle = {
  background: "#3b4250",
  color: "#f6faf6",
};

const TimelineWrapper = styled.div`
  .vertical-timeline::before {
    background: ${(props) => props.theme.whiteContrast};
  }
  .vertical-timeline-element-content {
    background: ${(props) => props.theme.blue};
    border-radius: 0px;
    box-shadow: none;
    padding: 1.25rem;
  }
  .vertical-timeline-element-content-arrow {
    border-right-color: #c6c9cf;
  }
  .vertical-timeline-element-icon {
    border-radius: 0;
  }
  .vertical-timeline-element-date {
    padding-bottom: 0;
  }
`;

const OrganizationLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const LocationWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    margin-left: 1.25rem;
  }

  .location-icon {
    width: 14px;
    color: #3b4251b5;
  }
`;

const LocationText = styled.span`
  margin-left: 0.25rem;
`;

const TimelineHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0.35rem;
  }
`;

const OrganizationText = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const Description = styled.div`
  margin-top: 1rem;
  font-weight: 400;
`;
