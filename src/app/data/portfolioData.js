// data/portfolioData.ts
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiSass,
  SiShadcnui,
  SiGsap,
  SiAppwrite,
  SiReact,
  SiElectron,
  SiPostgresql,
  SiSocketdotio,
  SiWebrtc,
  SiTensorflow,
  SiRust,
  SiThreedotjs ,  
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// 🟢 MY BEST WORK (SHOWCASE PROJECTS)
export const featuredProjects = [
  {
    title: "Chat System",
    description:
      "Real-time chat application with messaging, calls, and live presence tracking.",
    tech: ["Socket.io", "WebRTC", "Next.js", "Express"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "Portfolio Builder",
    description:
      "A platform that generates developer portfolios automatically using templates.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Express"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "AI Notes App",
    description:
      "Smart notes application with AI summarization and organization features.",
    tech: ["Next.js", "TensorFlow.js", "MongoDB"],
    links: {
      github: "",
      live: "",
    },
  },
];

// 🚧 WHAT I'M BUILDING NEXT (PLANNED PROJECTS)

export const selectedProjects = [
  {
    title: "Engine",
    description:
      "A high-performance web system focused on speed, optimized architecture, and smooth frontend rendering.",
    tech: [
      "Next.js",
      "Tailwind",
      "Express",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "Zigo App",
    description:
      "A real-time modern platform with smooth UX, fast interactions, and scalable backend systems.",
    tech: [
      "Next.js",
      "Tailwind",
      "Express",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "Study Buddy",
    description:
      "An AI-powered learning companion that helps students study smarter with interactive tools and personalized assistance.",
    tech: [
      "Next.js",
      "TensorFlow.js",
      "Tailwind",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    links: {
      github: "",
      live: "",
    },
  },{
    title: "Portfolio Builder",
    description:
      "A platform that generates developer portfolios automatically using templates.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Express"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "Zigzag",
    description:
      "A platform for listening and uploading music.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Express"],
    links: {
      github: "",
      live: "",
    },
  },{
    title: "Pedium",
    description:
      "An ai bods build with tensorflow.js.",
    tech: ["Next.js", "TensorFlow.js","tailwind", "MongoDB", "Express"],
    links: {
      github: "",
      live: "",
    },
  }
];



export const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "GSAP", icon: SiGsap },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "Framer Motion", icon: TbBrandFramerMotion},
  {name: "Appwrite", icon: SiAppwrite},
  { name: "Convex", icon: FaCode },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Sass", icon: SiSass },
  { name: "Git", icon: FaGitAlt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

export const learningSkills = [
  { name: "React Native", icon: SiReact },
  { name: "Electron", icon: SiElectron },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "WebRTC", icon: SiWebrtc },
  { name: "TensorFlow.js", icon: SiTensorflow },
  { name: "Rust", icon: SiRust },
];