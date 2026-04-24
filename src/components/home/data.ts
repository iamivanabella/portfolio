import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Code2,
  Database,
  Globe,
  GraduationCap,
  LaptopMinimalCheck,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const navItems = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Education",
  "Contact",
];

export type ProcessItem = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Discover",
    text: "I dive into platform requirements, user workflows, and operational constraints before building.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    text: "I map the right implementation path across Moodle, WordPress, PHP, hosting, and deployment needs.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Build",
    text: "I build stable production solutions across Moodle, WordPress, PHP, MySQL, and responsive frontend work.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Support",
    text: "I debug live issues, tune environments, and document handoffs so systems stay reliable after launch.",
    icon: Wrench,
  },
];

export type Project = {
  title: string;
  stack: string;
  text: string;
  variant: string;
};

export const projects: Project[] = [
  {
    title: "Custom Moodle Plugin Work",
    stack: "Moodle, PHP, MySQL, Plugin Customization, Custom Question Types",
    text: "Extended plugin behavior and custom question types, refined admin workflows, and supported ongoing LMS stability and upgrades for Practice Tests Academy.",
    variant: "board",
  },
  {
    title: "Moodle Charting System",
    stack: "Moodle, PHP, Chart.js, JavaScript, Analytics Dashboards",
    text: "Built chart-driven Moodle dashboards to surface near-real-time course analytics and make LMS activity easier to understand for admins and educators.",
    variant: "stay",
  },
  {
    title: "Work Immersion Management System",
    stack: "PHP/LAMP, MySQL, JavaScript, HTML/CSS",
    text: "Designed and developed a thesis system to digitize work immersion approvals, tracking, and reporting.",
    variant: "dash",
  },
];

export type TimelineItem = {
  years: string;
  title: string;
  company: string;
  bullets: string[];
};

export const timeline: TimelineItem[] = [
  {
    years: "Apr 2024 - Present",
    title: "Moodle Developer",
    company: "Practice Tests Academy",
    bullets: [
      "Extended Moodle plugins and custom question-type behavior for evolving LMS requirements.",
      "Diagnosed recurring workflow and plugin issues across the live learning platform.",
      "Supported migrations, upgrades, and environment tuning to keep the LMS stable.",
    ],
  },
  {
    years: "Apr 2024 - Present",
    title: "WordPress Developer",
    company: "Experts Direct",
    bullets: [
      "Delivered responsive WordPress and Elementor pages from design handoffs.",
      "Built reusable custom post types, taxonomies, and shortcode-driven components.",
      "Improved form reliability while handling performance and maintenance work.",
    ],
  },
  {
    years: "Feb 2022 - Nov 2023",
    title: "Solutions Developer",
    company: "Capytech",
    bullets: [
      "Delivered client-facing PHP, Moodle, and WordPress solutions across multiple projects.",
      "Implemented Moodle deployments and customizations plus responsive WordPress pages.",
      "Supported handoff documentation and mentored a junior teammate.",
    ],
  },
  {
    years: "Dec 2023 - Jun 2024",
    title: "Junior Full Stack Developer",
    company: "Tribute Technology",
    bullets: [
      "Built and modified PHP, MySQL, and JavaScript functionality for report-generation work.",
      "Reproduced production issues quickly to ship targeted fixes.",
      "Worked under close supervision while contributing to backend feature updates.",
    ],
  },
  {
    years: "Jan 2026 - Present",
    title: "Moodle Developer",
    company: "ScienceXplorers",
    bullets: [
      "Built the initial Moodle environment including course structure, roles, and permissions.",
      "Stabilized cron, backups, email, and enrollment behavior for reliable publishing.",
      "Handled independent setup and operations work aligned to course rollout needs.",
    ],
  },
  {
    years: "Jan 2026",
    title: "Moodle Developer",
    company: "The Yesfinity",
    bullets: [
      "Deployed Moodle on AWS and configured the LMS environment from scratch.",
      "Applied baseline Linux hardening and server setup for safer operations.",
      "Produced handoff documentation to support future maintenance and enhancement work.",
    ],
  },
];

export type CertItem = {
  title: string;
  org: string;
  year: string;
  icon: LucideIcon;
};

export const certs: CertItem[] = [
  {
    title: "Bachelor of Science in Information Technology",
    org: "Ateneo de Zamboanga University",
    year: "Jun 2015 - Apr 2021",
    icon: GraduationCap,
  },
  {
    title: "WordPress & Elementor Delivery",
    org: "Production client work across Experts Direct and project-based contracts",
    year: "2024 - Present",
    icon: LaptopMinimalCheck,
  },
  {
    title: "AWS Moodle Deployment",
    org: "The Yesfinity",
    year: "Jan 2026",
    icon: Database,
  },
  {
    title: "LMS Operations & Troubleshooting",
    org: "Practice Tests Academy and ScienceXplorers",
    year: "2024 - Present",
    icon: ShieldCheck,
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Elementor", "WordPress"],
  },
  {
    title: "Backend",
    items: ["PHP", "MySQL", "Moodle", "Plugin Development", "Custom Question Types", "Shortcodes"],
  },
  {
    title: "Database & Cloud",
    items: ["MySQL", "AWS", "Cloudways", "WP Engine", "Linux", "Backups"],
  },
  {
    title: "Tools & Others",
    items: ["DNS", "SSL", "Redirects", "Cron", "CLI/SSH", "Technical Handoffs"],
  },
];

export type ContactItem = {
  icon: LucideIcon;
  label: string;
};

export const contactItems: ContactItem[] = [
  { icon: Mail, label: "abella.ivanl8@gmail.com" },
  { icon: Phone, label: "+63 917 135 5629" },
  { icon: MapPin, label: "Zamboanga City 7000, Philippines" },
  { icon: Globe, label: "Remote, full-time or long-term contract" },
];

export const techIcons = [
  { name: "PHP", src: "/icons/php.svg", className: "h-6 w-6" },
  { name: "WordPress", src: "/icons/wordpress.svg", className: "h-6 w-6" },
  { name: "Moodle", src: "/icons/moodle.svg", className: "h-6 w-6" },
  { name: "JavaScript", src: "/icons/javascript.svg", className: "h-6 w-6" },
  { name: "MySQL", src: "/icons/mysql.svg", className: "h-6 w-6" },
  { name: "AWS", src: "/icons/aws.svg", className: "h-5 w-7" },
];
