import styled from "styled-components";

export const ProjectDetailsWrapper = styled.div`
  @media screen and (min-width: 380px) {
    margin: 0rem 2rem;
  }
  @media screen and (min-width: 500px) {
    margin: 0rem 3rem;
  }
  @media screen and (min-width: 700px) {
    margin: 0rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    max-width: 1200px;
    margin: 5rem auto;
    padding: 0rem 4rem;
  }
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

  @media screen and (min-width: 900px) {
    flex-flow: row;
  }
`;

export const ProjectDetailsIntroDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VisitWebsiteLink = styled.div`
  margin-left: auto;
  align-self: center;
`;

export const ProjectSnapshotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (min-width: 900px) {
    align-self: auto;
    margin-right: 2rem;
  }
  @media screen and (min-width: 1000px) {
    margin-right: 3rem;
  }
`;

export const SnapshotSection = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-bottom: 0.7rem;
  a {
    color: ${(props) => props.theme.greenSecondary};
    &:hover {
      color: ${(props) => props.theme.grey};
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
  background-color: ${(props) => props.theme.pink};
  padding: 3rem;
  gap: 3rem;
  border-radius: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

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
`;

export const ProjectDetailsSection = styled.div`
  margin-bottom: 4rem;
`;

export const Swatch = styled.div`
  background: white;
  width: 100%;
  height: 15px;
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
`;

export const ProjectDetailsBackgroundSection = styled.div`
  h2 {
    margin-top: 0;
  }
`;
