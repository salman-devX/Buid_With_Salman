export type Skill = {
  name: string;
  proficiency: number; // 0-100
  description: string;
};

export type SkillCategory = {
  category: string;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML/CSS",
        proficiency: 95,
        description: "Semantic markup, accessibility basics, responsive layouts",
      },
      {
        name: "JavaScript",
        proficiency: 90,
        description: "ES6+, async/await, DOM manipulation, closures",
      },
      {
        name: "TypeScript",
        proficiency: 80,
        description: "Interfaces, generics, type-safe React and API code",
      },
      {
        name: "React",
        proficiency: 88,
        description: "Hooks, context API, component architecture, state management",
      },
      {
        name: "Next.js",
        proficiency: 82,
        description: "App router, server components, API routes, deployment on Vercel",
      },
      {
        name: "Tailwind CSS",
        proficiency: 92,
        description: "Utility-first styling, custom themes, responsive breakpoints",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        proficiency: 82,
        description: "REST APIs, middleware, authentication flows",
      },
      {
        name: "Express.js",
        proficiency: 80,
        description: "Routing, middleware chains, error handling",
      },
      {
        name: "Flask",
        proficiency: 85,
        description: "Lightweight Python APIs, model serving, admin dashboards",
      },
      {
        name: "Java",
        proficiency: 70,
        description: "Core OOP, data structures, coursework projects",
      },
      {
        name: "C/C++",
        proficiency: 65,
        description: "Fundamentals, algorithms, memory management",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "SQL",
        proficiency: 78,
        description: "Schema design, joins, queries for relational data",
      },
      {
        name: "MongoDB",
        proficiency: 80,
        description: "Document modeling, aggregation pipelines, Mongoose",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        proficiency: 88,
        description: "Branching workflows, pull requests, version control hygiene",
      },
      {
        name: "Linux",
        proficiency: 75,
        description: "Shell basics, server navigation, deployment tasks",
      },
      {
        name: "Google Cloud Platform",
        proficiency: 65,
        description: "Basic hosting and cloud service configuration",
      },
      {
        name: "VS Code",
        proficiency: 95,
        description: "Daily driver editor, extensions, debugging workflows",
      },
      {
        name: "Visual Studio",
        proficiency: 60,
        description: "Used for C/C++ and Java coursework projects",
      },
    ],
  },
  {
    category: "AI / ML",
    items: [
      {
        name: "Python",
        proficiency: 85,
        description: "Primary language for scripting, APIs, and ML workflows",
      },
      {
        name: "Machine Learning",
        proficiency: 70,
        description: "Supervised learning concepts, model training and evaluation",
      },
      {
        name: "Computer Vision",
        proficiency: 68,
        description: "Image classification pipelines and preprocessing",
      },
      {
        name: "ResNet-50",
        proficiency: 65,
        description: "Fine-tuning a pretrained CNN for image classification",
      },
      {
        name: "Flask APIs",
        proficiency: 80,
        description: "Serving ML model predictions through REST endpoints",
      },
    ],
  },
];
