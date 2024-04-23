import { motion, useInView } from "framer-motion";
import { MutableRefObject, useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 1,
  });

  return (
    <TechStackWrapper ref={ref}>
      {isInView &&
        svgComponents.map((svg, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: -20,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.15 + index * 0.2 }}
          >
            <IconWrapper>
              <svg.component color={"#3b4250"} />
              <IconLabel>{svg.label}</IconLabel>
            </IconWrapper>
          </motion.div>
        ))}
    </TechStackWrapper>
  );
};

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
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
