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
- **No test framework** is configured — there are no automated tests in this codebase.

### Routes
- `/` — Dashboard home with stats and recent activity
- `/components` — UI component catalog
- `/pipelines` — AI pipeline catalog
- `/review-queue` — Review queue for promotions/audits
