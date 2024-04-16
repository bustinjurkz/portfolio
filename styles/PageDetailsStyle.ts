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

export const SpecialListStyle = styled.div`
  background: white;
  margin: 20px 0px 20px 20px;
  padding: 20px 15px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  a {
    color: ${(props) => props.theme.greenSecondary};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.darkBlue};
    }
  }
`;

export const ListStyle = styled.div`
  li {
    margin: 1.5rem 0rem;
  }
  ul {
    display: block;
    margin-left: -10px;
  }

  ul li {
    display: block;
    position: relative;
  }

  ul li:not(:last-child) {
    margin-bottom: 16px;
  }

  ul li:before {
    content: "";
    position: absolute;
    top: 1.2em;
    left: -30px;
    margin-top: -0.9em;
    background: ${(props) => props.theme.grey};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

export const ProjectDetailsIntroWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 3rem;
  height: 100%;
  position: relative;
  width: 100%;
  justify-content: space-between;

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
  align-self: center;
  margin: 4rem 0rem;
  @media screen and (min-width: 900px) {
    align-self: flex-start;
  }
`;

export const ProjectSnapshotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (min-width: 900px) {
    align-self: auto;
    margin-left: 2rem;
  }
  @media screen and (min-width: 1000px) {
    margin-left: 3rem;
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
`;

export const ImageContainer = styled.div`
  background: ${(props) => props.theme.blue};
  padding: 8px;
  border-radius: 15px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  img {
    border-radius: 15px;
  }

  @media screen and (min-width: 800px) {
    margin-top: 4rem;
  }
`;

export const ImageLabel = styled.div`
  padding: 15px 10px;
  text-align: center;
  font-size: 0.9rem;
  text-align: left;
`;
