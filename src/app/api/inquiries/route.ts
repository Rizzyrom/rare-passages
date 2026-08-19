import { NextResponse } from "next/server";
import { guardJsonPost, postJsonWebhook, EMAIL_RE } from "@/server/http";

type InquiryBody = {
  website?: string; // honeypot
  fullName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  audience?: string;
  region?: string;
  message?: string;
  consent?: boolean;
};

// Fail-closed like every Rare Passages intake: if persistence is not
// configured in production, return 503 — never a fake success.
export async function POST(request: Request) {
  const guarded = await guardJsonPost<InquiryBody>(request, "inquiries", 10, 10 * 60 * 1000);
  if ("response" in guarded) return guarded.response;
  const { body } = guarded;

  if (!body.fullName?.trim() || !body.email || !EMAIL_RE.test(body.email) || !body.consent) {
    return NextResponse.json({ error: "Name, a valid email, and consent are required" }, { status: 400 });
  }

  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  if (!endpoint) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Inquiry intake is not configured. Please email us directly." },
        { status: 503 }
      );
    }
    return NextResponse.json({ accepted: true, developmentOnly: true }, { status: 201 });
  }

  try {
    await postJsonWebhook(endpoint, process.env.INQUIRY_WEBHOOK_TOKEN, {
      fullName: body.fullName.trim().slice(0, 120),
      email: body.email.trim(),
      ...(body.phone?.trim() ? { phone: body.phone.trim().slice(0, 40) } : {}),
      organization: (body.organization ?? "").slice(0, 160),
      role: (body.role ?? "").slice(0, 120),
      audience: ["operator", "founder", "institution", "press", "other"].includes(body.audience ?? "") ? body.audience : "other",
      region: (body.region ?? "").slice(0, 160),
      message: (body.message ?? "").slice(0, 4000),
      consent: Boolean(body.consent),
      source: "rarepassages.com",
      tags: ["brand:rare-passages", "source:website", `audience:${body.audience ?? "other"}`],
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ accepted: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Inquiry intake is not configured. Please email us directly." },
      { status: 503 }
    );
  }
}
