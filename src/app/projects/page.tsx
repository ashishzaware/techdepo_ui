import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Completed Projects",
  description:
    "Browse TechDepo's completed CCTV, networking and IT projects across residential, commercial and solar installations.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="bg-brand-950 py-14 text-center text-white">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Completed Projects
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            A look at the CCTV, networking and IT projects TechDepo has delivered.
          </p>
        </Container>
      </div>

      <div className="py-16 sm:py-20">
        <Container>
          <ProjectsGrid projects={projects} categories={projectCategories} />
        </Container>
      </div>

      <CTASection />
    </div>
  );
}
