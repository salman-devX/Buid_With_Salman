"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, FileDown, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#050811]/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal-ember/30 bg-[#0B132B] text-signal-ember shadow-[0_0_12px_rgba(0,245,155,0.25)] transition-transform duration-300 group-hover:scale-105">
            SA
          </span>
          <span>
            {profile.name}
            <span className="text-signal-ember animate-pulse">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#0B132B]/70 p-1.5 backdrop-blur-md md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300",
                    active
                      ? "text-white"
                      : "text-ink-muted hover:text-white"
                  )}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-signal-ember/40 bg-gradient-to-r from-signal-ember/15 to-signal-amber/15 shadow-[0_0_15px_rgba(0,245,155,0.2)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all hover:border-signal-ember/40 hover:text-signal-ember hover:shadow-[0_0_15px_rgba(0,245,155,0.2)]"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all hover:border-signal-gold/40 hover:text-signal-gold hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-4 py-2 text-xs font-bold text-white shadow-glow transition-all hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] hover:-translate-y-0.5"
          >
            Resume <FileDown size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B132B] text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} className="text-signal-ember" /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-[#050811]/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="container-x flex flex-col gap-1.5 py-5">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                        active
                          ? "border border-signal-ember/30 bg-[#0B132B] text-signal-ember"
                          : "text-ink-muted hover:bg-[#0B132B]/50 hover:text-white"
                      )}
                    >
                      {link.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-signal-ember animate-pulse" />}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-3 flex items-center gap-4 border-t border-white/10 pt-4 px-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-muted hover:text-white"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-muted hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-5 py-2.5 text-xs font-bold text-white shadow-glow"
                >
                  Resume <FileDown size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
