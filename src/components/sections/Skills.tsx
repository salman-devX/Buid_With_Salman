"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

const ALL_TAB = "All Skills";

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB);
  const [query, setQuery] = useState("");

  const tabs = [ALL_TAB, ...skillCategories.map((c) => c.category)];

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();

    return skillCategories
      .filter((cat) => activeTab === ALL_TAB || cat.category === activeTab)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          q ? item.name.toLowerCase().includes(q) : true
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeTab, query]);

  return (
    <section id="skills" className="container-x py-24">
      <SectionHeading
        badge="Technologies"
        title="Technical Arsenal"
        description="Tools, languages, and frameworks I use to engineer scalable, high-performance applications."
      />

      {/* Tabs + Search */}
      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] text-white shadow-glow"
                    : "border border-white/10 bg-[#0B132B]/70 text-ink-muted hover:border-signal-ember/40 hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0B132B]/80 px-4 py-2.5 backdrop-blur-md lg:w-72 focus-within:border-signal-ember/60 focus-within:shadow-[0_0_15px_rgba(0,245,155,0.2)]">
          <Search size={16} className="text-signal-ember shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skill (e.g. Next.js)..."
            className="w-full bg-transparent text-sm text-white placeholder:text-ink-faint focus:outline-none font-medium"
          />
        </div>
      </div>

      {/* Grouped skill grids */}
      <div className="space-y-14">
        {visibleCategories.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-ink-muted">
            No skills match your search query &quot;{query}&quot;.
          </div>
        )}

        {visibleCategories.map((cat, catIndex) => (
          <div key={cat.category}>
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-ember/10 text-signal-ember">
                <Layers size={17} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {cat.category}
              </h3>
              <span className="font-mono text-xs text-signal-ember font-semibold bg-signal-ember/10 px-2 py-0.5 rounded-full border border-signal-ember/20">
                {cat.items.length}
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (catIndex * 2 + i) * 0.02 }}
                >
                  <SkillCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
