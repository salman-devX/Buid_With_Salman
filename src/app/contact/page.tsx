import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { ProjectBrief } from "@/components/sections/ProjectBrief";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Salman Ahmad for freelance work, collaboration or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <ProjectBrief />
    </>
  );
}
