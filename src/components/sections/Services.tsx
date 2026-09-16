"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="container-x py-20">
      <SectionHeading
        badge="What I Offer"
        title="Engineering Services"
        description="Comprehensive web development solutions from architecture design to cloud deployment."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-[#0B132B]/75 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-signal-ember/40 hover:shadow-[0_15px_35px_-10px_rgba(0,245,155,0.18)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-ember/10 text-signal-ember transition-all duration-300 group-hover:bg-signal-ember group-hover:text-slate-950 group-hover:scale-110">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-signal-ember transition-colors">
                {service.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
