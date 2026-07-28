# Graph Report - modulifyr-website  (2026-07-28)

## Corpus Check
- 68 files · ~127,367 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 460 nodes · 638 edges · 37 communities (30 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8fe233d7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- pricing/page.tsx
- Modulifyr Startup Ops Roadmap (Free-first)
- devDependencies
- notion-blog.ts
- compilerOptions
- dependencies
- scripts
- Modulifyr Website
- logger.ts
- Card.tsx
- about/page.tsx
- JobApplicationForm.tsx
- LanguageContext.tsx
- .prettierrc.json
- Button
- resources/page.tsx
- ContactForm.tsx
- Button.tsx
- ADR 001 — Notion as Blog CMS
- ADR 002 — Make (Integromat) for ISR On-Demand Revalidation
- ADR 003 — Upstash Redis for Rate Limiting
- technical-standards/page.tsx
- blog/page.tsx
- privacy/page.tsx
- process/page.tsx
- terms/page.tsx
- next.config.ts
- eslint.config.mjs
- postcss.config.mjs
- posts

## God Nodes (most connected - your core abstractions)
1. `Button` - 21 edges
2. `useRegion()` - 16 edges
3. `compilerOptions` - 16 edges
4. `formatTierPrice()` - 14 edges
5. `Modulifyr Startup Ops Roadmap (Free-first)` - 14 edges
6. `scripts` - 13 edges
7. `Card` - 12 edges
8. `Modulifyr Website` - 12 edges
9. `pageToPost()` - 11 edges
10. `getAllPosts()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `ThemeToggle()` --references--> `react`  [EXTRACTED]
  src/components/ui/ThemeToggle.tsx → package.json
- `ContactForm()` --references--> `react`  [EXTRACTED]
  src/components/forms/ContactForm.tsx → package.json
- `RegionModal()` --references--> `react`  [EXTRACTED]
  src/components/RegionModal.tsx → package.json
- `RegionProvider()` --references--> `react`  [EXTRACTED]
  src/components/RegionProvider.tsx → package.json
- `useRegion()` --references--> `react`  [EXTRACTED]
  src/components/RegionProvider.tsx → package.json

## Import Cycles
- None detected.

## Communities (37 total, 7 thin omitted)

### Community 0 - "pricing/page.tsx"
Cohesion: 0.06
Nodes (55): react, react, dmSans, metadata, RootLayout(), schemaOrg, syne, ActivePackageKey (+47 more)

### Community 1 - "Modulifyr Startup Ops Roadmap (Free-first)"
Cohesion: 0.05
Nodes (37): 10) Hiring and talent pipeline, 11) Free-now vs best-later stack map, 12) 30-60-90 day execution plan, 13) Priority checklist (do these first), 1.1 Legal foundation, 1.2 Finance & admin, 1) Core business setup you still need, 2.1 Conversion pages you should add (+29 more)

### Community 2 - "devDependencies"
Cohesion: 0.05
Nodes (37): eslint, eslint-config-next, eslint-config-prettier, husky, lint-staged, devDependencies, eslint, eslint-config-next (+29 more)

### Community 3 - "notion-blog.ts"
Cohesion: 0.12
Nodes (26): BlogPostPage(), categoryColors, generateMetadata(), Props, escXml(), GET(), blocksToHtml(), BlogPost (+18 more)

### Community 4 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 5 - "dependencies"
Cohesion: 0.09
Nodes (23): clsx, lucide-react, next, next-themes, @notionhq/client, dependencies, clsx, lucide-react (+15 more)

### Community 6 - "scripts"
Cohesion: 0.10
Nodes (21): lint-staged, **/*.{json,md,css}, **/*.{ts,tsx}, name, private, scripts, build, dev (+13 more)

### Community 7 - "Modulifyr Website"
Cohesion: 0.10
Nodes (19): 1. Clone and install, 2. Create environment file, 3. Run the dev server, Architecture Decisions, Available Scripts, Blog CMS Setup (Notion), Contact, Contributing (+11 more)

### Community 8 - "logger.ts"
Cohesion: 0.21
Nodes (12): allowedRoles, POST(), POST(), POST(), LogContext, logger, LogLevel, WHY: console.log in production outputs unstructured strings that are hard (+4 more)

### Community 9 - "Card.tsx"
Cohesion: 0.20
Nodes (9): clientNames, metadata, services, Card, CardDescription, CardProps, CardTitle, Reveal() (+1 more)

### Community 10 - "about/page.tsx"
Cohesion: 0.13
Nodes (9): divisionRoles, founderSchema, metadata, teamMembers, values, avoidList, infra, metadata (+1 more)

### Community 11 - "JobApplicationForm.tsx"
Cohesion: 0.15
Nodes (11): divisions, honest, metadata, roleGroups, allRoles, featuredRoles, FormState, initialForm (+3 more)

### Community 12 - "LanguageContext.tsx"
Cohesion: 0.22
Nodes (11): getInitialLanguage(), Language, LanguageContext, LanguageContextType, LanguageProvider(), translations, useLanguage(), NAV_LINKS (+3 more)

### Community 13 - ".prettierrc.json"
Cohesion: 0.18
Nodes (10): arrowParens, bracketSpacing, endOfLine, plugins, printWidth, semi, singleQuote, tabWidth (+2 more)

### Community 14 - "Button"
Cohesion: 0.18
Nodes (6): industries, metadata, caseStudies, metadata, Button, ThemeToggle()

### Community 15 - "resources/page.tsx"
Cohesion: 0.20
Nodes (5): iconMap, metadata, resources, articleContent, Props

### Community 16 - "ContactForm.tsx"
Cohesion: 0.29
Nodes (5): metadata, ContactForm(), FormState, initialForm, NOTE: No ratelimit imports here — rate limiting is handled server-side in the AP

### Community 17 - "Button.tsx"
Cohesion: 0.32
Nodes (5): ButtonProps, Input, InputProps, Textarea, cn()

### Community 18 - "ADR 001 — Notion as Blog CMS"
Cohesion: 0.29
Nodes (6): ADR 001 — Notion as Blog CMS, Alternatives Rejected, Consequences, Context, Decision, Rationale

### Community 19 - "ADR 002 — Make (Integromat) for ISR On-Demand Revalidation"
Cohesion: 0.29
Nodes (6): ADR 002 — Make (Integromat) for ISR On-Demand Revalidation, Consequences, Context, Decision, Rationale, Security

### Community 20 - "ADR 003 — Upstash Redis for Rate Limiting"
Cohesion: 0.29
Nodes (6): ADR 003 — Upstash Redis for Rate Limiting, Consequences, Context, Decision, Implementation, Rationale

### Community 21 - "technical-standards/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, performanceTargets, standards

### Community 22 - "blog/page.tsx"
Cohesion: 0.40
Nodes (4): BlogPage(), categoryColors, metadata, staticPosts

## Knowledge Gaps
- **235 isolated node(s):** `semi`, `singleQuote`, `printWidth`, `tabWidth`, `trailingComma` (+230 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `pricing/page.tsx`, `scripts`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Why does `react` connect `pricing/page.tsx` to `ContactForm.tsx`, `dependencies`, `Button`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Why does `useRegion()` connect `pricing/page.tsx` to `LanguageContext.tsx`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `printWidth` to the rest of the system?**
  _235 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `pricing/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.057971014492753624 - nodes in this community are weakly interconnected._
- **Should `Modulifyr Startup Ops Roadmap (Free-first)` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._