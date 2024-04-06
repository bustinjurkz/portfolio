import { styled } from "styled-components";
import {
  ReactSVG,
  DotnetSVG,
  NodeJSSVG,
  NextJSSVG,
  GraphqlSVG,
  PrismaSVG,
  PostgresqlSVG,
  TypeScriptSVG,
  CypressSVG,
} from "../data/TechStackSVGs";

const svgComponents = [
  { component: ReactSVG, label: "React" },
  { component: DotnetSVG, label: "Dotnet" },
  { component: NodeJSSVG, label: "Node.js" },
  { component: NextJSSVG, label: "Next.js" },
  { component: GraphqlSVG, label: "GraphQL" },
  { component: PrismaSVG, label: "Prisma" },
  { component: PostgresqlSVG, label: "PostgreSQL" },
  { component: TypeScriptSVG, label: "TypeScript" },
  { component: CypressSVG, label: "Cypress" },
];

export const TechStack = () => {
  return (
    <TechStackWrapper>
      {svgComponents.map((svg, index) => (
        <IconWrapper key={index}>
          <svg.component color="black" />
          <IconLabel>{svg.label}</IconLabel>
        </IconWrapper>
      ))}
    </TechStackWrapper>
  );
};

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  gap: 1.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const IconLabel = styled.span`
  color: black;
  margin-top: 0.25rem;
`;
