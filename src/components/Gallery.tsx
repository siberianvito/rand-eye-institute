"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { galleryPhotos } from "@/lib/data";
import Reveal from "./Reveal";
import { IconArrow, IconClose } from "./Icons";

/**
 * Pavilion collage.
 *
 * Laid out with CSS columns rather than a fixed grid so the mix of portrait
 * phone shots and landscape frames packs without cropping anyone's face —
 * these are real staff and patients, not stock.
 */
export default function Gallery() {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const count = galleryPhotos.length;

  const close = useCallback(() => setOpenAt(null), []);
  const step = useCallback(
    (by: number) => setOpenAt((i) => (i === null ? null : (i + by + count) % count)),
    [count],
  );

  useEffect(() => {
    if (openAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openAt, close, step]);

  const open = openAt === null ? null : galleryPhotos[openAt];

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-y border-line bg-surface-tint py-24 lg:py-32"
    >
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Inside the pavilion</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">
              We stand by
              <span className="brand-text-gradient italic"> our patients.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg text-slate-body">
              The same team, in the same building, from the first measurement to
              the moment you sit up and look around the room.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {galleryPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpenAt(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg cursor-pointer"
              >
                <Image
                  src={asset(photo.src)}
                  alt={photo.alt}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                <span className="block px-4 py-3 text-left text-[0.85rem] leading-snug font-medium text-ink-soft">
                  {photo.caption}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-70 flex items-center justify-center bg-ink-deep/92 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-cyan-brand hover:text-cyan-brand cursor-pointer"
          >
            <IconClose className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-cyan-brand hover:text-cyan-brand sm:left-6 cursor-pointer"
          >
            <IconArrow className="h-6 w-6 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-cyan-brand hover:text-cyan-brand sm:right-6 cursor-pointer"
          >
            <IconArrow className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={asset(open.src)}
              alt={open.alt}
              width={1600}
              height={2000}
              sizes="90vw"
              className="mx-auto max-h-[76vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mx-auto mt-4 max-w-2xl text-center">
              <span className="block text-[1.05rem] font-semibold text-white">
                {open.caption}
              </span>
              <span className="mt-1.5 block text-[0.9rem] text-white/60">
                {open.alt}
              </span>
              <span className="mt-2 block text-[0.85rem] text-white/40">
                {openAt! + 1} of {count}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
