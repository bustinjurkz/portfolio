import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  white: "#f6faf6",
  black: "#3b4250",
  grey: "#8b93a3",
  red: "#76323F",
  green: "#a7e7d8",
  cardBackground: "#eceff4",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
