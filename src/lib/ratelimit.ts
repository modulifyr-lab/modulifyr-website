// src/lib/ratelimit.ts
// ─────────────────────────────────────────────────────────────────────────────
// Rate limiting with Upstash Redis (production) and in-memory fallback (dev).
//
// SETUP:
//   1. Create a free Redis database at https://console.upstash.com
//   2. Add to your .env.local:
//        UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
//        UPSTASH_REDIS_REST_TOKEN=your-token
//   3. Add the same vars to Vercel environment variables.
//
// In development without Upstash vars set, falls back to in-memory limiting.
// ─────────────────────────────────────────────────────────────────────────────

// ─── In-memory fallback (dev / single-instance only) ─────────────────────────
const memoryStore = new Map<string, { count: number; resetAt: number }>();

function inMemoryCheck(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = memoryStore.get(ip);
  if (!entry || now > entry.resetAt) {
    memoryStore.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > limit;
}

// ─── Main exported function ───────────────────────────────────────────────────

/**
 * Returns true if the request should be BLOCKED (rate limit exceeded).
 *
 * Uses Upstash Redis sliding-window algorithm in production for accuracy
 * across all Vercel serverless instances. Falls back to in-memory in dev.
 *
 * @param ip       The client IP address (use getClientIp() below)
 * @param limit    Max requests allowed in the window (default: 5)
 * @param windowMs Time window in milliseconds (default: 60000 = 1 minute)
 */
export async function isRateLimited(ip: string, limit = 5, windowMs = 60_000): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  // No Upstash config — use in-memory fallback (dev / CI)
  if (!url || !token) {
    console.warn("[ratelimit] Upstash not configured, using in-memory fallback");
    return inMemoryCheck(ip, limit, windowMs);
  }

  try {
    const windowSeconds = Math.ceil(windowMs / 1000);
    const key = `rl:${ip}`;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Sliding window via sorted set
    // ZADD + ZREMRANGEBYSCORE + ZCARD in a pipeline
    const pipeline = [
      ["ZADD", key, String(now), `${now}`],
      ["ZREMRANGEBYSCORE", key, "-inf", String(windowStart)],
      ["ZCARD", key],
      ["EXPIRE", key, String(windowSeconds * 2)],
    ];

    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pipeline),
    });

    if (!res.ok) {
      console.error("[ratelimit] Upstash pipeline failed:", res.status);
      return inMemoryCheck(ip, limit, windowMs); // fail open
    }

    const data: Array<{ result: number }> = await res.json();
    const count = data[2]?.result ?? 0;
    return count > limit;
  } catch (err) {
    console.error("[ratelimit] Upstash error, falling back:", err);
    return inMemoryCheck(ip, limit, windowMs); // fail open
  }
}

/**
 * Extract the real client IP from Next.js request headers.
 * Handles Vercel's x-forwarded-for and direct connections.
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
