import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Camera, Network, Building2, Sun } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { getProjectBySlug, projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

const categoryIcon: Record<ProjectCategory, typeof Camera> = {
  "CCTV Installation": Camera,
  "Commercial CCTV": Building2,
  "Residential CCTV": Camera,
  "Solar CCTV": Sun,
  Networking: Network,
  "Computer Setup": Building2,
  "IT Infrastructure": Building2,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

function formatDate(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Date(year, month - 1).toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Icon = categoryIcon[project.category] ?? Building2;

  return (
    <div>
      <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-brand-900 to-brand-700 sm:aspect-[3/1]">
        <div className="flex flex-col items-center gap-3 text-white/90">
          <Icon className="size-14" aria-hidden />
          <span className="text-sm font-semibold uppercase tracking-wide">
            {project.image.label}
          </span>
        </div>
      </div>

      <Container className="max-w-3xl py-12">
        <span className="mb-3 inline-block rounded-full bg-brand-950/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
          {project.category}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-5 text-sm font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-4" aria-hidden />
            Completed {formatDate(project.completionDate)}
          </span>
        </div>

        <p className="mt-6 text-base leading-relaxed text-slate-700">{project.description}</p>

        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-950">
            Services Provided
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.servicesProvided.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <LinkButton href="/projects" variant="ghost">
            &larr; Back to all projects
          </LinkButton>
        </div>
      </Container>

      <CTASection />
    </div>
  );
}
