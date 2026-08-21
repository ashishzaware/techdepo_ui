import Link from "next/link";
import { Calendar, MapPin, Camera, Network, Building2, Sun } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";

const categoryIcon: Record<ProjectCategory, typeof Camera> = {
  "CCTV Installation": Camera,
  "Commercial CCTV": Building2,
  "Residential CCTV": Camera,
  "Solar CCTV": Sun,
  Networking: Network,
  "Computer Setup": Building2,
  "IT Infrastructure": Building2,
};

function formatDate(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Date(year, month - 1).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category] ?? Building2;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-900 to-brand-700">
        <div className="flex flex-col items-center gap-2 text-white/90">
          <Icon className="size-10" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {project.image.label}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 inline-block w-fit rounded-full bg-brand-950/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold text-brand-950 group-hover:text-accent-700">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden />
            {formatDate(project.completionDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}
