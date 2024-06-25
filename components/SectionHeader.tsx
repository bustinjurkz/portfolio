import { styled } from "styled-components";

interface SectionHeaderProps {
  headerText: string;
}
export const SectionHeader = ({ headerText }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrapper>
      <SectionHeaderText>{headerText}</SectionHeaderText>

      <RightSidePattern />
    </SectionHeaderWrapper>
  );
};

const RightSidePattern = styled.div`
  width: 57%;
  background-color: #dadada;
  height: 55px;
`;

const SectionHeaderWrapper = styled.div`
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
`;

const SectionHeaderText = styled.h2`
  letter-spacing: 3px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  align-content: center;
  z-index: 1;
  height: inherit;
  width: 43%;
  text-align: center;
  margin-right: 2px;
`;
