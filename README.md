# SEO Optimization Automation by Claude Code

Automated SEO system for [AI Agents Vault](https://aiagentsvault.tech) — a marketplace for ready-made AI voice agents. Built and maintained entirely by Claude Code.

## What This Does

- **GitHub Actions** run on autopilot: weekly SEO reports, sitemap pings to Google + Bing, schema validation
- **JSON-LD Schema.org** markup for ProductSchema, OrganizationSchema, WebSiteSchema, FAQSchema
- **Keyword strategy** targeting buying-intent and AI-search queries
- **AEO/GEO audit** — optimizing for ChatGPT, Claude, and Perplexity citations
- **Backlink tracker** — Tier 1/2/3 directory submission status

## Folder Structure

```
.github/workflows/
  weekly-seo-report.yml     # Runs every Monday 8am UTC — audits pages, commits report
  sitemap-ping.yml          # Fires on every push to main — pings Google + Bing
  schema-validator.yml      # Validates JSON-LD on push + every Sunday midnight
  uptime-monitor.yml        # Uptime monitoring

seo/
  keywords.md               # Master keyword list (Groups A/B/C/D)
  audit-report.md           # Page-by-page SEO scores
  aeo-geo-audit.md          # GEO readiness audit — what AI engines can/can't cite
  backlink-prospects.md     # Tier 1/2/3 backlink targets + submission status
  weekly-report-template.md # Weekly tracking template

components/
  SchemaOrg.tsx             # React components: ProductSchema, OrganizationSchema, WebSiteSchema, FAQSchema
```

## GitHub Actions Overview

| Workflow | Trigger | What It Does |
|---|---|---|
| `weekly-seo-report.yml` | Every Monday 8am UTC | Checks page status, sitemap, schema presence |
| `sitemap-ping.yml` | Every push to main | Pings Google + Bing sitemap endpoints |
| `schema-validator.yml` | Push + Sunday midnight | Validates meta description, OG tags, canonical, robots.txt |
| `uptime-monitor.yml` | Scheduled | Monitors site uptime |

## SEO Scores (Starting Point — June 2026)

| Page | Score | Key Issues |
|---|---|---|
| Homepage | 3/10 | Missing meta description, FAQ, JSON-LD, "What is" blurb |
| Agent pages | 4/10 | Missing Product JSON-LD, FAQs, thin descriptions |
| GEO readiness | 2/10 | AI engines (ChatGPT/Claude/Perplexity) can't cite us yet |

## Target Keywords

**Buying intent:** AI voice agent for restaurants, AI receptionist small business, buy AI phone agent  
**AI search:** "What is the best AI voice agent for restaurants?", "How much does an AI receptionist cost?"

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Vercel (deploy), Supabase (DB)
- Schema.org JSON-LD via React components
- GitHub Actions for automation

## Built With

All SEO strategy, code, and automation built by [Claude Code](https://claude.ai/code) — Anthropic's AI coding assistant.
