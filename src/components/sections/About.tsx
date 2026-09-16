"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";
import { aboutStats, profile } from "@/data/profile";
import { education } from "@/data/education";

const highlights = [
  "End-to-end full stack web engineering",
  "Production-ready clean and typed code",
  "Responsive, accessible, state-of-the-art UI",
  "AI & ML practical model integration",
  "Performance and SEO optimized workflows",
];

export function About() {
  return (
    <>
      {/* Intro band with 2-Column Grid */}
      <section id="about" className="container-x pt-28 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-signal-ember/30 bg-signal-ember/10 px-3.5 py-1 text-xs font-mono font-medium text-signal-ember">
              <Sparkles size={12} />
              Background &amp; Philosophy
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              I turn ambitious ideas into web applications that <span className="text-gradient">people love using</span>.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              I&apos;m <span className="text-white font-semibold">{profile.name}</span>, a Computer Science graduate from Bahawalpur
              focused on crafting modern web applications and intelligent digital products. I combine solid software engineering with practical AI — architecting systems that are fast, intuitive, and built to scale.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              My philosophy revolves around readable code, predictable state management, and interfaces that feel effortless to interact with.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:shadow-[0_0_35px_rgba(255,107,0,0.65)] hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B132B]/80 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-signal-ember/50 hover:shadow-[0_0_20px_rgba(0,245,155,0.25)] hover:-translate-y-0.5"
              >
                Let&apos;s talk <ArrowUpRight size={15} className="text-signal-ember" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: User Profile Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:justify-end"
          >
            {/* Ambient Multi-Color Glowing Halo */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-signal-ember/30 via-signal-gold/20 to-signal-amber/30 blur-2xl opacity-75 pointer-events-none" />

            {/* Glowing Ring Frame */}
            <div className="group relative rounded-full p-1.5 bg-gradient-to-tr from-signal-ember via-white/20 to-signal-amber shadow-[0_0_40px_rgba(0,245,155,0.25)] transition-transform duration-500 hover:scale-[1.03]">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-[#050811] bg-[#070D1E]">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-signal-ember/40 bg-[#050811]/90 px-4 py-1.5 text-xs font-mono font-semibold text-signal-ember shadow-[0_4px_20px_rgba(0,0,0,0.7)] backdrop-blur-md">
                <span className="inline-block h-2 w-2 rounded-full bg-signal-ember animate-pulse mr-2" />
                Full-Stack Developer
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#0B132B]/60 backdrop-blur-xl sm:grid-cols-4"
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:px-6">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-signal-ember to-signal-amber">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Strengths + Education */}
      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* What I bring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-[#0B132B]/70 p-7 sm:p-8 backdrop-blur-xl"
          >
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-ember shadow-[0_0_8px_#00F59B]" />
              What I bring to a project
            </h2>
            <ul className="mt-6 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal-ember/15 text-signal-ember">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm sm:text-base text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0B132B]/70 p-7 sm:p-8 backdrop-blur-xl"
          >
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <GraduationCap size={22} className="text-signal-amber" /> Education
            </h2>
            <div className="mt-6 space-y-6 border-l border-white/10 pl-6">
              {education.map((item) => (
                <div key={item.degree} className="relative">
                  <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal-amber shadow-[0_0_8px_#FF6B00]" />
                  <p className="font-mono text-xs text-signal-amber font-semibold">{item.period}</p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    {item.degree}
                  </p>
                  <p className="text-sm text-ink-muted">{item.institute}</p>
                  <p className="text-xs text-signal-ember font-mono mt-0.5">{item.result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
