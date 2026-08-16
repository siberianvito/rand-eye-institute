import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { IconPhone } from "./Icons";
import { practice } from "@/lib/data";

/**
 * Shared shell for the policy pages. Keeps them visually part of the site
 * without dragging the marketing furniture onto a page people are reading
 * for information.
 */
export default function LegalPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-12 lg:pt-52 lg:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="iris-a absolute -top-[46%] -right-[12%] h-[52vw] max-h-[700px] w-[52vw] max-w-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.24)_0%,transparent_64%)]" />
        </div>

        <div className="shell relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[0.85rem] text-slate-body">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-blue-brand cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2 text-grey-brand">/</span>
              <span className="text-ink">{title}</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-normal">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-lg text-slate-body">{intro}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-[0.85rem] text-grey-brand">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="shell">
          <div className="legal-prose">{children}</div>

          <div className="mt-14 max-w-2xl rounded-2xl border border-line bg-card p-7">
            <h2 className="text-2xl">Questions about this page?</h2>
            <p className="mt-2 text-slate-body">
              Call the office and ask for the Privacy Officer, or write to us at
              the address below.
            </p>
            <a
              href={practice.phoneHref}
              className="mt-4 inline-flex items-center gap-2.5 font-sans text-2xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 hover:text-blue-brand cursor-pointer"
            >
              <IconPhone className="h-5 w-5 text-cyan-brand" />
              {practice.phone}
            </a>
            <p className="mt-3 text-[0.95rem] text-slate-body">
              {practice.name}, {practice.address.street},{" "}
              {practice.address.city}, {practice.address.state}{" "}
              {practice.address.zip}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
