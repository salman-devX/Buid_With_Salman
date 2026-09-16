import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "green";
  icon?: LucideIcon;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
  target?: string;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: never;
};

type Props = ButtonAsLink | ButtonAsButton;

const styles = {
  primary:
    "bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] text-white shadow-glow hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass text-ink border-white/10 hover:border-signal-ember/50 hover:text-white hover:shadow-[0_0_25px_rgba(0,245,155,0.25)] hover:-translate-y-0.5 active:translate-y-0",
  green:
    "bg-gradient-to-r from-emerald-500 to-signal-ember text-slate-950 font-semibold shadow-glow-green hover:shadow-[0_0_40px_rgba(0,245,155,0.6)] hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-muted hover:text-ink hover:bg-white/5",
};

export function Button({
  children,
  variant = "primary",
  icon: Icon,
  className,
  href,
  onClick,
  type = "button",
  target,
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
        {Icon && (
          <Icon
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        )}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {Icon && (
        <Icon
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}
