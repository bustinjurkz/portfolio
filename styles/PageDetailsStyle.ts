import styled from "styled-components";

export const ProjectDetailsWrapper = styled.div`
  margin: 2rem 0;
`;

export const ProjectDetailsIntroWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 3rem;
  margin-bottom: 5rem;
  height: 100%;
  position: relative;
  width: 100%;
  justify-content: space-between;
  gap: 3rem;
`;

export const ProjectDetailsIntroDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VisitWebsiteLink = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const ProjectSnapshotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const SnapshotSection = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-bottom: 0.7rem;
  a {
    color: ${(props) => props.theme.secondary};
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const SnapshotHeader = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const SnapshotValue = styled.div`
  margin-bottom: 0.2rem;
`;

export const ProjectDetailsHeader = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  white-space: nowrap;
`;

export const NextButtonWrapper = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  width: 100%;
  justify-content: right;
`;

export const ProjectImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  outline: 1px solid white;
  outline-offset: -5px;

  img {
    border-radius: 15px;
    &:hover {
      cursor: zoom-in;
    }
  }
`;

export const ProjectDetailsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProjectDetailsSection = styled.div`
  margin-bottom: 4rem;
`;

export const Swatch = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-bottom: 4rem;
`;

export const SwatchColor = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  height: 100%;
  width: 100%;
`;

export const SubSection = styled.div`
  margin-top: 1rem;
  a {
    color: ${(props) => props.theme.secondary};
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const ProjectDetailsBackgroundSection = styled.div`
  h2 {
    margin-top: 0;
  }
`;

export const Tool = styled.div`
  cursor: default;
  color: ${(props) => props.theme.primary};
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.75rem;
`;
