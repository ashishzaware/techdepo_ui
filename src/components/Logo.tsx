import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 shrink-0 rounded-full"
      />
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          dark ? "text-white" : "text-brand-950",
        )}
      >
        {siteConfig.companyName}
      </span>
    </Link>
  );
}
