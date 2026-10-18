// src/app/api/submit-proposal/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";
import logger from "@/lib/logger";
import { forwardToWebhook } from "@/lib/webhook";
import { REGION_CODES } from "@/lib/regions";

export const maxDuration = 30;

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

    // ── Region code validation and normalization ───────────────────────────
    const allowedRegionCodes: string[] = [...REGION_CODES, "not_selected"];
    const incomingRegionCode = body.region_code ? String(body.region_code).trim() : "";
    if (incomingRegionCode && !allowedRegionCodes.includes(incomingRegionCode)) {
      return NextResponse.json({ error: "Invalid region" }, { status: 400 });
    }

    const outgoingRegion =
      incomingRegionCode === "NP" ? "Nepal / South Asia" : "International";
    const outgoingRegionCode = incomingRegionCode === "NP" ? "nepal" : "international";
    const outgoingRegionLabel =
      body.region && String(body.region).trim() !== ""
        ? String(body.region).trim()
        : "Not selected";

    const cleanedBudget = String(body.budget)
      .replace(/,/g, "")
      .replace(/\u00A0/g, " ")
      .trim();

    const payload = {
      name: body.name.trim(),
      company: body.company.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || "Not provided",
      industry: body.industry,
      project_type: body.project_type,
      budget: cleanedBudget,
      message: body.message.trim(),
      region: outgoingRegion,
      region_code: outgoingRegionCode,
      region_label: outgoingRegionLabel,
    };

    const result = await forwardToWebhook("PROPOSAL", payload, { ip });
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
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
