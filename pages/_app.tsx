import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
declare global {
  interface Window {
    __forceSmoothScrollPolyfill__: any;
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  const [container, setContainer] = useState<any>(undefined);
  // Main scrolling container is 'main' component in this app
  useEffect(() => {
    if (window != undefined) {
      window.__forceSmoothScrollPolyfill__ = true;
      smoothscroll.polyfill();
    }
    setContainer(document.getElementById("main"));
  }, []);

  return (
    <>
      <Head>
        <title>DJ Portfolio</title>
      </Head>
      <ParallaxProvider scrollContainer={container}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}
