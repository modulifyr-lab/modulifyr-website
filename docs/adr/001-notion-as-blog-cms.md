# ADR 001 — Notion as Blog CMS

**Status:** Accepted  
**Date:** March 2026  
**Author:** Rijan Mainali

---

## Context

The Modulifyr website needs a blog. Options considered:
1. Static markdown files in the repository
2. Contentful / Sanity (headless CMS)
3. Notion via REST API
4. MDX with Next.js

## Decision

Use Notion as the CMS, fetching posts via the official Notion REST API at build/request time with ISR.

## Rationale

- **Zero additional tooling cost** — Notion is already used for internal project management
- **Non-technical editor friendly** — content can be updated by the founder without touching code
- **ISR + on-demand revalidation** — content goes live immediately via Make webhook, not on next deploy
- **Structured data** — Notion database properties (Slug, Status, Category) provide clean typed metadata

## Consequences

- Blog posts require an internet connection to Notion at build time and during ISR revalidation
- Notion API rate limits (3 requests/second) must be respected — acceptable at current traffic
- If Notion API is down, ISR fallback serves the last cached version (acceptable)
- The Notion integration key must be kept secret and rotated annually

## Alternatives Rejected

- **Markdown files in repo** — requires a deploy for every content change; not editor-friendly
- **Contentful** — paid at scale; introduces a second vendor dependency
- **MDX** — powerful but too developer-heavy for the content authoring workflow
