// src/lib/ratelimit.ts
// Simple in-memory rate limiter.
// NOTE: On Vercel, each serverless function instance is separate, so this
// limits per-instance. For stronger protection across all instances, replace
// with Upstash: https://github.com/upstash/ratelimit
// This still provides meaningful protection against basic abuse with zero setup.

const requests = new Map<string, { count: number; resetAt: number }>();

/**
 * Returns true if the request should be BLOCKED (rate limit exceeded).
 * @param ip       The client IP address
 * @param limit    Max requests allowed in the window (default: 5)
 * @param windowMs Time window in milliseconds (default: 60000 = 1 minute)
 */
export function isRateLimited(
  ip: string,
  limit = 5,
  windowMs = 60_000
): boolean {
  const now = Date.now();
  const key = ip;
  const entry = requests.get(key);

  if (!entry || now > entry.resetAt) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  if (entry.count > limit) return true;

  return false;
}

/**
 * Extract the real client IP from Next.js request headers.
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}