// src/app/api/submit-proposal/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";
import logger from "@/lib/logger";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  try {
    // ── Rate limit: 5 requests per minute per IP ──────────────────────────
    if (await isRateLimited(ip, 5, 60_000)) {
      logger.warn("Proposal form rate limited", { ip });
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // ── Honeypot ──────────────────────────────────────────────────────────
    if (body.website && String(body.website).trim() !== "") {
      logger.info("Proposal form honeypot triggered", { ip });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Required field validation ─────────────────────────────────────────
    const required = ["name", "company", "email", "industry", "project_type", "budget", "message"];
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
    if (String(body.company).length > 300)
      return NextResponse.json({ error: "Company name is too long" }, { status: 400 });
    if (String(body.message).length > 8000)
      return NextResponse.json(
        { error: "Message is too long (max 8000 characters)" },
        { status: 400 }
      );

    // ── Allowlist validation on select fields ─────────────────────────────
    const allowedIndustries = [
      "Education",
      "Commerce",
      "Healthcare",
      "IT",
      "Retail",
      "Services",
      "Other",
    ];
    if (!allowedIndustries.includes(body.industry)) {
      return NextResponse.json({ error: "Invalid industry selection" }, { status: 400 });
    }

    // ── Send to Make webhook ──────────────────────────────────────────────
    const webhookUrl = process.env.MAKE_PROPOSAL_WEBHOOK_URL;
    if (!webhookUrl) {
      logger.warn("MAKE_PROPOSAL_WEBHOOK_URL not set — skipping webhook");
      return NextResponse.json(
        { success: true, message: "Proposal request received" },
        { status: 200 }
      );
    }

    const payload = {
      name: body.name.trim(),
      company: body.company.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || "Not provided",
      industry: body.industry,
      project_type: body.project_type,
      budget: body.budget,
      message: body.message.trim(),
      region: body.region || "Not specified",
      region_code: body.region_code || "unknown",
    };

    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!makeResponse.ok) {
      logger.error("Make webhook failed for proposal form", { status: makeResponse.status, ip });
      return NextResponse.json({ error: "Failed to process submission" }, { status: 502 });
    }

    logger.info("Proposal form submitted successfully", {
      email: payload.email,
      company: payload.company,
      ip,
    });
    return NextResponse.json(
      { success: true, message: "Proposal request received" },
      { status: 200 }
    );
  } catch (error) {
    logger.error("Proposal API unhandled error", { error: String(error), ip });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
