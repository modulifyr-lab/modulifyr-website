# Modulifyr Website

The official marketing and content website for Modulifyr — a custom software development company based in Birtamode, Jhapa, Nepal.

Built with Next.js 16, TypeScript, TailwindCSS v4, and Notion as the blog CMS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Language | TypeScript (strict mode) |
| Styling | TailwindCSS v4 |
| CMS | Notion (blog posts via REST API) |
| Email / Webhooks | Make (formerly Integromat) |
| Rate Limiting | Upstash Redis (sliding window) |
| Hosting | Vercel |
| Analytics | Google Tag Manager |

---

## Local Development Setup

### Prerequisites

- Node.js 20+
- npm 10+

### 1. Clone and install

```bash
git clone https://github.com/modulifyr-lab/modulifyr-website.git
cd modulifyr-website
npm install
```

### 2. Create environment file

Copy the example and fill in your values:

```bash
cp .env.example .env.local
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create `.env.local` with the following. All are required in production; optional ones have fallback behaviour documented.

```env
# ── Notion (Blog CMS) ──────────────────────────────────────────────────────
# Get from: https://www.notion.so/my-integrations
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# The ID of your Notion database (from the database URL)
# https://www.notion.so/{workspace}/{DATABASE_ID}?v=...
NOTION_BLOG_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ── Make (Automation / Webhooks) ───────────────────────────────────────────
# Webhook URLs from your Make scenarios
MAKE_CONTACT_WEBHOOK_URL=https://hook.eu2.make.com/xxxx
MAKE_PROPOSAL_WEBHOOK_URL=https://hook.eu2.make.com/xxxx
MAKE_JOB_WEBHOOK_URL=https://hook.eu2.make.com/xxxx

# ── Revalidation (ISR on-demand) ───────────────────────────────────────────
# A secret string used to authenticate revalidation webhook calls from Make
# Generate: openssl rand -hex 32
REVALIDATION_SECRET=your-secret-here

# ── Upstash Redis (Rate Limiting) ──────────────────────────────────────────
# Get from: https://console.upstash.com
# Falls back to in-memory rate limiting if not set (NOT safe for production)
UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/                # Server-side API endpoints
│   │   ├── submit-contact/     # Contact form handler
│   │   ├── submit-proposal/    # RFP form handler
│   │   ├── submit-application/ # Job application handler
│   │   └── revalidate/         # ISR revalidation webhook
│   ├── blog/               # Blog index and [slug] pages
│   ├── about/              # About page and sub-pages
│   └── [other pages]/
├── components/
│   ├── forms/              # Client-side form components
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Button, Card, FormElements
├── lib/
│   ├── logger.ts           # Structured JSON logger (use instead of console.log)
│   ├── notion-blog.ts      # Notion CMS data fetching
│   ├── ratelimit.ts        # Upstash rate limiting
│   └── utils.ts            # cn() Tailwind class utility
└── contexts/               # LanguageSwitcher
```

---

## Available Scripts

```bash
npm run dev        # Start local dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm test           # Run Vitest unit tests
npm run test:ui    # Run Vitest with interactive UI
npm run test:coverage  # Run tests with coverage report
```

---

## Blog CMS Setup (Notion)

The blog uses Notion as its CMS. Each blog post is a Notion database page.

### Required database properties

| Property | Type | Notes |
|---|---|---|
| Title | Title | Post title |
| Slug | Rich Text | URL-safe slug (e.g. `my-post-title`) |
| Excerpt | Rich Text | 1–2 sentence summary |
| Category | Select | Architecture / Engineering / Strategy / etc. |
| Status | Select | Must be `Published` to appear |
| Publish Date | Date | ISO date |
| Featured | Checkbox | Marks the featured post on the blog index |

### ISR revalidation

Blog pages use Next.js ISR with a 24-hour fallback. On-demand revalidation is triggered by Make when you publish or update a Notion page:

```
POST /api/revalidate
Headers: x-revalidate-secret: <REVALIDATION_SECRET>
Body: { "slug": "optional-post-slug" }
```

---

## Security Notes

- Rate limiting uses Upstash Redis sliding-window algorithm (cross-instance safe on Vercel)
- All forms include server-side validation AND honeypot fields
- CSP headers configured in `next.config.ts`
- OWASP Top 10 reviewed — see `docs/adr/` for security architecture decisions
- Never commit `.env.local` — it is gitignored

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

1. Vercel picks up the push
2. Runs `npm run build`
3. Deploys to production URL
4. ISR cache is warm — no manual revalidation needed

### Required Vercel environment variables

Add all variables from the Environment Variables section above to your Vercel project settings under Settings → Environment Variables.

---

## Architecture Decisions

See `docs/adr/` for Architecture Decision Records explaining key technical choices.

---

## Contributing

1. Branch from `main`: `git checkout -b feat/your-feature`
2. Make changes following the [Technical Standards](https://modulifyr.com/about/technical-standards)
3. Run `npm run lint && npm test` — both must pass
4. Open a PR — CI will run automatically
5. Request review from the lead engineer

---

## Contact

Engineering questions: contact@modulifyr.com  
Office: Birtamode, Jhapa, Nepal
