import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  white: "#f6faf6",
  black: "#3b4250",
  grey: "#8b93a3",
  vintage1: "#e8d1c5",
  vintage2: "#eddcd2",
  vintage3: "#fff1e6",
  vintage4: "#f0efeb",
  vintage5: "#eeddd3",
  vintage6: "#edede8",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
