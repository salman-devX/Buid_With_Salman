"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const initialForm: FormState = { name: "", email: "", message: "" };

function validate(form: FormState) {
  const errors: Partial<FormState> = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container-x py-24">
      <SectionHeading
        badge="Reach Out"
        title="Let's Build Something Great Together"
        description="Have a question, a project proposal, or want to discuss full-time roles? Send a message and I'll get back to you promptly."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B132B]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-signal-ember/40 hover:shadow-[0_10px_30px_-10px_rgba(0,245,155,0.2)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-ember/10 text-signal-ember transition-all duration-300 group-hover:bg-signal-ember group-hover:text-slate-950">
              <Mail size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-mono text-ink-faint">Email</p>
              <p className="font-semibold text-white text-sm truncate">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B132B]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-signal-amber/40 hover:shadow-[0_10px_30px_-10px_rgba(255,107,0,0.2)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-amber/10 text-signal-amber transition-all duration-300 group-hover:bg-signal-amber group-hover:text-white">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-ink-faint">Phone / WhatsApp</p>
              <p className="font-semibold text-white text-sm">{profile.phone}</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B132B]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-signal-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.2)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-gold/10 text-signal-gold transition-all duration-300 group-hover:bg-signal-gold group-hover:text-slate-950">
              <Linkedin size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-ink-faint">LinkedIn</p>
              <p className="font-semibold text-white text-sm">salmanahmad-tech</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B132B]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-signal-ember/40 hover:shadow-[0_10px_30px_-10px_rgba(0,245,155,0.2)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-ink-muted transition-all duration-300 group-hover:border-signal-ember group-hover:text-white">
              <Github size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-ink-faint">GitHub</p>
              <p className="font-semibold text-white text-sm">@{profile.githubUsername}</p>
            </div>
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-white/10 bg-[#0B132B]/85 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] space-y-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-mono font-medium text-ink-muted">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Alex Johnson"
              className="w-full rounded-xl border border-white/10 bg-[#132247]/60 px-4 py-3 text-sm text-white placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-signal-ember focus:bg-[#132247] focus:shadow-[0_0_15px_rgba(0,245,155,0.2)]"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-[#EF4444]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-mono font-medium text-ink-muted">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="alex@example.com"
              className="w-full rounded-xl border border-white/10 bg-[#132247]/60 px-4 py-3 text-sm text-white placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-signal-ember focus:bg-[#132247] focus:shadow-[0_0_15px_rgba(0,245,155,0.2)]"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-[#EF4444]">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-mono font-medium text-ink-muted">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project, timeline, and goals..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#132247]/60 px-4 py-3 text-sm text-white placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-signal-amber focus:bg-[#132247] focus:shadow-[0_0_15px_rgba(255,107,0,0.2)]"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-[#EF4444]">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-8 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,107,0,0.7)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {status === "sent" && (
            <div className="rounded-xl border border-signal-ember/30 bg-signal-ember/10 p-4 text-sm font-medium text-signal-ember">
              Message sent successfully! Thanks for reaching out, I&apos;ll get back to you shortly.
            </div>
          )}
          {status === "error" && (
            <p className="text-xs leading-relaxed text-ink-muted">
              Note: Contact form backend not configured yet. You can email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="text-signal-ember underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
