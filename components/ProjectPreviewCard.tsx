import React from "react";
import styled from "styled-components";

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
      <div className="name">{props.name}</div>
      <div className="client">{props.client}</div>
      <div className="description">{props.description}</div>
      <div className="tools">{props.tools}</div>
    </ProjectPreviewCardStyle>
  );
};

const ProjectPreviewCardStyle = styled.div``;
