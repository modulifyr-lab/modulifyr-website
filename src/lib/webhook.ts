import logger from "@/lib/logger";

export type FormWebhook = "CONTACT" | "PROPOSAL" | "JOB";

export type ForwardResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

/**
 * Reads the webhook URL for the given form kind.
 * Checks N8N_<KIND>_WEBHOOK_URL first, then falls back to MAKE_<KIND>_WEBHOOK_URL.
 *
 * NOTE: The MAKE_* fallback exists for a transition period and is to be removed
 * once deployments use the N8N_* names.
 */
export function getWebhookUrl(kind: FormWebhook): string | undefined {
  const n8nUrl = process.env[`N8N_${kind}_WEBHOOK_URL`]?.trim();
  if (n8nUrl) {
    return n8nUrl;
  }
  const makeUrl = process.env[`MAKE_${kind}_WEBHOOK_URL`]?.trim();
  if (makeUrl) {
    return makeUrl;
  }
  return undefined;
}

export async function forwardToWebhook(
  kind: FormWebhook,
  payload: Record<string, unknown>,
  ctx: { ip: string }
): Promise<ForwardResult> {
  const url = getWebhookUrl(kind);

  if (!url) {
    if (process.env.NODE_ENV === "development") {
      logger.warn("Form webhook URL is not configured (development mode)", { kind });
      return { ok: true };
    }
    logger.error("Form webhook URL is not configured", { kind });
    return {
      ok: false,
      status: 503,
      error: "Submissions are temporarily unavailable. Please email contact@modulifyr.com.",
    };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const secret = process.env.N8N_WEBHOOK_SECRET?.trim();
  if (secret) {
    headers["x-webhook-secret"] = secret;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(25_000),
    });

    if (!res.ok) {
      logger.error("Form webhook returned an error", { kind, status: res.status, ip: ctx.ip });
      return {
        ok: false,
        status: 502,
        error: "We could not send your submission right now. Please try again or email contact@modulifyr.com.",
      };
    }

    return { ok: true };
  } catch (err: unknown) {
    logger.error("Form webhook request failed", { kind, error: String(err), ip: ctx.ip });
    return {
      ok: false,
      status: 504,
      error: "We could not send your submission right now. Please try again or email contact@modulifyr.com.",
    };
  }
}
