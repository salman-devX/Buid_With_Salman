export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string; // path under /public or a remote https URL
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fruitai",
    name: "Fruit Vision AI",
    category: "AI / ML",
    description:
      "Identifies fruit type from an uploaded image and returns a confidence score using a pretrained ResNet-50 classification model. Logs prediction history and includes an authenticated admin dashboard to review past uploads, plus calorie and nutrition lookups with a fallback when the source is unavailable.",
    tech: ["Python", "Flask", "ResNet-50", "SQLite", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/salman-devX/Fruit-Vision-Ai",
    liveUrl: "https://fruit-vision-ai.onrender.com/",
    image: "/projects/fruitai-cover.jpg",
    featured: true,
  },
  {
    slug: "autonova",
    name: "AutoNova",
    category: "SaaS",
    description:
      "A car service center management system covering appointment booking with live slot availability, real-time service tracking, digital vehicle inspection checklists, parts and inventory tracking, automatic invoicing, and role-based dashboards for admins, receptionists, mechanics and customers.",
    tech: ["React", "Vite", "React Router", "React Hook Form", "Recharts", "Node.js", "MongoDB", "Firebase"],
    githubUrl: "https://github.com/salman-devX/AutoNova",
    liveUrl: "https://frontend-rho-one-nq0emiowx4.vercel.app/",
    image: "/projects/autonova-cover.jpg",
    featured: true,
},
  {
    slug: "faizan-moto-hub",
    name: "Faizan Moto Hub",
    category: "Automotive",
    description:
      "A smart service platform connecting vehicle owners with a workshop in Lahore, covering motor work, electrical faults, denting and painting. Customers can request services and track progress, while an admin dashboard manages customers, requests and staff across every service category.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "SQLite"],
    githubUrl: "https://github.com/salman-devX/faizan-moto-hub",
    liveUrl: "https://faizan-moto-hub-1.onrender.com/",
    image: "/projects/faizan-moto-hub-cover.jpg",
    featured: true,
  },
];
