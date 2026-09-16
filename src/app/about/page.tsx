import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills focus and the services Salman Ahmad offers as a full-stack developer.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Services />
      <WhyWorkWithMe />
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0B132B] to-[#070D1E] p-10 text-center sm:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-signal-ember/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-signal-amber/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal-ember/30 bg-signal-ember/10 px-3.5 py-1 text-xs font-mono font-medium text-signal-ember">
              <Sparkles size={12} />
              Open for Collaboration
            </span>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Have a project or opportunity in mind?
            </h2>
            <p className="max-w-md text-sm sm:text-base text-ink-muted">
              I&apos;m open to freelance projects, engineering roles, and exciting tech collaborations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-8 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:shadow-[0_0_35px_rgba(255,107,0,0.7)] hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
