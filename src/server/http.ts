import { NextResponse } from "next/server";

const MAX_BODY_BYTES = 20_000;

type Window = { timestamps: number[] };
const buckets = new Map<string, Window>();
const MAX_BUCKETS = 10_000;

function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { timestamps: [] };
  bucket.timestamps = bucket.timestamps.filter((t) => now - t < windowMs);
  if (bucket.timestamps.length >= limit) {
    const oldest = bucket.timestamps[0];
    return { allowed: false, retryAfterSeconds: Math.ceil((oldest + windowMs - now) / 1000) };
  }
  bucket.timestamps.push(now);
  buckets.set(key, bucket);
  if (buckets.size > MAX_BUCKETS) {
    for (const [k, b] of buckets) {
      if (b.timestamps.every((t) => now - t >= windowMs)) buckets.delete(k);
      if (buckets.size <= MAX_BUCKETS / 2) break;
    }
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

function clientKey(request: Request): string {
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

export const EMAIL_RE = /^\S+@\S+\.\S+$/;

// Shared POST guard: rate limit, size cap on actual bytes, JSON parse, honeypot.
export async function guardJsonPost<T extends { website?: string }>(
  request: Request,
  bucket: string,
  limit: number,
  windowMs: number
): Promise<{ body: T } | { response: NextResponse }> {
  const limited = rateLimit(`${bucket}:${clientKey(request)}`, limit, windowMs);
  if (!limited.allowed) {
    return {
      response: NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } }
      ),
    };
  }
  let text: string;
  try { text = await request.text(); }
  catch { return { response: NextResponse.json({ error: "Unreadable body" }, { status: 400 }) }; }
  if (text.length > MAX_BODY_BYTES) {
    return { response: NextResponse.json({ error: "Payload too large" }, { status: 413 }) };
  }
  let body: T;
  try { body = JSON.parse(text); }
  catch { return { response: NextResponse.json({ error: "Invalid JSON" }, { status: 400 }) }; }
  if (body.website) return { response: NextResponse.json({ accepted: true }, { status: 202 }) };
  return { body };
}

export async function postJsonWebhook(endpoint: string, token: string | undefined, payload: unknown) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Webhook delivery failed with status ${response.status}`);
}
