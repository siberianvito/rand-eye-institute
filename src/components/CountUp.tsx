"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a figure up once, when it first scrolls into view.
 *
 * The final number is what renders server-side, so the real figure is in the
 * static HTML for search engines and anyone without JavaScript. The animation
 * then rewinds it to zero on mount and plays forward — which also means the
 * count is driven by writing textContent directly rather than React state, so
 * a 60fps counter does not trigger a re-render every frame.
 *
 * Honours the OS reduced-motion setting and the site's own reader-options
 * toggle (data-motion="reduced" on <html>): in either case the figure simply
 * stays at its final value.
 */
export default function CountUp({
  to,
  suffix = "",
  durationMs = 1800,
  className = "",
}: {
  to: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motionOff =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.getAttribute("data-motion") === "reduced";
    if (motionOff) return;

    const render = (n: number) => {
      node.textContent = `${n.toLocaleString("en-US")}${suffix}`;
    };

    let frame = 0;
    let start = 0;

    const run = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / durationMs);
      // ease-out cubic: quick off the mark, settles gently onto the figure
      render(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(run);
    };

    const startRun = () => {
      render(0);
      frame = requestAnimationFrame(run);
    };

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startRun();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        startRun();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, suffix, durationMs]);

  return (
    <span ref={ref} className={className}>
      {to.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
