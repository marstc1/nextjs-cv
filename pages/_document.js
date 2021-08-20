import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { Container } from "../components/container/Container";
import Navbar from "../components/navbar/Navbar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const year = new Date().getFullYear();

    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Lead developer with over 20 years’ experience in IT, with a track
        record of delivering high quality web applications for high profile brands.  Click on those blue words above to find out more."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="ml-6 mr-6 sm:ml-12 sm:mr-12">
          <Main />

          <Container
            className="flex justify-center mt-16"
            tag={Container.tags.footer}
            padBottom={false}
          >
            <p className="text-xs">Copyright © {year} - Chris Marston</p>
          </Container>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
