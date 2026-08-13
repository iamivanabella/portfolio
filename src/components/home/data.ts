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
    years: "Mar 2026 - Present",
    title: "Backend Moodle Developer",
    company: "Latingles",
    bullets: [
      "Own and maintain custom Moodle plugins for referral tracking, tutor signup and profile completion, and private student-tutor messaging.",
      "Develop PHP and MySQL backend workflows, integrations, plugin upgrades, and production fixes.",
      "Collaborate with the development team through GitHub.",
    ],
  },
  {
    years: "Apr 2024 - Present",
    title: "Freelance Moodle Developer",
    company: "Practice Tests Academy",
    bullets: [
      "Develop and maintain custom Moodle plugins and question types for an online practice-testing platform.",
      "Modernized a legacy custom quiz-generation plugin, reducing the overhead of creating and deleting temporary quiz activities.",
      "Built spreadsheet-style question functionality and resolved production issues involving quizzes, grading, PDF generation, attachments, performance, and integrations.",
    ],
  },
  {
    years: "Apr 2024 - Present",
    title: "Freelance WordPress Developer",
    company: "Experts Direct",
    bullets: [
      "Build responsive WordPress and Elementor pages from Figma designs.",
      "Work with ACF, CPTs, dynamic content, forms, animations, and integrations.",
      "Handle staging-to-production deployments, performance improvements, and cross-browser fixes.",
    ],
  },
  {
    years: "Dec 2023 - Jun 2024",
    title: "Junior Full-Stack Developer",
    company: "Tribute Technology",
    bullets: [
      "Maintained PHP backend functionality for a legacy business system.",
      "Modified report-generation features and produced PDF reports using PHP.",
    ],
  },
  {
    years: "Feb 2022 - Nov 2023",
    title: "Solutions Developer",
    company: "Capytech",
    bullets: [
      "Helped deploy Moodle platforms for approximately 10 clients on AWS EC2 instances running Linux.",
      "Customized Moodle themes, content, and backend code, including Arabic RTL interfaces.",
      "Built Elementor and JavaScript landing pages and maintained website performance and SEO.",
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
