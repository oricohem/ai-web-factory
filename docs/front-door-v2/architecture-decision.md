# AI Web Factory Front Door v2 — Architecture Decision

## 0) Requirement checklist extracted before implementation

Must satisfy:
- Build only `docs/front-door-v2/` prototype files.
- Keep production app untouched (`app/`, `components/`, `data/`, `lib/`, package/dependencies).
- Use orchestration order: full-site workflow -> architecture/prompt -> launch-kit -> external stack -> taste -> research corpus.
- Build a focused front-door MVP (not a large multi-page marketing site).
- Deliver three prototype pages:
  - customer-facing homepage
  - guided brief builder
  - launch brief preview
- Prove launch-kit value beyond "website builder."
- Include product docs: brief, architecture decision, schema, evaluation.
- Run validation with terminal only and `npm run build`.

## 1) Internal implementation map (requirement -> file/section)

| Requirement | File/section |
| --- | --- |
| Premium customer-facing homepage | `site/index.html` hero + launch brief engine + proof + CTA sections |
| Guided intake experience | `site/brief-builder.html` grouped form, progress, completeness, summary |
| Structured launch brief proof | `site/brief-preview.html` launch brief panels + prompt excerpt + next step |
| Shared visual system | `site/shared.css` |
| Lightweight interaction logic | `site/shared.js` |
| Product positioning and scope | `product-brief.md` |
| Architecture and orchestration outputs | `architecture-decision.md` |
| Intake/output schema | `generated-brief-schema.md` |
| Honest score and accept/revise gate | `evaluation.md` |

## 2) Business brief extraction (full-site workflow step)

### Known facts
- Product: AI Web Factory Front Door v2 prototype.
- Core promise: guided AI launch-kit studio, not prompt-only page generation.
- User: business owner/founder needing practical launch clarity.
- Required flow: Business brief -> Launch Brief -> agent-built launch kit.

### Inferred assumptions
- Trust level: medium-high (buyers need confidence in business relevance).
- Offer complexity: moderate (multiple output types and a handoff stage).
- Conversion action: start guided brief intake.

### Unknowns (not blocking)
- Industry-specific buyer segment split.
- Final pricing/package model (explicitly out of MVP scope).

## 3) Selected website archetype

### Primary archetype
Guided intake/productized service site.

### Secondary support archetype
AI/SaaS product site (supporting role only for product credibility language).

### Why this archetype was chosen
The core conversion is "start a guided business brief," and the key trust problem is proving structured outputs, so process transparency and output preview must be central. A pure SaaS marketing archetype would hide the intake-to-output mechanics that make this offer different.

## 4) Architecture decision table

| Dimension | Selected value | Reason | Architecture implication | Implementation implication |
| --- | --- | --- | --- | --- |
| Business model | Guided launch-kit studio | Productized service + AI assistance | Intake and generated outputs must be visible | Dedicated builder + preview pages |
| Conversion goal | Start business brief | Best first commitment for this offer | CTA points to guided intake | Primary CTA route to `brief-builder.html` |
| Trust problem | "Will this be useful for my business?" | Buyer fears generic AI output | Show structured brief artifact early | Homepage artifact preview + full preview page |
| Offer complexity | Moderate | Multiple output classes | Use staged explanation (how it works) | Step sequence + output grid |
| Audience maturity | Mixed founder/operator | Needs plain language and confidence | Avoid jargon-heavy copy | Founder-friendly tone and microcopy |
| Archetype | Guided intake/productized service | Process-led conversion path fit | Flow-led page narrative | Builder and preview integrated |
| Page count | 3-page focused MVP | Scope discipline | Keep concise prototype | `index`, `brief-builder`, `brief-preview` only |
| Section sequence | Promise -> process -> outputs -> differentiation -> proof -> CTA | Mirrors buyer trust progression | Commercial story before technical detail | Homepage section rhythm in this exact order |
| Proof strategy | Generated Launch Brief excerpt + explicit output fields | Proves value beyond website prompt | Artifact-first credibility module | Preview panels + prompt excerpt |
| CTA strategy | Primary "Start business brief" + secondary "Preview launch brief" | Balance action and confidence | Dual CTA across journey | Global top CTA + section CTA |
| Visual ambition | Level 3 (bold/memorable, trust-safe) | Must feel premium and productized | Strong visual anchor required | Launch Brief Engine operating surface |
| Must-avoid patterns | generic SaaS hero, card wall, wireframe/spec feel | Previously rejected direction risks | Section jobs must be explicit | high-contrast hierarchy + composed modules |

## 5) Internal production prompt (architecture + prompt composer output)

Build a focused three-page front door for AI Web Factory as a guided launch-kit studio.

- Product summary: convert one guided business brief into a structured launch brief and agent-ready launch kit plan.
- Target user: founder/operator who needs practical launch structure, not abstract AI hype.
- Business goal: get users to start the business brief and understand output value in under five seconds.
- Archetype: guided intake/productized service with AI product support cues.
- Page architecture:
  - `index.html`: promise, process, outputs, differentiation, proof artifact, CTA.
  - `brief-builder.html`: grouped intake with progress, completeness score, summary, preview CTA.
  - `brief-preview.html`: polished launch brief output for agent handoff confidence.
- Visual system: premium dark-neutral surfaces, precise typography, high-contrast hierarchy, restrained accent color, deliberate spacing rhythm.
- Visual anchor: "Launch Brief Engine" command surface showing signal intake, archetype core, output generation, and QA gate.
- CTA strategy: primary start-intake CTA; secondary preview CTA for trust.
- Proof strategy: display concrete launch-brief fields and a production prompt excerpt.
- Copy tone: clear, practical, founder-friendly, non-hype.
- Must-have outputs: website direction, conversion structure, launch copy, campaign angles, QA notes, production prompt.
- Must-avoid patterns: text-plus-card hero, generic AI platform copy, empty spec-page feel, dashboard wall.
- Implementation constraints: static docs prototype only under `docs/front-door-v2/`, shared CSS/JS, no production UI changes, no dependency changes.
- Evaluation checklist: archetype fit, commercial clarity, launch-kit differentiation, visual memorability, anti-generic gate pass.

## 6) Selected visual direction family

Direction name: Signal-to-Launch Command Surface.

- First-read goal: show a business owner that this system turns messy business inputs into a practical launch brief.
- Palette roles: deep neutral base, elevated slate surfaces, warm amber action accent, cool support accents for structure.
- Typography hierarchy: high-impact hero display -> compact explanatory body -> labeled micro-metadata.
- Product-specific anchor: launch brief engine operating surface (signals -> archetype -> outputs -> QA).
- Anti-patterns intentionally avoided:
  - weak-glow dashboard wall
  - generic SaaS centered text hero
  - empty editorial page without proof density
  - cards-inside-cards layering

## 7) Selected external UI stack type (principles only)

- Chosen stack mix:
  - UI/UX reference stack (for hierarchy and conversion pacing)
  - Component-library principles (for polished forms, CTA bands, section rhythm)
  - Internal pattern memory (to avoid previously rejected Front Door v1 feel)
- Influence scope:
  - section rhythm
  - form quality
  - CTA clarity
  - proof module structure
- Explicit non-influence scope:
  - business positioning
  - archetype choice
  - launch-kit output model
  - product promise

License/copy status: principle extraction only; no external code or branded assets copied.

## 8) Anti-generic gate results

| Gate | Result | Evidence |
| --- | --- | --- |
| Hero is not just text + cards | Pass | Hero includes dedicated launch brief engine surface and action rail |
| Site does not look generic SaaS | Pass | Messaging and modules center guided launch-brief workflow, not generic features |
| Visual anchor is product-specific | Pass | Engine visual maps business signals to launch outputs and QA gate |
| Homepage sells outcomes, not just features | Pass | First sections frame business result and conversion path |
| Brief builder feels useful, not decorative | Pass | Completeness scoring, grouped intake, live summary, preview handoff CTA |
| Brief preview proves launch-kit value | Pass | Structured fields include campaign/copy/QA/prompt handoff sections |
| Style is not copied from Front Door v1 | Pass | Avoids spec-page tone; uses commercial hierarchy and richer composition |
| Output is more than website builder | Pass | Explicit launch kit outputs and agent handoff guidance included |

## 9) Why this v2 should improve over Front Door Concept v1

Front Door v1 was rejected for internal-spec feel, weak commercial impact, and empty visual language. This v2 improves by:
- making the homepage a customer-facing conversion surface with one clear promise
- centering a product-specific visual anchor instead of abstract documentation
- turning intake into a guided, scored experience
- proving downstream value with a polished Launch Brief output structure
- preserving focused MVP scope rather than expanding into a broad multi-page marketing site
