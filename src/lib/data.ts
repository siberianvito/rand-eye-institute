/**
 * Single source of truth for every piece of practice content on the site.
 * Sourced from randeye.com + public listings. Anything the practice still
 * needs to confirm is marked with a TODO so it is easy to sweep before launch.
 */

export const practice = {
  name: "Rand Eye Institute",
  tagline: "Excellence in Ophthalmology",
  mission: "The Best Vision Possible",
  founded: 1979,
  phone: "(954) 782-1700",
  phoneHref: "tel:+19547821700",
  address: {
    street: "5 W Sample Road",
    city: "Deerfield Beach",
    state: "FL",
    zip: "33064",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rand+Eye+Institute+5+W+Sample+Rd+Deerfield+Beach+FL+33064",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
} as const;

/** Anniversary phrasing, kept in one place so it stays consistent site-wide. */
export const years = {
  figure: "50+",
  phrase: "over 50 years",
  words: "fifty years",
} as const;

/**
 * Credibility figures, supplied by the practice. `value` is numeric so the
 * rail can count up to it; `suffix` carries the "+".
 */
export const stats = [
  { value: 50, suffix: "+", label: "Years of surgical expertise" },
  { value: 136000, suffix: "+", label: "Surgeries performed" },
  { value: 35, suffix: "", label: "Years of Joint Commission accreditation" },
  { value: 24000, suffix: "", label: "Square feet dedicated to eye care" },
] as const;

/** Sits under the rail — the detail behind the "one roof" figure. */
export const facilityLine =
  "Three floors. Twenty-six exam and treatment rooms. Four surgical suites — every stage of your care in one building.";

/**
 * The practice's services, as supplied by them.
 *
 * Deliberately no procedure durations and no recovery or back-to-work
 * estimates: healing varies person to person and the practice cannot promise
 * a timeline. Anything time-bound belongs in a consultation, not on a page.
 */
export const services = [
  {
    id: "comprehensive",
    name: "Comprehensive Ophthalmology",
    kicker: "Complete Eye Health",
    summary:
      "Full medical eye care for adults — examinations, diagnosis and ongoing management of the conditions that affect how you see, from routine vision changes to complex disease.",
    points: [
      "Complete diagnostic examination",
      "Ongoing management of chronic eye conditions",
      "Referral within the practice when a specialist is needed",
    ],
  },
  {
    id: "cataract",
    name: "Refractive Cataract Surgery",
    kicker: "Premium Lens Implants",
    summary:
      "Cataract surgery is no longer only about removing a cloudy lens. With premium lens implants it becomes an opportunity to address a lifetime of prescription at the same time.",
    points: [
      "LenSx® laser-assisted, computer-guided precision",
      "Premium Tecnis® and ReSTOR® lifestyle lens options",
      "Distance, near and astigmatism addressed together",
      "Outpatient procedure in our own surgical pavilion",
    ],
  },
  {
    id: "lasik",
    name: "Laser Vision Correction",
    kicker: "Custom No-Flap LASIK",
    summary:
      "Wake up, look at the clock, and simply see. Our custom, no-flap laser vision correction is mapped to the unique optical fingerprint of your eye — not to an average.",
    points: [
      "No-flap technique — no blade, no corneal flap",
      "CustomVue™ wavefront mapping of your individual eye",
      "Performed in our on-site Rand Surgical Pavilion",
    ],
  },
  {
    id: "cross-linking",
    name: "Corneal Collagen Crosslinking",
    kicker: "Minimally Invasive",
    summary:
      "For keratoconus and corneal thinning, crosslinking strengthens the collagen bonds inside your cornea — a minimally invasive treatment intended to halt progression and protect the sight you have.",
    points: [
      "Minimally invasive, performed in-office",
      "Strengthens corneal collagen to stop progression",
      "The standard of care for progressive keratoconus",
    ],
  },
  {
    id: "dry-eye",
    name: "Dry Eye & Ocular Surface Disease",
    kicker: "Ocular Surface",
    summary:
      "Chronic dry eye is an inflammatory disease of the tear film and ocular surface, not simply a shortage of tears — which is why drops alone so often fall short.",
    points: [
      "Tear film and ocular surface testing",
      "Treatment aimed at the underlying inflammation",
      "Management of chronic and post-surgical dryness",
    ],
  },
  {
    id: "retina",
    name: "Medical Retina & Injections",
    kicker: "Retina",
    summary:
      "Medical management of the retina — macular degeneration, diabetic retinopathy, macular oedema and related disease, including in-office intravitreal injection therapy.",
    points: [
      "Macular degeneration, wet and dry",
      "Diabetic retinopathy and macular oedema",
      "In-office intravitreal injections",
      "Retinal imaging and monitoring over time",
    ],
  },
] as const;

/**
 * Clinical research areas.
 *
 * TODO (pre-launch): the practice must confirm which of these are actually
 * enrolling and supply the study identifiers. Descriptions below cover the
 * CONDITION and what taking part generally involves — deliberately no study
 * names, sponsors, phases or NCT numbers, because inventing those on a medical
 * site would be indistinguishable from real ones to a patient reading it.
 */
export const clinicalTrials = [
  {
    id: "wet-amd",
    name: "Wet Macular Degeneration",
    kicker: "Retina — Neovascular AMD",
    summary:
      "In the wet form, abnormal vessels grow beneath the retina and leak fluid and blood, which can take central vision quickly. Standard care is injections that suppress that growth. Research in this area looks at treatments that last longer between visits.",
    involves: [
      "Imaging of the retina at each visit",
      "Study treatment and monitoring at no cost to you",
      "Regular follow-up with your retina specialist",
    ],
  },
  {
    id: "dry-amd",
    name: "Dry Macular Degeneration",
    kicker: "Retina — Geographic Atrophy",
    summary:
      "The dry form advances slowly as cells in the macula thin and drop out, leaving blind spots that widen over time. Research here is focused on slowing how fast that atrophy spreads.",
    involves: [
      "Detailed mapping of the macula over time",
      "Study treatment and monitoring at no cost to you",
      "A longer schedule of visits, often over months",
    ],
  },
  {
    id: "dry-eye",
    name: "Dry Eye Disease",
    kicker: "Ocular Surface",
    summary:
      "Chronic dry eye is an inflammatory disease of the tear film and ocular surface, not simply a lack of tears — which is why drops alone often fall short. Research looks at treatments that address the inflammation underneath.",
    involves: [
      "Tear film and ocular surface testing",
      "Study treatment and monitoring at no cost to you",
      "Short, straightforward follow-up visits",
    ],
  },
] as const;

/**
 * Vision simulations for the drag-to-compare panel.
 *
 * `filter` and `overlay` are Tailwind classes applied to the "before" layer.
 * Each is an illustrative approximation of how the condition is commonly
 * described — not a diagnostic tool, and the panel says so beneath it.
 */
export const visionConditions = [
  {
    id: "cataract",
    label: "Cataract",
    caption:
      "A clouding lens scatters light: colours fade and yellow, contrast drops, and bright light causes glare.",
    filter: "blur-[9px] brightness-[0.9] saturate-[0.5] sepia-[0.3] contrast-[0.88] scale-105",
    overlay:
      "bg-[radial-gradient(circle_at_50%_45%,rgba(214,196,140,0.42)_0%,rgba(150,140,115,0.3)_70%)]",
  },
  {
    id: "refractive",
    label: "Nearsighted",
    caption:
      "A refractive error means light focuses in front of the retina instead of on it — detail softens evenly across the whole scene.",
    filter: "blur-[11px] scale-105",
    overlay: "",
  },
  {
    id: "amd",
    label: "Macular Degeneration",
    caption:
      "Damage to the macula affects the centre of your sight. Peripheral vision is often kept, but whatever you look at directly is obscured or distorted.",
    filter: "saturate-[0.85]",
    overlay:
      "bg-[radial-gradient(circle_at_50%_48%,rgba(40,36,30,0.94)_0%,rgba(60,54,45,0.82)_16%,rgba(90,84,72,0.4)_26%,transparent_38%)]",
  },
  {
    id: "retinopathy",
    label: "Diabetic Retinopathy",
    caption:
      "Damaged retinal vessels leak and bleed, throwing dark floaters and blank patches across the field, with blurring where the macula swells.",
    filter: "blur-[3px] saturate-[0.8] contrast-[0.92]",
    overlay:
      "bg-[radial-gradient(circle_at_28%_34%,rgba(28,24,20,0.9)_0%,transparent_13%),radial-gradient(circle_at_63%_26%,rgba(28,24,20,0.82)_0%,transparent_9%),radial-gradient(circle_at_44%_62%,rgba(28,24,20,0.88)_0%,transparent_15%),radial-gradient(circle_at_76%_58%,rgba(28,24,20,0.8)_0%,transparent_11%),radial-gradient(circle_at_18%_72%,rgba(28,24,20,0.85)_0%,transparent_10%),radial-gradient(circle_at_86%_80%,rgba(28,24,20,0.75)_0%,transparent_8%)]",
  },
] as const;

/**
 * Pavilion gallery.
 *
 * TODO: photo files to be saved into public/gallery/. Alt text is written
 * from the supplied images.
 *
 * CONSENT: four of these show identifiable patients. Under HIPAA a patient's
 * image is protected health information, and using it for marketing needs a
 * signed authorisation — not just verbal permission. The practice must
 * confirm a release exists for each identifiable person before this section
 * goes live. `identifiable` flags the ones that need it.
 */
export const galleryPhotos = [
  {
    src: "/gallery/team-thumbs-up.jpg",
    alt: "Five members of the surgical team in scrubs and caps standing with a patient, everyone giving a thumbs up after her procedure.",
    identifiable: true,
  },
  {
    src: "/gallery/or-visx-wide.jpg",
    alt: "The surgical suite during a laser procedure, the team working at the VISX laser while a live view of the eye is shown on the wall monitor.",
    identifiable: false,
  },
  {
    src: "/gallery/team-group.jpg",
    alt: "Seven members of the Rand team gathered around a patient in the laser suite, all smiling for the camera.",
    identifiable: true,
  },
  {
    src: "/gallery/glaukos-laser.jpg",
    alt: "A patient reclined beneath the Glaukos laser during an in-office procedure.",
    identifiable: true,
  },
  {
    src: "/gallery/microscope-team.jpg",
    alt: "Two surgical staff at the operating microscope, the eye magnified on the monitors behind them.",
    identifiable: false,
  },
  {
    src: "/gallery/nurse-with-patient.jpg",
    alt: "A nurse steadying a patient and talking him through the procedure as the laser is positioned.",
    identifiable: true,
  },
  {
    src: "/gallery/or-monitors.jpg",
    alt: "The operating room mid-procedure, with the surgical field and the magnified eye displayed across the monitors.",
    identifiable: false,
  },
  {
    src: "/gallery/or-visx-suite.jpg",
    alt: "The laser suite from the doorway, the team positioned around the patient and the VISX system.",
    identifiable: false,
  },
] as const;

/** Bios supplied by the practice. */
export const doctors = [
  {
    name: "William J. Rand, M.D.",
    role: "Medical Director & Founder",
    kicker: "Founding Physician",
    quote: "Clearly focused on the best vision possible.",
    photo: "/dr-william.jpg",
    credentials: [
      "Founding Physician, Rand Eye Institute",
      "Member, American Academy of Ophthalmology",
      "Fellow, American College of Surgeons",
    ],
    focus: [
      "Comprehensive Ophthalmology",
      "Cataract & Refractive Surgery with Premium Lenses",
      "LASIK",
    ],
  },
  {
    name: "Allison L. Rand, M.D.",
    role: "Cornea · Dry Eye · Refractive Cataract Surgery",
    kicker: "Fellowship Trained — Cornea",
    quote: "Cornea, cataract, and a lifetime of dry-eye expertise.",
    photo: "/dr-allison.jpg",
    credentials: [
      "Fellowship: Cornea & External Disease",
      "Diplomate, American Board of Ophthalmology",
      "Ocular Surface Center Director",
    ],
    focus: [
      "Comprehensive Ophthalmology",
      "Cataract & Refractive Surgery with Premium Lenses",
      "Corneal Transplantation",
      "Corneal Collagen Crosslinking",
      "LASIK",
      "Dry Eye & Ocular Surface Disease",
      "Pterygium Surgery",
    ],
  },
  {
    name: "David L. Rand, M.D.",
    role: "Director of Innovation · Refractive & Cataract Surgery",
    kicker: "Board Certified",
    quote: "Bringing LenSx® precision and premium IOL artistry.",
    photo: "/dr-david.jpg",
    credentials: [
      "Diplomate, American Board of Ophthalmology",
      "Certified LenSx® femtosecond surgeon",
      "Premium IOL clinical advisor",
    ],
    focus: [
      "Comprehensive Ophthalmology",
      "Cataract & Refractive Surgery with Premium Lenses",
      "Corneal Collagen Crosslinking",
      "LASIK",
    ],
  },
] as const;

export const technology = [
  {
    name: "LenSx® Laser",
    detail:
      "Computer-guided, image-mapped cataract surgery. Incisions planned in software before a single one is made.",
  },
  {
    name: "CustomVue™ Wavefront",
    detail:
      "Maps the optical imperfections unique to your eye and builds a laser treatment around them.",
  },
  {
    name: "Tecnis® & ReSTOR® Lenses",
    detail:
      "Premium lifestyle lens implants that can address distance, near, and astigmatism at once.",
  },
  {
    name: "Rand Surgical Pavilion",
    detail:
      "Our own state-licensed, Joint Commission certified surgical facility — inside the building.",
  },
] as const;

export const differentiators = [
  {
    title: "One building. Every step.",
    detail:
      "Consultation, diagnostics, surgery, and follow-up all happen under one roof, in our own surgical pavilion. You are never handed off to a facility that has never met you.",
  },
  {
    title: "A surgeon, not a schedule.",
    detail:
      "The physician who evaluates your eyes is the physician who operates on them, and the one who sees you afterward. Continuity is the whole point.",
  },
  {
    title: "Technology chosen, not collected.",
    detail:
      "We adopt a platform when it measurably improves an outcome — LenSx, CustomVue, premium lens implants — and we train the entire team on it before it touches a patient.",
  },
  {
    title: "Fifty years of judgment.",
    detail:
      "We have grown from four exam rooms to one of the largest comprehensive eye care facilities in the country, with over 100 professionals on staff.",
  },
] as const;

/**
 * TODO (pre-launch): replace with the practice's own verified, written-consent
 * patient testimonials. These are placeholders modeled on public review themes.
 */
export const testimonials = [
  {
    quote:
      "I had worn glasses since I was nine years old. The morning after my procedure I walked outside and read a street sign across the intersection. I sat down on the curb.",
    name: "Patient",
    detail: "Custom LASIK",
  },
  {
    quote:
      "Everything was explained twice — once by the technician and once by my surgeon — before I ever agreed to anything. I never felt sold to. I felt cared for.",
    name: "Patient",
    detail: "Laser Cataract Surgery",
  },
  {
    quote:
      "My son was told his keratoconus would keep getting worse. Cross-linking stopped it. That is the entire sentence, and it changed our year.",
    name: "Parent of patient",
    detail: "Corneal Cross-Linking",
  },
] as const;

export const faqs = [
  {
    q: "How do I know if I'm a candidate?",
    a: "That is exactly what the consultation determines. We map your cornea, measure its thickness, check your prescription stability and overall eye health, and then tell you honestly which procedure fits — including when the answer is that you should wait, or that a different procedure serves you better.",
  },
  {
    q: "Does it hurt?",
    a: "The eye is numbed with anesthetic drops, so the procedure itself is not painful. Most patients describe pressure and light rather than pain. Some scratchiness or watering for a day or two afterward is normal and expected.",
  },
  {
    q: "How long is recovery?",
    a: "Recovery is different for everyone, and it depends on the procedure, your eyes and your general health — so we will not put a number on it here. What we will do is give you a written recovery plan at your consultation, tell you honestly what to expect in your case, and stay reachable throughout. If anything worries you afterwards, you call us and we see you.",
  },
  {
    q: "Will I be awake?",
    a: "Yes. These are outpatient procedures performed with numbing drops and, when appropriate, a mild oral relaxant. You go home the same day — you will just need someone to drive you.",
  },
  {
    q: "Is any of this covered by insurance?",
    a: "Medically necessary care — including cataract surgery and cross-linking — is generally covered by medical insurance, and we accept a wide range of plans. Elective vision correction such as LASIK typically is not, which is why we offer interest-free monthly payment plans. Our team verifies your specific benefits before you commit to anything.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on the procedure and, for cataract surgery, on the lens you choose. We give you a complete written figure at your consultation with no obligation — and we will walk you through insurance coverage and interest-free monthly financing at the same time.",
  },
];

/**
 * Root-relative so they resolve from any route. SmoothScroll intercepts them
 * when the target section is on the page you are already on.
 */
export const navLinks = [
  { label: "Procedures", href: "/#procedures" },
  { label: "Why Rand", href: "/#why-rand" },
  { label: "Physicians", href: "/#physicians" },
  { label: "Technology", href: "/#technology" },
  { label: "Research", href: "/#research" },
  { label: "Questions", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Single place to change where every consultation CTA points. */
export const CONSULT_PATH = "/contact";

export const legalLinks = [
  { label: "HIPAA Notice of Privacy Practices", href: "/hipaa-notice" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility Statement", href: "/accessibility" },
] as const;
