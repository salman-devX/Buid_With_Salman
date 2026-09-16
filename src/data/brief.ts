import {
  Globe,
  LayoutTemplate,
  ShoppingCart,
  Zap,
  Layers,
  Sparkles,
  CircleDot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WebsiteType = {
  value: string;
  icon: LucideIcon;
};

export type BriefData = {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  websiteType: string;
  budget: string;
  deadline: string;
  description: string;
  features: string[];
};

export type BriefErrors = Partial<Record<keyof BriefData, string>>;

/** WhatsApp number in international format, no "+" and no spaces. */
export const WHATSAPP_NUMBER = "923121634432";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WEBSITE_TYPES: WebsiteType[] = [
  { value: "Business Website", icon: Globe },
  { value: "Portfolio", icon: LayoutTemplate },
  { value: "E-Commerce", icon: ShoppingCart },
  { value: "Landing Page", icon: Zap },
  { value: "Web Application", icon: Layers },
  { value: "AI Website", icon: Sparkles },
  { value: "Other", icon: CircleDot },
];

export const BUDGET_RANGES: string[] = [
  "Under $100",
  "$100 – $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000+",
];

export const FEATURE_OPTIONS: string[] = [
  "Contact Form",
  "Admin Dashboard",
  "User Accounts / Login",
  "Payment Integration",
  "Blog / CMS",
  "Booking / Scheduling",
  "AI Chat or Search",
  "Multi-language Support",
  "SEO Setup",
  "Database",
  "API Integration",
  "Analytics",
];

export const STEP_LABELS = ["Contact", "Project", "Details", "Review"] as const;

export const initialBriefState: BriefData = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  websiteType: "",
  budget: "",
  deadline: "",
  description: "",
  features: [],
};
