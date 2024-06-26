import { styled } from "styled-components";

export const ContentsWrapper = styled.div``;

export const InnerWrapper = styled.div`
  padding: 0 1rem;
  max-width: 1100px;
  margin: auto;

  @media (min-width: 450px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 525px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 850px) {
    padding: 0 3rem;
  }
`;
