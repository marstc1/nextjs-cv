/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Container } from "../components/container/Container";
import { Heading } from "../components/heading/Heading";

import data from "../data/data";
import TimelineList from "../components/timelineList/TimelineList";
import IconList from "../components/iconList/IconList";
import ButtonLink from "../components/buttonLink/ButtonLink";
import { Download } from "styled-icons/boxicons-solid";
import Navbar from "../components/navbar/Navbar";

const { personalInfo, skills, interests, education, experience, contacts } =
  data;
const { tags } = Heading;

export default function Home() {
  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <Head>
        <title>
          Chris Marston | CV | Lead Software Developer | Javascript React C#
        </title>
      </Head>

      <main>
        <Navbar />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12">
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
                >
                  <span>{personalInfo.firstName.toUpperCase()}</span>
                  <br />
                  <span className="font-bold">
                    {personalInfo.lastName.toUpperCase()}
                  </span>
                </Heading>

                <div className="flex justify-around">
                  <ButtonLink href="/chris-marston-cv.pdf" target="_blank">
                    Download CV
                    <Download alt="PDF" className="inline h-5 w-5 ml-2" />
                  </ButtonLink>
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
              className="lg:row-span-5 lg:col-span-8 lg:pl-8 lg:pb-0"
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
          </div>
        </div>
      </main>
    </div>
  );
}
