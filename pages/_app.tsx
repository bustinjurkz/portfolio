import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const theme = {
  secondary: "#4B5D67",
  primary: "#322F3D",
  white: "#f6faf6",
  purplePrimary: "#59405C",
  purpleSecondary: "#87556F",
  background: "#1f2028",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
