import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getWebhookUrl, forwardToWebhook } from "./webhook";
import logger from "@/lib/logger";

describe("webhook library", () => {
  const originalEnv = process.env;
  let warnSpy: ReturnType<typeof vi.spyOn>;
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.N8N_CONTACT_WEBHOOK_URL;
    delete process.env.MAKE_CONTACT_WEBHOOK_URL;
    delete process.env.N8N_WEBHOOK_SECRET;

    warnSpy = vi.spyOn(logger, "warn").mockImplementation(() => {});
    errorSpy = vi.spyOn(logger, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  describe("getWebhookUrl", () => {
    it("N8N_* takes precedence over MAKE_*", () => {
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://n8n.example.com/webhook/contact";
      process.env.MAKE_CONTACT_WEBHOOK_URL = "https://make.example.com/webhook/contact";

      expect(getWebhookUrl("CONTACT")).toBe("https://n8n.example.com/webhook/contact");
    });

    it("the MAKE_* fallback works when N8N_* is unset", () => {
      process.env.MAKE_CONTACT_WEBHOOK_URL = "https://make.example.com/webhook/contact";

      expect(getWebhookUrl("CONTACT")).toBe("https://make.example.com/webhook/contact");
    });

    it("trims URL and treats whitespace-only as undefined", () => {
      process.env.N8N_CONTACT_WEBHOOK_URL = "   ";
      process.env.MAKE_CONTACT_WEBHOOK_URL = "  https://make.example.com/webhook/contact  ";

      expect(getWebhookUrl("CONTACT")).toBe("https://make.example.com/webhook/contact");
    });

    it("returns undefined when neither is set", () => {
      expect(getWebhookUrl("CONTACT")).toBeUndefined();
    });
  });

  describe("forwardToWebhook", () => {
    it("unset URL with NODE_ENV=development returns ok: true", async () => {
      vi.stubEnv("NODE_ENV", "development");
      const result = await forwardToWebhook("CONTACT", { test: true }, { ip: "127.0.0.1" });

      expect(result).toEqual({ ok: true });
      expect(warnSpy).toHaveBeenCalledWith(
        "Form webhook URL is not configured (development mode)",
        { kind: "CONTACT" }
      );
    });

    it("unset URL with NODE_ENV=production returns status 503", async () => {
      vi.stubEnv("NODE_ENV", "production");
      const result = await forwardToWebhook("CONTACT", { test: true }, { ip: "127.0.0.1" });

      expect(result).toEqual({
        ok: false,
        status: 503,
        error: "Submissions are temporarily unavailable. Please email contact@modulifyr.com.",
      });
      expect(errorSpy).toHaveBeenCalledWith("Form webhook URL is not configured", {
        kind: "CONTACT",
      });
    });

    it("sends secret header only when N8N_WEBHOOK_SECRET is set", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://n8n.example.com/webhook";
      process.env.N8N_WEBHOOK_SECRET = "my-secret-key";

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
      });
      global.fetch = mockFetch;

      const result = await forwardToWebhook("CONTACT", { email: "test@example.com" }, { ip: "1.2.3.4" });

      expect(result).toEqual({ ok: true });
      expect(mockFetch).toHaveBeenCalledWith(
        "https://n8n.example.com/webhook",
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            "Content-Type": "application/json",
            "x-webhook-secret": "my-secret-key",
          }),
          body: JSON.stringify({ email: "test@example.com" }),
        })
      );
    });

    it("does not send secret header when N8N_WEBHOOK_SECRET is unset", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://n8n.example.com/webhook";

      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
      });
      global.fetch = mockFetch;

      await forwardToWebhook("CONTACT", { email: "test@example.com" }, { ip: "1.2.3.4" });

      const headers = mockFetch.mock.calls[0][1].headers;
      expect(headers["x-webhook-secret"]).toBeUndefined();
    });

    it("non-2xx response returns status 502", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://n8n.example.com/webhook";

      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      });

      const result = await forwardToWebhook("CONTACT", { email: "test@example.com" }, { ip: "1.2.3.4" });

      expect(result).toEqual({
        ok: false,
        status: 502,
        error: "We could not send your submission right now. Please try again or email contact@modulifyr.com.",
      });
      expect(errorSpy).toHaveBeenCalledWith("Form webhook returned an error", {
        kind: "CONTACT",
        status: 500,
        ip: "1.2.3.4",
      });
    });

    it("thrown fetch error (network failure/timeout) returns status 504", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://n8n.example.com/webhook";

      global.fetch = vi.fn().mockRejectedValue(new Error("Timeout"));

      const result = await forwardToWebhook("CONTACT", { email: "test@example.com" }, { ip: "1.2.3.4" });

      expect(result).toEqual({
        ok: false,
        status: 504,
        error: "We could not send your submission right now. Please try again or email contact@modulifyr.com.",
      });
      expect(errorSpy).toHaveBeenCalledWith("Form webhook request failed", {
        kind: "CONTACT",
        error: "Error: Timeout",
        ip: "1.2.3.4",
      });
    });

    it("never logs the URL, secret, or payload text", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.N8N_CONTACT_WEBHOOK_URL = "https://secret-domain.com/webhook";
      process.env.N8N_WEBHOOK_SECRET = "super-secret-token";

      global.fetch = vi.fn().mockRejectedValue(new Error("Network Error"));

      const payload = { sensitiveData: "secret message payload" };
      await forwardToWebhook("CONTACT", payload, { ip: "1.2.3.4" });

      const loggerCalls = [...errorSpy.mock.calls, ...warnSpy.mock.calls];
      for (const call of loggerCalls) {
        const callStr = JSON.stringify(call);
        expect(callStr).not.toContain("https://secret-domain.com/webhook");
        expect(callStr).not.toContain("super-secret-token");
        expect(callStr).not.toContain("secret message payload");
      }
    });
  });
});
