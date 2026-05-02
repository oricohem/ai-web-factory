# AI Web Factory Visual Identity Direction v1

Date: 2026-05-02

## Purpose

This document defines the first visual identity direction for AI Web Factory before the next UI pass. It is strategy only. It should guide future interface changes without changing the app, data model, routes, auth, database, dependencies, or environment configuration.

## 1. Current visual problems

The app is cleaner after UI Polish Pass #1, but it still does not feel premium or ownable enough.

- **Cleaner does not yet mean distinctive.** The structure is more usable, but the surface language still reads as a familiar dark SaaS dashboard: dark panels, faint borders, rounded cards, pills, and soft AI-adjacent accents.
- **The brand idea is not visible.** AI Web Factory should feel like a place where components and pipelines are built, tested, reviewed, and reused. The current UI communicates inventory, but not enough factory logic, production discipline, or quality control.
- **Decorative weight beats operational weight.** Glows, borders, score bars, and placeholders often carry more visual energy than the decisions users need to make: what is ready, what needs review, what is reusable, and what is blocked.
- **The component catalog feels mocked rather than curated.** Preview areas dominate cards, but they do not yet feel like credible component evidence, build artifacts, or reusable design assets.
- **Typography lacks authority.** The type scale is coherent but flat. Page intent, item names, metadata, statuses, and actions need stronger hierarchy and more deliberate contrast.
- **Mobile is functional but bloated.** Catalog cards and filter controls consume too much scroll height, making the product feel less engineered on small screens.
- **The palette is too expected for AI.** Purple-blue accents, translucent dark panels, and generic status colors keep the product inside the generic AI SaaS category.

## 2. Product personality

AI Web Factory is an operator-grade workspace for building, testing, reviewing, and reusing premium AI website components and pipelines.

The product should feel:

- **Precise:** every component, status, score, and review action has a clear reason to exist.
- **Constructive:** the interface should suggest assembly, calibration, staging, and reuse rather than passive browsing.
- **Premium but utilitarian:** refined materials, strong typography, and crisp spacing, without decorative excess.
- **Quality-driven:** review states, scores, dependencies, and promotion decisions should feel central to the product, not metadata.
- **Builder-native:** the product can use monospace, grid marks, command language, and system labels, but only where they clarify workflows.
- **Calm under load:** dense enough to support real operational use, but not a cockpit of tiny unreadable labels.

The core metaphor is a premium AI production floor: components enter, pipelines process them, reviewers approve them, and reusable website systems leave as trusted assets.

## 3. Possible visual directions

### Direction A: Industrial AI Factory

**Brand feeling**

Sharp, mechanical, process-led, and production-grade. The app feels like an AI fabrication floor where components move through queues, checks, and approval stations.

**Color palette**

- Furnace Charcoal: `#11110F` for the main canvas.
- Oiled Steel: `#1B1C19` for primary surfaces.
- Warm Graphite: `#2A2B26` for separators and structural panels.
- Signal Amber: `#D39A36` for primary actions and production state.
- Inspection Green: `#7EA56B` for passed checks.
- Fault Red: `#B45A4D` for blocked or failed states.
- Bone Label: `#E6DDC9` for high-value text.

**Typography feel**

Condensed or squared sans for headings, paired with a precise mono for scores, dates, and build metadata. Type should feel stamped, measured, and durable, not playful.

**Card style**

Cards behave like labeled machine trays: flatter surfaces, stronger top rules, clipped corners or squared radii, dense metadata rows, and fewer soft shadows. Elevation is replaced with assembly-line grouping.

**Navigation style**

Sidebar as a control rail. Current route can use a strong mechanical active state, such as an inset plate, amber index marker, or measured rule, not a glow.

**Preview/component-card style**

Previews become inspection plates: reduced height, annotated grid overlays, build-status marks, score readouts, and artifact-like thumbnails. The component name, score, readiness, and last change come before decoration.

**Motion style**

Short mechanical transitions with weight: snap-in state changes, progress scans, queue advancement, and status toggles. Use transform and opacity only. Avoid bounce and ornamental shimmer.

**Screenshot/QA presentation style**

Screenshots should be reviewed like production inspection boards: desktop and mobile captures annotated mentally against density, queue readability, status clarity, and whether the component catalog now feels like a credible factory floor.

**What to avoid**

- Literal gears, hazard stripes, heavy grunge, or steampunk cues.
- Overly dense cockpit layouts.
- Yellow-black construction cliches.
- Aggressive red alert styling for normal review work.
- Fake industrial texture that reduces legibility.

**Pros**

- Strongly ownable for the word "Factory."
- Gives scores, pipelines, dependencies, review states, and QA a natural visual language.
- Reduces generic AI SaaS cues quickly.
- Works well for operational dashboards and catalogs.

**Cons**

- Can become too harsh if the palette is overused.
- Requires careful mobile density control.
- Risks feeling like infrastructure software rather than a premium website-component tool.

### Direction B: Premium Control Room

**Brand feeling**

Calm, executive, exacting, and observability-led. The app feels like a high-end control room for monitoring component quality, pipeline health, and review readiness.

**Color palette**

- Deep Console: `#0D1114` for the main canvas.
- Carbon Surface: `#151A1E` for app panels.
- Slate Glass: `#20282E` for raised controls without blur-heavy glassmorphism.
- Ion Blue: `#6BA6B8` for the single primary accent.
- Verified Mint: `#8BAF9B` for success.
- Warm Sand: `#D8C7A3` for premium highlights and editorial labels.
- Fog Text: `#DDE5E2` for primary readable text.

**Typography feel**

Modern technical sans, broad and composed, with mono only for operational data. Headings should feel quiet and authoritative. Avoid screaming H1 sizes.

**Card style**

Cards are control modules: generous padding, precise dividers, soft inner highlights, restrained radii, and clear priority zones. They can remain card-like, but each card needs a defined role.

**Navigation style**

Navigation as a mission console: stable sidebar, clear route grouping, stronger current-state feedback, and a small system-health or catalog-state region that feels finished rather than scaffolded.

**Preview/component-card style**

Previews become product monitors: compact thumbnails, live-quality strips, score and readiness above the fold, and cleaner hierarchy for category, status, author, and date.

**Motion style**

Quiet system motion: subtle reveal cascades, active filter transitions, scan-line progress only where meaningful, and tactile button feedback. No decorative perpetual motion unless it represents live state.

**Screenshot/QA presentation style**

Screenshots should prove the product feels calmer and more decisive: desktop should show strong scan flow, mobile should show reduced vertical bloat, and both should make the next action obvious.

**What to avoid**

- Generic observability dashboards.
- Blue neon on black.
- Excessive glass panels or backdrop blur.
- Dashboard "hero metric" cliches.
- Equal card grids without priority.

**Pros**

- Premium, calm, and credible for daily use.
- Improves usability without requiring a radical rewrite.
- Supports all current routes cleanly: dashboard, components, pipelines, and review queue.
- Easier to tune for accessibility and mobile readability.

**Cons**

- Less immediately ownable than the factory direction.
- Can remain too generic if the brand mark, previews, and status language are not sharpened.
- Needs strong copy and artifact styling to avoid becoming another control dashboard.

### Direction C: Component Arsenal / Design Lab

**Brand feeling**

Curated, experimental, design-forward, and craft-oriented. The app feels like a lab where premium website components are tested, compared, refined, and prepared for reuse.

**Color palette**

- Lab Ink: `#121314` for dark foundations.
- Porcelain Panel: `#E8E2D5` for selective light artifact surfaces.
- Charcoal Type: `#20211E` for text on light previews.
- Oxide Coral: `#C26F52` for primary emphasis.
- Mineral Green: `#8E9F79` for stable states.
- Blue Steel: `#6E8793` for technical metadata.
- Paper Grain: `#D2CAB8` for preview backgrounds and screenshot frames.

**Typography feel**

High-end sans for the app shell, with occasional editorial scale in component names and collection headings. Mono remains a supporting technical layer, not the dominant voice.

**Card style**

Cards become specimen sheets: component evidence, variant notes, quality marks, and reusable metadata are arranged like a design lab catalog. More contrast between artifact area and metadata area.

**Navigation style**

Navigation can feel like a studio inventory: collections, pipelines, review queue, and dashboard are clear shelves in a curated workspace. Current state is refined and quiet, not tactical.

**Preview/component-card style**

Previews are the hero. Each component card should show a credible miniature artifact, crop, or system specimen. Metadata supports the artifact instead of overwhelming it.

**Motion style**

Gallery-like transitions: smooth filter rearrangement, hover focus on artifacts, careful preview reveals, and soft active feedback. Motion should feel designed, not busy.

**Screenshot/QA presentation style**

Screenshots should read like a premium design-system catalog. Desktop should show curated rhythm and hierarchy. Mobile should make each specimen compact but still visually valuable.

**What to avoid**

- Portfolio-site aesthetics that weaken operational clarity.
- Overly precious editorial typography in task-heavy areas.
- Random art-board decoration.
- Cards inside cards inside cards.
- Letting previews hide scores, statuses, and review needs.

**Pros**

- Best fit for the component catalog and premium website-building premise.
- Gives the product more taste and memorability.
- Makes visual QA and artifact presentation feel central.

**Cons**

- Review Queue and Pipelines could become less operational if pushed too far.
- Requires better preview language before it fully pays off.
- More risk of inconsistency across routes.

## 4. Recommended direction

Recommend **Industrial AI Factory** as the primary direction, tempered by **Premium Control Room** restraint.

AI Web Factory needs to escape generic AI SaaS quickly, and the factory metaphor is already built into the product name and workflow. The strongest identity should make components, pipelines, review states, dependencies, scores, and screenshots feel like parts of one production system.

The next UI PR should not make the app look like a literal factory. It should use the factory idea as a product system: inspection plates, production queues, artifact evidence, calibrated statuses, and reusable modules. Premium Control Room restraint should keep the interface calm, accessible, and useful for daily work.

Working identity statement:

**AI Web Factory is a precision production floor for premium AI website systems.**

## 5. Exact implementation plan for the next UI PR

The next UI PR should implement the first layer of the recommended direction with 10 focused UI changes:

1. **Replace the generic AI mark treatment** with a sharper factory/control identity in the shell: reduced purple, more structural geometry, stronger wordmark spacing, and no glow-led branding.
2. **Define a restrained factory palette** in global styling: charcoal surfaces, bone text, amber primary accent, muted inspection green, and fault red with accessible contrast.
3. **Increase text contrast and type hierarchy** for descriptions, metadata, labels, and card titles across all routes.
4. **Redesign component cards as inspection plates** with reduced preview height, score/status/name above decoration, and a clearer artifact-evidence area.
5. **Separate interactive filters from static category/status pills** so controls and metadata are visually distinct.
6. **Create a stronger primary action style** for page-level actions and list actions using the amber accent sparingly.
7. **Rework pipeline cards into production-flow modules** with clearer dependency grouping, fewer competing chips, and visible last-run/readiness hierarchy.
8. **Tighten mobile catalog density** by shortening previews, improving card order, and preventing multi-line filter rows from crowding content.
9. **Improve Review Queue triage hierarchy** so status, score, risk, and requested action are visible faster on desktop and mobile.
10. **Add purposeful micro-interactions** for hover, active, filter, and navigation states using custom easing, transform, and opacity only.

Do not add dependencies in that UI PR unless a separate decision explicitly approves them. Do not add auth, database, backend state, or environment variables.

## 6. Quality gates for the next UI PR

The next UI PR must pass these gates before it can be described as premium:

- `npm run build`
- `npm run qa`
- Desktop screenshot review for `/`, `/components`, `/pipelines`, and `/review-queue` at `1440x1000`
- Mobile screenshot review for `/`, `/components`, `/pipelines`, and `/review-queue` at `390x844`
- Compare screenshots against `docs/design-audit-v1.md`
- Confirm the screenshots visibly improve hierarchy, contrast, density, and identity
- Confirm the UI no longer depends on generic purple-blue AI SaaS cues
- Confirm no route loses core data: scores, statuses, dependencies, authors, dates, and review needs remain visible
- Confirm mobile screenshots reduce vertical bloat instead of only restacking desktop cards
- Do not mark the UI as "premium" unless the screenshots visibly improve

## Decision summary

Use **Industrial AI Factory with Premium Control Room restraint** for Visual Identity Direction v1.

The next UI pass should make AI Web Factory feel less like a dark SaaS template and more like a precise production system for reusable AI website components, pipelines, and review workflows.
