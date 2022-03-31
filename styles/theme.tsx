import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  white: "#f6faf6",
  black: "#3b4250",
  darkBlue: "#1d1e2b",
  whiteContrast: "#cacaca",
  grey: "#8b93a3",
  darkGrey: "#4F5D75",
  red: "#f5d9d5",
  green: "#3C9B85",
  blue: "#eceff4",
  biggestFont: "90px",
  bigFont: "70px",
  gradient: "linear-gradient(120deg, #4f5d75 0%, #f5d9d5 100%)",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
