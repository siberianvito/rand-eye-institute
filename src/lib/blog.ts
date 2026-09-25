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
    slug: "epioxa-epithelium-on-cross-linking",
    title:
      "Epioxa: cross linking for keratoconus without removing the surface of the cornea",
    cardTitle: "Epioxa: cross linking without removing the surface",
    description:
      "Epioxa is the first epithelium on corneal cross linking approved by the FDA for keratoconus. How it differs from epi off cross linking, what the trials showed, and who it suits. Rand Eye Institute, Deerfield Beach.",
    keywords: [
      "Epioxa",
      "epithelium on cross linking",
      "epi on crosslinking Florida",
      "Epioxa Deerfield Beach",
      "keratoconus treatment without epithelium removal",
      "corneal cross linking Broward County",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/blog/cornea-macro.jpg",
    alt: "Macro image of the curve of a human cornea lit from the side, used here to illustrate the corneal surface.",
    imageCaption: "Illustration: with Epioxa the surface layer stays where it is",
    lead: "For years the hardest part of recommending cross linking was not the science. Patients accepted that the procedure protects the cornea. What they dreaded was the recovery, because standard cross linking begins by removing the outer skin of the eye. Epioxa changes that starting point.",
    sections: [
      {
        heading: "First, what cross linking is for",
        body: [
          "In keratoconus the collagen fibers that hold the cornea in its dome shape weaken, and the cornea bulges into a cone. Vision distorts, the prescription keeps moving, and glasses stop being able to fix it. Cross linking strengthens those fibers so the shape stops slipping. If you want the full picture of the condition itself, we wrote about keratoconus separately.",
          "The chemistry is the same in every version of the procedure. Riboflavin, which is vitamin B2, is delivered into the cornea and then activated with controlled ultraviolet light. That reaction creates new bonds between collagen fibers and stiffens the tissue.",
        ],
      },
      {
        heading: "The problem with the traditional approach",
        body: [
          "The cornea is covered by a thin protective layer called the epithelium, and it does not let riboflavin pass through easily. The standard solution has been to remove it, which is where the term epi off comes from. The riboflavin soaks in, the light is applied, a bandage contact lens goes on, and the epithelium grows back over the following days.",
          "It works, and it has protected a great many corneas. It also means real discomfort while the surface heals, blurry vision during that period, and a window where the eye is more exposed to infection and to haze forming in the cornea. For a patient weighing a procedure that mainly prevents future loss, that recovery is often what makes them hesitate, sometimes for years they did not have to spare.",
        ],
      },
      {
        heading: "What Epioxa does differently",
        body: [
          "Epioxa is an epithelium on procedure, known as epi on. The protective surface layer of the cornea is left in place. Instead of removing it, the treatment uses a riboflavin formulation designed to cross that barrier, delivered with supplemental oxygen and then activated with ultraviolet light.",
          "Oxygen matters more here than it sounds. The cross linking reaction consumes it, and an intact epithelium limits how much reaches the tissue. Enriching the oxygen during treatment is a large part of how this approach gets a meaningful effect without taking the surface off.",
          "In October 2025 the FDA approved Epioxa, making it the first epithelium on cross linking therapy approved in the United States. It comes from Glaukos, the company behind the epi off system that has been the standard here for years.",
        ],
      },
      {
        heading: "What the trials actually showed",
        body: [
          "Approval rested on two randomized, double masked, multicenter Phase 3 trials, together covering several hundred eyes, each comparing treatment against a sham procedure.",
          "The measure that mattered was Kmax, the steepest point on the cornea. A cone that keeps steepening is a cornea still getting worse, so flattening or holding that number is the point of the whole exercise. Epioxa met that endpoint against sham. The effect was notably stronger in younger patients, which fits what corneal surgeons see in practice, since keratoconus tends to progress fastest in younger eyes and those are the eyes with the most to protect.",
        ],
      },
      {
        heading: "The honest limits, and the side effects",
        body: [
          "Cross linking of any kind is a stabilizing procedure. It is meant to stop the cornea from getting worse. It is not a procedure that hands back a shape the eye has already lost, and most patients continue in glasses or specialty contact lenses afterward. Anyone who tells you cross linking will sharpen your vision is selling rather than explaining.",
          "Epioxa has side effects, and they are worth knowing before you decide. The most common is redness of the eye. Others reported include corneal haze, sensitivity to light, eye pain, small defects in the corneal surface, and dry eye. In the trials these were generally mild and temporary.",
          "Epi on is also not automatically the right choice for every cornea. Thickness, how advanced the cone is, scarring and how fast the condition is moving all factor in, and for some eyes the traditional epi off procedure remains the better decision. That call belongs at an exam, with your topography and your measurements in front of us.",
        ],
      },
      {
        heading: "Why this matters for getting treated sooner",
        body: [
          "The value of cross linking depends almost entirely on timing. It protects the cornea you have on the day of treatment. Every month of progression before that is shape you do not get back, and the far end of untreated keratoconus is a corneal transplant.",
          "So a version of the procedure that removes the main reason patients postpone it is not a small convenience. Getting treated this year instead of in three years is, for many corneas, the difference that decides how much vision there is to protect.",
        ],
      },
      {
        heading: "Cross linking at Rand Eye Institute",
        body: [
          "Corneal cross linking has been part of what we do at Rand Eye Institute for years, and Dr. Allison Rand performs cross linking here in our own surgical pavilion in Deerfield Beach. Diagnosis, topography, the procedure and your follow up all happen in the same building, with the physician who examined you.",
          "If your prescription keeps changing, if you have been told you have an irregular cornea, or if you were diagnosed with keratoconus and told to wait and watch, come in and have the cornea mapped. We will tell you whether it is progressing, whether cross linking is indicated, and which approach fits your eye.",
        ],
      },
    ],
    related: [
      {
        label: "Keratoconus explained: the signs that get missed",
        href: "/blog/keratoconus-and-corneal-cross-linking",
      },
      { label: "Is LASIK right for you?", href: "/blog/is-lasik-right-for-you" },
      { label: "Our procedures", href: "/#procedures" },
    ],
  },
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
  {
    slug: "dry-eye-that-will-not-go-away",
    title:
      "Burning, watering, blurring: what dry eye really is and why drops alone often fail",
    cardTitle: "Why your eyes burn, water and blur",
    description:
      "Dry eye and ocular surface disease explained: why dry eyes water, what meibomian gland dysfunction does, and how we treat it at Rand Eye Institute in Deerfield Beach.",
    keywords: [
      "dry eye treatment Deerfield Beach",
      "ocular surface disease",
      "meibomian gland dysfunction",
      "chronic dry eye Florida",
      "why do my eyes water",
      "dry eye specialist Broward County",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/blog/tear-film.jpg",
    alt: "Macro image of a water droplet on glass catching cool blue light, used here to illustrate the tear film.",
    imageCaption: "Illustration: the tear film is thinner than you think",
    lead: "Here is the part that confuses people. They come in with eyes that water all day and get told they have dry eye. It sounds like a contradiction, and it is actually the clearest clue in the whole conversation.",
    sections: [
      {
        heading: "Watery eyes are often dry eyes",
        body: [
          "A healthy tear film is not just water. It has an oily outer layer that keeps it from evaporating, a watery middle layer, and a sticky inner layer that holds the whole thing against the eye. When the oil runs short, the film breaks apart between blinks and the surface of the eye dries out in patches.",
          "A dry patch is an irritated patch, and an irritated eye calls for backup. The reflex tear glands flood the eye with thin, watery tears that have no oil in them at all. Those tears run down your cheek instead of coating the eye. So you feel wet and gritty at the same time, and the drops you buy at the pharmacy help for twenty minutes.",
        ],
      },
      {
        heading: "What patients describe",
        list: [
          "Burning or grittiness that gets worse through the day",
          "Vision that blurs, then clears for a moment when you blink hard",
          "Watering that seems to have nothing to do with emotion or onions",
          "Contact lenses that used to be comfortable and no longer are",
          "Eyes that feel worse after screens, driving or a night of air conditioning",
          "Redness along the lid margin, or crusting in the morning",
        ],
      },
      {
        heading: "Why South Florida is hard on the ocular surface",
        body: [
          "Air conditioning runs most of the year here, and it pulls moisture out of the room and out of your tear film. Ceiling fans blow air straight across the eye all night. Sun, wind off the water, chlorine and salt all add to it.",
          "Screens matter more than most people expect. Blink rate drops sharply when you concentrate on a monitor or a phone, and an incomplete blink never spreads the oil layer properly. Hours of that, every working day, is a meaningful load on the surface of the eye.",
        ],
      },
      {
        heading: "Why artificial tears stop working",
        body: [
          "Over the counter drops replace the watery part of the tear film. If the problem is the oil layer, or inflammation in the glands that make it, you are topping up a tank that keeps draining. That is why so many patients arrive having tried four different bottles.",
          "The glands in question sit inside the eyelid margin, and they can become blocked, thickened or inflamed over time. Treating the surface without treating the glands is treating the symptom.",
        ],
      },
      {
        heading: "What an evaluation involves",
        body: [
          "We look at the tear film under magnification, watch how quickly it breaks up after a blink, examine the lid margins and the glands themselves, and check the surface of the cornea and conjunctiva for damage. Sometimes we use dyes that reveal dry spots that are invisible otherwise.",
          "The point is to find out which part of the system is failing, because the treatment is different depending on the answer.",
        ],
      },
      {
        heading: "How dry eye is actually treated",
        body: [
          "Treatment is usually a sequence rather than a single prescription. Warm compresses and lid hygiene to open and clear the glands. Prescription drops that reduce inflammation rather than just lubricating. Punctal plugs, which are tiny inserts that slow tear drainage so the tears you do make stay on the eye longer. In office procedures that clear the glands directly when they need it.",
          "Most people get meaningful relief. What we do not do is promise a cure, because dry eye is usually a condition that gets managed well rather than a condition that disappears.",
        ],
      },
      {
        heading: "One more reason to take it seriously",
        body: [
          "If you are considering laser vision correction or cataract surgery, the ocular surface has to be in good shape first. Measurements taken off a dry, irregular surface are unreliable, and unreliable measurements lead to disappointing results. This is why we treat dry eye before we plan surgery, not after.",
          "If your eyes have been bothering you for months and the drops are not holding, come in and let us find out which layer is the problem.",
        ],
      },
    ],
    related: [
      { label: "Is LASIK right for you?", href: "/blog/is-lasik-right-for-you" },
      {
        label: "Keratoconus and corneal cross linking",
        href: "/blog/keratoconus-and-corneal-cross-linking",
      },
      { label: "Our procedures", href: "/#procedures" },
    ],
  },
  {
    slug: "keratoconus-and-corneal-cross-linking",
    title:
      "Keratoconus and corneal cross linking: stopping the problem instead of chasing it",
    cardTitle: "Keratoconus and corneal cross linking",
    description:
      "What keratoconus is, the early signs that get missed, and how corneal collagen cross linking is used to halt progression. From the cornea specialists at Rand Eye Institute.",
    keywords: [
      "keratoconus treatment Deerfield Beach",
      "corneal collagen cross linking",
      "keratoconus symptoms",
      "cross linking Florida",
      "irregular astigmatism",
      "cornea specialist Broward County",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/blog/cornea-macro.jpg",
    alt: "Macro image of the curve of a human cornea lit from the side, used here to illustrate corneal shape.",
    imageCaption: "Illustration: the cornea does most of the focusing",
    lead: "Keratoconus is usually caught late, and it is usually caught late for the same reason every time. The vision keeps changing, so everyone assumes the prescription is just unstable, and a new pair of glasses gets made instead of a diagnosis.",
    sections: [
      {
        heading: "What keratoconus is",
        body: [
          "The cornea is meant to be a smooth, round dome. In keratoconus the collagen fibers that hold that shape weaken, and the pressure of the eye pushes the cornea outward into a cone. A cone does not focus light evenly, which is why the astigmatism it creates is called irregular. Glasses correct regular astigmatism well. They struggle with this.",
          "It typically shows up in the late teens and twenties and can keep progressing for years, often at different rates in each eye. There is frequently a family history, and chronic hard eye rubbing is associated with it, which is one reason we ask about allergies.",
        ],
      },
      {
        heading: "The signs that get missed",
        list: [
          "A prescription that changes noticeably more than once a year",
          "Ghosting or doubling of images in one eye, especially at night",
          "Glare and streaking around headlights that keeps getting worse",
          "Contact lenses that will not sit comfortably or keep popping out",
          "Vision that glasses simply cannot sharpen past a certain point",
        ],
      },
      {
        heading: "How it is diagnosed",
        body: [
          "Corneal topography is the test that settles it. It maps the curvature of the cornea point by point and shows the steepening that an eye chart cannot. We also measure corneal thickness, because thinning tends to accompany the change in shape.",
          "Topography is also how we catch it in people who came in for something else entirely. More than a few patients have arrived asking about LASIK and left with a keratoconus diagnosis instead, which is a far better outcome than having a laser applied to a cornea that was already weakening.",
        ],
      },
      {
        heading: "What cross linking does",
        body: [
          "Corneal collagen cross linking is the procedure that addresses the underlying problem. Riboflavin, which is vitamin B2, is applied to the cornea and then activated with a controlled ultraviolet light. That reaction creates new bonds between the collagen fibers, stiffening the tissue that had been giving way.",
          "The goal is to halt progression. That is the honest framing and it is worth being clear about it. Cross linking is not a procedure that hands you sharp vision on its own, and some patients see modest flattening afterward while others simply stay where they are. What it does is stop the cone from getting worse, which protects the vision you still have and can keep you away from a corneal transplant later.",
          "There are different approaches, including epithelium off techniques and epithelium on techniques such as Epioxa that leave the surface layer of the cornea in place. Which one fits depends on your cornea, and we go through that at the consultation.",
        ],
      },
      {
        heading: "You will probably still need correction",
        body: [
          "After cross linking most patients continue in glasses or specialty contact lenses, and for irregular corneas a scleral or other specialty lens often gives far better vision than glasses can. Cross linking and vision correction are two different jobs. One stabilizes the cornea, the other sharpens what you see through it.",
        ],
      },
      {
        heading: "Timing is the whole point",
        body: [
          "Cross linking protects the cornea you have today. It cannot restore a shape that has already been lost. That is the entire argument for getting an irregular, shifting prescription properly mapped rather than corrected again and hoped about.",
          "If your prescription keeps moving, or someone in your family has keratoconus, ask for corneal topography. If you are already diagnosed, we can tell you whether your cornea is progressing and whether cross linking is the right step.",
        ],
      },
    ],
    related: [
      {
        label: "Epioxa: cross linking without removing the surface",
        href: "/blog/epioxa-epithelium-on-cross-linking",
      },
      { label: "Is LASIK right for you?", href: "/blog/is-lasik-right-for-you" },
      {
        label: "Why your eyes burn, water and blur",
        href: "/blog/dry-eye-that-will-not-go-away",
      },
    ],
  },
  {
    slug: "macular-degeneration-and-diabetic-eye-disease",
    title:
      "Macular degeneration and diabetic eye disease: why the exam comes before the symptoms",
    cardTitle: "Macular degeneration and diabetic eye disease",
    description:
      "How macular degeneration and diabetic retinopathy damage vision quietly, what retinal injections are actually for, and when to be seen. Medical retina care in Deerfield Beach.",
    keywords: [
      "macular degeneration treatment Deerfield Beach",
      "diabetic retinopathy screening",
      "retina injections",
      "wet macular degeneration",
      "medical retina Broward County",
      "diabetic eye exam Florida",
    ],
    date: "2026-09-25",
    dateLabel: "September 25, 2026",
    image: "/blog/retina-vessels.jpg",
    alt: "Abstract image of fine branching blood vessels glowing against a dark field, used here to illustrate retinal circulation.",
    imageCaption: "Illustration: the retina is fed by the finest vessels in the body",
    lead: "The two most common reasons adults lose central vision in this country are macular degeneration and diabetic eye disease. Both do most of their damage before the patient notices anything, which is the single most important thing to understand about them.",
    sections: [
      {
        heading: "What the retina is doing",
        body: [
          "The retina lines the back of the eye and converts light into the signal your brain reads as sight. The macula is the small central region that handles detail, faces, reading and the middle of everything you look at. It is supplied by some of the finest blood vessels in the body, and it does not tolerate leaking, swelling or a failing blood supply.",
        ],
      },
      {
        heading: "Macular degeneration, dry and wet",
        body: [
          "Age related macular degeneration comes in two forms. The dry form is far more common and progresses slowly as deposits build under the macula and the tissue thins. The wet form happens when abnormal blood vessels grow under the retina and leak fluid or blood, and it can change vision within days.",
          "The warning sign patients report most often is distortion. Straight lines start to bend or wave. A door frame bows. Words on a page have a soft smudge sitting in the middle of them. If you cover one eye and the other shows you a bent world, that is not something to watch for a few weeks.",
        ],
      },
      {
        heading: "Diabetic eye disease is quieter still",
        body: [
          "High blood sugar damages the small vessels feeding the retina. They leak, they close off, and the retina responds by growing fragile new vessels that bleed. Swelling in the macula, called diabetic macular edema, is the most common way vision is lost.",
          "Here is the part that costs people their sight: you can have significant diabetic retinopathy and still read the bottom line of the eye chart. Vision often stays normal until the damage is advanced. This is why every adult with diabetes needs a dilated eye exam on schedule, whether or not anything seems wrong. It is not a formality. It is the only way to catch it while it is still treatable.",
        ],
      },
      {
        heading: "What injections actually do",
        body: [
          "Anti VEGF injections are the mainstay for wet macular degeneration and for diabetic macular edema. They block the signal that drives abnormal vessels to grow and leak, which lets the retina dry out and settle.",
          "Patients are usually more nervous about the injection than they need to be. The eye is numbed thoroughly first, the injection itself takes moments, and it is done in the office.",
          "What matters more is the expectation. The main goal of treatment is to preserve the vision you still have and stop the disease from taking more. Many patients do gain some vision back, particularly when swelling comes down, but that is a hoped for bonus rather than a promise, and treatment is usually ongoing rather than a single visit. Catching it earlier is what widens the range of good outcomes.",
        ],
      },
      {
        heading: "What a retinal evaluation involves",
        body: [
          "We dilate the pupils and examine the retina directly, then image it. Optical coherence tomography gives a cross section of the macula and shows fluid and swelling layer by layer, in detail no exam alone can provide. Photographs give us a baseline to compare against at your next visit, which is often how progression is caught early.",
        ],
      },
      {
        heading: "When to call the same day",
        body: [
          "Some retinal symptoms are not appointments to schedule next month. Call us right away, or go to an emergency room, if you have sudden vision loss, a sudden shower of new floaters, flashes of light, or a shadow or curtain moving across your field of vision.",
          "For everything else, the answer is the same and it is unglamorous. Get the dilated exam. Keep getting it. Vision that is protected early is vision you keep.",
        ],
      },
    ],
    related: [
      {
        label: "When is it time for cataract surgery?",
        href: "/blog/when-is-it-time-for-cataract-surgery",
      },
      { label: "Clinical research at Rand", href: "/#research" },
      { label: "Meet the physicians", href: "/#physicians" },
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
