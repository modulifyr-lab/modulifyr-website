# ADR 002 — Make (Integromat) for ISR On-Demand Revalidation

**Status:** Accepted  
**Date:** March 2026  
**Author:** Rijan Mainali

---

## Context

Notion blog posts use Next.js ISR. Without on-demand revalidation, content changes would only appear after the next ISR window (up to 24 hours). We need a way to trigger immediate revalidation when a post is published or updated in Notion.

## Decision

Use Make (formerly Integromat) to watch for Notion database changes and call the `/api/revalidate` endpoint when a post's status changes to `Published` or when an existing published post is updated.

## Rationale

- **Already in the stack** — Make is used for other automation (form webhooks)
- **Zero infrastructure** — no additional server required
- **Reliable trigger** — Make's Notion watcher polls reliably and handles retries
- **Instant propagation** — typical latency under 60 seconds from publish to live

## Consequences

- Make requires a paid plan for Notion webhooks above a certain polling interval
- If Make is down, the 24-hour ISR fallback ensures content eventually updates
- The `REVALIDATION_SECRET` environment variable must be rotated if the Make scenario is ever shared or cloned

## Security

The `/api/revalidate` endpoint requires an `x-revalidate-secret` header matching the `REVALIDATION_SECRET` environment variable. Requests without this header receive a 401.
