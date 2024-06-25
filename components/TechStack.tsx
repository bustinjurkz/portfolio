import { styled } from "styled-components";
import {
  ReactSVG,
  DotnetSVG,
  NodeJSSVG,
  NextJSSVG,
  GraphqlSVG,
  PrismaSVG,
  MySqlSVG,
  TypeScriptSVG,
  CypressSVG,
} from "../data/TechStackSVGs";

const svgComponents = [
  { component: ReactSVG, label: "React" },
  { component: TypeScriptSVG, label: "TypeScript" },
  { component: DotnetSVG, label: "Dotnet" },
  { component: NodeJSSVG, label: "Node.js" },
  { component: NextJSSVG, label: "Next.js" },
  { component: GraphqlSVG, label: "GraphQL" },
  { component: PrismaSVG, label: "Prisma" },
  { component: MySqlSVG, label: "mysql" },
  { component: CypressSVG, label: "Cypress" },
];

export const TechStack = () => {
  return (
    <TechStackWrapper>
      {svgComponents.map((svg, index) => (
        <IconWrapper key={index}>
          <svg.component color={"#3b4250"} />
          <IconLabel>{svg.label}</IconLabel>
        </IconWrapper>
      ))}
    </TechStackWrapper>
  );
};

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.15rem;
  }
  @media (min-width: 850px) {
    gap: 2.25rem;
  }
  @media (min-width: 1015px) {
    gap: 3rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35px;

  @media (min-width: 850px) {
    width: 40px;
  }

  @media (min-width: 1015px) {
    width: 45px;
  }
`;

const IconLabel = styled.span`
  color: ${(props) => props.theme.primary};
  margin-top: 0.25rem;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
`;
