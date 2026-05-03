<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Overview
AI Web Factory is a single Next.js 16 app (App Router, TypeScript, Tailwind CSS v4) with static mock data (no database, no backend API, no env vars required). All data lives in `/workspace/data/*.json`.

### Node.js
nvm is installed at `/home/ubuntu/.nvm`. The update script sources it automatically. Node v22 (LTS) is used.

### Common commands
Commands are defined in `package.json`:
- **Dev server:** `npm run dev` — starts on `localhost:3000`
- **Lint:** `npm run lint` (runs `eslint`)
- **Build:** `npm run build` (runs `next build`)
- **QA:** `npm run qa` (runs `npm run lint`)
- **No test framework** is configured — there are no automated tests in this codebase.

### Routes
- `/` — Dashboard home with stats and recent activity
- `/components` — UI component catalog
- `/pipelines` — AI pipeline catalog
- `/review-queue` — Review queue for promotions/audits

## Design Skills

Project-local design skills live in `.agents/skills/` and are documented in `docs/design-skills.md`.

- Before any new visual UI implementation, read and align with `docs/design-learning-report-v1.md`.
- Treat `docs/design-learning-report-v1.md` as a mandatory anti-loop quality gate for direction selection and final approval.
- Before non-trivial visual UI implementation, use `ai-factory-taste-engine` as the mandatory taste and quality gate (anchors, anti-pattern checks, scoring rubric, and direction selection) before coding.
- Before major website generation, full-site visual direction, broad landing-page concepting, or hero direction work that risks repeating the same dark geometric/product-object style family, use `ai-factory-design-research-corpus` and `docs/design-research-corpus-v1.md` to select diverse reference categories, design genes, originality transformations, and same-family rejection criteria before implementation.
- When a user asks to turn an idea into a product launch, landing page, SaaS/product marketing site, campaign page, full website prototype, business asset set, launch strategy, or "make this idea real," use `ai-launch-kit-generator` and `docs/launch-kit-generator-v1.md` to create a complete launch kit, not just a website.
- Before full website generation, landing page generation, launch kit site generation, or front-door product experience generation, use `ai-website-architecture-prompt-composer` and `docs/website-architecture-prompt-composer-v1.md` to select archetype, define architecture, and generate an internal production prompt before implementation.
- Before visual UI work, use Taste Skill guidance, especially `design-taste-frontend`, `high-end-visual-design`, and related Taste Skill references.
- Before AI Web Factory-specific dashboard, catalog, review, card, app shell, or atmosphere work, use `ai-factory-design-intelligence` to choose a product-fit direction and quality gates.
- Require a brief direction statement before coding for non-trivial visual work: named direction, first-read goal, palette roles, typography hierarchy, anti-patterns intentionally avoided.
- Require at least one materially different alternative direction during shaping; reject tiny cosmetic-only "new" passes.
- Before approving UI, use Impeccable-style review for visual hierarchy, interaction quality, responsive behavior, accessibility, and craft.
- Do not approve generic SaaS UI or default AI-generated visual patterns.
- Do not overuse purple gradients, glassmorphism, random glow effects, bounce easing, or cramped padding.
- Reject repeated anti-pattern loops: weak-glow dark dashboards, retro control-room skins, terminal/blueprint mimicry, dense equal-weight admin panels, generic SaaS heroes, and nested cards.
- Always run `npm run qa` after visual changes.
- Use Playwright screenshots for both desktop and mobile review before approving visual UI work.
- The human owner is the only one who can mark something Featured.
