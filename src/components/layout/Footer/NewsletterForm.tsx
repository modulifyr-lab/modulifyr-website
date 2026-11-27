"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setFeedback("Please enter your email address.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, website }),
      });
      const data = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setStatus("success");
      setFeedback(data.message || "Subscribed for periodic engineering insights.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Unable to subscribe right now. Please try again."
      );
    }
  };

  return (
    <div className="space-y-2.5 pt-2">
      <div className="font-sans text-xs font-semibold tracking-wide text-[#2D738D] uppercase dark:text-[#FFC24B]">
        Engineering Insights
      </div>

      {status === "success" ? (
        <div
          role="status"
          className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-xs leading-relaxed text-emerald-700 dark:text-emerald-300"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>{feedback}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2" noValidate>
          {/* Honeypot field for spam protection */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address for engineering insights
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") {
                  setStatus("idle");
                  setFeedback("");
                }
              }}
              placeholder="you@company.com"
              autoComplete="email"
              required
              disabled={status === "loading"}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 transition-all focus:border-[#2D738D] focus:ring-1 focus:ring-[#2D738D] focus:outline-none disabled:opacity-60 dark:border-slate-700/80 dark:bg-[#131d31] dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Subscribe to engineering insights"
              className="inline-flex h-[34px] shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#2D738D] px-3 text-white transition-colors hover:bg-[#235b70] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-cyan-600 dark:hover:bg-cyan-500"
            >
              {status === "loading" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </div>

          {status === "error" && feedback && (
            <div
              role="alert"
              className="flex items-center gap-1.5 text-[11px] text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <div>{feedback}</div>
            </div>
          )}
        </form>
      )}

      <div className="flex items-center gap-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#2D738D] dark:text-cyan-400" aria-hidden="true" />
        <div>
          Occasional notes only. No tracking or spam ·{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-[#2D738D] dark:hover:text-cyan-400">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
