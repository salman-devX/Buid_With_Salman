"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="container-x py-24">
      <SectionHeading
        badge="Career &amp; Growth"
        title="Experience &amp; Journey"
        description="How my focus has evolved from computer science fundamentals to building production-ready web apps and intelligent AI solutions."
      />

      <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative group"
          >
            {/* Glowing Timeline Node */}
            <span className="absolute -left-[calc(1.5rem+7px)] sm:-left-[calc(2rem+7px)] top-4 h-3.5 w-3.5 rounded-full border-2 border-[#050811] bg-signal-amber shadow-[0_0_12px_#FF6B00] transition-transform duration-300 group-hover:scale-125" />

            <div className="rounded-2xl border border-white/10 bg-[#0B132B]/75 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-signal-ember/40 group-hover:shadow-[0_10px_30px_-10px_rgba(0,245,155,0.18)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-ember/20 bg-signal-ember/10 px-3 py-1 font-mono text-xs font-semibold text-signal-ember">
                  <Briefcase size={12} />
                  {item.period}
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-white group-hover:text-signal-ember transition-colors">
                {item.title}
              </h3>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
