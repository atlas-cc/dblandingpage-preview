import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DBLogo } from "@/components/db-logo";
import { SectionReveal } from "@/components/section-reveal";
import { caseStudies } from "@/lib/content";

const imageBySlug: Record<string, string> = {
  "raw-athletic": "/mock/raw-athletic.svg",
  "revive-md": "/mock/revive-md.svg",
  bum: "/mock/bum.svg"
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};

  return {
    title: `${study.brand} case study | Disruptive Brands`,
    description: `${study.heroStat} ${study.heroLabel} for ${study.brand}.`
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  return (
    <main>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="focus-ring rounded text-chalk transition hover:text-acid" aria-label="Disruptive Brands home">
          <DBLogo />
        </Link>
        <Link
          href="/#work"
          className="focus-ring rounded border border-line px-4 py-2 text-sm font-bold text-chalk transition hover:border-acid hover:text-acid"
        >
          Back to work
        </Link>
      </header>

      <article className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">Mock case study</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,9vw,8rem)] font-black leading-[0.88]">
            {study.brand}: {study.heroStat} {study.heroLabel}.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ash">{study.summary}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12">
          <Image
            src={imageBySlug[study.slug]}
            alt={`${study.brand} mock case study artwork`}
            width={900}
            height={620}
            className="w-full rounded-md border border-line object-cover"
            priority
          />
        </SectionReveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="bg-coal p-6">
              <p className="font-display text-5xl font-black text-chalk">{metric.value}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ash">{metric.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">Breakdown</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-none">What changed</h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-ash">
            <p>
              DB started with the operating rhythm: what the team reviewed, which decisions were delayed, and where creative signal was getting lost. The first sprint rebuilt the account view around contribution, CAC, and offer performance.
            </p>
            <p>
              The next sprint connected creative production to media decisions. Winning angles were turned into more variants quickly, losing angles were retired without drama, and budget moved only when the math supported it.
            </p>
            <p>
              This is placeholder narrative for v1. When the approved numbers arrive, this page can become a full MDX case study with screenshots, quotes, and channel-level detail.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
