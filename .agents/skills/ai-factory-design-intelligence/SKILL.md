---
name: ai-factory-design-intelligence
description: AI Web Factory-specific design reasoning skill for choosing product-fit visual direction, palette, typography, density, atmosphere, motion readiness, and QA criteria before frontend UI work. Use before designing, redesigning, auditing, or approving AI Web Factory dashboards, catalogs, app shell, cards, data views, and atmospheric UI passes.
---

# AI Factory Design Intelligence Skill

Use this skill before AI Web Factory visual UI work when the task requires product-specific design judgment, not just component implementation. It adapts the useful structure of UI UX Pro Max-style reasoning into a local, original workflow for this product.

Do not install or run external design skills, CLIs, packages, scripts, or generated datasets to use this skill. This skill is a reasoning guide for AI Web Factory only.

## Core identity

AI Web Factory should feel like a high-end operational control workspace for inspecting, assembling, and reviewing AI-made web systems.

The interface must feel:

- operator-grade
- premium
- industrial
- engineered
- precise
- calm under density
- high-trust
- useful before decorative

It must not feel:

- generic dark SaaS
- a black dashboard with weak glow
- neon cyberpunk
- AI-purple gradient software
- a Dribbble shot pasted behind tables
- a monitoring wall with no product hierarchy

## Required reasoning workflow

Before changing UI, generate a concise design system recommendation for the specific route, component, or shell area.

Use this sequence:

1. Product context: identify whether the work affects dashboard home, component catalog, pipeline catalog, review queue, navigation, app shell, cards, or empty/error states.
2. User job: define what the operator must understand or do first.
3. Style direction: choose one AI Web Factory direction from the taxonomy below.
4. Palette logic: define base, surface, border, text, accent, state, and chart color rules.
5. Typography logic: define hierarchy, density, numeric treatment, and label rhythm.
6. Atmosphere logic: use the `visual-research-and-atmosphere` workflow when background, shell, lighting, depth, or material changes are involved.
7. Interaction logic: define hover, focus, selected, loading, empty, and disabled behavior.
8. Anti-pattern filter: reject generic choices before implementation.
9. Proof plan: define before/after screenshots and validation commands before approving the change.

Output should be short but complete:

- context
- chosen direction
- palette
- typography
- density
- motion-readiness
- anti-patterns avoided
- proof required

## Style taxonomy for AI Web Factory

Use this taxonomy to reason about direction. Combine at most two directions per UI pass.

### 1. Precision Ambient Lab

Matte graphite substrate, calibrated task lighting, shallow depth rails, faint technical texture, and quiet amber or signal-white accents.

Best for app shell, dashboard overview, and product-wide atmosphere.

Risk: can become plain dark mode if structure is only gradient and glow.

### 2. Graphite Command Bay

Panelized control-room framing with anchored navigation, hard-edged surfaces, inset content bays, and strong left-to-right operational scan paths.

Best for dashboard and review queue layouts.

Risk: can feel heavy if every card receives the same frame treatment.

### 3. Blueprint Assembly Floor

Drafting-table grids, measured dividers, blueprint-like annotations, and precise layout metrics.

Best for component catalog, pipeline mapping, and system relationship views.

Risk: grid texture can become noise or reduce contrast.

### 4. Phosphor Audit Chamber

Low-saturation dark surfaces, focused green or cyan status language, terminal-like labels, and audit-oriented density.

Best for review queue, validation states, quality scores, and log-like surfaces.

Risk: can look retro-terminal or hacker-themed if overused.

### 5. Editorial Machine Room

Large confident headings, industrial editorial spacing, asymmetrical content blocks, and purposeful negative space around dense data.

Best for route intros, catalog headers, dashboards with explanatory context, and premium first impressions.

Risk: can sacrifice scan efficiency if type scale is too theatrical.

### 6. Tactile Pipeline Foundry

Warm industrial neutrals, oxide or brass accents, modular pipeline cards, and material cues that imply assembly, queueing, and promotion.

Best for pipeline catalog and production workflow surfaces.

Risk: warm accents can read as warnings if states are not separated.

### 7. Smoked Glass Operations Deck

Deep translucent layering with restrained blur, smoked surfaces, crisp inner strokes, and strong content protection.

Best for overlays, detail panels, and limited elevated states.

Risk: full-page glassmorphism quickly becomes generic SaaS.

### 8. Carbon Telemetry Studio

Carbon, slate, and tungsten surfaces with compact metrics, disciplined chart colors, and calm real-time monitoring cues.

Best for stats, recent activity, and performance dashboards.

Risk: can become generic analytics if product-specific labels and material language are weak.

### 9. Monolith Review Console

High-contrast monolithic panels, serious review states, clear decision zones, and restrained signal colors.

Best for approval, audit, and promotion workflows.

Risk: can feel punitive or too severe if copy and spacing are not humane.

### 10. Systems Observatory

Layered orbital or map-like composition, route-level status overview, and spatial relationships between components, pipelines, and reviews.

Best for future overview modes, relationship maps, and high-level factory intelligence.

Risk: should not be implemented as decorative constellation lines without useful meaning.

## Palette rules

Build palettes from operational meaning, not decoration.

- Prefer tinted off-black bases: graphite, carbon, slate, tungsten, ink-blue, blackened olive, or warm charcoal.
- Avoid pure black except for local contrast pockets.
- Keep primary surfaces within a narrow neutral family; create depth through luminance steps, borders, texture, and shadow discipline.
- Use one primary signal accent per pass, usually amber, oxide, phosphor green, cyan, brass, or signal white.
- Keep accent coverage below 10 percent of the viewport unless it encodes state.
- Separate brand accent from status colors. Do not use amber for both brand warmth and warnings in the same surface.
- Use muted borders, inner strokes, and dividers before using glow.
- Use red only for destructive, failed, or urgent states.
- Use green for passed, healthy, or promoted states; keep it restrained and legible.
- Use chart colors as a small system with clear contrast, not a rainbow.
- Check text contrast against the actual rendered surface, including gradients or texture.

## Typography rules

Typography should feel engineered and premium, not default.

- Use a clear hierarchy: route title, section title, card title, metric, label, metadata.
- Keep operational labels short, specific, and scannable.
- Use tabular numbers for metrics, counts, timestamps, and scores when available.
- Prefer slightly condensed or technical-feeling display moments only for headings or labels; preserve body readability.
- Avoid all-caps paragraphs. Use uppercase only for short labels, chips, and technical metadata.
- Do not let headings wrap into narrow, weak columns on desktop.
- Keep body copy calm and useful; no marketing fluff inside operational surfaces.
- Increase line-height for explanatory copy, reduce line-height for numeric dashboards only when legibility remains high.
- Align numbers and labels consistently across cards.
- Preserve focus readability at mobile sizes; do not shrink metadata until it becomes decorative noise.

## Background and atmosphere rules

Use `visual-research-and-atmosphere` for any background, app-shell, lighting, material, or depth pass.

Atmosphere must have spatial logic:

- substrate: base material or tonal field
- structure: bay, rail, grid, contour, aperture, horizon, or drafting surface
- lighting: clear source direction and falloff
- texture: low-opacity grain, scanline, contour, brushed surface, or print-like detail
- content protection: scrims, matte panels, or contrast zones

Rules:

- Atmosphere must frame content, not compete with it.
- Do not rely on bigger gradients to make the UI feel premium.
- Use texture below the threshold where it affects reading.
- Keep fixed decorative layers `pointer-events: none`.
- Avoid large backdrop blurs on scrolling content.
- Simplify mobile atmosphere aggressively.
- The chosen direction must be describable without the words "gradient" or "glow."

## Dashboard and card density rules

AI Web Factory is an operational app, so density is allowed when hierarchy is strong.

- Group cards by operator question: what changed, what needs review, what is ready, what is blocked.
- Use compact metadata, but leave enough padding for touch and scan comfort.
- Avoid equal-weight card grids where every panel shouts.
- Establish one primary read per viewport and support it with secondary modules.
- Put decisions and exceptions near the data they affect.
- Use separators, alignment, and type scale before adding decorative containers.
- Keep card interiors flatter than page-level surfaces; cards should not each contain a full visual world.
- Use density tiers:
  - overview: larger metrics, fewer columns, strong summary
  - catalog: efficient cards, clear filters, compact metadata
  - review: decision-first rows/cards, strong status language
  - detail: spacious content, traceable provenance, clear actions
- If a dashboard needs charts later, reserve space with clear labels and empty-state logic; do not add ornamental chart-like shapes.

## Motion-readiness rules

Design every UI pass so motion can be added later without rewriting layout.

- Prefer transform and opacity for future animation.
- Keep moving layers independent from layout-critical containers.
- Define hover, focus, pressed, selected, loading, and disabled states before adding decorative movement.
- Respect `prefers-reduced-motion`.
- Avoid bounce easing for this product unless a playful area explicitly needs it.
- Use motion to clarify state transitions, queue progression, filtering, expansion, and review decisions.
- Keep ambient motion subtle enough that dense dashboards remain readable.
- Do not animate text, numbers, or charts in ways that make values harder to compare.

## 3D-readiness rules for later

Do not add 3D, WebGL, or heavy dependencies by default. Prepare the design language so 3D can arrive later.

- Use consistent perspective cues: rails, planes, stacked surfaces, apertures, and shadows.
- Keep depth semantic: foreground for action, middle ground for content, background for atmosphere.
- Avoid fake 3D decorations that do not map to product meaning.
- Leave room for future 3D pipeline or component assembly views without forcing them into current cards.
- If later 3D work is approved, require reduced-motion fallbacks, static screenshots, and performance checks.
- Never let 3D reduce accessibility, dashboard density, or review-task speed.

## UX anti-pattern rules

Reject these before coding:

- unclear first read
- decorative panels with no hierarchy
- color used without product meaning
- status colors reused as brand decoration
- cards inside cards inside cards
- weak hover and focus states
- clickable elements without clear affordance
- tiny metadata that users must decode
- dense dashboard modules with equal visual priority
- empty states that do not tell the operator what to do next
- tables or card grids that hide review decisions
- animation that distracts from scanning
- mobile layouts that simply stack desktop density without hierarchy

## Visual anti-patterns

Reject these immediately:

- generic dark SaaS template
- black canvas plus weak blue or purple glow
- purple-pink AI gradients
- random aurora blobs
- full-screen glassmorphism
- neon cyberpunk chrome
- unstructured HUD decoration
- default Tailwind card grid with no product point of view
- excessive border radii that soften the industrial identity
- heavy shadows pretending to be depth
- cramped padding sold as "data dense"
- noisy background texture under body text

## Reject criteria

Do not approve a design if any of these are true:

- The UI could belong to any AI SaaS product after changing the logo.
- The style direction is not named or cannot be explained.
- The palette lacks state-color separation.
- The background harms content readability.
- Cards have similar weight despite different importance.
- Mobile has overflow, cramped text, or decorative noise.
- Focus states are absent or weaker than hover states.
- Motion ideas require layout-thrashing properties.
- 3D ideas require new dependencies without explicit approval.
- Screenshots do not show the changed state.
- Before/after proof is missing for visual work.

## Acceptance criteria

A design pass is acceptable when:

- It clearly fits AI Web Factory's operator-grade, premium, industrial identity.
- It names one primary style direction from the taxonomy.
- It improves the user's first read and next action.
- Palette choices have role-based reasoning.
- Typography hierarchy survives desktop and mobile screenshots.
- Dashboard density feels intentional instead of cramped.
- Cards and surfaces are reusable, not one-off decoration.
- Atmosphere has structure, lighting, texture, and content protection when relevant.
- Motion and 3D hooks are future-ready without adding unnecessary code.
- Accessibility basics are preserved: contrast, focus, keyboard visibility, readable type.
- Proof includes before/after screenshots and validation output for UI changes.

## Screenshot QA checklist

For visual UI work, inspect screenshots at desktop and mobile widths.

Check:

- first read is obvious within three seconds
- route title and primary action are clear
- content hierarchy is visible without zooming
- cards align to a deliberate grid
- dashboard density supports scanning
- status colors are distinguishable
- text contrast holds over every surface
- focus and hover states are represented when relevant
- atmosphere frames content instead of washing over it
- mobile reduces density and decoration without losing identity
- no horizontal overflow
- no generic AI SaaS pattern dominates the screen

## Before/after proof requirements

Every visual UI pass using this skill must provide:

- before desktop screenshot
- after desktop screenshot
- before mobile screenshot
- after mobile screenshot
- short note naming the chosen direction
- short note listing what intentionally did not change
- `npm run qa` result after visual changes
- `npm run build` result when requested or when atmosphere/layout changes are broad

For docs-only updates to this skill, screenshots are not required. Use `npm run build` if requested by the task.

## Pre-delivery checklist

Before handing off work:

- [ ] The direction is named.
- [ ] The UI does not look like generic dark SaaS.
- [ ] Palette roles are separated from state colors.
- [ ] Typography hierarchy is clear at desktop and mobile.
- [ ] Card density is purposeful.
- [ ] Focus states remain visible.
- [ ] Reduced-motion needs are respected when motion exists.
- [ ] Atmosphere supports content.
- [ ] 3D ideas remain future-ready unless explicitly approved.
- [ ] Anti-patterns and reject criteria were checked.
- [ ] Before/after proof exists for visual changes.
- [ ] Validation commands were run as required.
