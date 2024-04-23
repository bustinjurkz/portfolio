import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Dustin Jurkaulionis - Portfolio" />
          <meta
            property="og:description"
            content="Dustin Jurkaulionis' portfolio - view my past and current projects. Let's collaborate!"
          />
          <meta property="og:url" content="https://dustinjurkaulionis.com" />
          <meta
            property="og:image"
            content="https://www.dustinjurkaulionis.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdustin_hero_background_3.fe5b2734.jpg&w=1000&q=75"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
