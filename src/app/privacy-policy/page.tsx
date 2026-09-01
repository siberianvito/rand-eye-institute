import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${practice.name} collects, uses and protects information gathered through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How this website collects and uses information, and the choices you have. Health information held by the practice is governed separately by our HIPAA Notice of Privacy Practices."
      updated="TO BE CONFIRMED BY THE PRACTICE"
    >
      <div className="mb-10 rounded-2xl border-2 border-amber-500/60 bg-amber-50 p-6 text-[0.95rem] leading-relaxed text-amber-950">
        <strong className="block text-amber-950">
          Draft — requires review before publication
        </strong>
        <p className="mt-2 mb-0">
          This is a working draft, not legal advice. It must be reviewed by the
          practice&rsquo;s counsel and reconciled with what the site and CRM
          actually collect before it is published.
        </p>
      </div>

      <h2>Scope</h2>
      <p>
        This policy covers information collected through this website. Protected
        health information created or received in the course of your care is
        governed by our{" "}
        <Link href="/hipaa-notice">HIPAA Notice of Privacy Practices</Link>,
        which takes precedence wherever the two overlap.
      </p>

      <h2>Information we collect</h2>

      <h3>Information you give us</h3>
      <p>
        When you submit the consultation form, we collect the details you enter
        — typically your name, phone number and email address. The form is
        hosted by our patient relationship platform and submissions are
        delivered directly into our practice management system.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        Our hosting provider records standard technical information such as your
        IP address, browser type and the pages you request. The reader options
        panel stores your text size and contrast preferences in your own
        browser&rsquo;s local storage; that data never leaves your device and we
        cannot see it.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your consultation request and schedule your visit</li>
        <li>To answer questions you send us</li>
        <li>To verify insurance benefits when you ask us to</li>
        <li>To keep the website secure, working and improving</li>
      </ul>
      <p>
        We do not sell your personal information. We do not share it with
        advertisers.
      </p>

      <h2>Service providers</h2>
      <p>
        We rely on third parties to operate the site and manage patient
        communication — website hosting, our patient relationship platform, and
        an embedded map. These providers may process information on our behalf
        and are expected to protect it. Where a provider handles protected
        health information, a Business Associate Agreement is required.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          You can ask us to stop contacting you at any time by calling the
          office or replying STOP to a text message.
        </li>
        <li>
          You can ask what information we hold about you, and ask us to correct
          or delete it, subject to the record-retention obligations that apply
          to medical practices.
        </li>
        <li>
          You can browse this site without submitting the form. Nothing on it
          requires an account.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        This site is served over HTTPS. No method of transmission over the
        internet is completely secure, so please do not send detailed clinical
        information through the form — call{" "}
        <a href={practice.phoneHref}>{practice.phone}</a> instead.
      </p>

      <h2>Who this site is for</h2>
      <p>
        This website is intended for adults. We do not knowingly collect
        information here from anyone under 13, and if we learn that we have, we
        will delete it.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The date at the top of this page reflects the
        most recent revision.
      </p>
    </LegalPage>
  );
}
