import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Temuulen Undrakhbayar",
  initials: "TU",
  location: "Ulaanbaatar, Mongolia",
  locationLink: "https://maps.app.goo.gl/qfRSUHbcTxf9aFXa7",
  about:
    "Web, Mobile Front-end Developer (Typescript | React) focused on building products with extra attention to detail",
  summary: `Confident, skilled, and ready to excel. While I may not have extensive years of experience, I bring a fresh perspective and a passion for growth. I am highly committed to continuously enhancing my skills and expanding my knowledge in the every field especially development. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. Hardworking and passionate job seeker with strong organizational skills eager to secure mid-level Front-end Developer position.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/75017829?v=4",
  personalWebsiteUrl: "https://themuuln.vercel.app",
  contact: {
    email: "themuuln0@gmail.com",
    tel: "+97688650115",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/themuuln",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/themuuln/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Erdmiin Urgoo Complex",
      degree: "High School Diploma",
      start: "2010",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Mongolian National Lottery",
      link: "https://www.19000000.mn/home",
      badges: [],
      title: "IT Technician",
      logo: ParabolLogo,
      start: "2022 Dec",
      end: "2023 Mar",
      description:
        "Provided technical support during TV broadcast, Helped and taught coworkers more efficient ways of working using their computers",
    },
    {
      company: "Mindshift Technology LLC",
      link: "https://mindshift.mn/",
      badges: [],
      title: "Front-end Web | Mobile Developer ",
      // →
      logo: ClevertechLogo,
      start: "2023 Jun",
      end: "Present",
      description:
        "Developed and maintained web and mobile applications on 3 different projects. Developed E-Commerce and Admin application for B2B.",
    },
    {
      company: "KhanAI (Side Hustle)",
      // link: "https://mindshift.mn/",
      badges: ["Prompt Engineering"],
      title: "General Manager",
      logo: ClevertechLogo,
      start: "2023 Sep",
      end: "Present",
      description:
        "Managed and coordinated with coworkers on AI Image orders, Researched new AI tools and utilities to improve efficiency and results",
    },
  ],
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "SASS/SCSS",
    "Styled Components",
    "Neovim",
    "Git",
    "Figma",
  ],
  projects: [
    {
      title: "Private Projects",
      techStack: ["React", "React Native"],
      status: "In Progress",
      description: "Not Visible for Public (+3 Projects)",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://google.com",
      },
    },
    {
      title: "Zatbot",
      techStack: ["NodeJS"],
      status: "In Progress",
      description: "Facebook Page Chatbot made for My Side Hustle",
      logo: ConsultlyLogo,
      link: {
        label: "Zatbot",
        href: "https://github.com/themuuln/zatbot",
      },
    },
    {
      title: "Rezume",
      techStack: ["Next.js"],
      status: "In Progress",
      description: "Resume Builder Web App for Made for Developers",
      logo: ConsultlyLogo,
      link: {
        label: "Rezume",
        href: "https://rezume-build.vercel.app",
      },
    },
    {
      title: "Supply Platform",
      techStack: ["Next.js", "Figma"],
      status: "Finished",
      description:
        "Designed and Developed our company's product introduction web in just 4 days",
      logo: ConsultlyLogo,
      link: {
        label: "B2B Supply",
        href: "https://b2b-supply.vercel.app",
      },
    },
    {
      title: "Xac Shop",
      techStack: ["Next.js", "Figma"],
      status: "Paused",
      description:
        "Men Accessories Shopping Web with fully functional made for My Future Side Hustle",
      logo: ConsultlyLogo,
      link: {
        label: "Xac Shop",
        href: "https://xac.vercel.app",
      },
    },
    {
      title: "Hybrid Portfolio",
      techStack: ["Next.js", "Figma"],
      status: "Finished",
      description:
        "Designed and Developed portfolio template for Creative Designer who can develop",
      logo: ConsultlyLogo,
      link: {
        label: "PPortfolio",
        href: "https://themuln.vercel.app",
      },
    },
    {
      title: "Zogictics",
      techStack: ["Next.js"],
      status: "Paused",
      description:
        "Refined system designed for cargo employees and clients to effortlessly track ordered shipments",
      logo: ConsultlyLogo,
      link: {
        label: "Zargo",
        href: "https://cargo-three.vercel.app/",
      },
    },
    {
      title: "Auto-Commiter",
      techStack: ["Side Project", "YAML"],
      status: "Finished",
      description: "Consistent daily commits to keep your profile look active",
      logo: ConsultlyLogo,
      link: {
        label: "auto-committer",
        href: "https://github.com/themuuln/auto-committer",
      },
    },
    {
      title: "Numerology",
      status: "Finished",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "Calculates your core numerology numbers based on your Birthday and Cyrillic or Latin based First/Last Name.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://numerology-rouge.vercel.app/",
      },
    },
    {
      title: "Dice-Roller (First Project)",
      status: "Finished",
      techStack: ["HTML", "CSS", "Javascript"],
      description: "First Ever Project",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://themuuln-dice.vercel.app/",
      },
    },
  ],
} as const;
