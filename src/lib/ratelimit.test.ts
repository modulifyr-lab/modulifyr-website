// src/lib/ratelimit.test.ts
import { describe, it, expect } from "vitest";
import { getClientIp } from "./ratelimit";

// Note: isRateLimited is async and calls Upstash when env vars are set.
// These tests cover getClientIp (pure) and the in-memory fallback behaviour
// via integration-style tests that don't require a live Redis instance.

describe("getClientIp", () => {
  it("returns x-forwarded-for first IP when multiple IPs present", () => {
    const req = new Request("http://localhost/api/test", {
      headers: { "x-forwarded-for": "203.0.113.1, 10.0.0.1" },
    });
    expect(getClientIp(req)).toBe("203.0.113.1");
  });

  it("returns x-forwarded-for when single IP", () => {
    const req = new Request("http://localhost/api/test", {
      headers: { "x-forwarded-for": "198.51.100.5" },
    });
    expect(getClientIp(req)).toBe("198.51.100.5");
  });

  it("falls back to x-real-ip when x-forwarded-for is absent", () => {
    const req = new Request("http://localhost/api/test", {
      headers: { "x-real-ip": "192.0.2.10" },
    });
    expect(getClientIp(req)).toBe("192.0.2.10");
  });

  it("returns 'unknown' when no IP headers present", () => {
    const req = new Request("http://localhost/api/test");
    expect(getClientIp(req)).toBe("unknown");
  });

  it("trims whitespace from forwarded-for header", () => {
    const req = new Request("http://localhost/api/test", {
      headers: { "x-forwarded-for": "  203.0.113.99 , 10.0.0.2" },
    });
    expect(getClientIp(req)).toBe("203.0.113.99");
  });
});

describe("isRateLimited (in-memory fallback — no Upstash env vars)", () => {
  it("allows requests under the limit", async () => {
    const { isRateLimited } = await import("./ratelimit");
    const ip = `test-under-${Date.now()}`;
    const blocked = await isRateLimited(ip, 3, 60_000);
    expect(blocked).toBe(false);
  });

  it("blocks requests over the limit", async () => {
    const { isRateLimited } = await import("./ratelimit");
    const ip = `test-over-${Date.now()}`;
    await isRateLimited(ip, 2, 60_000);
    await isRateLimited(ip, 2, 60_000);
    const blocked = await isRateLimited(ip, 2, 60_000);
    expect(blocked).toBe(true);
  });
});
