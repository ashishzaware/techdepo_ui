import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceGroup } from "@/data/services";

export function ServiceCard({ group }: { group: ServiceGroup }) {
  const Icon = group.icon;

  return (
    <Link
      href={`/services/${group.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-950 text-white">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-950">{group.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{group.summary}</p>
      <ul className="mt-4 space-y-1.5">
        {group.items.slice(0, 4).map((item) => (
          <li key={item.title} className="text-xs font-medium text-slate-500">
            &bull; {item.title}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
        Explore {group.shortTitle}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
