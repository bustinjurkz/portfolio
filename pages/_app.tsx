import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Layout>
    </ThemeProvider>
  );
}
