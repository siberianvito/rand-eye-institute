import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { IconArrow, IconPhone } from "@/components/Icons";
import { asset } from "@/lib/asset";
import { blogPosts, readingMinutes } from "@/lib/blog";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eye Health Articles",
  description:
    "Plain answers about cataract surgery, LASIK and laser vision correction from the physicians at Rand Eye Institute in Deerfield Beach, Florida.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Eye Health Articles | Rand Eye Institute",
    description:
      "Plain answers about cataract surgery, LASIK and laser vision correction from our physicians.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const [lead, ...rest] = blogPosts;

  return (
    <>
      <section className="relative border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-14 lg:pt-52 lg:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="iris-a absolute -top-[44%] -right-[10%] h-[54vw] max-h-[720px] w-[54vw] max-w-[720px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.26)_0%,transparent_64%)]" />
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
              <span className="text-ink">Articles</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal">
              Eye health,
              <span className="brand-text-gradient italic"> explained plainly.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg text-slate-body lg:text-xl">
              The questions patients ask us most, answered the way we answer
              them in the exam room. No sales copy and no promises we cannot
              keep.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="shell">
          {/* Lead article */}
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-300 hover:border-cyan-brand lg:grid-cols-2 lg:gap-0 cursor-pointer"
            >
              <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={asset(lead.image)}
                  alt={lead.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-7 pb-9 lg:px-12 lg:py-14">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <span className="text-cyan-brand">Latest</span>
                  <span aria-hidden>·</span>
                  <time dateTime={lead.date}>{lead.dateLabel}</time>
                  <span aria-hidden>·</span>
                  <span>{readingMinutes(lead)} min read</span>
                </p>

                <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] transition-colors duration-200 group-hover:text-blue-brand">
                  {lead.title}
                </h2>

                <p className="mt-5 text-slate-body">{lead.lead}</p>

                <span className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-brand">
                  Read the article
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Everything else */}
          {rest.length > 0 && (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 90}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-300 hover:border-cyan-brand cursor-pointer"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={asset(post.image)}
                        alt={post.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col px-7 py-8">
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                        <time dateTime={post.date}>{post.dateLabel}</time>
                        <span aria-hidden>·</span>
                        <span>{readingMinutes(post)} min read</span>
                      </p>

                      <h2 className="mt-4 text-2xl transition-colors duration-200 group-hover:text-blue-brand lg:text-[1.75rem]">
                        {post.title}
                      </h2>

                      <p className="mt-4 text-[0.98rem] text-slate-body">
                        {post.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-brand">
                        Read the article
                        <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal>
            <div className="mt-14 flex flex-col items-start gap-5 rounded-3xl border border-line bg-surface-tint px-8 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-12">
              <div>
                <h2 className="text-2xl lg:text-3xl">
                  Reading about it only gets you so far
                </h2>
                <p className="mt-2 max-w-xl text-slate-body">
                  An exam tells you where your eyes actually stand. Call the
                  office or request an appointment.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href={practice.phoneHref}
                  className="brand-gradient btn-alive inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold whitespace-nowrap text-white cursor-pointer"
                >
                  <IconPhone className="h-5 w-5" />
                  {practice.phone}
                </a>
                <Link
                  href="/contact"
                  className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card px-7 py-4 font-semibold whitespace-nowrap text-ink hover:text-blue-brand cursor-pointer"
                >
                  Request Appointment
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
