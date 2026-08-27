"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { asset } from "@/lib/asset";
import { practice } from "@/lib/data";

const QUERY = "(prefers-reduced-motion: reduce)";

/** The OS motion setting is external state, so read it as one. */
function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

/**
 * The opening film: still water, into a macro iris, resolving on the practice
 * logo. Nothing is laid over it — the piece ends on its own brand card, and
 * type on top would fight that.
 *
 * It plays once and holds on the final frame rather than looping; looping
 * would snap from the logo back to open water every ten seconds.
 *
 * Aspect ratios are chosen so the logo lockup is never cropped: it sits
 * centred across ~61% of the frame, so nothing narrower than 4:3.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Start playback from an effect rather than the autoplay attribute, so the
  // server render is identical either way and motion preference decides.
  useEffect(() => {
    if (reducedMotion) {
      videoRef.current?.pause();
      return;
    }
    videoRef.current?.play().catch(() => {
      /* blocked — the poster remains, which is a fine first frame */
    });
  }, [reducedMotion]);

  const play = () => {
    setStarted(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section
      aria-label={`${practice.name} introduction film`}
      // pt clears the fixed brand bar + nav strip above it
      className="relative bg-ink pt-[6.5rem] lg:pt-[8.25rem]"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-ink sm:aspect-3/2 lg:aspect-video">
        <video
          ref={videoRef}
          poster={asset("/hero-poster.jpg")}
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={asset("/hero.webm")} type="video/webm" />
          <source src={asset("/hero.mp4")} type="video/mp4" />
        </video>

        {/* Someone who asked for less motion gets a still until they choose */}
        {reducedMotion && !started && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 grid place-items-center bg-ink/35 transition-colors duration-200 hover:bg-ink/25 cursor-pointer"
          >
            <span className="flex items-center gap-3 rounded-full bg-card px-6 py-3.5 text-[0.95rem] font-semibold text-ink shadow-lift-lg">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-blue-brand"
                aria-hidden
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
              </svg>
              Play introduction
            </span>
          </button>
        )}

        {/* Seats the film against the section below it */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-surface-tint"
        />
      </div>
    </section>
  );
}
