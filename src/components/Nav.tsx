"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { navLinks, practice } from "@/lib/data";
import { IconClose, IconMenu, IconPhone } from "./Icons";
import Wordmark from "./Wordmark";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet, and let Escape close it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* ---------- Brand bar ----------
            Collapses out of the way on scroll and hands its job to the
            compact wordmark in the nav strip below. */}
        <div
          className={`overflow-hidden bg-linear-135 from-[#16304f] via-[#0d1f38] to-[#050d1c] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "max-h-0 opacity-0" : "max-h-48 opacity-100"
          }`}
        >
          <div className="shell flex items-center justify-between gap-6 py-4 lg:py-5">
            <Link
              href="/#top"
              aria-label={`${practice.name} — home`}
              className="transition-opacity duration-200 hover:opacity-80"
            >
              <Wordmark />
            </Link>

            <a
              href={practice.phoneHref}
              className="hidden shrink-0 text-right transition-colors duration-200 hover:text-cyan-brand sm:block cursor-pointer"
            >
              <span className="block text-[0.68rem] font-semibold tracking-[0.24em] text-cyan-brand/80 uppercase">
                Call us
              </span>
              {/* Sans, not the display serif — Cormorant's old-style figures
                  render the digits at mixed heights and read as fuzzy at this
                  size on a dark ground. */}
              <span className="mt-1 block font-sans text-[1.55rem] leading-none font-bold tracking-tight text-white tabular-nums lg:text-[1.9rem]">
                {practice.phone}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-cyan-brand hover:text-cyan-brand lg:hidden cursor-pointer"
            >
              <IconMenu className="h-5.5 w-5.5" />
            </button>
          </div>
        </div>

        {/* ---------- Nav strip ---------- */}
        <div className="border-t border-white/10 bg-ink-deep/95 backdrop-blur-xl">
          <div className="shell flex items-center justify-between gap-6 py-2.5">
            {/* Only present once the brand bar has rolled up */}
            <Link
              href="/#top"
              aria-label={`${practice.name} — home`}
              className={`shrink-0 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-80 ${
                scrolled
                  ? "max-w-xs opacity-100"
                  : "pointer-events-none max-w-0 opacity-0"
              }`}
            >
              <Wordmark compact iconOnlyOnMobile />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative block py-2 text-[0.95rem] font-medium whitespace-nowrap text-white/80 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-brand after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile always, desktop only once the brand bar has rolled up —
                the number should never be off-screen on a phone. */}
            <a
              href={practice.phoneHref}
              className={`inline-flex shrink-0 items-center gap-1.5 text-[0.82rem] font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:text-cyan-brand sm:gap-2 sm:text-[0.9rem] lg:text-[0.95rem] cursor-pointer ${
                scrolled ? "lg:inline-flex" : "lg:hidden"
              }`}
            >
              <IconPhone className="h-4.5 w-4.5 text-cyan-brand" />
              {practice.phone}
            </a>

            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/contact"
                className="brand-gradient btn-alive shrink-0 rounded-full px-4 py-2.5 text-[0.82rem] font-semibold whitespace-nowrap text-white [--sweep-delay:1.6s] sm:px-5 sm:text-[0.9rem] lg:px-6 lg:text-[0.95rem] cursor-pointer"
              >
                <span className="sm:hidden">Book Now</span>
                <span className="hidden sm:inline">Request Consultation</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className={`h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-cyan-brand hover:text-cyan-brand lg:hidden cursor-pointer ${
                  scrolled ? "grid" : "hidden"
                }`}
              >
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Mobile sheet ---------- */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-linear-160 from-[#16304f] via-[#0b1c33] to-[#050d1c] px-7 py-6 shadow-lift-lg transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Wordmark compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-white cursor-pointer"
            >
              <IconClose className="h-5.5 w-5.5" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/12 py-4 font-display text-3xl text-white transition-colors duration-200 hover:text-cyan-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="brand-gradient btn-alive rounded-full px-6 py-4 text-center font-semibold text-white cursor-pointer"
            >
              Request Consultation
            </Link>
            <a
              href={practice.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-semibold text-white cursor-pointer"
            >
              <IconPhone className="h-5 w-5" />
              {practice.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
