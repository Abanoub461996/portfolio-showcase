export type SkillCategory = "frontend" | "frameworks" | "tools" | "concepts";

export const skillCategories: Record<SkillCategory, string[]> = {
  frameworks: [
    "React.js",
    "Angular (14+)",
    "Next.js (App Router)",
    "Vue.js (3+)",
  ],
  frontend: [
    "HTML5",
    "CSS3/SCSS",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Redux Toolkit",
    "Redux Saga",
    "Tailwind CSS",
    "Material UI",
    "Styled Components",
    "Progressive Web App",
  ],
  tools: [
    "Webpack",
    "Native ES Modules",
    "Service Workers",
    "Version Control (GitHub & GitLab)",
    "Postman",
    "Swagger",
    "Figma",
  ],
  concepts: [
    "SEO Principles",
    "Data Structures & Algorithms",
    "Design Patterns",
    "Cross Browser Compatibilities",
    "Object Oriented Programming",
    "DevOps Tasks",
  ],
};

export type SkillVisual = {
  name: string;
  level: number;
  color: string;
};

export const skillVisuals: SkillVisual[] = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "Next.js", level: 85, color: "bg-indigo-500" },
  { name: "TypeScript", level: 95, color: "bg-blue-600" },
  {
    name: "Redux / Redux Toolkit / Redux Saga",
    level: 85,
    color: "bg-purple-600",
  },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "Angular", level: 60, color: "bg-red-600" },
];
