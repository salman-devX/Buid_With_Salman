type Props = {
  title: string;
  description?: string;
  badge?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, badge, align = "left" }: Props) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {badge && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-signal-ember/20 bg-signal-ember/10 px-3.5 py-1 text-xs font-mono font-medium text-signal-ember ${align === "center" ? "mx-auto" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-signal-ember animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className={`mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-signal-ember to-signal-amber ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-4 text-ink-muted leading-relaxed text-base sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
