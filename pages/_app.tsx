import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
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
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              transition={{ duration: 0.5 }}
              exit="pageExit"
              onAnimationComplete={() => {
                container.scrollTop = 0;
              }}
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
  );
}
