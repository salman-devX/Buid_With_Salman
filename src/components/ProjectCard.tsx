import Image from "next/image";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B132B]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-signal-ember/50 hover:shadow-[0_16px_45px_-10px_rgba(0,245,155,0.22),0_0_25px_-5px_rgba(255,107,0,0.2)]">
      {/* Top subtle gradient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Cover image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070D1E]">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Floating Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-ember/30 bg-[#050811]/85 px-3 py-1 text-xs font-mono font-medium text-signal-ember backdrop-blur-md shadow-sm">
            <Sparkles size={11} className="text-signal-ember" />
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-signal-ember">
          {project.name}
        </h3>
        
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/5 bg-[#132247]/70 px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors duration-300 hover:border-signal-gold/40 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#132247]/60 px-4 py-2.5 text-sm font-semibold text-ink-muted transition-all duration-300 hover:border-signal-ember/40 hover:bg-[#132247] hover:text-white"
            >
              <Github size={16} /> Code
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/5 bg-[#132247]/30 px-4 py-2.5 text-sm font-medium text-ink-faint">
              <Github size={16} /> Code
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:-translate-y-0.5"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-ink-faint">
              Live Demo <ExternalLink size={15} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
