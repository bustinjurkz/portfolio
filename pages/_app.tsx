import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Layout } from "../components/Layout";
import { theme } from "../styles/theme";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import localFont from "@next/font/local";
import { ContentsWrapper, InnerWrapper } from "../styles/ContentsStyle";

declare global {
  interface Window {
    __forceSmoothScrollPolyfill__: any;
  }
}
const myFont = localFont({
  src: [
    {
      path: "../public/ppneuemontreal-book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/ppneuemontreal-medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps, router }: AppProps) {
  const [container, setContainer] = useState<any>(undefined);

  useEffect(() => {
    if (window != undefined) {
      window.__forceSmoothScrollPolyfill__ = true;
      smoothscroll.polyfill();
    }
    setContainer(document.getElementById("scrollable-element"));
  }, []);

  return (
    <main className={myFont.className}>
      <Head>
        <title>DJ Portfolio</title>
        <meta
          name="description"
          content="Dustin Jurkaulionis' portfolio - view my past and current projects. Let's collaborate!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ContentsWrapper>
          <InnerWrapper>
            <Navbar />
            <Layout>
              <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => {
                  container.scrollTop = 0;
                }}
              >
                <motion.div
                  key={router.route}
                  initial="pageInitial"
                  animate="pageAnimate"
                  transition={{ duration: 0.5 }}
                  exit="pageExit"
                  variants={{
                    pageInitial: {
                      opacity: 0,
                      x: 250,
                    },
                    pageAnimate: {
                      opacity: 1,
                      x: 0,
                    },
                    pageExit: {
                      opacity: 0,
                      x: -250,
                    },
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </Layout>
          </InnerWrapper>
        </ContentsWrapper>
      </ThemeProvider>
    </main>
  );
}
