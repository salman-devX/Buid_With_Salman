"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, GitCommit } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function GithubSection() {
  return (
    <section className="container-x py-24">
      <SectionHeading
        badge="Open Source"
        title="GitHub Activity &amp; Contributions"
        description={`Code contributions, active repositories, and open source work by @${profile.githubUsername}.`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-[#0B132B]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-ember/10 text-signal-ember">
              <Github size={20} />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white">
                @{profile.githubUsername}
              </p>
              <p className="text-xs text-signal-ember font-mono flex items-center gap-1.5 mt-0.5">
                <GitCommit size={12} /> Active Developer
              </p>
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-5 py-2.5 text-xs font-bold text-white shadow-glow transition-all hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:-translate-y-0.5"
          >
            Visit GitHub Profile <ExternalLink size={13} />
          </a>
        </div>

        {/* Dynamic GitHub contribution chart */}
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#050811]/90 p-4 sm:p-6 text-center">
          <div className="min-w-[650px] flex justify-center py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/00f59b/${profile.githubUsername}`}
              alt={`${profile.githubUsername}'s GitHub Contribution Chart`}
              className="max-w-full rounded-md brightness-110"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-ink-faint font-mono">
            Directly synced with GitHub commit activity
          </p>
        </div>
      </motion.div>
    </section>
  );
}
