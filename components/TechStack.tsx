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
          <svg.component color={"#213821"} />
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
  gap: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
`;

const IconLabel = styled.span`
  color: black;
  margin-top: 0.25rem;
`;
