"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Dynamic background aurora glows */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" aria-hidden="true" />
      
      {/* High-tech radial background grid */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 45%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Introductions & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Status Badge with Pulsing Radar Ring */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-signal-ember/30 bg-[#0B132B]/80 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-ember opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal-ember shadow-[0_0_8px_#00F59B]" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wide text-signal-ember">
              Available for new opportunities
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">
              {profile.name}
            </span>
          </h1>

          <p className="mt-3 font-mono text-base font-medium text-signal-gold">
            {profile.role} &bull; <span className="text-signal-ember">{profile.tagline}</span>
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            {profile.summary}
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0B132B]/70 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-signal-ember/50 hover:bg-[#0B132B] hover:shadow-[0_0_25px_rgba(0,245,155,0.2)] hover:-translate-y-0.5"
            >
              Download Resume
              <FileDown size={16} aria-hidden="true" className="text-signal-ember" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-faint">Connect</span>
            <div className="h-px w-6 bg-white/10" />
            
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B]/60 text-ink-muted transition-all hover:border-signal-ember/40 hover:text-signal-ember hover:shadow-[0_0_15px_rgba(0,245,155,0.25)]"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B]/60 text-ink-muted transition-all hover:border-signal-gold/40 hover:text-signal-gold hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B]/60 text-ink-muted transition-all hover:border-signal-amber/40 hover:text-signal-amber hover:shadow-[0_0_15px_rgba(255,107,0,0.25)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-tech Code Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Ambient Glows around the terminal */}
          <div
            className="absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-signal-ember/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-signal-amber/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative rounded-2xl border border-white/15 bg-[#0B132B]/90 p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1">
            {/* Terminal Window Bar */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full bg-[#00F59B] shadow-[0_0_8px_#00F59B]" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                <Terminal size={13} className="text-signal-ember" />
                <span>developer.config.ts</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Code Content with rich syntax highlighting */}
            <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <div>
                <span className="text-signal-gold">const</span>{" "}
                <span className="text-white font-semibold">developer</span>{" "}
                <span className="text-ink-muted">=</span>{" "}
                <span className="text-white">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-ink-muted">name:</span>{" "}
                <span className="text-signal-ember">&quot;{profile.name}&quot;</span>
                <span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4">
                <span className="text-ink-muted">role:</span>{" "}
                <span className="text-signal-ember">&quot;Full-Stack &amp; AI Developer&quot;</span>
                <span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4">
                <span className="text-ink-muted">techStack:</span>{" "}
                <span className="text-white">[</span>
                <span className="text-signal-amber">&quot;Next.js&quot;</span>
                <span className="text-ink-muted">, </span>
                <span className="text-signal-amber">&quot;TypeScript&quot;</span>
                <span className="text-ink-muted">, </span>
                <span className="text-signal-amber">&quot;Node.js&quot;</span>
                <span className="text-ink-muted">, </span>
                <span className="text-signal-amber">&quot;Python&quot;</span>
                <span className="text-white">]</span>
                <span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4">
                <span className="text-ink-muted">superpower:</span>{" "}
                <span className="text-signal-gold">&quot;Transforming Ideas into Reality&quot;</span>
                <span className="text-ink-muted">,</span>
              </div>
              <div className="pl-4">
                <span className="text-ink-muted">deliversExcellence:</span>{" "}
                <span className="text-[#FF6B00] font-bold">true</span>
                <span className="text-ink-muted">,</span>
              </div>
              <div>
                <span className="text-white">{"};"}</span>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-ink-muted">
                <span className="flex items-center gap-1.5 text-signal-ember">
                  <Sparkles size={12} />
                  Ready to deploy
                </span>
                <span className="font-mono text-ink-faint">v2.4.0</span>
              </div>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
