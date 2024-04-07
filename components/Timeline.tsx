import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
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
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.location}</p>
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
  }
  .vertical-timeline-element-content-arrow {
    border-right-color: ${(props) => props.theme.blue};
  }
`;
