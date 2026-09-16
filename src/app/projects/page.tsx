import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/GithubSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured projects built by Salman Ahmad, including Fruit Vision AI, AutoNova and Faizan Moto Hub.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <GithubSection />
    </>
  );
}
