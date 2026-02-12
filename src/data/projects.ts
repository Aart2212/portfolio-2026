export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "FitLife.ai",
    description: "An AI-powered fitness platform that generates personalized workout plans using smart logic and a clean, responsive MERN interface. Focused on user engagement and scalable backend architecture.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "AI Logic"],
    link: "#",
  },
  {
    title: "Service Hub",
    description: "A comprehensive service marketplace platform where users can browse, list, and manage services. Architected as a scalable SaaS product with future monetization and global deployment in mind.",
    tech: ["MongoDB", "Express", "React", "Node", "REST APIs"],
    link: "#",
  },
];