import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Temuulen Undrakhbayar",
  initials: "BJ",
  location: "Ulaanbaatar, Mongolia",
  locationLink: "https://maps.app.goo.gl/1UvSyuJPkwVfdsb8A",
  about:
    "Front-end Developer focused on building products with extra attention to detail",
  summary:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  avatarUrl: "https://avatars.githubusercontent.com/u/75017829?v=4",
  personalWebsiteUrl: "https://themuuln.vercel.app",
  contact: {
    email: "themuuln.mindshift@gmail.com",
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
      {
        name: "X",
        url: "https://x.com/themuuln",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "",
      degree: "",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Mongolian National Lottery",
      link: "https://www.19000000.mn/home",
      badges: [],
      title: "Technologist | IT professional Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Managed everything related to Tech",
    },
    {
      company: "Mindshift Technology LLC",
      link: "https://mindshift.mn/",
      badges: [],
      title: "Front-end Web Developer → Front-end Mobile Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "Present",
      description:
        "Developed and maintained web and mobile applications. Developed E-Commerce and Admin Dashboard application for B2B. Technologies:  React, TypeScript, React-Native",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/React Native",
    "TailwindCSS/ChakraUI",
    "SASS/SCSS/Styled Components",
    "Neovim",
    "Git",
  ],
  projects: [
    {
      title: "Auto-Commiter",
      techStack: [
        "Side Project",
        "YAML",
      ],
      description: "Consistent daily commits to keep your profile look active",
      logo: ConsultlyLogo,
      link: {
        label: "auto-committer",
        href: "https://github.com/themuuln/auto-committer",
      },
    },
    {
      title: "Numerology",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "Calculates your core numerology numbers based on your Birthday and Cyrillic or Latin based First/Last Name.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://numerology-rouge.vercel.app/",
      },
    },
  ],
} as const;
