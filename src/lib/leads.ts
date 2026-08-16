/**
 * Lead delivery — GoHighLevel.
 *
 * WHY A WEBHOOK AND NOT THE GHL API:
 * this site is a static export with no server of its own, so anything the
 * browser needs in order to call an API is visible in the JavaScript bundle.
 * A GHL Private Integration Token would therefore be public, and that token
 * can read and write the entire sub-account — contacts, conversations,
 * calendars. An Inbound Webhook URL is write-only into one workflow, so a
 * leak means junk submissions, not a data breach.
 *
 * Set NEXT_PUBLIC_LEAD_WEBHOOK to the workflow's Inbound Webhook URL.
 * If we ever move to a host with server functions, swap this for a server
 * route holding a real token and delete the note above.
 */
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_WEBHOOK ?? "";

export const LEADS_CONFIGURED = LEAD_ENDPOINT.length > 0;

export type LeadPayload = ReturnType<typeof buildLeadPayload>;

/**
 * GHL's contact mapper looks for first/last name separately, so send both the
 * split parts and the original string — the workflow can use whichever fits.
 */
export function buildLeadPayload(data: FormData) {
  const str = (key: string) => String(data.get(key) ?? "").trim();

  const fullName = str("name");
  const [firstName = "", ...restOfName] = fullName.split(/\s+/);

  return {
    first_name: firstName,
    last_name: restOfName.join(" "),
    full_name: fullName,
    email: str("email"),
    phone: str("phone"),
    procedure: str("procedure") || "Not specified",
    message: str("message"),
    source: "Website — request a consultation",
    page: typeof window === "undefined" ? "" : window.location.href,
  };
}

/**
 * Resolves only on a confirmed delivery. Everything else throws so the form
 * shows the call-us fallback rather than a false "we got it".
 */
export async function submitLead(data: FormData): Promise<void> {
  if (!LEADS_CONFIGURED) {
    throw new Error("Lead endpoint is not configured");
  }

  const res = await fetch(LEAD_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildLeadPayload(data)),
  });

  if (!res.ok) {
    throw new Error(`Lead endpoint returned ${res.status}`);
  }
}
