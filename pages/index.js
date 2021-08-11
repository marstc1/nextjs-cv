/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Container } from "../components/container/Container";
import { Heading } from "../components/heading/Heading";

import data from "../data/data";
import TimelineList from "../components/timelineList/TimelineList";
import IconList from "../components/iconList/IconList";

const { personalInfo, skills, interests, education, experience, contacts } =
  data;
const { tags } = Heading;

const year = new Date().getFullYear();

export default function Home() {
  return (
    <div className="mx-auto w-11/12 lg:max-w-screen-lg">
      <Head>
        <title>Chris Marston - CV</title>
        <meta name="description" content="Chris Marston - CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-12">
            <Container className="col-span-4" padBottom={false}>
              <Container tag={Container.tags.header} role="banner">
                <div className="flex justify-center">
                  <div className="overflow-hidden mb-2 border-8 border-white border-solid h-52 w-52 rounded-full shadow-xl">
                    <img
                      src={personalInfo.profilePic}
                      alt="Chris Marston"
                      height="200"
                      width="200"
                    />
                  </div>
                </div>

                <Heading
                  className="text-center mt-6"
                  tag={tags.h1}
                  isBold={false}
                  isUppercase={false}
                >
                  <span>{personalInfo.firstName.toUpperCase()}</span>
                  <br />
                  <span className="font-bold">
                    {personalInfo.lastName.toUpperCase()}
                  </span>
                </Heading>

                <div className="flex grid grid-cols-1 gap-2 mt-6 mb-1">
                  <a
                    className="flex justify-center text-sm"
                    href="tel:07771348547"
                  >
                    07771 348547
                  </a>
                  <a
                    className="flex justify-center text-sm"
                    href="mailto:christopher.marston@hotmail.co.uk"
                  >
                    christopher.marston@hotmail.co.uk
                  </a>
                </div>
              </Container>

              <Container>
                <Heading tag={tags.h2}>Profile</Heading>
                {personalInfo.profile}
              </Container>

              <Container className="col-span-4">
                <Heading tag={tags.h2}>Skills</Heading>
                <IconList className="md:grid-cols-2" listData={skills} />
              </Container>
            </Container>

            <Container
              className="lg:row-span-5 lg:col-span-8 lg:pl-8 lg:pb-0 lg:pt-8"
              padBottom={false}
            >
              <Container>
                <Heading isRightAligned tag={tags.h2}>
                  Experience
                </Heading>
                <TimelineList listData={experience} />
              </Container>

              <Container className="lg:pb-0">
                <Heading isRightAligned tag={tags.h2}>
                  Education
                </Heading>
                <TimelineList listData={education} />
              </Container>
            </Container>

            <Container className="col-span-4">
              <Heading tag={tags.h2}>Interests</Heading>
              <IconList listData={interests} />
            </Container>

            <Container className="col-span-4" padBottom={false}>
              <Heading tag={tags.h2}>Contact</Heading>
              <IconList listData={contacts} />
            </Container>

            <Container
              className="col-span-2 lg:col-span-12 flex justify-center"
              tag={Container.tags.footer}
              padBottom={false}
            >
              <p className="text-xs mt-28 mb-12">
                Copyright © {year} - Chris Marston
              </p>
            </Container>
          </div>
        </div>
      </main>
    </div>
  );
}
