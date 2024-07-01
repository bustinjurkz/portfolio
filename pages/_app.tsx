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
  const handleExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <main className={myFont.className}>
      <Head>
        <title>Dustin Jurkaulionis Portfolio</title>
        <meta
          name="description"
          content="Dustin Jurkaulionis' portfolio - view my past and current projects. Let's work together!"
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
                onExitComplete={handleExitComplete}
              >
                <motion.div
                  key={router.route}
                  initial="pageInitial"
                  animate="pageAnimate"
                  transition={{ duration: 0.35 }}
                  exit="pageExit"
                  variants={{
                    pageInitial: {
                      opacity: 0,
                      x: 50,
                    },
                    pageAnimate: {
                      opacity: 1,
                      x: 0,
                    },
                    pageExit: {
                      opacity: 0,
                      x: -50,
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
