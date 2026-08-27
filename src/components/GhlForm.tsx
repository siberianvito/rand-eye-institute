import Script from "next/script";
import { IconShield } from "./Icons";

/**
 * The GoHighLevel hosted form. Fields, validation and the thank-you step are
 * all managed in GHL, so submissions reach the CRM with no credential on our
 * side. Used on both the contact page and the home page intro.
 */
const GHL_FORM_ID = "hZrXknw6FqkDh58VKX2P";

export default function GhlForm({
  /** Instances need unique ids — form_embed.js keys its resizing off them. */
  instance = "default",
  minHeight = "min-h-[700px]",
  className = "",
}: {
  instance?: string;
  minHeight?: string;
  className?: string;
}) {
  const frameId = `inline-${GHL_FORM_ID}-${instance}`;

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-line bg-card p-4 shadow-lift-lg sm:p-6 ${className}`}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
        title="Request a consultation at Rand Eye Institute"
        id={frameId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Request a Consultation"
        data-form-id={GHL_FORM_ID}
        data-layout-iframe-id={frameId}
        data-height="700"
        className={`${minHeight} w-full border-0`}
        scrolling="no"
      />

      <p className="mt-4 flex items-start gap-2.5 px-1 text-[0.82rem] leading-relaxed text-grey-brand">
        <IconShield className="mt-0.5 h-4 w-4 shrink-0" />
        Your information is used only to contact you about your care. Please do
        not send sensitive medical details through this form.
      </p>

      {/* Auto-sizes the embedded form to its content */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
