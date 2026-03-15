# ADR 003 — Upstash Redis for Rate Limiting

**Status:** Accepted  
**Date:** March 2026  
**Author:** Rijan Mainali

---

## Context

The website has three public API routes (contact form, proposal form, job application). These need rate limiting to prevent abuse. The original implementation used an in-memory Map, which only works correctly on a single process — Vercel deploys serverless functions across multiple isolated instances, so in-memory state is not shared.

## Decision

Use Upstash Redis with a sliding-window algorithm for rate limiting across all API routes.

## Rationale

- **Cross-instance accuracy** — Redis is a shared external store, so all Vercel instances see the same counters
- **Already in package.json** — `@upstash/ratelimit` and `@upstash/redis` were already listed as dependencies
- **Serverless-native** — Upstash is designed specifically for serverless/edge environments (HTTP-based Redis, no persistent connection required)
- **Free tier sufficient** — at current traffic levels, the Upstash free tier (10,000 commands/day) is more than adequate
- **Graceful fallback** — if Upstash is unreachable, the code falls back to in-memory limiting (fail open) rather than blocking all traffic

## Consequences

- Two new environment variables required: `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- Each rate-limit check makes one HTTP request to Upstash (~5–15ms latency, acceptable)
- Redis data is ephemeral — a Redis restart clears all rate limit counters (acceptable for this use case)

## Implementation

Sliding window via sorted set pipeline:
1. `ZADD key now now` — record this request timestamp
2. `ZREMRANGEBYSCORE key -inf windowStart` — remove expired entries
3. `ZCARD key` — count requests in window
4. `EXPIRE key ttl` — auto-cleanup

If count > limit → blocked (429). Otherwise → allowed.
