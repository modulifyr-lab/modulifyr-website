"use client";

import { Send } from "lucide-react";

export function NewsletterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-lg border border-slate-800 bg-[#131d31] px-3.5 py-2 text-xs text-white placeholder-slate-500 transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
      />

      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 cursor-pointer rounded-lg bg-cyan-600 p-2 text-white transition-colors hover:bg-cyan-500"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
