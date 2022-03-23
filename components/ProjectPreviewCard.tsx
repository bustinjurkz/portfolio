import React from "react";
import { styled } from "../styles/theme";

export interface ProjectPreviewCardProps {
  name: string;
  description: string;
  tools: string[];
  client: string;
}

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  ...props
}) => {
  return (
    <ProjectPreviewCardStyle>
      <div className="header">
        <h1 className="project-name">{props.name}</h1>
        <div className="client">
          <span>Client: </span>
          <span className="name">{props.client}</span>
        </div>
      </div>
      <div className="description">{props.description}</div>

      <div className="tools">
        {props.tools.map((tool, i) => (
          <div className="tool" key={i}>
            {tool}
          </div>
        ))}
      </div>
    </ProjectPreviewCardStyle>
  );
};

const ProjectPreviewCardStyle = styled.div`
  font-size: larger;
  height: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  border: 1px solid ${(props) => props.theme.black};
  padding: 0px 30px 20px 30px;
  border-radius: 20px;
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .project-name {
      text-transform: uppercase;
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
`;
