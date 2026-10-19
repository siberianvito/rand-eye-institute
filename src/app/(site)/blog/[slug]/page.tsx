import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { IconArrow, IconPhone } from "@/components/Icons";
import { asset } from "@/lib/asset";
import { blogPosts, getPost, readingMinutes } from "@/lib/blog";
import { practice } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.cardTitle,
    description: post.description,
    keywords: [...post.keywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.randeye.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: { "@type": "Organization", name: practice.name },
    publisher: { "@type": "Organization", name: practice.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className="relative border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-12 lg:pt-52 lg:pb-14">
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
                <Link
                  href="/blog"
                  className="transition-colors duration-200 hover:text-blue-brand cursor-pointer"
                >
                  Articles
                </Link>
                <span className="mx-2 text-grey-brand">/</span>
                <span className="text-ink">{post.cardTitle}</span>
              </nav>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-[clamp(2.1rem,4.6vw,3.6rem)] font-normal">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span aria-hidden>·</span>
                <span>{readingMinutes(post)} min read</span>
                <span aria-hidden>·</span>
                <span>{practice.name}</span>
              </p>
            </Reveal>
          </div>
        </header>

        <div className="bg-surface py-12 lg:py-16">
          <div className="shell">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl border border-line bg-card">
                <div className="relative aspect-16/9">
                  <Image
                    src={asset(post.image)}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-6 py-4 text-[0.85rem] text-grey-brand">
                  {post.imageCaption}
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,68ch)_1fr] lg:gap-16">
              <div>
                <Reveal>
                  <p className="text-xl leading-relaxed text-ink lg:text-[1.35rem]">
                    {post.lead}
                  </p>
                </Reveal>

                <div className="prose-body mt-10">
                  {post.sections.map((section) => (
                    <section key={section.heading ?? section.body?.[0]}>
                      {section.heading && <h2>{section.heading}</h2>}
                      {section.body?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.list && (
                        <ul>
                          {section.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                <Reveal>
                  <p className="mt-12 rounded-2xl border border-line bg-surface-tint px-6 py-5 text-[0.9rem] leading-relaxed text-slate-body">
                    This article is general information about eye conditions and
                    the procedures we perform. It is not medical advice, and it
                    cannot tell you what is happening in your eyes. Only an
                    examination can do that.
                  </p>
                </Reveal>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-3xl border border-line bg-card px-7 py-8">
                  <p className="eyebrow">Talk to us</p>
                  <p className="mt-4 text-slate-body">
                    Every eye is different. An exam is the only way to know
                    which procedure, if any, fits yours.
                  </p>
                  <a
                    href={practice.phoneHref}
                    className="mt-6 flex items-center gap-2.5 font-sans text-2xl font-bold tracking-tight text-ink tabular-nums transition-colors duration-200 hover:text-blue-brand cursor-pointer"
                  >
                    <IconPhone className="h-5 w-5 text-cyan-brand" />
                    {practice.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="brand-gradient btn-alive mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 font-semibold text-white cursor-pointer"
                  >
                    Request Appointment
                  </Link>
                </div>

                <div className="mt-8 rounded-3xl border border-line bg-surface-tint px-7 py-8">
                  <p className="eyebrow">Keep reading</p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {post.related.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-start gap-2 text-ink transition-colors duration-200 hover:text-blue-brand cursor-pointer"
                        >
                          <IconArrow className="mt-1 h-4.5 w-4.5 shrink-0 text-cyan-brand transition-transform duration-300 group-hover:translate-x-1" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <Reveal>
              <Link
                href="/blog"
                className="mt-16 inline-flex items-center gap-2 font-semibold text-blue-brand cursor-pointer"
              >
                <IconArrow className="h-5 w-5 rotate-180" />
                All articles
              </Link>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  );
}
