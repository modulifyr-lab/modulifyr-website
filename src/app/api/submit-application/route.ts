// src/app/api/submit-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";
import logger from "@/lib/logger";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  try {
    // ── Rate limit: 3 requests per 5 minutes per IP ───────────────────────
    if (await isRateLimited(ip, 3, 5 * 60_000)) {
      logger.warn("Job application rate limited", { ip });
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // ── Honeypot ──────────────────────────────────────────────────────────
    if (body.website && String(body.website).trim() !== "") {
      logger.info("Job application honeypot triggered", { ip });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Required field validation ─────────────────────────────────────────
    const required = ["name", "email", "role", "skills", "cover_note"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // ── Email format validation ───────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ── Max length validation ─────────────────────────────────────────────
    if (String(body.name).length > 200)
      return NextResponse.json({ error: "Name is too long" }, { status: 400 });
    if (String(body.skills).length > 500)
      return NextResponse.json({ error: "Skills field is too long" }, { status: 400 });
    if (String(body.cover_note).length > 5000)
      return NextResponse.json(
        { error: "Cover note is too long (max 5000 characters)" },
        { status: 400 }
      );

    // ── Allowlist validation on role ──────────────────────────────────────
    const allowedRoles = [
      "Senior Full-stack Engineer (React / RSC)",
      "Cloud Infrastructure Engineer (SRE Focus)",
      "System Design Intern (Birtamode Office)",
      "Other / General Application",
    ];
    if (!allowedRoles.includes(body.role)) {
      return NextResponse.json({ error: "Invalid role selection" }, { status: 400 });
    }

    // ── URL validation (optional fields) ─────────────────────────────────
    const urlRegex = /^https?:\/\/.+/;
    if (
      body.portfolio_url &&
      body.portfolio_url.trim() !== "" &&
      !urlRegex.test(body.portfolio_url)
    ) {
      return NextResponse.json({ error: "Invalid portfolio URL" }, { status: 400 });
    }
    if (body.linkedin_url && body.linkedin_url.trim() !== "" && !urlRegex.test(body.linkedin_url)) {
      return NextResponse.json({ error: "Invalid LinkedIn URL" }, { status: 400 });
    }

    // ── Send to Make webhook ──────────────────────────────────────────────
    const webhookUrl = process.env.MAKE_JOB_WEBHOOK_URL;
    if (!webhookUrl) {
      logger.warn("MAKE_JOB_WEBHOOK_URL not set — skipping webhook");
      return NextResponse.json({ success: true, message: "Application received" }, { status: 200 });
    }

    const payload = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || "Not provided",
      role: body.role,
      skills: body.skills.trim(),
      portfolio_url: body.portfolio_url?.trim() || "Not provided",
      linkedin_url: body.linkedin_url?.trim() || "Not provided",
      cover_note: body.cover_note.trim(),
    };

    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!makeResponse.ok) {
      logger.error("Make webhook failed for job application", { status: makeResponse.status, ip });
      return NextResponse.json({ error: "Failed to process submission" }, { status: 502 });
    }

    logger.info("Job application submitted successfully", {
      email: payload.email,
      role: payload.role,
      ip,
    });
    return NextResponse.json({ success: true, message: "Application received" }, { status: 200 });
  } catch (error) {
    logger.error("Job application API unhandled error", { error: String(error), ip });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
