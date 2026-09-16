import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { aboutStats } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              badge="About Me"
              title="Building High-Impact Digital Experiences"
              description="I'm a Computer Science graduate dedicated to creating robust web applications and intelligent AI-powered solutions — combining rock-solid engineering with intuitive, modern design."
            />
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-signal-ember transition-all hover:text-signal-amber hover:translate-x-1"
            >
              More about my background <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-white/10 bg-[#0B132B]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-ember/40 hover:shadow-[0_10px_30px_-10px_rgba(0,245,155,0.2)]"
              >
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-signal-ember to-signal-amber">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-ink-muted group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects preview */}
      <section className="container-x py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            description="Hand-crafted web applications engineered with clean code and cutting-edge tech."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-signal-amber transition-all hover:text-signal-ember hover:translate-x-1 sm:mb-14"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="container-x py-24">
        <SectionHeading
          badge="Expertise"
          title="What I Bring to the Table"
          description="End-to-end engineering tailored to bring your digital vision to life."
          align="center"
        />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-white/10 bg-[#0B132B]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-signal-gold/50 hover:shadow-[0_15px_35px_-10px_rgba(56,189,248,0.2)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-gold/10 text-signal-gold transition-all duration-300 group-hover:bg-signal-gold group-hover:text-slate-950 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                
                <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-signal-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container-x pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0B132B] to-[#070D1E] p-10 text-center sm:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Ambient Glow Orbs inside the banner */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-signal-ember/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-signal-amber/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal-ember/30 bg-signal-ember/10 px-4 py-1.5 text-xs font-mono font-semibold text-signal-ember">
              <Sparkles size={13} />
              Let&apos;s Build Together
            </span>
            
            <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea or project you want to bring to life?
            </h2>
            
            <p className="max-w-xl text-base text-ink-muted">
              Whether you need a full-stack web application, AI integration, or a scalable backend API, I&apos;m ready to help you ship it.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-8 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
