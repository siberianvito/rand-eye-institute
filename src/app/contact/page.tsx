import type { Metadata } from "next";
import Link from "next/link";
import Consult from "@/components/Consult";
import Reveal from "@/components/Reveal";
import { IconArrow, IconCheck, IconClock, IconPhone, IconPin } from "@/components/Icons";
import { practice, years } from "@/lib/data";

export const metadata: Metadata = {
  // The root layout appends "| Rand Eye Institute" via its title template.
  title: "Request an Appointment & Contact",
  description: `Request an appointment for LASIK, cataract surgery, or corneal cross-linking at Rand Eye Institute in ${practice.address.city}, FL. Call ${practice.phone} or send us a message.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request an Appointment | Rand Eye Institute",
    description:
      "Book a full diagnostic workup with the Rand physicians in Deerfield Beach.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header — clears the fixed brand bar + nav strip. */}
      <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-surface-tint via-surface to-surface pt-44 pb-16 lg:pt-52 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="iris-a absolute -top-[40%] -right-[10%] h-[56vw] max-h-[760px] w-[56vw] max-w-[760px] rounded-full bg-[radial-gradient(circle,rgba(0,160,224,0.3)_0%,transparent_64%)]" />
          <div className="iris-b absolute -bottom-[46%] -left-[14%] h-[50vw] max-h-[680px] w-[50vw] max-w-[680px] rounded-full bg-[radial-gradient(circle,rgba(46,49,146,0.22)_0%,transparent_66%)]" />
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
              <span className="text-ink">Contact</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-normal">
              Request an
              <span className="brand-text-gradient italic"> appointment.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-lg text-slate-body lg:text-xl">
              Tell us a little about your eyes and we will call you back within
              one business day to find a time. If you would rather speak to
              someone now, the number below reaches our office directly.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={practice.phoneHref}
                className="brand-gradient btn-alive group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4.5 text-base font-semibold whitespace-nowrap sm:px-8 text-white cursor-pointer"
              >
                <IconPhone className="h-5 w-5" />
                {practice.phone}
              </a>
              <a
                href="#request"
                className="btn-outline-alive inline-flex items-center justify-center gap-2.5 rounded-full border border-line-strong bg-card/80 px-8 py-4.5 text-base font-semibold text-ink backdrop-blur hover:text-blue-brand cursor-pointer"
              >
                Send a message
                <IconArrow className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          {/* At-a-glance practice details */}
          <Reveal delay={300}>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              <div className="bg-card/90 px-6 py-6 backdrop-blur">
                <dt className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <IconPin className="h-4 w-4 text-cyan-brand" />
                  Address
                </dt>
                <dd className="mt-2 leading-snug text-ink">
                  {practice.address.street}
                  <br />
                  {practice.address.city}, {practice.address.state}{" "}
                  {practice.address.zip}
                </dd>
              </div>

              <div className="bg-card/90 px-6 py-6 backdrop-blur">
                <dt className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <IconClock className="h-4 w-4 text-cyan-brand" />
                  Hours
                </dt>
                <dd className="mt-2 leading-snug text-ink">
                  {practice.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}
                      <span className="text-slate-body"> · {h.time}</span>
                    </span>
                  ))}
                </dd>
              </div>

              <div className="bg-card/90 px-6 py-6 backdrop-blur">
                <dt className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
                  <IconCheck className="h-4 w-4 text-cyan-brand" />
                  Experience
                </dt>
                <dd className="mt-2 leading-snug text-ink">
                  {years.phrase.replace(/^over /, "Over ")} of {practice.tagline.toLowerCase()}
                  <span className="block text-slate-body">
                    Over 100 professionals on staff
                  </span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <Consult />

      {/* Map */}
      <section className="border-t border-line bg-surface-tint py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl">Find us in {practice.address.city}</h2>
            <a
              href={practice.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-blue-brand transition-colors duration-200 hover:text-indigo-brand cursor-pointer"
            >
              Open in Google Maps
              <IconArrow className="h-4.5 w-4.5" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-line shadow-lift">
            <iframe
              title={`Map showing ${practice.name} at ${practice.address.street}, ${practice.address.city}, ${practice.address.state}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.state} ${practice.address.zip}`,
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 lg:h-[460px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
