"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scrolling — skipped entirely when the visitor has asked for
 * reduced motion, since hijacked scrolling is a vestibular trigger.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let lenis: {
      raf: (t: number) => void;
      destroy: () => void;
      scrollTo: (t: string | HTMLElement, o?: { offset?: number }) => void;
    } | null = null;
    let frame = 0;
    let cancelled = false;

    // Lenis owns the scroll position, so in-page anchors have to be routed
    // through it — otherwise the browser jump and Lenis fight each other.
    //
    // Nav links are root-relative ("/#procedures") so they work from the
    // contact page too. Only intercept when the target is on THIS page;
    // otherwise let the browser navigate.
    const onAnchorClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

      const anchor = (e.target as HTMLElement)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href || !lenis) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash || url.hash === "#") return;

      const target = document.querySelector(url.hash);
      if (!(target instanceof HTMLElement)) return;

      e.preventDefault();
      // No offset here — Lenis already honours each section's scroll-mt-*,
      // which is what clears the fixed header.
      lenis.scrollTo(target);
      history.pushState(null, "", url.hash);
    };

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      document.addEventListener("click", onAnchorClick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
