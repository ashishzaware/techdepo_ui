import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsPreviewSection() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Completed Projects"
          description="A look at the kind of CCTV, networking and IT projects TechDepo delivers."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/projects" size="lg" variant="outline">
            View All Projects
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
