import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const required = ["name", "company", "email", "industry", "project_type", "budget", "message"];
        for (const field of required) {
            if (!body[field] || String(body[field]).trim() === "") {
                return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const webhookUrl = process.env.MAKE_PROPOSAL_WEBHOOK_URL;
        if (!webhookUrl) {
            console.warn("MAKE_PROPOSAL_WEBHOOK_URL not set — skipping webhook");
            return NextResponse.json({ success: true, message: "Proposal request received" }, { status: 200 });
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
            // Region fields — map in Make → Notion "Region" property + Discord message
            region: body.region || "Not specified",
            region_code: body.region_code || "unknown",
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

        return NextResponse.json({ success: true, message: "Proposal request received" }, { status: 200 });

    } catch (error) {
        console.error("Proposal API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}