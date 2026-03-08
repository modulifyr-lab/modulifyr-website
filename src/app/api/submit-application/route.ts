import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const required = ["name", "email", "role", "skills", "cover_note"];
        for (const field of required) {
            if (!body[field] || String(body[field]).trim() === "") {
                return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const webhookUrl = process.env.MAKE_JOB_WEBHOOK_URL;
        if (!webhookUrl) {
            console.warn("MAKE_JOB_WEBHOOK_URL not set — skipping webhook");
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
            console.error("Make webhook failed:", makeResponse.status);
            return NextResponse.json({ error: "Failed to process submission" }, { status: 502 });
        }

        return NextResponse.json({ success: true, message: "Application received" }, { status: 200 });

    } catch (error) {
        console.error("Job application API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}