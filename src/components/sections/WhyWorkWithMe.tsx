"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyWorkWithMe } from "@/data/services";
import { Sparkles } from "lucide-react";

export function WhyWorkWithMe() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        badge="Value Proposition"
        title="Why Work With Me"
        description="Here is why clients and teams enjoy working with me on their mission-critical products."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyWorkWithMe.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-2xl border border-white/10 bg-[#0B132B]/75 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-signal-amber/40 hover:shadow-[0_15px_35px_-10px_rgba(255,107,0,0.18)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-amber/10 text-signal-amber transition-all duration-300 group-hover:bg-signal-amber group-hover:text-white group-hover:scale-110">
              <Sparkles size={20} />
            </div>

            <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-signal-amber transition-colors">
              {item.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
