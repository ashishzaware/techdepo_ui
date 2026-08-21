import type { Project, ProjectCategory } from "@/types";

/**
 * SAMPLE / PLACEHOLDER PROJECTS
 *
 * No real completed-project details or photos were supplied, so every entry
 * below is placeholder content clearly meant for replacement. Each project's
 * `image` is a labeled placeholder tile (rendered by ProjectCard), not a
 * real photo — swap in real project photos under /public/projects/ and
 * update `image` to reference them once available.
 *
 * To add a real project: copy an object below, fill in real details, and
 * give it a unique `slug`.
 */
export const projects: Project[] = [
  {
    slug: "sample-residential-cctv-setup",
    title: "[Sample] Residential CCTV Setup",
    location: "Sample Location",
    category: "Residential CCTV",
    description:
      "Placeholder project entry. Replace with a real completed residential CCTV installation — describe the home, the coverage requirement, and the outcome.",
    servicesProvided: ["CCTV Installation", "CCTV Configuration", "Remote Monitoring Setup"],
    completionDate: "2025-06",
    image: { placeholder: true, label: "Residential CCTV" },
  },
  {
    slug: "sample-commercial-cctv-setup",
    title: "[Sample] Commercial CCTV Setup",
    location: "Sample Location",
    category: "Commercial CCTV",
    description:
      "Placeholder project entry. Replace with a real completed commercial CCTV installation — shop, office, or warehouse coverage.",
    servicesProvided: ["CCTV Sales", "CCTV Installation", "CCTV Maintenance"],
    completionDate: "2025-04",
    image: { placeholder: true, label: "Commercial CCTV" },
  },
  {
    slug: "sample-solar-cctv-setup",
    title: "[Sample] Solar CCTV Installation",
    location: "Sample Location",
    category: "Solar CCTV",
    description:
      "Placeholder project entry. Replace with a real solar-powered CCTV deployment for a site without reliable grid power.",
    servicesProvided: ["Solar CCTV", "CCTV Installation"],
    completionDate: "2025-02",
    image: { placeholder: true, label: "Solar CCTV" },
  },
  {
    slug: "sample-office-networking-setup",
    title: "[Sample] Office Networking Setup",
    location: "Sample Location",
    category: "Networking",
    description:
      "Placeholder project entry. Replace with a real office LAN/Wi-Fi networking project.",
    servicesProvided: ["LAN Networking", "Wi-Fi Setup", "Router Configuration"],
    completionDate: "2025-01",
    image: { placeholder: true, label: "Networking" },
  },
  {
    slug: "sample-computer-setup",
    title: "[Sample] Multi-Desk Computer Setup",
    location: "Sample Location",
    category: "Computer Setup",
    description:
      "Placeholder project entry. Replace with a real multi-workstation desktop deployment for an office or shop.",
    servicesProvided: ["Desktop Sales", "Windows Installation", "Data Backup"],
    completionDate: "2024-11",
    image: { placeholder: true, label: "Computer Setup" },
  },
  {
    slug: "sample-it-infrastructure-support",
    title: "[Sample] IT Infrastructure Support",
    location: "Sample Location",
    category: "IT Infrastructure",
    description:
      "Placeholder project entry. Replace with a real ongoing IT infrastructure support engagement.",
    servicesProvided: ["IT Infrastructure Support", "Network Troubleshooting"],
    completionDate: "2024-09",
    image: { placeholder: true, label: "IT Infrastructure" },
  },
];

export const projectCategories: ProjectCategory[] = [
  "CCTV Installation",
  "Commercial CCTV",
  "Residential CCTV",
  "Solar CCTV",
  "Networking",
  "Computer Setup",
  "IT Infrastructure",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
