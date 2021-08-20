/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Heading } from "../components/heading/Heading";
import IconList from "../components/iconList/IconList";
import Navbar from "../components/navbar/Navbar";

function Portfolio() {
  const work = [
    {
      iconImage: "barclays-logo.png",
      title: "Barclays Home Insurance",
      year: "2013",
      description:
        "A web application that enabled Barclays customers to purchase Home Insurance.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "tsb-logo.png",
      title: "TSB Home Insurance",
      year: "2016",
      description:
        "A web application that enabled TSB customers to purchase Home Insurance.  Traditionally the choice of home insurance is limited to buildings, contents or both however this web application enabled customers to select a number of options to shape their home insurance around their needs.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "tsb-logo.png",
      title: "TSB Travel Insurance",
      year: "2017",
      description:
        "A web application that enabled TSB customers to purchase Travel Insurance.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "marks-and-spencer-logo.png",
      title: "Marks and Spencer Home Insurance",
      year: "2018",
      description:
        "A web application that enabled Marks and Spencer customers to purchase Home Insurance.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "marks-and-spencer-logo.png",
      title: "Marks and Spencer Travel Insurance",
      year: "2018",
      description:
        "A web application that enabled Marks and Spencer customers to purchase Home Insurance.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "hsbc-logo.png",
      title: "HSBC Select and Cover",
      year: "2019",
      description:
        "A web application that enabled HSBC customers to select between 3 and 7 coverers at a fixed price subscription, offering cover for travel, home emergencies, breakdown, excess, mobile phones, gadget and life.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "barclays-logo.png",
      screenGrab: "ain.jpg",
      title: "Barclays Home Insurance Revamp",
      year: "2019",
      description:
        "We gave the Barclays home insurance web application a complete overhaul, refreshing the look and feel inline with thier latest style guides as well as reducing the questions asked during the quote stage to a bare minimum.",
      technologies: ["C#", "Razor", "MVC", ".NET", "HTML", "CSS", "jQuery"],
    },
    {
      iconImage: "santander-logo.png",
      screenGrab: "santander.jpg",
      title: "Santander Home Insurance",
      year: "2020",
      description:
        "A web application that enabled Santander customers to purchase Home Insurance.",
      technologies: [
        "React",
        ".NET Core",
        "HTML5",
        "SCSS",
        "JavaScript",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      iconImage: "aviva-logo.png",
      screenGrab: "wpp.jpg",
      title: "Aviva Workplace Pensions",
      year: "2021",
      description:
        "A web application that enabled employees of businesses to select Aviva pension products for their retirement.",
      technologies: [
        "React",
        ".NET Core",
        "HTML5",
        "SCSS",
        "JavaScript",
        "Jest",
        "Enzyme",
      ],
    },
    {
      iconImage: "vh-netball-logo.png",
      screenGrab: "vh-netball.jpg",
      title: "Victoria Hawkins Memorial Netball Tournament",
      year: "2021",
      description:
        "A web site for a charity netball event raising money for Nelsons Journey. This website enabled teams to book a space, pay their entry fee and get information on the days events.",
      technologies: ["React", "HTML5", "CSS", "JavaScript"],
    },
    {
      iconImage: "chris-marston-logo.png",
      title: "My personal website",
      year: "2021",
      description:
        "A personal website to host my CV and showcase the deliveries that I have worked on and managed over the years.",
      technologies: ["Next.js", "HTML5", "CSS", "JavaScript"],
    },
  ];

  const languages = ["HTML", "CSS", "JavaScript (ES6+)", "C#"];

  const frameworksLibraries = [
    "React",
    "Next.js",
    "jQuery",
    "Tailwind",
    "Ant Design",
    ".NET MVC",
    "Jest",
    "React Testing Library",
    "Enzyme",
    "N-Unit",
    "X-Unit",
  ];

  const tools = ["VS Code", "Visual Studio", "GIT", "Photoshop"];

  const experiencedIn = [
    "Exceed",
    "Guidewire",
    "AWS",
    "Azure Dev Ops",
    "Netlify",
    "Heroku",
  ];

  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <Head>
        <title>
          Chris Marston | Portfolio | Lead Software Developer | Javascript React
          C#
        </title>
      </Head>
      <main>
        <Navbar />

        <div className="flex">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 pr-4 lg:pr-40 mb-16 lg:mb-0">
              <h1 className="font-serif">
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
                {work.reverse().map((item) => (
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
                    <p className="col-span-10 text-sm text-gray-500">
                      {item.technologies.map((skill) =>
                        skill !==
                        item.technologies[item.technologies.length - 1]
                          ? `${skill}, `
                          : `${skill}`
                      )}
                    </p>
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
                      className="list-disc list-inside ml-2 leading-10"
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
                  {frameworksLibraries.map((item) => (
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
