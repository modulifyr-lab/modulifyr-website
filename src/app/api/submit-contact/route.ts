// src/app/api/submit-contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";

export async function POST(req: NextRequest) {
  try {
    // ── Rate limit: 5 requests per minute per IP ──────────────────────────
    const ip = getClientIp(req);
    if (isRateLimited(ip, 5, 60_000)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // ── Honeypot: bots fill this field, humans don't ──────────────────────
    if (body.website && String(body.website).trim() !== "") {
      // Silently succeed — don't let bots know they were blocked
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Required field validation ─────────────────────────────────────────
    const required = ["name", "email", "subject", "message"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // ── Email format validation ───────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ── Max length validation (prevent payload abuse) ─────────────────────
    if (String(body.name).length > 200) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 });
    }
    if (String(body.subject).length > 300) {
      return NextResponse.json({ error: "Subject is too long" }, { status: 400 });
    }
    if (String(body.message).length > 5000) {
      return NextResponse.json({ error: "Message is too long (max 5000 characters)" }, { status: 400 });
    }

    // ── Send to Make webhook ──────────────────────────────────────────────
    const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("MAKE_CONTACT_WEBHOOK_URL not set — skipping webhook");
      return NextResponse.json({ success: true, message: "Message received" }, { status: 200 });
    }

    const payload = {
      name:    body.name.trim(),
      email:   body.email.trim().toLowerCase(),
      subject: body.subject.trim(),
      message: body.message.trim(),
    };

    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!makeResponse.ok) {
      console.error("Make webhook failed:", makeResponse.status);
      return NextResponse.json({ error: "Failed to process submission" }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Message received" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}