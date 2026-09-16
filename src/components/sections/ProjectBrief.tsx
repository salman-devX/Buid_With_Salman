"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Send,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BUDGET_RANGES,
  FEATURE_OPTIONS,
  STEP_LABELS,
  WEBSITE_TYPES,
  WHATSAPP_URL,
  initialBriefState,
  type BriefData,
  type BriefErrors,
} from "@/data/brief";

/* ------------------------------------------------------------------
   Small presentational helpers
   ------------------------------------------------------------------ */

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#132247]/60 px-4 py-3 text-sm text-white placeholder:text-ink-faint outline-none transition-all duration-300 focus:border-signal-ember focus:bg-[#132247] focus:shadow-[0_0_15px_rgba(0,245,155,0.2)]";

function StepDot({
  index,
  current,
  label,
}: {
  index: number;
  current: number;
  label: string;
}) {
  const state = index < current ? "done" : index === current ? "active" : "todo";

  return (
    <div className="flex flex-1 items-center gap-2">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300 ${
          state === "done"
            ? "border-signal-ember bg-signal-ember text-slate-950"
            : state === "active"
            ? "border-signal-amber bg-signal-amber/20 text-signal-amber"
            : "border-white/15 text-ink-faint"
        }`}
      >
        {state === "done" ? <Check size={15} /> : index + 1}
      </div>
      <span
        className={`hidden sm:block text-xs font-medium ${
          state === "todo" ? "text-ink-faint" : "text-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-xs font-mono font-medium text-ink-muted"
    >
      {children} {required && <span className="text-signal-amber">*</span>}
    </label>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs text-[#EF4444]">{children}</p>;
}

/* ------------------------------------------------------------------
   Main section
   ------------------------------------------------------------------ */

export function ProjectBrief() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BriefData>(initialBriefState);
  const [errors, setErrors] = useState<BriefErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof BriefData>(field: K, value: BriefData[K]) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function toggleFeature(feature: string) {
    setData((d) => ({
      ...d,
      features: d.features.includes(feature)
        ? d.features.filter((f) => f !== feature)
        : [...d.features, feature],
    }));
  }

  function validateStep(s: number) {
    const e: BriefErrors = {};

    if (s === 0) {
      if (!data.name.trim()) e.name = "Please enter your name.";
      if (!data.email.trim()) {
        e.email = "Please enter your email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        e.email = "Please enter a valid email address.";
      }
      if (!data.whatsapp.trim()) e.whatsapp = "Please enter a WhatsApp number.";
    }

    if (s === 1) {
      if (!data.websiteType) e.websiteType = "Please choose a website type.";
      if (!data.budget) e.budget = "Please choose a budget range.";
    }

    if (s === 2) {
      if (!data.description.trim()) {
        e.description = "Please describe your project.";
      } else if (data.description.trim().length < 15) {
        e.description =
          "A little more detail helps — a sentence or two is great.";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 3));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  function buildMessage() {
    const lines = [
      "New project request",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      data.company ? `Company: ${data.company}` : null,
      `Website type: ${data.websiteType}`,
      `Budget: ${data.budget}`,
      data.deadline ? `Deadline: ${data.deadline}` : null,
      "",
      `Description: ${data.description}`,
      data.features.length ? `Features: ${data.features.join(", ")}` : null,
    ].filter(Boolean);

    return lines.join("\n");
  }

  function handleSubmit() {
    if (!validateStep(2)) {
      setStep(2);
      return;
    }

    setSubmitting(true);

    // Opened synchronously inside the click handler so browsers
    // don't treat it as a blocked popup.
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener,noreferrer"
    );

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  function reset() {
    setData(initialBriefState);
    setErrors({});
    setStep(0);
    setSubmitted(false);
  }

  return (
    <section
      id="brief"
      className="relative border-t border-white/10 py-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute right-1/4 top-0 -z-10 h-72 w-72 rounded-full bg-signal-amber/10 blur-[120px]" />

      <div className="container-x">
        <SectionHeading
          badge="Start a Project"
          title="Tell me about your project"
          description="A few quick questions so I understand what you need. Takes about two minutes."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#0B132B]/85 p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-signal-ember/15">
                  <PartyPopper size={32} className="text-signal-ember" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Project Request Received 🚀
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Thanks for sharing your idea. I&apos;ve opened WhatsApp with your
                  details filled in — send it across and I&apos;ll review your
                  requirements and get back to you soon.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      buildMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,107,0,0.65)]"
                  >
                    Open WhatsApp again <ArrowUpRight size={16} />
                  </a>

                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#132247]/60 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-signal-ember/50 hover:shadow-[0_0_20px_rgba(0,245,155,0.2)]"
                  >
                    Submit another project
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Stepper */}
                <div className="mb-8 flex items-center gap-1">
                  {STEP_LABELS.map((label, i) => (
                    <React.Fragment key={label}>
                      <StepDot index={i} current={step} label={label} />
                      {i < STEP_LABELS.length - 1 && (
                        <div className="h-px w-4 shrink-0 bg-white/10 sm:w-8" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="mb-6 font-mono text-xs text-ink-faint">
                  Step {step + 1} of 4
                </p>

                <AnimatePresence mode="wait">
                  {/* ---------------- STEP 0 — Contact ---------------- */}
                  {step === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div>
                        <FieldLabel htmlFor="brief-name" required>
                          Your name
                        </FieldLabel>
                        <input
                          id="brief-name"
                          type="text"
                          value={data.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="e.g. Ayesha Khan"
                          className={inputClass}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "brief-name-err" : undefined}
                        />
                        <div id="brief-name-err">
                          <FieldError>{errors.name}</FieldError>
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <FieldLabel htmlFor="brief-email" required>
                            Email address
                          </FieldLabel>
                          <input
                            id="brief-email"
                            type="email"
                            value={data.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="you@email.com"
                            className={inputClass}
                            aria-invalid={!!errors.email}
                            aria-describedby={
                              errors.email ? "brief-email-err" : undefined
                            }
                          />
                          <div id="brief-email-err">
                            <FieldError>{errors.email}</FieldError>
                          </div>
                        </div>

                        <div>
                          <FieldLabel htmlFor="brief-whatsapp" required>
                            WhatsApp number
                          </FieldLabel>
                          <input
                            id="brief-whatsapp"
                            type="tel"
                            value={data.whatsapp}
                            onChange={(e) => update("whatsapp", e.target.value)}
                            placeholder="+92 3XX XXXXXXX"
                            className={inputClass}
                            aria-invalid={!!errors.whatsapp}
                            aria-describedby={
                              errors.whatsapp ? "brief-wa-err" : undefined
                            }
                          />
                          <div id="brief-wa-err">
                            <FieldError>{errors.whatsapp}</FieldError>
                          </div>
                        </div>
                      </div>

                      <div>
                        <FieldLabel htmlFor="brief-company">
                          Company / business name (optional)
                        </FieldLabel>
                        <input
                          id="brief-company"
                          type="text"
                          value={data.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="e.g. Khan Bakers"
                          className={inputClass}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ---------------- STEP 1 — Project ---------------- */}
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <FieldLabel required>
                          What type of website do you need?
                        </FieldLabel>
                        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                          {WEBSITE_TYPES.map((t) => {
                            const Icon = t.icon;
                            const active = data.websiteType === t.value;
                            return (
                              <button
                                key={t.value}
                                type="button"
                                onClick={() => update("websiteType", t.value)}
                                aria-pressed={active}
                                className={`flex min-h-[44px] items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                                  active
                                    ? "border-signal-ember bg-signal-ember/15 text-signal-ember shadow-[0_0_18px_-4px_rgba(0,245,155,0.4)]"
                                    : "border-white/10 bg-[#132247]/40 text-ink-muted hover:border-white/25 hover:text-white"
                                }`}
                              >
                                <Icon size={16} className="shrink-0" />
                                {t.value}
                              </button>
                            );
                          })}
                        </div>
                        <FieldError>{errors.websiteType}</FieldError>
                      </div>

                      <div>
                        <FieldLabel required>What&apos;s your budget?</FieldLabel>
                        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                          {BUDGET_RANGES.map((b) => {
                            const active = data.budget === b;
                            return (
                              <button
                                key={b}
                                type="button"
                                onClick={() => update("budget", b)}
                                aria-pressed={active}
                                className={`min-h-[44px] rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-200 ${
                                  active
                                    ? "border-signal-amber bg-signal-amber/15 text-signal-amber shadow-[0_0_18px_-4px_rgba(255,107,0,0.45)]"
                                    : "border-white/10 bg-[#132247]/40 text-ink-muted hover:border-white/25 hover:text-white"
                                }`}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                        <FieldError>{errors.budget}</FieldError>
                      </div>

                      <div>
                        <FieldLabel htmlFor="brief-deadline">
                          Expected deadline (optional)
                        </FieldLabel>
                        <input
                          id="brief-deadline"
                          type="text"
                          value={data.deadline}
                          onChange={(e) => update("deadline", e.target.value)}
                          placeholder="e.g. within 3 weeks, or a specific date"
                          className={inputClass}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ---------------- STEP 2 — Details ---------------- */}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <FieldLabel htmlFor="brief-description" required>
                          Describe your project
                        </FieldLabel>
                        <textarea
                          id="brief-description"
                          rows={5}
                          value={data.description}
                          onChange={(e) => update("description", e.target.value)}
                          placeholder="What is this website for, who's it for, and what should it do?"
                          className={`${inputClass} resize-none`}
                          aria-invalid={!!errors.description}
                          aria-describedby={
                            errors.description ? "brief-desc-err" : undefined
                          }
                        />
                        <div id="brief-desc-err">
                          <FieldError>{errors.description}</FieldError>
                        </div>
                      </div>

                      <div>
                        <FieldLabel>Required features (optional)</FieldLabel>
                        <div className="flex flex-wrap gap-2">
                          {FEATURE_OPTIONS.map((f) => {
                            const active = data.features.includes(f);
                            return (
                              <button
                                key={f}
                                type="button"
                                onClick={() => toggleFeature(f)}
                                aria-pressed={active}
                                className={`min-h-[38px] rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                                  active
                                    ? "border-signal-gold bg-signal-gold/15 text-signal-gold"
                                    : "border-white/10 bg-[#132247]/40 text-ink-muted hover:border-white/25 hover:text-white"
                                }`}
                              >
                                {active && (
                                  <Check size={12} className="mr-1 inline" />
                                )}
                                {f}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ---------------- STEP 3 — Review ---------------- */}
                  {step === 3 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-sm text-ink-muted">
                        Quick check before this goes out — you can go back and edit
                        anything.
                      </p>

                      <dl className="overflow-hidden rounded-xl border border-white/10 divide-y divide-white/10">
                        {(
                          [
                            ["Name", data.name],
                            ["Email", data.email],
                            ["WhatsApp", data.whatsapp],
                            ["Company", data.company || "—"],
                            ["Website type", data.websiteType],
                            ["Budget", data.budget],
                            ["Deadline", data.deadline || "—"],
                            [
                              "Features",
                              data.features.length
                                ? data.features.join(", ")
                                : "—",
                            ],
                          ] as [string, string][]
                        ).map(([k, v]) => (
                          <div
                            key={k}
                            className="flex justify-between gap-4 px-4 py-2.5 text-sm"
                          >
                            <dt className="text-ink-faint">{k}</dt>
                            <dd className="text-right text-ink">{v}</dd>
                          </div>
                        ))}

                        <div className="px-4 py-2.5 text-sm">
                          <dt className="mb-1 text-ink-faint">Description</dt>
                          <dd className="text-ink">{data.description}</dd>
                        </div>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-9 flex items-center justify-between gap-3">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#132247]/60 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-signal-ember/50 hover:shadow-[0_0_20px_rgba(0,245,155,0.2)]"
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-6 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,107,0,0.65)]"
                    >
                      Continue
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-6 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,107,0,0.65)] disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Send Project Request"}
                      {submitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
