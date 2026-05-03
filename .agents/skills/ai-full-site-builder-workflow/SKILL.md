---
name: ai-full-site-builder-workflow
description: Mandatory end-to-end workflow that connects architecture prompt composition, launch-kit planning, research corpus, taste scoring, critique loop, and build validation before any full-site implementation.
---

# AI Web Factory Full Site Builder Workflow v1

## 1. Purpose

This workflow is the required bridge between strategy engines and implementation for AI Web Factory website generation work.

Future agents must not start coding from the user prompt directly. They must convert the business brief into a structured production plan before implementation.

Required pre-build outputs:

1. Architecture decision
2. Internal production prompt
3. Visual direction
4. Section plan
5. Launch kit output plan
6. Build plan
7. Critique/checklist plan

This workflow does not guarantee perfect design. It is an operating system that improves decision quality and reduces generic output risk.

## 2. When to use

Use before:

- full website generation
- landing page generation
- launch kit site generation
- front-door product experience generation
- multi-page prototype generation
- major website redesign
- high-stakes visual direction work

Do not use for tiny copy edits, single component fixes, or narrow non-website patches.

## 3. Required engine order

Use this exact order. Do not skip steps.

### Step 1 - Business brief extraction
Produce:
- brief facts table (known facts, inferred assumptions, unknowns)
- business model hypothesis
- conversion goal hypothesis
- blocking questions list (only if truly blocking)

### Step 2 - Website Architecture + Prompt Composer
Use:
- `ai-website-architecture-prompt-composer`
- `docs/website-architecture-prompt-composer-v1.md`

Produce:
- archetype selection and rationale
- architecture decision table
- page count strategy
- section sequence draft

### Step 3 - Launch Kit output planning
Use:
- `ai-launch-kit-generator`
- `docs/launch-kit-generator-v1.md`

Produce:
- launch-kit relevance decision (required or optional)
- output plan (brief, pricing, proof, copy pack, campaigns, evaluation)
- deliverables matrix (requested scope vs planned outputs)

### Step 4 - Design Research Corpus selection
Use:
- `ai-factory-design-research-corpus`
- `docs/design-research-corpus-v1.md`

Produce:
- selected reference categories
- selected design genes
- same-family rejection notes

### Step 5 - Taste Engine scoring
Use:
- `ai-factory-taste-engine`

Produce:
- 2-3 materially different direction candidates
- score table and rejection rationale
- winner direction with anti-pattern checks

### Step 6 - Internal production prompt finalization
Produce:
- final internal production prompt (business-specific, section-ordered, constraint-aware)
- anti-generic gate results
- implementation guardrails

### Step 7 - Implementation plan
Produce:
- file scope plan
- page/component scope plan
- execution sequence
- risk and rollback notes

### Step 8 - Build
Produce:
- build command output
- build pass/fail status
- quick failure triage if failed

### Step 9 - Critique pass
Produce:
- structured critique notes
- quality scoring rubric output
- accept/revise/reject recommendation

### Step 10 - Revision decision
Produce:
- revision target list (if needed)
- explicit "no new variants" decision when quality, not quantity, is the issue

### Step 11 - Final summary and scope validation
Produce:
- completion checklist output
- changed file scope confirmation
- no out-of-scope change confirmation

## 4. Business brief extraction

Infer from prompt whenever reasonable:

- business category and model
- target buyer and maturity
- primary conversion goal
- trust problem
- offer complexity
- visual boldness target
- required outputs

Ask follow-up questions only if a missing answer blocks architecture selection, conversion path definition, or legal/compliance-safe claims.

When assumptions are required:
- make the assumption explicit
- label it as assumption
- continue workflow without stalling

## 5. Architecture decision table

Agents must prepare this table before implementation:

- business model
- conversion goal
- trust problem
- offer complexity
- audience maturity
- archetype
- page count
- section sequence
- proof strategy
- CTA strategy
- visual ambition level
- must-avoid patterns

Each row must include:
- selected value
- reason
- architecture implication
- implementation implication

## 6. Internal production prompt

Agents must generate a specific internal production prompt before building.

The prompt must include:

- selected archetype
- why it fits
- page architecture
- section flow
- visual system
- visual anchor
- copy tone
- proof strategy
- conversion strategy
- implementation constraints
- anti-generic gates

Rules:
- no generic filler language
- section sequence and proof placement must be explicit
- include must-avoid patterns for this category

## 7. Visual direction process

Agents must not pick a random style.

Direction selection must use:

- business category
- trust problem
- buyer expectation
- visual boldness level
- reference likes/dislikes
- design research corpus
- taste engine gates

Use one primary family and optional secondary influence.

### A) Clean conversion utility
- When to use: local, utility, operational trust-first websites.
- When not to use: high-memory brand launches needing stronger signature identity.
- Hero strategy: immediate value plus explicit conversion CTA.
- Typography tendency: practical, high readability, low ornament.
- Color/atmosphere tendency: calm neutrals with utility accents.
- Visual anchor examples: service proof block, output snapshot, trust rail.
- Failure modes: bland generic utility page with weak brand memory.

### B) Premium editorial
- When to use: premium services, trust-sensitive B2B, authority products.
- When not to use: ultra-urgent low-consideration conversion pages.
- Hero strategy: clear premium promise with proof-led composition.
- Typography tendency: display/body contrast with controlled rhythm.
- Color/atmosphere tendency: restrained warm or neutral palettes.
- Visual anchor examples: editorial artifact stage, structured proof module.
- Failure modes: empty minimalism and over-stylized typography.

### C) Cinematic product world
- When to use: memorable launch storytelling with strong product artifact.
- When not to use: strict enterprise/procurement pages where drama weakens trust.
- Hero strategy: scene-led product outcome with clear CTA.
- Typography tendency: high-impact headline plus concise support copy.
- Color/atmosphere tendency: dramatic depth with guarded contrast.
- Visual anchor examples: staged artifact scene, narrative product module.
- Failure modes: sci-fi cliche, unreadable drama, weak conversion path.

### D) Luxury atmospheric
- When to use: high-ticket experiential or prestige-led offers.
- When not to use: value-driven, speed-driven utility offers.
- Hero strategy: controlled high-caliber statement with inquiry path.
- Typography tendency: restrained elegance, low text volume, high precision.
- Color/atmosphere tendency: low-saturation materials, tactile depth.
- Visual anchor examples: material close-up, transformation artifact.
- Failure modes: sparse but unconvincing pages with no proof.

### E) Playful creator energy
- When to use: creator tools, education launches, high-momentum acquisition.
- When not to use: conservative enterprise trust pages.
- Hero strategy: fast empowerment promise with example-led CTA.
- Typography tendency: friendly bold headings and short benefit copy.
- Color/atmosphere tendency: bright but disciplined accents.
- Visual anchor examples: template gallery, transformation preview.
- Failure modes: toy-like visuals and shallow proof credibility.

### F) Local trust/service clarity
- When to use: local service businesses and region-bound offers.
- When not to use: global brand storytelling where local trust cues are irrelevant.
- Hero strategy: who, where, and response action in first screen.
- Typography tendency: straightforward utility hierarchy.
- Color/atmosphere tendency: clear contrast with trust signal accents.
- Visual anchor examples: service-area proof, certification rail, before/after.
- Failure modes: beautiful layout with unclear contact/quote path.

### G) High-tech AI-native
- When to use: AI product front doors requiring modern capability trust.
- When not to use: categories where technical aesthetics reduce perceived warmth/trust.
- Hero strategy: concrete AI outcome with visible generated artifact.
- Typography tendency: precise modern sans, compact proof labels.
- Color/atmosphere tendency: controlled technical depth, no random glow spam.
- Visual anchor examples: generated output system, workflow intelligence map.
- Failure modes: generic "AI platform" page and dashboard-first hero.

### H) Bold campaign/microsite
- When to use: time-bound launches, event pushes, high-attention campaigns.
- When not to use: evergreen high-trust enterprise pages.
- Hero strategy: urgency plus offer plus immediate action.
- Typography tendency: expressive campaign hierarchy.
- Color/atmosphere tendency: high-contrast energy with strict readability.
- Visual anchor examples: campaign world scene, timed offer module.
- Failure modes: theatrical visuals with weak registration/conversion mechanics.

## 8. Section composition rules

Build sections to sell, not to document.

- Hero must sell the outcome within 5 seconds.
- First screen must include commercial desire, not just explanation.
- Product proof must feel like a real artifact.
- Sections must have rhythm and contrast.
- Avoid repeating card grids.
- Avoid text-only specification pages.
- Each section needs a job: sell, prove, explain, compare, reduce risk, or convert.
- The page must feel designed, not documented.

## 9. Website differentiation rules

Future agents must avoid:

- every site using the same centered SaaS layout
- text plus cards as default hero
- empty whitespace without visual tension
- generic "AI platform" language
- fake metrics as primary proof
- dashboard/admin visual default
- same section order across all industries
- copying previous project visual language

## 10. Critique learning loop

Record critique using:

- Mistake observed
- Root cause
- New rule
- Future checklist gate
- Current artifact decision: accept, revise, or reject

Known lessons to include and apply:

- Front Door v1 looked like internal spec, not selling product.
- Empty layout is not premium by itself.
- Fullscreen means recomposed layout, not stretched background.
- Many variants are useless if all share the same structure.
- Architecture prevents wrong structure but does not guarantee visual quality.
- Website output must fit the business model, not the agent's favorite style.
- Launch kit value must be visible beyond "just a website".

## 11. Implementation discipline

When building:

- start from the selected internal production prompt
- create only the requested scope
- avoid broad rewrites
- avoid changing production UI unless explicitly requested
- keep docs/prototypes under the correct docs path
- use shared CSS only when it improves coherence
- do not create too many pages if one pilot page is requested
- do not create more variants when the problem is quality

## 12. Quality scoring

Every full-site output should be scored on:

- archetype fit
- conversion clarity
- business specificity
- visual memorability
- premium/commercial trust
- section rhythm
- copy specificity
- proof credibility
- responsiveness
- implementation cleanliness

Thresholds:

- below 7.0 = reject
- 7.0-8.0 = usable but weak
- 8.0-8.7 = acceptable
- 8.8+ = strong candidate
- 9.2+ = exceptional

## 13. Completion checklist

Future agents cannot mark full-site tasks complete unless they include:

- selected archetype
- architecture decision table
- generated internal production prompt
- selected visual direction family
- section sequence
- visual anchor rationale
- launch kit output plan if relevant
- anti-generic gate results
- critique learning notes if relevant
- build result
- changed file scope confirmation

## 14. Recommended workflow for next Front Door v2

For a future AI Web Factory Front Door v2:

- Not a docs/spec page.
- Not generic SaaS.
- Not just website builder messaging.
- Sell guided launch-kit generation as the core product.
- Show business intake -> generated brief -> launch kit outputs path.
- Feel like a premium product experience for business owners.
- Prioritize a strong commercial homepage, not only a form.

Use this sequence:
1. Classify as guided intake/productized service with AI-native support.
2. Build architecture around intake transparency plus output proof.
3. Select visual family based on trust and commercial intent, not trend preference.
4. Run anti-generic gates and critique lessons before implementation.
