import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { DBLogo } from "@/components/db-logo";
import { LeadForm } from "@/components/lead-form";
import { SectionReveal } from "@/components/section-reveal";
import {
  aggregateStats,
  aiLoops,
  brands,
  caseStudies,
  faqs,
  services,
  team,
  testimonials
} from "@/lib/content";

const accentByPalette = {
  acid: "bg-acid text-ink",
  mint: "bg-mint text-ink",
  rust: "bg-rust text-ink"
};

const imageBySlug: Record<string, string> = {
  "raw-athletic": "/mock/raw-athletic.svg",
  "revive-md": "/mock/revive-md.svg",
  bum: "/mock/bum.svg"
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="focus-ring rounded text-chalk transition hover:text-acid" aria-label="Disruptive Brands home">
          <DBLogo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ash md:flex">
          <a className="transition hover:text-chalk" href="#work">
            Work
          </a>
          <a className="transition hover:text-chalk" href="#systems">
            Systems
          </a>
          <a className="transition hover:text-chalk" href="#team">
            Team
          </a>
          <a className="transition hover:text-chalk" href="#faq">
            FAQ
          </a>
        </nav>
        <a
          href="#book"
          className="focus-ring rounded bg-chalk px-4 py-2 text-sm font-bold text-ink transition hover:bg-acid"
        >
          Book a call
        </a>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl items-center gap-12 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:pb-16">
        <SectionReveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-acid">
            Operator-led DTC growth
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,6.2vw,6.25rem)] font-black leading-[0.95] tracking-normal text-chalk">
            The growth engine behind DTC brands doing 8 figures.
          </h1>
          <p className="mt-7 max-w-[42rem] text-base leading-7 text-ash sm:text-lg sm:leading-8">
            Disruptive Brands runs paid media, lifecycle, creative, analytics, and automation as one revenue system. Founder-operator thinking, faster testing loops, fewer mystery retainers.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="focus-ring rounded bg-acid px-6 py-4 text-center text-sm font-black text-ink transition hover:bg-chalk"
            >
              Book a strategy call
            </a>
            <a
              href="#work"
              className="focus-ring rounded border border-line px-6 py-4 text-center text-sm font-black text-chalk transition hover:border-acid hover:text-acid"
            >
              See the work
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12} className="relative">
          <div className="rounded-md border border-line bg-coal/80 p-4 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash">Live growth loop</span>
              <span className="h-2 w-2 rounded-full bg-acid" />
            </div>
            <div className="grid gap-3">
              {["Creative fatigue", "CAC drift", "Margin risk", "Budget move"].map((item, index) => (
                <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-4 rounded bg-chalk/[0.04] p-4">
                  <div>
                    <p className="text-sm font-bold text-chalk">{item}</p>
                    <div className="mt-3 h-1.5 rounded bg-chalk/10">
                      <div
                        className="h-full rounded bg-acid"
                        style={{ width: `${[76, 52, 38, 88][index]}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-xl font-bold text-acid">{[76, 52, 38, 88][index]}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded bg-acid p-5 text-ink">
              <p className="font-mono text-xs uppercase tracking-[0.22em]">Next decision</p>
              <p className="mt-3 text-2xl font-black leading-tight">Shift budget to variant C before noon.</p>
            </div>
          </div>
        </SectionReveal>
      </section>

      <SectionReveal>
        <section className="border-y border-line bg-chalk/[0.025] px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-ash">Operating the growth stack for:</p>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
              {brands.map((brand) => (
                <div key={brand.name} className="bg-ink px-4 py-6 text-center">
                  <p className="font-display text-2xl font-black text-chalk">{brand.mark}</p>
                  <p className="mt-2 text-xs text-ash">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <section id="work" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">Featured work</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,5rem)] font-black leading-none">
              Mock receipts first. Real receipts next.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <SectionReveal key={study.slug} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-md border border-line bg-coal transition duration-500 hover:-translate-y-1 hover:border-acid/70">
                <Image
                  src={imageBySlug[study.slug]}
                  alt={`${study.brand} mock creative board`}
                  width={900}
                  height={620}
                  className="aspect-[1.45] w-full object-cover"
                  priority={index === 0}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-chalk">{study.brand}</p>
                      <p className="mt-1 text-xs text-ash">{study.category}</p>
                    </div>
                    <span className={`rounded px-2 py-1 font-mono text-xs font-bold ${accentByPalette[study.palette as keyof typeof accentByPalette]}`}>
                      MOCK
                    </span>
                  </div>
                  <p className="mt-8 font-display text-6xl font-black leading-none text-chalk">{study.heroStat}</p>
                  <p className="mt-2 text-sm font-bold text-acid">{study.heroLabel}</p>
                  <p className="mt-5 text-sm leading-6 text-ash">{study.summary}</p>
                  <div className="mt-6 grid gap-2">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between border-t border-line pt-2 text-sm">
                        <span className="text-ash">{metric.label}</span>
                        <span className="font-mono font-bold text-chalk">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="focus-ring mt-6 inline-flex rounded text-sm font-black text-chalk transition group-hover:text-acid"
                  >
                    Read the full breakdown
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section id="systems" className="border-y border-line bg-chalk/[0.025] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionReveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">What we run</p>
              <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4.7rem)] font-black leading-none">
                One team for the revenue system.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="bg-ink p-6">
                  <h3 className="text-xl font-black leading-tight text-chalk">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ash">{service.copy}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-28">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">ATLAS OS direction</p>
          <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4.7rem)] font-black leading-none">
            Automation that shows up as better decisions.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ash">
            The internal stack does not replace operators. It makes the daily loop sharper: more signal, fewer reporting chores, faster calls.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="grid gap-3">
            {aiLoops.map((loop, index) => (
              <div key={loop} className="grid grid-cols-[auto_1fr] gap-4 rounded border border-line bg-coal p-5">
                <span className="font-mono text-3xl font-black text-acid">0{index + 1}</span>
                <p className="text-base leading-7 text-chalk">{loop}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section id="team" className="border-y border-line bg-chalk/[0.025] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">Team</p>
            <h2 className="mt-5 max-w-5xl font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-black leading-[1.02]">
              Humans sell agencies. Operators keep them.
            </h2>
          </SectionReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {team.map((person, index) => (
              <SectionReveal key={person.name} className="h-full">
                <article className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-md border border-line bg-ink/90 p-6 transition duration-300 hover:border-acid/60">
                  <div className="absolute inset-x-0 top-0 h-px bg-acid/80" />
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-end rounded bg-chalk p-3 text-ink">
                      <span className="font-display text-3xl font-black leading-none">
                        {person.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash">0{index + 1}</span>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-2xl font-black leading-tight text-chalk">{person.name}</h3>
                    <p className="mt-2 text-sm font-bold text-acid">{person.role}</p>
                    <p className="mt-7 text-sm leading-6 text-ash">{person.proof}</p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {aggregateStats.map((stat) => (
            <div key={stat.label} className="bg-coal p-6 sm:p-8">
              <p className="font-display text-5xl font-black leading-none text-chalk sm:text-6xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ash">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-chalk/[0.025] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <h2 className="max-w-4xl font-display text-[clamp(2.3rem,5vw,4.7rem)] font-black leading-none">
              Founder-to-founder proof.
            </h2>
          </SectionReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <SectionReveal key={testimonial.name}>
                <figure className="h-full rounded border border-line bg-ink p-6">
                  <blockquote className="text-xl font-bold leading-8 text-chalk">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-line pt-5">
                    <p className="font-black text-chalk">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-ash">{testimonial.title}</p>
                  </figcaption>
                </figure>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">FAQ</p>
          <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4.7rem)] font-black leading-none">
            Direct answers before the call.
          </h2>
        </SectionReveal>
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-coal p-5 open:bg-chalk/[0.06]">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded text-lg font-black text-chalk">
                {faq.question}
                <span className="text-acid transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-ash">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="book" className="border-t border-line px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionReveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">Next move</p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,7rem)] font-black leading-none">
              Let&apos;s build the engine.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ash">
              Send the basics. In production this posts into Miguel&apos;s Slack and can be swapped for a Cal.com modal.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1} className="rounded-md border border-line bg-coal p-5 sm:p-6">
            <LeadForm />
          </SectionReveal>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-ash sm:flex-row sm:items-center sm:justify-between">
          <DBLogo showWordmark className="text-chalk" />
          <div className="flex gap-5">
            <a className="transition hover:text-chalk" href="#work">
              Work
            </a>
            <a className="transition hover:text-chalk" href="#book">
              Contact
            </a>
            <a className="transition hover:text-chalk" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p>Copyright 2026 Disruptive Brands.</p>
        </div>
      </footer>
    </main>
  );
}
