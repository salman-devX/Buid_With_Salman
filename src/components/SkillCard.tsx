import { CheckCircle2, Zap } from "lucide-react";
import type { Skill } from "@/data/skills";

export function SkillCard({ name, proficiency, description }: Skill) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-[#0B132B]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-ember/50 hover:shadow-[0_12px_35px_-10px_rgba(0,245,155,0.22)]">
      {/* Subtle top indicator glow */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-signal-ember/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-signal-ember/10 text-signal-ember transition-colors duration-300 group-hover:bg-signal-ember group-hover:text-slate-950">
            <Zap size={14} className="transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="font-display text-sm font-semibold text-white group-hover:text-signal-ember transition-colors">
            {name}
          </h3>
        </div>
        <span className="font-mono text-xs font-bold text-signal-ember">
          {proficiency}%
        </span>
      </div>

      <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
        {description}
      </p>

      {/* Progress Bar with glowing neon green-to-cyan gradient */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#132247]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-signal-ember via-emerald-400 to-signal-gold shadow-[0_0_10px_rgba(0,245,155,0.5)] transition-all duration-700 ease-out group-hover:brightness-125"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
}
