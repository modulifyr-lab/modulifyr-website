# Modulifyr Website — Internal Engineering Docs

**Internal use only.** This is Modulifyr Enterprise's private production website repository. This README is written for our own developers with existing repo access — not for public contributors. Do not share setup details, environment variable names, or internal endpoint paths outside the team.

Built with Next.js 16, TypeScript, TailwindCSS v4, Notion as the blog CMS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Language | TypeScript (strict mode) |
| Package manager | **Bun** (not npm — `bun.lock` is the lockfile of record) |
| Styling | TailwindCSS v4 |
| CMS | Notion (blog posts via REST API) |
| Webhooks | n8n (self-hosted on Render) — webhook env vars are named `MAKE_*` for legacy reasons only; they do not point at Make.com |
| Rate Limiting | Upstash Redis (sliding window) |
| Hosting | Vercel |
| Analytics | Google Tag Manager |

---

## Local Development Setup

### Prerequisites
- Bun (latest) — install via `curl -fsSL https://bun.sh/install | bash`
- Node.js 20+ (Next.js requires it under the hood even with Bun as package manager)

### 1. Clone and install
```bash
git clone https://github.com/modulifyr-lab/modulifyr-website.git
cd modulifyr-website
bun install
```

### 2. Environment variables

There is currently no `.env.example` committed. Get the current `.env.local` values from Rijan / whoever owns credentials directly — do not commit real values to this repo under any filename. Required variables:

```env
# ── Notion (Blog CMS) ──────────────────────────────────────────────────────
NOTION_API_KEY=
NOTION_BLOG_DATABASE_ID=

# ── n8n webhooks (var names kept as MAKE_* for legacy reasons — see Tech Stack table) ──
MAKE_CONTACT_WEBHOOK_URL=
MAKE_PROPOSAL_WEBHOOK_URL=
MAKE_JOB_WEBHOOK_URL=

# ── Revalidation (ISR on-demand, triggered by n8n on Notion blog changes) ──
REVALIDATION_SECRET=

# ── Upstash Redis (Rate Limiting) ──────────────────────────────────────────
# Falls back to in-memory rate limiting if not set — NOT safe for production,
# local/dev only.
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### 3. Run the dev server
```bash
bun dev
```
Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts
```bash
bun dev              # Local dev server
bun run build         # Production build
bun run start         # Start production server
bun run lint          # ESLint
bun run lint:fix      # ESLint with autofix
bun run format         # Prettier write
bun run format:check   # Prettier check only
bun test               # Vitest
bun run test:ui        # Vitest interactive UI
bun run test:coverage  # Vitest with coverage
```

---

## Project Structure
```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/
│   │   ├── submit-contact/     # Contact form → n8n webhook
│   │   ├── submit-proposal/    # RFP form → n8n webhook
│   │   ├── submit-application/ # Job application form → n8n webhook
│   │   └── revalidate/         # ISR revalidation, POST only, secret via header
│   ├── blog/               # Blog index and [slug] pages
│   └── [other pages]/
├── components/
│   ├── forms/              # Client-side form components
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Button, Card, FormElements
├── lib/
│   ├── logger.ts           # Structured JSON logger — use instead of console.log
│   ├── notion-blog.ts      # Notion CMS data fetching
│   ├── ratelimit.ts        # Upstash rate limiting
│   └── utils.ts            # cn() Tailwind class utility
└── contexts/               # LanguageSwitcher
```

---

## Blog CMS Setup (Notion)

Each blog post is a Notion database page. Required properties: Title, Slug, Excerpt, Category, Status (must be `Published`), Publish Date, Featured.

### ISR revalidation

24-hour fallback revalidation. On-demand revalidation is triggered by n8n when a Notion blog page is published, updated, or deleted:

```
POST /api/revalidate
Headers: x-revalidate-secret: <REVALIDATION_SECRET>
Body: { "slug": "optional-post-slug" }
```

There is no `GET` variant — do not re-add one. A secret passed via query string ends up in logs.

---

## Security Notes
- Rate limiting: Upstash Redis sliding-window in production, fails open to in-memory on Redis error (acceptable tradeoff — do not "fix" this without discussing with Rijan first; fail-closed would take the whole site's forms down on a Redis outage).
- All forms: server-side validation + honeypot field + allowlists on select fields.
- CSP, HSTS, and other security headers are set in `next.config.ts`. `unsafe-inline`/`unsafe-eval` in `script-src` are required for GTM — don't remove without a nonce-based replacement plan.
- `bun audit --audit-level=high` runs in CI and **will fail the build** on high/critical vulnerabilities. Do not add `|| true` or `continue-on-error` to this step again.
- Never commit `.env.local` or any file with real secrets. `.env*` is gitignored — verify before every commit if you're touching env handling.

---

## Deployment

Auto-deploys to Vercel on every push to `main`. Required env vars must be set in Vercel project settings (Settings → Environment Variables) — see the Environment Variables section above for the full list.

---

## Contributing (internal team only)
1. Branch from `main`: `git checkout -b feat/your-feature`
2. Follow the [Technical Standards](https://modulifyr.com/about/technical-standards)
3. `bun run lint && bun test` — both must pass locally before pushing
4. Open a PR — CI runs automatically (lint, audit, test, build)
5. Request review before merging

---

## Contact
Engineering questions: contact@modulifyr.com
Office: Birtamode, Jhapa, Nepal.
