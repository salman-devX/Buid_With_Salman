import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Salman Ahmad's journey through education, web development and AI/ML projects.",
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
    </>
  );
}
