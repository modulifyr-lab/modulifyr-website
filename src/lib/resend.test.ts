import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { normalizeNewsletterEmail, subscribeToResendNewsletter } from "./resend";

describe("resend newsletter helpers", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("normalizes valid emails and rejects malformed or oversized inputs", () => {
    expect(normalizeNewsletterEmail("  Builder@Example.COM ")).toBe("builder@example.com");
    expect(normalizeNewsletterEmail("")).toBeNull();
    expect(normalizeNewsletterEmail("not-an-email")).toBeNull();
    expect(normalizeNewsletterEmail(123)).toBeNull();
    expect(normalizeNewsletterEmail(`${"a".repeat(250)}@b.com`)).toBeNull();
  });

  it("posts contact to Resend audience endpoint when configured", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    process.env.RESEND_AUDIENCE_ID = "aud_123";

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ id: "contact_1" }), { status: 200 })
    );

    const result = await subscribeToResendNewsletter("team@modulifyr.com", { ip: "127.0.0.1" });

    expect(result).toEqual({ ok: true });
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe("https://api.resend.com/audiences/aud_123/contacts");
    expect((init?.headers as Record<string, string>)?.Authorization).toBe("Bearer re_test_key");
    expect(init?.body).toBe(JSON.stringify({ email: "team@modulifyr.com", unsubscribed: false }));
  });

  it("returns 503 in production when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;
    (process.env as Record<string, string | undefined>).NODE_ENV = "production";

    const result = await subscribeToResendNewsletter("team@modulifyr.com", { ip: "127.0.0.1" });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(503);
    }
  });
});
