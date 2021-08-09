import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Chris Marston - Curriculum Vitae - Lead developer with over 20 years’ experience in IT, with a track
          record of delivering high quality web applications for high profile brands.  Click on those blue words above to find out more."
          />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
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

export default MyDocument;
