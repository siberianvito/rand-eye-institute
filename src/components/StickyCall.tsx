"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { practice } from "@/lib/data";
import { IconPhone } from "./Icons";

/**
 * Mobile call/book bar. Appears once the visitor is past the hero — on a
 * medical site the tap-to-call is the single highest-converting control,
 * and it should never be more than a thumb away.
 */
export default function StickyCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 px-4 py-3 backdrop-blur-xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Matched heights, centred labels, and the CTA given enough of the row
          that "Request Appointment" stays on one line down to 320px. */}
      <div className="flex items-stretch gap-2.5">
        <a
          href={practice.phoneHref}
          className="flex h-13 basis-[34%] items-center justify-center gap-2 rounded-full border border-line-strong bg-card text-[0.95rem] font-semibold whitespace-nowrap text-ink cursor-pointer"
        >
          <IconPhone className="h-5 w-5 text-blue-brand" />
          Call
        </a>
        <Link
          href="/contact"
          className="brand-gradient btn-alive flex h-13 flex-1 items-center justify-center rounded-full px-3 text-center text-[0.95rem] font-semibold whitespace-nowrap text-white cursor-pointer"
        >
          Request Appointment
        </Link>
      </div>
    </div>
  );
}
