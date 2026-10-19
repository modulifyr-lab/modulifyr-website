// src/app/api/submit-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";
import logger from "@/lib/logger";
import { forwardToWebhook } from "@/lib/webhook";
import { validateCv } from "@/lib/cv";

export const maxDuration = 30;

// ─── All allowed roles (must match JobApplicationForm.tsx) ───────────────────
const allowedRoles = [
  "BDR / Growth Manager",
  "Full-Stack Engineer",
  "Brand & Content Lead",
  "Other / General Application",
];

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

    const formData = await req.formData();

    const body = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      role: (formData.get("role") as string) || "",
      skills: (formData.get("skills") as string) || "",
      portfolio_url: (formData.get("portfolio_url") as string) || "",
      linkedin_url: (formData.get("linkedin_url") as string) || "",
      cover_note: (formData.get("cover_note") as string) || "",
      website: (formData.get("website") as string) || "",
    };

    // ── Honeypot ──────────────────────────────────────────────────────────
    if (body.website && body.website.trim() !== "") {
      logger.info("Job application honeypot triggered", { ip });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Required field validation ─────────────────────────────────────────
    const required = ["name", "email", "role", "skills", "cover_note"];
    for (const field of required) {
      if (!body[field as keyof typeof body] || body[field as keyof typeof body].trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // ── CV File validation ────────────────────────────────────────────────
    const file = formData.get("cv");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Please attach your CV." }, { status: 400 });
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    const cvCheck = validateCv({ name: file.name, size: file.size }, bytes);
    if (!cvCheck.ok) {
      return NextResponse.json({ error: cvCheck.error }, { status: 400 });
    }

    // ── Email format validation ───────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ── Max length validation ─────────────────────────────────────────────
    if (body.name.length > 200)
      return NextResponse.json({ error: "Name is too long" }, { status: 400 });
    if (body.skills.length > 500)
      return NextResponse.json({ error: "Skills field is too long" }, { status: 400 });
    if (body.cover_note.length > 5000)
      return NextResponse.json(
        { error: "Cover note is too long (max 5000 characters)" },
        { status: 400 }
      );

    // ── Allowlist validation on role ──────────────────────────────────────
    if (!allowedRoles.includes(body.role)) {
      return NextResponse.json({ error: "Invalid role selection" }, { status: 400 });
    }

    // ── URL validation (optional fields) ─────────────────────────────────
    const urlRegex = /^https?:\/\/.+/;
    if (body.portfolio_url && body.portfolio_url.trim() !== "" && !urlRegex.test(body.portfolio_url)) {
      return NextResponse.json({ error: "Invalid portfolio URL" }, { status: 400 });
    }
    if (body.linkedin_url && body.linkedin_url.trim() !== "" && !urlRegex.test(body.linkedin_url)) {
      return NextResponse.json({ error: "Invalid LinkedIn URL" }, { status: 400 });
    }

    const payload = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim() || "Not provided",
      role: body.role,
      skills: body.skills.trim(),
      portfolio_url: body.portfolio_url.trim() || "Not provided",
      linkedin_url: body.linkedin_url.trim() || "Not provided",
      cover_note: body.cover_note.trim(),
      cv_filename: cvCheck.filename,
      cv_mime: cvCheck.mime,
      cv_size_bytes: file.size,
      cv_base64: Buffer.from(bytes).toString("base64"),
    };

    const result = await forwardToWebhook("JOB", payload, { ip });
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    logger.info("Job application submitted successfully", {
      email: payload.email,
      role: payload.role,
      cv_size_bytes: payload.cv_size_bytes,
      ip,
    });
    return NextResponse.json({ success: true, message: "Application received" }, { status: 200 });
  } catch (error) {
    logger.error("Job application API unhandled error", { error: String(error), ip });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
