/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

function Portfolio() {
  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <Head>
        <title>
          Chris Marston | Contact | Lead Software Developer | Javascript React
          C#
        </title>
      </Head>
      <main>
        <Navbar />

        <div className="flex">
          <div className="grid grid-cols-1 lg:grid-cols-12"></div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
