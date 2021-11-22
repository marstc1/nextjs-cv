/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import { Heading } from '../components/heading/Heading';
import Navbar from '../components/navbar/Navbar';
import { links } from '../data/links';
import {
  experiencedIn,
  frameworks,
  languages,
  tools,
  work,
} from '../data/portfolio';

function Portfolio() {
  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <Head>
        <title>
          Chris Marston | Portfolio | Lead Software Developer | Javascript React
          C#
        </title>
      </Head>
      <main>
        <Navbar links={links} />

        <div className="flex">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 pr-4 lg:pr-40 mb-16 lg:mb-0">
              <h1 className="font-serif leading-tight">
                Here are some of the{" "}
                <span className="font-semibold">many websites</span> I have
                worked on over the years
              </h1>

              <p className="pt-10 text-lg leading-10">
                I have had the pleasure of building everything from small
                websites to complex web applications for large organizations,
                such as Aviva, TSB, Barclays, HSBC and Marks and Spencer.
              </p>

              <div className="pt-2">
                {work.map((item) => (
                  <div
                    key={`work-${item.title}`}
                    className="group grid grid-cols-12 pt-16"
                  >
                    <img
                      alt=""
                      className="icon shadow-2xl rounded-lg col-span-2 row-span-5 transition-all duration-700 transform group-hover:-rotate-6 group-hover:scale-105"
                      src={`/images/${item.iconImage}`}
                      width="60"
                      height="60"
                    />
                    <h2 className="col-span-10 font-semibold pt-3">
                      {item.title}
                    </h2>
                    {item.screenGrab && (
                      <img
                        alt={`${item.title} screen capture`}
                        className="col-span-10 shadow-xl m-4 mb-8"
                        src={`/images/${item.screenGrab}`}
                        width="100%"
                      />
                    )}
                    <p className="col-span-10 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-sm text-gray-600">
              <div className="mb-16">
                <Heading tag={Heading.tags.h2} isRightAligned>
                  Languages I speak
                </Heading>
                <ul>
                  {languages.map((item) => (
                    <li
                      className="list-disc list-inside ml-8 leading-10"
                      key={`lang-${item}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-16">
                <Heading tag={Heading.tags.h2} isRightAligned>
                  Frameworks I use
                </Heading>
                <ul>
                  {frameworks.map((item) => (
                    <li
                      className="list-disc list-inside ml-8 leading-10"
                      key={`frameworks-${item}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-16">
                <Heading tag={Heading.tags.h2} isRightAligned>
                  Tools I use
                </Heading>
                <ul>
                  {tools.map((item) => (
                    <li
                      className="list-disc list-inside ml-8 leading-10"
                      key={`tools-${item}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Heading tag={Heading.tags.h2} isRightAligned>
                  Experienced in
                </Heading>
                <ul>
                  {experiencedIn.map((item) => (
                    <li
                      className="list-disc list-inside ml-8 leading-10"
                      key={`ex-${item}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
