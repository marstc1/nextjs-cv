import { Container } from "../components/container/Container";
import DefinitionList from "../components/definitionList/DefinitionList";
import UnorderedList from "../components/unorderedList/UnorderedList";
import Link from "next/link";
import { PencilFill, TelephoneFill } from "styled-icons/bootstrap";
import { Globe, Mail } from "styled-icons/entypo";
import { Applearcade } from "styled-icons/simple-icons";
import { Guitar } from "styled-icons/fluentui-system-filled";
import { VolunteerActivism } from "styled-icons/material-rounded";
import { Footsteps } from "styled-icons/ionicons-solid";

const data = {
  personalInfo: {
    firstName: "Chris",
    lastName: "Marston",
    profilePic: "/me.jpg",
    profile: (
      <>
        <p>
          Lead developer with over 20 years’ experience in IT, with a track
          record of delivering high quality web applications for high profile
          brands such as Aviva, Santander, Barclays, HSBC, TSB, Marks and
          Spencer and First Direct.
        </p>
        <p>
          Experience as a team lead, managing technical deliveries, coaching
          junior developers and setting code quality standards.
        </p>
        <p>
          Great problem solver and extremely motivated to learn new skills and
          technologies.
        </p>
      </>
    ),
  },
  skills: [
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "Next.js",
    },
    {
      name: "jQuery",
    },
    {
      name: "HTML5",
    },
    {
      name: "CSS3",
    },
    {
      name: "C#",
    },
    {
      name: ".NET MVC",
    },
    {
      name: "Service Virtualisation",
    },
  ],
  interests: [
    {
      icon: <Applearcade className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Building arcade machines",
    },
    {
      icon: <Guitar className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Playing the guitar",
    },
    {
      icon: <PencilFill className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Drawing",
    },
    {
      icon: <VolunteerActivism className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Volunteering",
    },
    {
      icon: <Footsteps className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Walking / Running",
    },
  ],
  experience: [
    {
      leftHeading: "Oct 2017 - Present",
      rightHeading: "Lead Software Engineer",
      subHeading: "Aviva, Norwich",
      notes: (
        <a
          href="http://www.aviva.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aviva.com
        </a>
      ),
      details: (
        <Container padBottom={false}>
          <DefinitionList
            id="LeadSoftwareEngineerResponsibilities"
            definitionTerm="Responsibilities"
            listItems={[
              "Leading Aviva’s External Banking Partners Development Team (13 people)",
              "Resource planning and managing stakeholder expectations",
              "Managing / monitoring the continuous integration environment",
              "Architecting solutions",
              "Developing dynamic user interfaces (HTML 5, CSS, JavaScript, React)",
              "Developing back end functionality (C# ASP.net MVC)",
              "Gatekeeping code merge requests",
              "Driving continuous Agile improvements across the development teams",
            ]}
          />

          <DefinitionList
            id="LeadSoftwareEngineerKeyHighlights"
            definitionTerm="Key highlights"
            listItems={[
              "Delivering high quality applications for Santander, Barclays, HSBC, Marks and Spencer and First Direct",
              "Nominated for the Aviva CIO Unsung Hero award",
              "Coaching and mentoring interns and apprentices",
              "Created the first Guilds within Aviva Digital driving the ethos of community and continuous improvement",
              "Created a lead dev forum ensuring shared knowledge across leads to enable efficient team working",
              "Migrating our estate onto Amazon Web Services",
              "Implementing service virtualisation, enabling productivity during maintenance windows",
              "Working in an Agile environment",
            ]}
          />
        </Container>
      ),
    },
    {
      leftHeading: "Apr 2012 – Oct 2017",
      rightHeading: "Software Engineer",
      subHeading: "Aviva, Norwich",
      details: (
        <DefinitionList
          id="SoftwareEngineerResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Application development for Barclays and TSB (Aviva’s External Banking Partners)",
          ]}
        />
      ),
    },
    {
      leftHeading: "Jan 2007 – Apr 2012",
      rightHeading: "Work Packet Manager",
      subHeading: "Aviva, Norwich",
      details: (
        <DefinitionList
          id="WPMResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Managing multiple deliveries and development teams",
            "Line management (6 people)",
          ]}
        />
      ),
    },
    {
      leftHeading: "Oct 2005 – Dec 2006",
      rightHeading: "Web Developer",
      subHeading: "Aviva, Norwich",
      details: (
        <DefinitionList
          id="WebDeveloperResponsibilities"
          definitionTerm="Responsibilities"
          listItems={["VB6 Application Development"]}
        />
      ),
    },
    {
      leftHeading: "Jun 2002 – Oct 2005",
      rightHeading: "Intranet Developer",
      subHeading: "Aviva, Norwich",
    },
    {
      leftHeading: "Apr 1999 – Jun 2002",
      rightHeading: "Computer Technician",
      subHeading: "PC World, Norwich",
    },
    {
      leftHeading: "Mar 1998 – Apr 1999",
      rightHeading: "Apple Computer Technician",
      subHeading: "Mac City, Norwich",
    },
  ],
  education: [
    {
      leftHeading: "1997 - 1998",
      rightHeading: "Norfolk Training Services, Norwich",
      details: "NVQ Information Technology Level 3",
    },
    {
      leftHeading: "1996 - 1997",
      rightHeading: "Quest, Gt. Yarmouth",
      details: "NVQ Information Technology Level 2",
    },
    {
      leftHeading: "1992 - 1996",
      rightHeading: "Flegg High School, Martham",
      details: "10 GCSE’s",
    },
  ],
  contacts: [
    {
      id: "telephone",
      icon: <TelephoneFill className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: <a href="tel:07771348547">07771 348547</a>,
    },
    {
      id: "email",
      icon: <Mail className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: (
        <a href="mailto:christopher.marston@hotmail.co.uk">
          christopher.marston@hotmail.co.uk
        </a>
      ),
    },
    {
      id: "website",
      icon: <Globe className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: <Link href="/">www.chris-marston.co.uk</Link>,
    },
  ],
};

export default data;
