// src/lib/logger.ts
// ─────────────────────────────────────────────────────────────────────────────
// Structured JSON logger for all server-side code.
//
// WHY: console.log in production outputs unstructured strings that are hard
// to search and alert on in log aggregators (Vercel, Datadog, Axiom, etc.).
// Structured JSON logs are machine-parseable and filterable by field.
//
// USAGE:
//   import logger from "@/lib/logger";
//   logger.info("Contact form submitted", { email: "x@y.com", ip: "1.2.3.4" });
//   logger.error("Webhook failed", { status: 502, url: webhookUrl });
//
// NEVER use console.log directly in production API routes or server functions.
// ─────────────────────────────────────────────────────────────────────────────

type LogLevel = "info" | "warn" | "error" | "debug";

interface LogContext {
  [key: string]: unknown;
}

function log(level: LogLevel, msg: string, ctx?: LogContext): void {
  const entry = {
    level,
    msg,
    ts: new Date().toISOString(),
    env: process.env.NODE_ENV ?? "unknown",
    ...(ctx ?? {}),
  };

  const output = JSON.stringify(entry);

  if (level === "error") {
    console.error(output);
  } else if (level === "warn") {
    console.warn(output);
  } else {
    console.log(output);
  }
}

const logger = {
  info:  (msg: string, ctx?: LogContext) => log("info",  msg, ctx),
  warn:  (msg: string, ctx?: LogContext) => log("warn",  msg, ctx),
  error: (msg: string, ctx?: LogContext) => log("error", msg, ctx),
  debug: (msg: string, ctx?: LogContext) => {
    if (process.env.NODE_ENV === "development") log("debug", msg, ctx);
  },
};

export default logger;
