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

            {item.description && <p>{item.description}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineWrapper>
  );
};

const IconStyle = {
  background: "#213821",
  color: "#f6faf6",
};

const TimelineWrapper = styled.div`
  .vertical-timeline::before {
    background: ${(props) => props.theme.whiteContrast};
  }
  .vertical-timeline-element-content {
    background: ${(props) => props.theme.blue};
    box-shadow: 0px 4px 5px 0px #cecece;
  }
  .vertical-timeline-element-content-arrow {
    border-right-color: #c6c9cf;
  }
  .vertical-timeline-element:first-child .vertical-timeline-element-date {
    font-weight: 600;
  }
`;

const OrganizationLocation = styled.div`
  display: flex;
  flex-direction: row;
`;

const LocationWrapper = styled.div`
  display: flex;
  margin-left: 1.25rem;

  .location-icon {
    width: 14px;
    color: #3b4251b5;
  }
`;

const LocationText = styled.span`
  margin-left: 0.25rem;
`;

const TimelineHeader = styled.h3`
  font-family: "Inter", sans-serif;
  margin-top: 0;
  margin-bottom: 0.35rem;
`;

const OrganizationText = styled.h3`
  margin: 0;
  font-size: 1rem;
`;
