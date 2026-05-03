# AI Web Factory Design Learning Report v1

## Why this report exists

AI Web Factory has been repeating the same visual loop: dark dashboard, weak glow, card nesting, and legacy control-room tropes. This report synthesizes five external references into a practical, product-fit direction before any new visual implementation.

## Method and constraints

- Sources reviewed: `ui-ux-pro-max-skill`, `impeccable`, `huashu-design`, `taste-skill`, and `playwright` public docs/README content.
- No packages installed.
- No external scripts executed.
- No production UI changes made.
- This is a strategy and workflow alignment document only.

## 1) What each reference is useful for

### 1. UI UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill)

Useful for:
- Structured "design system first" thinking (pattern, style, palette, typography, anti-patterns, checklist).
- Fast breadth across many product categories and style families.
- Practical pre-delivery checklist habits (interaction states, focus, contrast, responsive widths).
- Forcing explicit anti-pattern avoidance instead of style-by-instinct implementation.

### 2. Impeccable (pbakaus/impeccable)

Useful for:
- Strong anti-slop guardrails and explicit "do not do this" controls.
- Register-based design reasoning (brand vs product surfaces).
- Better craft discipline in type, color, spatial rhythm, motion, interaction, and UX writing.
- Command-oriented review flow (`shape`, `critique`, `audit`, `polish`, `harden`) that can standardize agent behavior.

### 3. Huashu Design (alchaincyf/huashu-design)

Useful for:
- Process rigor: clarify ambiguity, generate alternatives, validate before committing.
- "Context-first" behavior (brand assets, factual validation, assumptions before polish).
- Practical anti-slop philosophy framed around real deliverables, not only style words.
- Strong emphasis on variation and decision-making before implementation lock-in.

### 4. Taste Skill (leonxlnx/taste-skill)

Useful for:
- Concrete anti-generic defaults (layout variance, spacing discipline, anti-card-overuse pressure).
- Strong warnings against repetitive AI visual habits (purple glow, generic grids, weak hierarchy).
- Dials-based direction control (variance, motion, density) that can be adapted for route-specific work.
- High signal on interaction states and responsive fallbacks for asymmetric layouts.

### 5. Playwright (microsoft/playwright)

Useful for:
- Objective UI validation at desktop/mobile sizes.
- Reliable screenshot and interaction evidence collection.
- Reproducible QA for visual regressions and interaction health.
- Turning subjective design claims into testable artifacts.

## 2) What each reference is NOT useful for

### 1. UI UX Pro Max

Not useful for:
- Product-specific identity by itself; it can still produce category-default outcomes if copied literally.
- Deciding AI Web Factory's unique emotional signature without local constraints.
- Replacing route-level product judgment with broad style catalogs.

### 2. Impeccable

Not useful for:
- Automatically generating product strategy; it is a craft framework, not business prioritization.
- Blindly applying every command in every task; that can over-process simple changes.
- Defining AI Web Factory's exact visual language without local adaptation.

### 3. Huashu Design

Not useful for:
- Direct production app implementation standards as-is (it is heavily oriented to design artifact workflows).
- Treating every task as a cinematic prototype or presentation problem.
- Replacing our app-specific component and route conventions.

### 4. Taste Skill

Not useful for:
- One-to-one copy of visual motifs into our product.
- Assuming motion-heavy or high-variance patterns are always appropriate for operator workflows.
- Ignoring accessibility and clarity in favor of novelty pressure.

### 5. Playwright

Not useful for:
- Deciding design direction or aesthetics on its own.
- Replacing design critique and visual reasoning.
- Acting as proof of quality when screenshots are not reviewed critically.

## 3) Principles to adopt for AI Web Factory

1. Direction before implementation: every visual pass must declare one named direction and why it fits the operator job.
2. Hero-level first read: each route needs an immediate "what this page is for" read before metrics density.
3. Identity over category defaults: visuals must be recognizable as AI Web Factory, not "generic AI SaaS."
4. Card restraint: containers are structural tools, not decoration; nested cards are rejected by default.
5. Palette semantics: one brand accent strategy plus separate status colors with clear meaning boundaries.
6. Typography as hierarchy engine: deliberate type scale, strong labels, tabular numeric rhythm where relevant.
7. Atmosphere with structure: background supports content via substrate, lighting, and protection layers, not glow blur.
8. State-complete UI: loading, empty, error, focus, hover, and disabled states are required for approvals.
9. Desktop + mobile proof: no visual pass is complete until both views are reviewed with evidence.
10. Variation before lock: explore at least 2 materially different options before selecting final implementation direction.

## 4) Anti-patterns we must stop repeating

- Dark dashboard with weak glow.
- Retro control room styling.
- Terminal UI aesthetics for non-terminal workflows.
- Blueprint/CAD imitation UI used as surface decoration.
- Dense admin panels with equal visual weight everywhere.
- Generic SaaS hero blocks with no product identity.
- Cards inside cards inside cards.
- Tiny visual changes that are functionally identical to the previous state.

## 5) Modern premium AI product design target

AI Web Factory should target:
- Landing-grade hero: strong top-of-route narrative with one dominant read.
- Strong visual identity: recognizable material, palette, and typography signature.
- Memorable background: structured atmosphere that frames content without noise.
- Clear CTA: obvious next action for the operator in each route context.
- Product proof artifact: visible evidence of real capability (pipeline outcomes, review evidence, quality proofs).
- Modern typography: confident display + high-legibility operational body and metadata.
- Commercial trust: polish, clarity, and consistency suitable for enterprise decision-makers.

## 6) Five future visual directions (not old dashboards)

### Direction A: Editorial Intelligence Workspace
- High-contrast editorial headings, restrained data modules, clear narrative rails.
- Purpose: make complex AI operations feel legible and premium.

### Direction B: Studio Console with Product Story Rail
- Split composition: left narrative/intent rail, right live operational surface.
- Purpose: combine landing-grade storytelling with product utility.

### Direction C: Systems Atlas
- Spatial map-like organization of components, pipelines, and review checkpoints.
- Purpose: show relationships and system understanding, not only lists of cards.

### Direction D: Artifact-Centered Review Flow
- Core screen prioritizes proof artifacts and decisions, secondary metadata is contextual.
- Purpose: trust and auditability over dashboard decoration.

### Direction E: Premium Minimal Operations
- Warm-tinted neutrals, sparse but decisive accents, fewer containers, stronger rhythm.
- Purpose: reduce noise while increasing perceived quality and focus.

## 7) Recommendation for the next implementation pass

Recommended next pass:

1. Choose one route only (`/` or `/review-queue`) for a focused pilot.
2. Generate a short "direction brief" with 2 options (A/B) before coding:
   - chosen direction name
   - first-read goal
   - palette roles
   - typography hierarchy
   - anti-patterns explicitly avoided
3. Implement only the highest-visibility zone first:
   - route hero/read band
   - primary CTA
   - one proof artifact module
4. Reject broad full-page restyling in one shot.
5. Validate with:
   - `npm run qa`
   - Playwright desktop screenshot
   - Playwright mobile screenshot
   - concise critique against this report's checklist

## 8) UI completion checklist for future agents

Future agents must pass every check before marking UI complete:

### Direction and intent
- [ ] A named direction is declared (not "dark dashboard refresh").
- [ ] First-read user intent is stated in one sentence.
- [ ] At least one alternative direction was considered and rejected with rationale.

### Visual system quality
- [ ] Palette roles are defined (base/surface/text/accent/status) and do not conflict.
- [ ] Typography hierarchy is explicit and readable on desktop/mobile.
- [ ] No nested-card anti-patterns are present.
- [ ] CTA is obvious and contextually correct.

### Anti-pattern gate
- [ ] No weak-glow dark-dashboard fallback.
- [ ] No retro control-room/terminal/blueprint skins unless explicitly requested.
- [ ] No dense equal-weight panel wall.
- [ ] No generic SaaS hero pattern.
- [ ] No tiny cosmetic-only diff presented as redesign.

### Interaction and accessibility
- [ ] Hover/focus/disabled/loading/empty/error states are visible where relevant.
- [ ] Contrast and readability are preserved across all surfaces.
- [ ] Motion (if present) supports comprehension and honors reduced-motion expectations.

### Proof and QA
- [ ] Desktop screenshot reviewed.
- [ ] Mobile screenshot reviewed.
- [ ] `npm run qa` completed.
- [ ] `npm run build` completed when requested or when layout/atmosphere changes are broad.
- [ ] Short critique note explains why this pass is meaningfully different from previous loops.

## Closing note

This report is intended as a quality gate. The goal is not novelty for novelty's sake; it is to prevent repeated low-delta redesign loops and move AI Web Factory toward a clear, premium, product-specific visual identity.
