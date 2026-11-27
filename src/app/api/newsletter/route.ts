import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";
import { normalizeNewsletterEmail, subscribeToResendNewsletter } from "@/lib/resend";
import logger from "@/lib/logger";

export const maxDuration = 20;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  try {
    if (await isRateLimited(ip, 5, 60_000)) {
      logger.warn("Newsletter signup rate limited", { ip });
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const payload = body as Record<string, unknown>;

    // Silent honeypot check for automated spam bots
    if (typeof payload.website === "string" && payload.website.trim() !== "") {
      logger.info("Newsletter honeypot triggered", { ip });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const email = normalizeNewsletterEmail(payload.email);
    if (!email) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const result = await subscribeToResendNewsletter(email, { ip });
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    logger.info("Newsletter subscription recorded", { ip });
    return NextResponse.json(
      {
        success: true,
        message: "Subscribed. You will only receive occasional engineering insights.",
      },
      { status: 200 }
    );
  } catch (error) {
    logger.error("Newsletter API unhandled error", { error: String(error), ip });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
