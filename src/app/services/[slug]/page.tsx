import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceGroup, serviceGroups } from "@/data/services";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { serviceJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return serviceGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const group = getServiceGroup(slug);
  if (!group) return {};

  return {
    title: group.title,
    description: group.summary,
    alternates: { canonical: `/services/${group.slug}` },
  };
}

export default async function ServiceCategoryPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const group = getServiceGroup(slug);
  if (!group) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(group)) }}
      />
      <ServiceDetailLayout
        icon={group.icon}
        eyebrow="Services"
        title={group.title}
        summary={group.summary}
        items={group.items}
        salesHref={
          group.slug === "billing-software"
            ? "/sales-enquiry?product=Billing%20Software"
            : "/sales-enquiry"
        }
      />
    </>
  );
}
