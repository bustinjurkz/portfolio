import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const theme = {
  white: "#f6faf6",
  black: "#3b4250",
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
