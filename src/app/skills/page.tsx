import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies Salman Ahmad works with across frontend, backend, databases, tools and AI/ML.",
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
    </>
  );
}
