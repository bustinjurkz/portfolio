import { styled } from "styled-components";

interface SectionHeaderProps {
  headerText: string;
}
export const SectionHeader = ({ headerText }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrapper>
      <SectionHeaderText>{headerText}</SectionHeaderText>
    </SectionHeaderWrapper>
  );
};

const SectionHeaderWrapper = styled.div`
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
`;

const SectionHeaderText = styled.h2`
  letter-spacing: 3px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  align-content: center;
  z-index: 1;
  height: inherit;
  width: 100%;
  text-align: center;
  margin-right: 2px;
  font-size: 1.125rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
