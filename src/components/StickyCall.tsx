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
      <div className="flex gap-3">
        <a
          href={practice.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line-strong px-4 py-3.5 font-semibold text-ink cursor-pointer"
        >
          <IconPhone className="h-5 w-5 text-blue-brand" />
          Call
        </a>
        <Link
          href="/contact"
          className="brand-gradient btn-alive flex flex-2 items-center justify-center rounded-full px-4 py-3.5 font-semibold text-white cursor-pointer"
        >
          Request Consultation
        </Link>
      </div>
    </div>
  );
}
