// src/lib/logger.test.ts
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import logger from "./logger";

describe("logger", () => {
  let consoleSpy: {
    log: ReturnType<typeof vi.spyOn>;
    warn: ReturnType<typeof vi.spyOn>;
    error: ReturnType<typeof vi.spyOn>;
  };

  beforeEach(() => {
    consoleSpy = {
      log: vi.spyOn(console, "log").mockImplementation(() => {}),
      warn: vi.spyOn(console, "warn").mockImplementation(() => {}),
      error: vi.spyOn(console, "error").mockImplementation(() => {}),
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("logger.info outputs valid JSON to console.log", () => {
    logger.info("test message", { key: "value" });
    expect(consoleSpy.log).toHaveBeenCalledOnce();
    const output = consoleSpy.log.mock.calls[0][0];
    const parsed = JSON.parse(output);
    expect(parsed.level).toBe("info");
    expect(parsed.msg).toBe("test message");
    expect(parsed.key).toBe("value");
    expect(parsed.ts).toBeDefined();
  });

  it("logger.warn outputs valid JSON to console.warn", () => {
    logger.warn("warning message");
    expect(consoleSpy.warn).toHaveBeenCalledOnce();
    const parsed = JSON.parse(consoleSpy.warn.mock.calls[0][0]);
    expect(parsed.level).toBe("warn");
    expect(parsed.msg).toBe("warning message");
  });

  it("logger.error outputs valid JSON to console.error", () => {
    logger.error("error message", { code: 500 });
    expect(consoleSpy.error).toHaveBeenCalledOnce();
    const parsed = JSON.parse(consoleSpy.error.mock.calls[0][0]);
    expect(parsed.level).toBe("error");
    expect(parsed.code).toBe(500);
  });

  it("includes env field in all log entries", () => {
    logger.info("with env");
    const parsed = JSON.parse(consoleSpy.log.mock.calls[0][0]);
    expect(parsed.env).toBeDefined();
  });

  it("works without context argument", () => {
    expect(() => logger.info("no context")).not.toThrow();
    expect(() => logger.warn("no context")).not.toThrow();
    expect(() => logger.error("no context")).not.toThrow();
  });
});
