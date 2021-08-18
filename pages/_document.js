import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { Container } from "../components/container/Container";

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
          <Container className="flex mx-auto pt-5 sm:pt-10 justify-between lg:max-w-screen-xl">
            <a className="flex align-middle" href="/">
              <div className="px-3 mr-2 rounded-full bg-blue-500 font-semibold text-white text-center text-3xl font-mono leading-10">
                C
              </div>
              <div className="leading-10">
                Chris <span className="font-bold">Marston</span>
              </div>
            </a>

            <nav className="hidden md:block leading-10">
              <ul className="flex">
                <li className="pr-4 font-bold">
                  <Link href="/">CV</Link>
                </li>
                <li className="pr-4">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </Container>

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
