"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { IconClose } from "./Icons";

/**
 * Reader controls — text size, contrast, motion, link underlines.
 *
 * Deliberately NOT a third-party accessibility overlay. Overlays inject a
 * parallel DOM that fights real screen readers, and they do not confer legal
 * compliance — several have been litigated over exactly that claim. This does
 * the opposite: it only sets data attributes on <html> and lets CSS respond,
 * so assistive technology sees the same, unmodified page it always did.
 *
 * The controls themselves are genuinely useful here: half this practice's
 * patients are being treated for cataracts, keratoconus or low vision.
 */
type Prefs = {
  textSize: "normal" | "large" | "larger";
  contrast: "normal" | "high";
  motion: "normal" | "reduced";
  underlineLinks: "off" | "on";
};

const DEFAULTS: Prefs = {
  textSize: "normal",
  contrast: "normal",
  motion: "normal",
  underlineLinks: "off",
};

const STORAGE_KEY = "rei-reader-prefs";

const ATTR: Record<keyof Prefs, string> = {
  textSize: "data-text-size",
  contrast: "data-contrast",
  motion: "data-motion",
  underlineLinks: "data-underline-links",
};

function apply(prefs: Prefs) {
  const root = document.documentElement;
  (Object.keys(ATTR) as (keyof Prefs)[]).forEach((key) => {
    const value = prefs[key];
    if (value === DEFAULTS[key]) root.removeAttribute(ATTR[key]);
    else root.setAttribute(ATTR[key], value);
  });
}

/**
 * The saved preferences live outside React — they are a browser concern, read
 * from localStorage and written to <html>. Modelling them as an external store
 * keeps the server render at DEFAULTS (so hydration matches) and avoids the
 * cascading re-render that setState-inside-an-effect would cause.
 */
const store = (() => {
  let current: Prefs = DEFAULTS;
  let loaded = false;
  const listeners = new Set<() => void>();

  const load = () => {
    loaded = true;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) current = { ...DEFAULTS, ...JSON.parse(saved) } as Prefs;
    } catch {
      /* private mode or a corrupt value — defaults are fine */
    }
    apply(current);
  };

  return {
    subscribe(listener: () => void) {
      // First subscribe happens after mount, so localStorage is safe here.
      if (!loaded) load();
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    get: () => current,
    getServer: () => DEFAULTS,
    set(next: Prefs) {
      current = next;
      apply(next);
      try {
        if (next === DEFAULTS) localStorage.removeItem(STORAGE_KEY);
        else localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* the setting still applies for this visit */
      }
      listeners.forEach((l) => l());
    },
  };
})();

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const prefs = useSyncExternalStore(store.subscribe, store.get, store.getServer);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Merge against the store, not the render closure — two changes made before
  // React re-renders would otherwise clobber each other.
  const update = (patch: Partial<Prefs>) => store.set({ ...store.get(), ...patch });
  const reset = () => store.set(DEFAULTS);

  const isDefault = (Object.keys(DEFAULTS) as (keyof Prefs)[]).every(
    (k) => prefs[k] === DEFAULTS[k],
  );

  const groupClass =
    "grid grid-cols-3 gap-1 rounded-xl border border-line bg-surface-tint p-1";
  const optionClass = (active: boolean) =>
    `rounded-lg px-2 py-2 text-[0.82rem] font-semibold transition-colors duration-150 cursor-pointer ${
      active
        ? "bg-blue-brand text-white"
        : "text-ink-soft hover:bg-surface-deep"
    }`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="reader-controls"
        // Sits above the mobile call bar so the two never collide.
        className="fixed bottom-24 left-4 z-50 grid h-13 w-13 place-items-center rounded-full border border-line-strong bg-card text-blue-brand shadow-lift-lg transition-colors duration-200 hover:border-blue-brand hover:bg-surface-tint sm:bottom-6 cursor-pointer"
      >
        <span className="sr-only">
          {open ? "Close accessibility options" : "Open accessibility options"}
        </span>
        {/* Universal access mark */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6.5 w-6.5"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
          <path d="M7 10.2c3.3 1 6.7 1 10 0M12 10.6v3.2m0 0-2.1 4.2m2.1-4.2 2.1 4.2" />
        </svg>
      </button>

      <div
        id="reader-controls"
        hidden={!open}
        className="fixed bottom-40 left-4 z-50 w-[17.5rem] rounded-2xl border border-line bg-card p-5 shadow-lift-lg sm:bottom-22"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl text-ink">Reader options</h2>
            <p className="mt-1 text-[0.8rem] text-slate-body">
              Saved on this device.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink cursor-pointer"
          >
            <span className="sr-only">Close</span>
            <IconClose className="h-4 w-4" />
          </button>
        </div>

        <fieldset className="mt-5">
          <legend className="mb-2 text-[0.78rem] font-semibold tracking-[0.14em] text-grey-brand uppercase">
            Text size
          </legend>
          <div className={groupClass}>
            {(["normal", "large", "larger"] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => update({ textSize: size })}
                aria-pressed={prefs.textSize === size}
                className={optionClass(prefs.textSize === size)}
              >
                {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 flex flex-col gap-2.5">
          {(
            [
              ["contrast", "High contrast", "normal", "high"],
              ["motion", "Reduce motion", "normal", "reduced"],
              ["underlineLinks", "Underline links", "off", "on"],
            ] as const
          ).map(([key, label, offValue, onValue]) => {
            const active = prefs[key] === onValue;
            return (
              <label
                key={key}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-line bg-surface-tint px-3.5 py-2.5"
              >
                <span className="text-[0.9rem] font-medium text-ink">
                  {label}
                </span>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) =>
                    update({ [key]: e.target.checked ? onValue : offValue } as Partial<Prefs>)
                  }
                  className="h-5 w-5 cursor-pointer accent-blue-brand"
                />
              </label>
            );
          })}
        </div>

        <button
          type="button"
          onClick={reset}
          disabled={isDefault}
          className="mt-5 w-full rounded-xl border border-line-strong px-4 py-2.5 text-[0.88rem] font-semibold text-ink transition-colors duration-200 hover:bg-surface-deep disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer"
        >
          Reset to default
        </button>

        <p className="mt-4 text-[0.75rem] leading-relaxed text-grey-brand">
          Using a screen reader or keyboard only? See our{" "}
          <a
            href="/accessibility"
            className="font-semibold text-blue-brand underline underline-offset-2"
          >
            accessibility statement
          </a>
          .
        </p>
      </div>
    </>
  );
}
