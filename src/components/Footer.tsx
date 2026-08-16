import Link from "next/link";
import { additionalServices, navLinks, practice, signatureProcedures, years } from "@/lib/data";
import { IconPhone, IconPin } from "./Icons";
import Wordmark from "./Wordmark";

export default function Footer() {
  // Server component — resolved at render, so no hydration mismatch.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Wordmark compact />
            <p className="mt-6 max-w-xs text-[0.95rem] text-white/60">
              Clearly focused on providing you {practice.mission.toLowerCase()}.
              Serving South Florida for {years.phrase}.
            </p>

            <div className="mt-7 flex flex-col gap-3 text-[0.95rem]">
              <a
                href={practice.phoneHref}
                className="inline-flex items-center gap-2.5 text-white transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
              >
                <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
                {practice.phone}
              </a>
              <a
                href={practice.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 text-white/70 transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
              >
                <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan-brand" />
                <span>
                  {practice.address.street}
                  <br />
                  {practice.address.city}, {practice.address.state}{" "}
                  {practice.address.zip}
                </span>
              </a>
            </div>
          </div>

          <nav aria-label="Procedures">
            <h2 className="text-[0.78rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
              Procedures
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem]">
              {signatureProcedures.map((p) => (
                <li key={p.id}>
                  <Link
                    href="/#procedures"
                    className="text-white/70 transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-[0.78rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem]">
              {additionalServices.slice(0, 5).map((s) => (
                <li key={s.name}>
                  <Link
                    href="/#procedures"
                    className="text-white/70 transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Practice">
            <h2 className="text-[0.78rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
              Practice
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.95rem]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 transition-colors duration-200 hover:text-cyan-brand cursor-pointer"
                >
                  Request Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-8 text-[0.85rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {practice.name}. {practice.tagline}
            <sup>®</sup>
          </p>
          <p className="max-w-2xl md:text-right">
            The content on this site is for general information and is not
            medical advice. Individual results vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
