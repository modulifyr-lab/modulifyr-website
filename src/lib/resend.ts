import logger from "@/lib/logger";

const EMAIL_REGEX = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;

export type NewsletterSubscribeResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export function normalizeNewsletterEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed || trimmed.length > 254) return null;
  if (!EMAIL_REGEX.test(trimmed)) return null;
  return trimmed;
}

export async function subscribeToResendNewsletter(
  email: string,
  ctx: { ip: string }
): Promise<NewsletterSubscribeResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      logger.warn("Resend API key is not configured (development mode)", { ip: ctx.ip });
      return { ok: true };
    }
    logger.error("Resend API key is not configured", { ip: ctx.ip });
    return {
      ok: false,
      status: 503,
      error: "Newsletter signups are temporarily unavailable. Please try again later.",
    };
  }

  const endpoint = audienceId
    ? `https://api.resend.com/audiences/${encodeURIComponent(audienceId)}/contacts`
    : "https://api.resend.com/contacts";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!res.ok) {
      logger.error("Resend newsletter subscription failed", {
        status: res.status,
        ip: ctx.ip,
      });
      return {
        ok: false,
        status: 502,
        error: "Unable to complete subscription right now. Please try again shortly.",
      };
    }

    return { ok: true };
  } catch (err: unknown) {
    logger.error("Resend newsletter request threw", {
      error: String(err),
      ip: ctx.ip,
    });
    return {
      ok: false,
      status: 504,
      error: "Subscription request timed out. Please try again shortly.",
    };
  }
}
