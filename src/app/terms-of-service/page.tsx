import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${practice.name} website.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that govern your use of this website. By using the site, you agree to them."
      updated="September 1, 2026"
    >
      <h2>No medical advice</h2>
      <p>
        The content on this site is general information about eye conditions and
        the procedures we perform. <strong>It is not medical advice</strong>,
        and it does not create a physician-patient relationship. Nothing here
        substitutes for an examination. Whether a procedure is appropriate for
        you can only be determined at a consultation, after your eyes have been
        measured and your health reviewed.
      </p>
      <p>
        <strong>
          If you are experiencing sudden vision loss, eye pain, flashes,
          floaters or an eye injury, do not use this website. Call us
          immediately at <a href={practice.phoneHref}>{practice.phone}</a>, or
          go to the nearest emergency room.
        </strong>
      </p>

      <h2>Results vary</h2>
      <p>
        Any outcome described on this site — including patient stories and
        illustrations of corrected vision — reflects an individual experience.
        Surgical and medical results depend on your anatomy, your eye health and
        factors outside our control. No result is promised or guaranteed.
      </p>

      <h2>Requesting a consultation</h2>
      <p>
        Submitting the form on this site is a request, not a booked
        appointment. An appointment exists only once our staff has confirmed it
        with you directly. Please give accurate contact details so we can reach
        you.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use this site for any unlawful purpose.</li>
        <li>
          Do not attempt to gain unauthorized access to the site, its servers,
          or any connected system.
        </li>
        <li>
          Do not submit content you do not have the right to submit, or that is
          false or misleading.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The {practice.name} name, logo, the &ldquo;{practice.tagline}&rdquo;
        mark, and the text, images and design of this site are owned by the
        practice or its licensors and may not be reproduced without permission.
        Product names such as LenSx, CustomVue, Tecnis and ReSTOR are trademarks
        of their respective owners.
      </p>

      <h2>Third-party links and embeds</h2>
      <p>
        This site links to and embeds services we do not control, including an
        appointment form and a map. We are not responsible for their content or
        their privacy practices.
      </p>

      <h2>Availability</h2>
      <p>
        We aim to keep the site available and accurate, but we do not warrant
        that it will be uninterrupted or error-free, and we may change or remove
        content at any time.
      </p>

      <h2>Privacy</h2>
      <p>
        Use of this site is also governed by our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and, for protected
        health information, our{" "}
        <Link href="/hipaa-notice">HIPAA Notice of Privacy Practices</Link>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, without
        regard to its conflict-of-law rules.
      </p>
    </LegalPage>
  );
}
