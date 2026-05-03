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
