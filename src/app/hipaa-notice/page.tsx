import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: `How ${practice.name} may use and disclose your protected health information, and your rights under HIPAA.`,
  alternates: { canonical: "/hipaa-notice" },
};

export default function HipaaNoticePage() {
  return (
    <LegalPage
      title="HIPAA Notice of Privacy Practices"
      intro="This notice describes how medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully."
      updated="TO BE CONFIRMED BY THE PRACTICE"
    >
      <div className="mb-10 rounded-2xl border-2 border-amber-500/60 bg-amber-50 p-6 text-[0.95rem] leading-relaxed text-amber-950">
        <strong className="block text-amber-950">
          Draft — requires review before publication
        </strong>
        <p className="mt-2 mb-0">
          A Notice of Privacy Practices is a federally mandated document under
          45 CFR §164.520. This draft follows the required structure, but it
          must be reviewed and approved by the practice&rsquo;s Privacy Officer
          and healthcare counsel, and completed with the effective date and
          Privacy Officer contact details, before it goes live.
        </p>
      </div>

      <h2>Our commitment</h2>
      <p>
        {practice.name} is required by law to maintain the privacy of your
        protected health information (PHI), to give you this notice explaining
        our legal duties and privacy practices, and to follow the terms of the
        notice currently in effect.
      </p>

      <h2>How we may use and disclose your health information</h2>

      <h3>For treatment</h3>
      <p>
        We use your health information to provide, coordinate and manage your
        eye care. For example, your surgeon may share your corneal measurements
        with the technicians preparing your procedure, or with another physician
        involved in your care.
      </p>

      <h3>For payment</h3>
      <p>
        We may use and disclose your information to bill and collect payment
        from you, an insurance company or a third party — including verifying
        coverage and obtaining prior authorization for a procedure.
      </p>

      <h3>For health care operations</h3>
      <p>
        We may use your information for quality assessment, staff training and
        review, licensing, business planning and general administration.
      </p>

      <h3>Appointment reminders and health-related communications</h3>
      <p>
        We may contact you by phone, text, email or mail to remind you of an
        appointment, follow up after a procedure, or tell you about treatment
        alternatives and health-related benefits or services that may interest
        you. You may ask us to contact you at a specific number or address, or
        to stop these communications.
      </p>

      <h3>Other permitted or required disclosures</h3>
      <p>
        Federal and state law permit or require disclosure in certain
        circumstances without your authorization, including: as required by law;
        for public health activities; to report suspected abuse or neglect; for
        health oversight activities; in judicial and administrative proceedings;
        for law enforcement purposes; to coroners, medical examiners and funeral
        directors; for organ and tissue donation; for approved research; to
        avert a serious threat to health or safety; for specialized government
        functions; and for workers&rsquo; compensation.
      </p>

      <h2>Uses and disclosures that require your written authorization</h2>
      <p>
        Most uses and disclosures of psychotherapy notes, uses and disclosures
        for marketing purposes, and any sale of protected health information
        require your written authorization. Other uses and disclosures not
        described in this notice will be made only with your written
        authorization, and you may revoke that authorization in writing at any
        time, except to the extent we have already acted in reliance on it.
      </p>

      <h2>Your rights regarding your health information</h2>
      <ul>
        <li>
          <strong>Request restrictions.</strong> You may ask us to limit how we
          use or disclose your information. We are not required to agree, except
          that we must agree to a request to restrict disclosure to a health
          plan when you pay for the item or service in full, out of pocket.
        </li>
        <li>
          <strong>Request confidential communications.</strong> You may ask us
          to contact you at an alternate address or by an alternate means.
        </li>
        <li>
          <strong>Inspect and copy.</strong> You may inspect and obtain a copy of
          your health and billing records, including an electronic copy where we
          maintain them electronically. We may charge a reasonable, cost-based
          fee.
        </li>
        <li>
          <strong>Request an amendment.</strong> You may ask us to correct
          information you believe is incorrect or incomplete. We may deny the
          request in certain circumstances, and will tell you why in writing.
        </li>
        <li>
          <strong>An accounting of disclosures.</strong> You may request a list
          of certain disclosures we have made of your information.
        </li>
        <li>
          <strong>A paper copy of this notice.</strong> You may request one at
          any time, even if you agreed to receive it electronically.
        </li>
        <li>
          <strong>Notification of a breach.</strong> You will be notified if a
          breach occurs that may have compromised the privacy or security of
          your information.
        </li>
      </ul>

      <h2>Our duties</h2>
      <p>
        We are required to maintain the privacy of your health information and
        to provide you with notice of our legal duties and privacy practices. We
        must abide by the terms of the notice currently in effect. We reserve
        the right to change this notice and to make the revised notice effective
        for information we already hold as well as information we receive in the
        future. A current copy will be posted in the office and on this page.
      </p>

      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a
        complaint with the practice by contacting our Privacy Officer at the
        number below, or with the Secretary of the U.S. Department of Health and
        Human Services, Office for Civil Rights, at{" "}
        <a
          href="https://www.hhs.gov/ocr/complaints"
          target="_blank"
          rel="noopener noreferrer"
        >
          hhs.gov/ocr/complaints
        </a>
        . You will not be penalized or retaliated against for filing a
        complaint.
      </p>

      <h2>A note about this website</h2>
      <p>
        Information you submit through the consultation form on this site is
        transmitted to our practice management system. Please do not use it to
        send detailed medical history, test results or other sensitive clinical
        information — call the office instead. Standard email and text messages
        are not encrypted, and we cannot guarantee their confidentiality in
        transit.
      </p>
    </LegalPage>
  );
}
