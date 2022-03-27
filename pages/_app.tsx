import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  const [container, setContainer] = useState<any>(undefined);

  // Main scrolling container is 'main' component in this app
  useEffect(() => {
    setContainer(document.getElementById("main"));
  }, []);

  return (
    <ParallaxProvider scrollContainer={container}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ParallaxProvider>
  );
}
