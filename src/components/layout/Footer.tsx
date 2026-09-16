import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#070D1E] overflow-hidden">
      {/* Subtle bottom glowing accent */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-signal-ember/5 blur-[100px] pointer-events-none" />

      <div className="container-x py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal-ember/30 bg-[#0B132B] text-signal-ember text-sm shadow-[0_0_10px_rgba(0,245,155,0.2)]">
                SA
              </span>
              <span>
                {profile.name}
                <span className="text-signal-ember">.</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {profile.role} building modern, scalable web applications with
              a focus on clean architecture and practical AI.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-amber transition-colors hover:text-signal-ember"
            >
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-signal-ember"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-signal-ember"
                >
                  <Mail size={15} className="text-signal-ember" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-signal-amber"
                >
                  <Phone size={15} className="text-signal-amber" /> {profile.phone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B] text-ink-muted transition-all hover:border-signal-ember/40 hover:text-signal-ember hover:shadow-[0_0_15px_rgba(0,245,155,0.25)]"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B] text-ink-muted transition-all hover:border-signal-gold/40 hover:text-signal-gold hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-faint sm:flex-row">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-ember animate-pulse" />
            Designed with Black, Navy, Green &amp; Orange
          </p>
        </div>
      </div>
    </footer>
  );
}
