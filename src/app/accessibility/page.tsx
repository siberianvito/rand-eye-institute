import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${practice.name}'s commitment to making this website usable for people with disabilities, and how to reach us if something is not working.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="We treat people who are losing their sight. A website they cannot read would be a poor way to introduce ourselves."
      updated="TO BE CONFIRMED BY THE PRACTICE"
    >
      <h2>Our commitment</h2>
      <p>
        {practice.name} is committed to making this website usable by everyone,
        including people who use screen readers, magnification, keyboard-only
        navigation, or high-contrast displays. We aim to conform to the{" "}
        <a
          href="https://www.w3.org/WAI/WCAG22/quickref/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.2
        </a>{" "}
        at Level AA.
      </p>

      <h2>What we have built in</h2>
      <p>
        Accessibility here is part of the page itself rather than something
        bolted on top of it:
      </p>
      <ul>
        <li>
          Body text is set at 17px with generous line height, and the page
          avoids large fields of pure white — a deliberate choice for patients
          with cataracts, photophobia or a recent procedure.
        </li>
        <li>
          Text and interface colours are tested to meet or exceed a 4.5:1
          contrast ratio against their backgrounds.
        </li>
        <li>
          Every control is reachable and operable by keyboard, with a visible
          focus ring, and a &ldquo;skip to main content&rdquo; link comes first
          in the tab order.
        </li>
        <li>
          The before-and-after vision comparison can be operated with a slider
          by keyboard, not only by dragging.
        </li>
        <li>
          Images carry descriptive alternative text, and the content of the
          anatomy graphic is repeated as real text so it is available to screen
          readers and search engines.
        </li>
        <li>
          All animation stops automatically when your device requests reduced
          motion, and can also be switched off from the reader options panel.
        </li>
        <li>
          The reader options panel (the button at the lower left of every page)
          adjusts text size, contrast, motion and link underlines. Your choice
          is remembered on your device.
        </li>
      </ul>

      <h2>Why we do not use an accessibility overlay</h2>
      <p>
        We deliberately do not install a third-party accessibility overlay or
        &ldquo;compliance widget.&rdquo; Those tools alter the page after it
        loads, which frequently interferes with the screen readers and
        magnifiers that people already have configured. They also do not make a
        website legally compliant, and organisations relying on them have still
        faced accessibility complaints. We would rather fix the page than cover
        it.
      </p>

      <h2>Known limitations</h2>
      <p>
        Two parts of this site are supplied by third parties, and their
        accessibility is not fully under our control:
      </p>
      <ul>
        <li>
          The appointment request form is hosted by our patient relationship
          platform.
        </li>
        <li>The map on the contact page is embedded from Google Maps.</li>
      </ul>
      <p>
        If either prevents you from reaching us, please call the office and we
        will take your request by phone. Everything the form does can be done in
        a conversation.
      </p>

      <h2>Tell us if something does not work</h2>
      <p>
        If you encounter a barrier on this site, we want to know — and we will
        help you get what you needed in the meantime. Call{" "}
        <a href={practice.phoneHref}>{practice.phone}</a> and tell us which page
        you were on and what happened. We treat accessibility problems as bugs
        and fix them.
      </p>

      <h2>Formal complaints</h2>
      <p>
        You may also contact the U.S. Department of Justice ADA Information Line
        at 800-514-0301 (TTY 800-514-0383) or visit{" "}
        <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer">
          ada.gov
        </a>
        .
      </p>
    </LegalPage>
  );
}
