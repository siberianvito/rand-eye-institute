/**
 * Icon set — Lucide geometry, drawn inline so there is no icon-font request
 * and every glyph shares one 24x24 viewBox and stroke weight.
 */
type IconProps = { className?: string };

const base = (className = "") =>
  ({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    className,
  });

export const IconEye = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconScan = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <circle cx="12" cy="12" r="3.25" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconPhone = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M13.83 19.79a16 16 0 0 1-9.62-9.62 2 2 0 0 1 .44-2.11l1.27-1.27a2 2 0 0 1 3.16.51l.7 1.4a2 2 0 0 1-.38 2.32l-.54.54a12.05 12.05 0 0 0 4.06 4.06l.54-.54a2 2 0 0 1 2.32-.38l1.4.7a2 2 0 0 1 .51 3.16l-1.27 1.27a2 2 0 0 1-2.11.44Z" />
  </svg>
);

export const IconPin = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M20 10c0 4.99-5.4 10.16-7.29 11.79a1 1 0 0 1-1.42 0C9.4 20.16 4 14.99 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconCheck = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconArrow = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMenu = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconClose = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconSparkle = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3.5 13.8 9 19.5 10.8 13.8 12.6 12 18.1 10.2 12.6 4.5 10.8 10.2 9Z" />
    <path d="M18.5 16.5 19.2 18.6 21.3 19.3 19.2 20 18.5 22.1 17.8 20 15.7 19.3 17.8 18.6Z" />
  </svg>
);

export const IconStar = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className={className}>
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95Z" />
  </svg>
);

export const IconFlask = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9.5 3h5M10.5 3v6.2L5.4 17.8A2 2 0 0 0 7.1 21h9.8a2 2 0 0 0 1.7-3.2L13.5 9.2V3" />
    <path d="M7.8 14.5h8.4" />
  </svg>
);

export const IconDroplet = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3.2s5.5 5.4 5.5 9.3a5.5 5.5 0 0 1-11 0C6.5 8.6 12 3.2 12 3.2Z" />
    <path d="M9.6 13.4a2.6 2.6 0 0 0 2.6 2.6" />
  </svg>
);

export const IconPulse = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M2.5 12h4l2.2-5.4 3.4 11L14.6 12h6.9" />
  </svg>
);

export const IconStethoscope = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 12 0V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3" />
    <path d="M8 15v1a6 6 0 0 0 12 0v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);
