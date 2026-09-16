import { Code2, Layers, Smartphone, Plug, Database, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end applications built on the MERN stack, from database schema to deployed UI.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, maintainable websites built with modern frameworks and clean, readable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI Development",
    description: "Interfaces that adapt cleanly across desktop, tablet and mobile without compromise.",
  },
  {
    icon: Plug,
    title: "REST API Development",
    description: "Well-structured, documented APIs designed for reliability and easy integration.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Schema design and integration with MongoDB, MySQL or SQLite depending on the use case.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description: "Wiring machine learning and computer vision models into usable, production-ready web apps.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Clean & Maintainable Code",
    description: "Code that's easy to read, extend and hand off — not just code that works.",
  },
  {
    title: "Responsive Design",
    description: "Every layout is tested and tuned across breakpoints, not just designed for desktop.",
  },
  {
    title: "Performance Focused",
    description: "Lean bundles, lazy loading and optimized assets so pages load fast by default.",
  },
  {
    title: "Modern Technology",
    description: "A current stack — Next.js, TypeScript, Tailwind — chosen for speed and longevity.",
  },
  {
    title: "Problem Solving",
    description: "Comfortable breaking down ambiguous requirements into a working technical plan.",
  },
  {
    title: "Continuous Learning",
    description: "Actively building with new tools and techniques, from AI integration to system design.",
  },
];
