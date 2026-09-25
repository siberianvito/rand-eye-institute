/**
 * Blog posts. Plain data so the index, the article pages and the structured
 * data all read from one source.
 *
 * House style for this section: no em dashes, no promised timelines, no
 * outcome guarantees. Write the way a physician would talk to a patient.
 */

export type BlogSection = {
  heading?: string;
  body?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Shorter label for cards and breadcrumbs. */
  cardTitle: string;
  description: string;
  keywords: string[];
  date: string;
  dateLabel: string;
  image: string;
  alt: string;
  imageCaption: string;
  lead: string;
  sections: BlogSection[];
  related: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "when-is-it-time-for-cataract-surgery",
    title:
      "When is it time for cataract surgery? The signs worth paying attention to",
    cardTitle: "When is it time for cataract surgery?",
    description:
      "Cataract symptoms, when surgery is usually considered, and what a cataract evaluation at Rand Eye Institute in Deerfield Beach actually involves.",
    keywords: [
      "cataract surgery Deerfield Beach",
      "laser cataract surgery",
      "cataract symptoms",
      "when to have cataract surgery",
      "PanOptix lens",
      "cataract surgeon Broward County",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/gallery/or-monitors.jpg",
    alt: "Dr. Allison Rand at the operating microscope, the eye displayed on the monitors behind her.",
    imageCaption: "Dr. Allison Rand, surgeon",
    lead: "Almost nobody wakes up one morning and decides it is cataract day. A cataract clouds the natural lens slowly, over years, and the eye is good at hiding the change until it starts costing you something you care about.",
    sections: [
      {
        heading: "What a cataract actually is",
        body: [
          "Behind your pupil sits a clear lens about the size of an aspirin. It focuses light onto the retina. Over time the proteins in that lens clump and yellow, and the lens stops being clear. That is a cataract. It is not a film growing over the eye and it is not something you caused. Almost everyone who lives long enough develops one.",
          "Because the change is gradual, most people adapt without noticing. They turn on another lamp to read. They stop driving to dinner after dark. They get a new glasses prescription, then another one a year later. The vision loss is real, but it arrives quietly.",
        ],
      },
      {
        heading: "The symptoms patients actually describe",
        body: [
          "When we ask what changed, we tend to hear the same handful of things:",
        ],
        list: [
          "Headlights and streetlights throw a starburst or a halo at night",
          "Colors look washed out or slightly brown, and whites look dingy",
          "Reading takes more light than it used to",
          "Glasses get updated more often than they used to, and the new pair never feels quite right",
          "Bright sun and oncoming glare are harder to tolerate than they were",
          "One eye seems to be doing most of the work",
        ],
      },
      {
        heading: "So when is it time?",
        body: [
          "There is no magic number on a chart that says today is the day. The honest standard is simpler than that. Cataract surgery is worth considering when the cataract is interfering with something you want to keep doing, and when an eye exam confirms the cataract is the reason.",
          "That second half matters. Glare at night can come from a cataract, and it can also come from a dry ocular surface or a corneal problem. Dull color vision can come from a cataract, and it can also come from the retina. A full dilated exam is how we tell the difference, and it is why we would rather see you early than have you wait until driving at night already feels unsafe.",
          "Waiting a while is a legitimate answer. If the cataract is mild and your vision still does what you need, we will tell you so and see you again down the road. Nobody at this practice is going to push you toward an operating room you do not need yet.",
        ],
      },
      {
        heading: "What the evaluation involves",
        body: [
          "A cataract evaluation is longer than a routine vision check because we are measuring the eye, not just testing it. We check your vision with and without glare, dilate the pupils to see the lens and the retina, look at the health of the cornea, and take precise measurements of the length and curvature of the eye. Those measurements are what a lens implant calculation is built on.",
          "Plan for your eyes to stay dilated for a few hours afterward, and bring someone who can drive you home if bright light bothers you.",
        ],
      },
      {
        heading: "The lens is a real decision, not a formality",
        body: [
          "If surgery makes sense, the clouded lens is removed and an artificial lens is placed where it was. The lens you choose shapes what your vision looks like afterward, so it deserves a real conversation.",
          "A monofocal lens gives excellent quality at one distance, and most patients still read with glasses. An extended range or trifocal lens such as PanOptix is designed to give useful vision across distance, intermediate and near, which is why patients who want to spend less time reaching for readers often ask about it. Astigmatism can be addressed at the same time with a toric lens.",
          "No implant turns an adult eye into a twenty year old eye, and every lens design involves a trade. The right answer depends on your anatomy, your other eye, how you spend your day and what you are willing to trade for what. We go through all of that before anything is scheduled.",
        ],
      },
      {
        heading: "What recovery looks like",
        body: [
          "Cataract surgery is done one eye at a time, with numbing drops rather than general anesthesia, and you go home the same day. You will use drops for a period afterward and come back so we can check the eye.",
          "Vision usually starts clearing early, but healing is individual. Some people are thrilled on day one and some take longer to settle, and neither is a sign that anything went wrong. We will not hand you a number of days, because we cannot promise one honestly.",
        ],
      },
      {
        heading: "The part people are relieved to hear",
        body: [
          "At Rand Eye Institute your consultation, your measurements, your surgery and your follow up all happen in the same building in Deerfield Beach, with our own surgical pavilion on site. You are not sent across town to a surgery center that has never met you.",
          "If the symptoms above sound like your last six months, a dilated exam will tell you where you stand. Call us and we will get you scheduled.",
        ],
      },
    ],
    related: [
      { label: "Laser vision correction and LASIK", href: "/blog/is-lasik-right-for-you" },
      { label: "Our procedures", href: "/#procedures" },
      { label: "Meet the physicians", href: "/#physicians" },
    ],
  },
  {
    slug: "is-lasik-right-for-you",
    title: "Is LASIK right for you? What we look for in a candidate",
    cardTitle: "Is LASIK right for you?",
    description:
      "How LASIK works, who tends to be a good candidate, when a no flap procedure makes more sense, and what happens at a laser vision correction consultation in Deerfield Beach.",
    keywords: [
      "LASIK Deerfield Beach",
      "laser vision correction",
      "custom no flap LASIK",
      "am I a candidate for LASIK",
      "LASIK consultation South Florida",
      "LASIK surgeon Broward County",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/gallery/microscope-team.jpg",
    alt: "Dr. Allison Rand performing laser vision correction, the eye magnified on the monitors behind her.",
    imageCaption: "Dr. Allison Rand performing laser vision correction",
    lead: "Most people who ask about LASIK have been thinking about it for years. Contacts have started to bother them, or they are tired of hunting for glasses before they can read the clock. The real question is never whether LASIK works. It is whether it is the right procedure for your particular eyes.",
    sections: [
      {
        heading: "What LASIK is doing",
        body: [
          "Your cornea is the clear front window of the eye, and it does most of the focusing. If it is shaped a little too steeply, too flatly or unevenly, light lands in front of the retina or behind it instead of on it. That is nearsightedness, farsightedness and astigmatism.",
          "Laser vision correction reshapes that window by a few microns so light lands where it should. The measurements come first, the laser simply executes them. This is why the workup matters more than the machine.",
        ],
      },
      {
        heading: "Who tends to be a good candidate",
        body: [
          "Candidacy is decided at the exam, not on a website, but the eyes that do well usually share a few traits:",
        ],
        list: [
          "A prescription that has held steady rather than moving every year",
          "Corneas with enough thickness and a healthy, regular shape on topography",
          "A cornea and tear film in good condition, with dry eye treated first if it is present",
          "No active eye disease and no lens changes that point toward a different procedure",
          "Expectations that match what corneal surgery can and cannot do",
        ],
      },
      {
        heading: "When a no flap procedure is the better answer",
        body: [
          "Standard LASIK creates a thin flap in the cornea, lifts it, treats underneath and lays it back down. It is an excellent procedure and it is not the only one.",
          "For patients with thinner corneas, certain corneal shapes, or a life full of contact sports and dust and impact risk, a surface treatment that creates no flap at all can be the smarter choice. The correction is applied to the surface of the cornea instead, and the surface heals over it. The visual destination is similar. The path there is different, and the healing feels different in the early period.",
          "This is one of the main things we sort out at the consultation. A practice that only offers one procedure will find a way to make you a candidate for it. We would rather tell you which of several procedures fits your cornea, including the possibility that none of them do.",
        ],
      },
      {
        heading: "The reasons we say no, and what we offer instead",
        body: [
          "Some people come in for LASIK and leave with a different plan, which is a good outcome even when it is not the one they expected.",
          "If topography shows an irregular, thinning cornea, that can point to keratoconus, and corneal cross linking is the procedure that addresses it. Reshaping a weak cornea with a laser would be the wrong move. If the natural lens is already clouding, a lens based procedure addresses the actual problem, and correcting the cornea would leave the cataract untouched. If the ocular surface is inflamed and dry, we treat that first, because a dry eye gives unreliable measurements and an unhappy result.",
          "None of that is a rejection. It is the difference between a practice that performs procedures and a practice that diagnoses eyes.",
        ],
      },
      {
        heading: "What the consultation involves",
        body: [
          "A laser vision correction evaluation is a long appointment, and it should be. We map the shape of your cornea with topography, measure its thickness, check your prescription with and without dilation, study the tear film, and look at the retina.",
          "Take your contact lenses out well before the visit and follow the instructions the office gives you, because contacts temporarily reshape the cornea and skewed measurements lead to skewed plans. Bring your glasses and your prescription history if you have it. Bring a driver, since dilation is likely.",
        ],
      },
      {
        heading: "Recovery, honestly",
        body: [
          "The procedure itself is quick and you are awake, with numbing drops and no needles. You go home the same day and come back so we can check the eye.",
          "Vision typically improves quickly after a flap procedure and settles more gradually after a surface procedure, and either way the fine tuning continues for a while. We will not give you a guaranteed date for perfect vision, because eyes heal on their own schedule and anyone who promises you a number is guessing.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "The only way to know whether you are a candidate is to have the cornea measured. The evaluation is straightforward, the answer is usually clear, and you will leave knowing which procedure fits your eyes and which ones do not.",
          "Rand Eye Institute has been performing laser vision correction in Deerfield Beach for decades, with the consultation, the laser suite and the follow up under one roof. Call the office and we will set up your evaluation.",
        ],
      },
    ],
    related: [
      {
        label: "When is it time for cataract surgery?",
        href: "/blog/when-is-it-time-for-cataract-surgery",
      },
      { label: "Our procedures", href: "/#procedures" },
      { label: "The technology we use", href: "/#technology" },
    ],
  },
];

export const getPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

/** Rough reading time, rounded up, from the words actually on the page. */
export const readingMinutes = (post: BlogPost) => {
  const words = [
    post.lead,
    ...post.sections.flatMap((s) => [
      s.heading ?? "",
      ...(s.body ?? []),
      ...(s.list ?? []),
    ]),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 200));
};
