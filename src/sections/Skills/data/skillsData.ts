import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
        percent: 90,
        description:
          "Semantic HTML5 structure focused on accessibility and SEO.",
      },
      {
        name: "CSS",
        icon: SiCss,
        color: "#1572B6",
        percent: 85,
        description:
          "Modern layouts using Flexbox, Grid and responsive design.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        percent: 80,
        description: "ES6+, DOM manipulation, async patterns and browser APIs.",
      },
    ],
  },
  {
    title: "Frontend Stack",
    skills: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        percent: 75,
        description:
          "Typed JavaScript for scalable and maintainable applications.",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        percent: 85,
        description:
          "Component based UI development with hooks and reusable architecture.",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#06B6D4",
        percent: 90,
        description:
          "Utility‑first CSS framework for rapid and consistent UI design.",
      },
    ],
  },
];
