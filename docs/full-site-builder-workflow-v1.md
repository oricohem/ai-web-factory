# AI Web Factory Full Site Builder Workflow v1

Date: 2026-05-03

## Why this exists

AI Web Factory now has strong specialized engines:

- website architecture and prompt composition
- design research corpus
- taste scoring and anti-pattern gates
- launch-kit generation workflow

Those engines are powerful separately, but future agents still need one mandatory operating workflow that sequences them before implementation. Without this bridge, agents regress to direct prompt-to-code behavior, generic website templates, repeated section stacks, and weak business fit.

This document defines that bridge.

It does not guarantee perfect design. It creates a better operating system for full-site generation. Visual research quality, references, implementation craft, and critique discipline still determine final quality.

## Core principle

Future agents must not start coding from the user prompt directly.

Before implementation, they must produce:

1. architecture decision
2. internal production prompt
3. visual direction
4. section plan
5. launch kit output plan
6. build plan
7. critique/checklist plan

## How this connects the existing engines

| Engine | Role in workflow | Output it must provide |
| --- | --- | --- |
| `ai-website-architecture-prompt-composer` + `docs/website-architecture-prompt-composer-v1.md` | Chooses structural strategy before design execution | archetype, page architecture, section sequence, conversion logic |
| `ai-launch-kit-generator` + `docs/launch-kit-generator-v1.md` | Ensures website work is tied to real commercial launch outputs | launch-kit output plan (brief, pricing, proof, copy pack, campaigns, evaluation) |
| `ai-factory-design-research-corpus` + `docs/design-research-corpus-v1.md` | Prevents visual sameness and reference copying | category selection, design genes, originality transformations |
| `ai-factory-taste-engine` | Scores direction quality and rejects weak/generic options | direction score table, rejection notes, selected winner |
| Critique learning loop | Converts feedback into durable rules | mistake-root-cause-rule-gate records and accept/revise/reject decisions |
| Build and scope validation | Prevents "looks good but fails build" and scope creep | build result and changed file scope confirmation |

## Mandatory full workflow (required order)

### Step 1 - Business brief extraction

Produce:

- known facts
- inferred assumptions (explicitly labeled)
- unknowns
- blocking questions (only if truly blocking)

Infer by default:

- business category and model
- target buyer and maturity
- conversion goal
- trust problem
- offer complexity
- desired visual boldness

Ask follow-up questions only when missing data blocks architecture selection, compliance-safe claims, or conversion-path design.

### Step 2 - Website Architecture + Prompt Composer

Use the architecture engine before visual decisions.

Produce:

- chosen archetype and reason
- architecture decision table
- page count strategy
- initial section sequence

### Step 3 - Launch Kit output planning

Decide whether launch-kit outputs are required by scope.

Produce:

- launch-kit relevance decision
- output plan (brief, pricing, proof, copy pack, campaign angles, evaluation)
- deliverables matrix (requested vs planned)

### Step 4 - Design Research Corpus selection

Choose diverse references as principle sources.

Produce:

- selected reference categories
- selected design genes
- same-family rejection notes

### Step 5 - Taste Engine scoring

Generate at least 2-3 materially different direction candidates.

Produce:

- score table
- pass/fail notes
- selected direction and rejected alternatives

### Step 6 - Internal production prompt finalization

Write a specific internal production prompt before coding.

Produce:

- finalized internal production prompt
- anti-generic gate results
- must-avoid pattern list

### Step 7 - Implementation plan

Produce:

- file scope plan
- execution order
- risk notes
- constraints reminder

### Step 8 - Build

Produce:

- build command result
- failure triage if needed

### Step 9 - Critique pass

Produce:

- quality scoring
- critique notes
- accept/revise/reject recommendation

### Step 10 - Revision decision

Produce:

- focused revision targets
- explicit "no new variants" decision when quality is the real issue

### Step 11 - Final summary and scope validation

Produce:

- completion checklist status
- changed-file confirmation
- no out-of-scope change confirmation

## Business brief extraction model

Minimum fields to derive or assume:

- product/business name
- business model
- target audience
- conversion goal
- trust problem
- offer complexity
- proof availability
- desired outputs
- visual boldness level
- must-avoid styles/patterns

Assumption rule:

- infer when reasonable
- label assumptions clearly
- continue unless truly blocked

## Architecture decision table template (mandatory)

Agents must fill this before implementation.

| Field | Selected value | Why selected | Architecture implication | Implementation implication |
| --- | --- | --- | --- | --- |
| business model |  |  |  |  |
| conversion goal |  |  |  |  |
| trust problem |  |  |  |  |
| offer complexity |  |  |  |  |
| audience maturity |  |  |  |  |
| archetype |  |  |  |  |
| page count |  |  |  |  |
| section sequence |  |  |  |  |
| proof strategy |  |  |  |  |
| CTA strategy |  |  |  |  |
| visual ambition level |  |  |  |  |
| must-avoid patterns |  |  |  |  |

## Internal production prompt (mandatory)

Every full-site workflow must generate this before build.

Required fields:

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

Prompt quality rules:

- business-specific language only
- explicit section order
- explicit proof placement
- explicit must-avoid patterns

## Visual direction process (not random styling)

Direction choice must be based on:

- business category
- trust problem
- buyer expectation
- visual boldness
- reference likes/dislikes
- design research corpus choices
- taste engine score gates

Use one primary family and optional secondary influence.

### 1) Clean conversion utility

- When to use: trust-first utility, local, operational sites.
- When not to use: high-memory brand launches requiring stronger signature.
- Hero strategy: immediate outcome and obvious CTA.
- Typography tendency: practical high-readability hierarchy.
- Color/atmosphere tendency: calm neutrals with utility accents.
- Visual anchor examples: trust rail, service proof block, output snapshot.
- Failure modes: plain generic utility site with weak identity.

### 2) Premium editorial

- When to use: premium services, authority products, trust-led B2B.
- When not to use: urgent low-consideration campaigns.
- Hero strategy: refined promise plus proof-bearing anchor.
- Typography tendency: display/body contrast and rhythm.
- Color/atmosphere tendency: restrained neutrals and warm premium cues.
- Visual anchor examples: editorial artifact stage, credibility module.
- Failure modes: empty minimalism or decorative typography theater.

### 3) Cinematic product world

- When to use: launch storytelling with strong product artifacts.
- When not to use: strict procurement-heavy enterprise pages.
- Hero strategy: scene-led promise with direct CTA.
- Typography tendency: high-impact headline with concise support.
- Color/atmosphere tendency: controlled dramatic depth.
- Visual anchor examples: staged product artifact world, scene modules.
- Failure modes: unreadable drama, sci-fi cliche, weak conversion clarity.

### 4) Luxury atmospheric

- When to use: high-ticket experiential offers.
- When not to use: speed-first practical conversion pages.
- Hero strategy: controlled prestige statement and inquiry path.
- Typography tendency: restrained elegance and precision.
- Color/atmosphere tendency: low-saturation material palette.
- Visual anchor examples: material close-up, transformation proof artifact.
- Failure modes: sparse but unconvincing and low-proof pages.

### 5) Playful creator energy

- When to use: creator tools, education launches, momentum-led products.
- When not to use: conservative enterprise trust journeys.
- Hero strategy: empowerment promise with concrete examples.
- Typography tendency: bold friendly hierarchy.
- Color/atmosphere tendency: bright disciplined accents.
- Visual anchor examples: template gallery, transformation preview.
- Failure modes: toy-like visuals, weak credibility, superficial proof.

### 6) Local trust/service clarity

- When to use: local/regional service businesses.
- When not to use: global narrative-heavy premium brands.
- Hero strategy: who, where, and how to contact immediately.
- Typography tendency: direct utility hierarchy.
- Color/atmosphere tendency: clear contrast with trust signal accents.
- Visual anchor examples: service-area credibility, certifications, before/after.
- Failure modes: polished layout with unclear call/quote conversion path.

### 7) High-tech AI-native

- When to use: AI product front doors requiring capability trust.
- When not to use: categories where technical style lowers trust.
- Hero strategy: concrete AI outcome with generated artifact proof.
- Typography tendency: precise modern sans with compact proof labels.
- Color/atmosphere tendency: controlled technical depth; avoid glow noise.
- Visual anchor examples: generated output system, intelligence workflow map.
- Failure modes: generic AI language, dashboard-first hero, repeated templates.

### 8) Bold campaign/microsite

- When to use: time-bound launches and campaigns.
- When not to use: evergreen high-trust enterprise journeys.
- Hero strategy: urgency, offer, and immediate action.
- Typography tendency: expressive campaign hierarchy.
- Color/atmosphere tendency: high-contrast energy with readability guardrails.
- Visual anchor examples: campaign world scene, timed-offer module.
- Failure modes: visually loud but conversion-mechanically weak pages.

## Section composition rules

Pages must sell outcomes, not look like internal specs.

- Hero must sell the outcome within 5 seconds.
- First screen must contain commercial desire, not only explanation.
- Product proof must appear as a real artifact.
- Sections need rhythm and contrast.
- Avoid repeated card grids.
- Avoid text-only specification pages.
- Each section needs a job: sell, prove, explain, compare, reduce risk, or convert.
- Page should feel designed, not documented.

## Website differentiation rules

Future agents must avoid:

- same centered SaaS layout for all industries
- text-plus-cards default hero
- empty whitespace without visual tension
- generic "AI platform" wording
- fake metrics as primary proof
- dashboard/admin defaults for front doors
- fixed section order regardless of business model
- copied language from previous projects

## Critique learning loop (required)

Feedback must be logged as:

- Mistake observed
- Root cause
- New rule
- Future checklist gate
- Current artifact decision: accept/revise/reject

Known lessons that must remain active:

- Front Door v1 looked like internal spec, not selling product.
- Empty layout is not premium by itself.
- Fullscreen means recomposed layout, not stretched background.
- Many variants are useless if all share the same structure.
- Architecture prevents wrong structure but does not guarantee visual quality.
- Website output must fit the business model, not the agent's favorite style.
- Launch kit value must be visible beyond "just a website".

## Implementation discipline

When building:

- start from selected internal production prompt
- build only requested scope
- avoid broad rewrites
- avoid production UI edits unless explicitly requested
- keep docs/prototypes in the correct docs path
- use shared CSS only if it improves coherence
- do not create many pages when one pilot page is requested
- do not create more variants when quality is the real issue

## Quality scoring rubric

Score each full-site output on:

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

## Completion checklist (required before done)

A full-site task is incomplete unless output includes:

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

## Recommended workflow for next Front Door v2

Apply this workflow to a future AI Web Factory Front Door v2 with these constraints:

- Not a docs/spec page.
- Not generic SaaS.
- Not "just website builder" messaging.
- Sell guided launch-kit generation.
- Show business intake -> generated brief -> launch-kit outputs path.
- Feel premium and commercially credible for business owners.
- Include a strong conversion homepage, not only a form.

Preferred flow:

1. classify as guided intake/productized service with AI-native support
2. architecture around intake transparency and output proof
3. select visual family based on trust/commercial fit
4. run anti-generic gates and critique lessons
5. implement with strict scope control

## Example end-to-end workflows

Each example below shows the operating pattern, not copy-ready design instructions.

### Example 1: AI Web Factory front door

- Business model: guided intake + generated launch-kit outputs.
- Conversion goal: start intake.
- Archetype: guided intake/productized service with AI-native support.
- Visual family: high-tech AI-native with premium editorial secondary influence.
- Section sequence: hero -> intake preview -> generated output preview -> launch plan -> trust/proof -> FAQ -> start intake CTA.
- Launch-kit output plan: brief, output bundle map, pricing logic, proof stories, launch copy pack.
- Critique gate: reject if it looks like internal spec or generic AI cards.

### Example 2: Real estate listing launch system

- Business model: productized listing launch service/tool.
- Conversion goal: book demo/start team intake.
- Archetype: real estate/listing launch.
- Visual family: local trust/service clarity with bold campaign accents.
- Section sequence: hero -> intake preview -> listing workflow -> channel output proof -> packages -> FAQ -> demo CTA.
- Launch-kit output plan: listing brief template, channel asset plan, pricing tiers, objection handling.
- Critique gate: reject if category proof becomes generic AI marketing language.

### Example 3: Premium spa/wellness site

- Business model: high-ticket experiential service.
- Conversion goal: consultation booking.
- Archetype: luxury service/premium brand.
- Visual family: luxury atmospheric with premium editorial structure.
- Section sequence: hero -> transformation story -> signature offerings -> method/proof -> testimonials -> risk reduction -> book CTA.
- Launch-kit output plan: positioning, package framing, trust stories, campaign copy concepts.
- Critique gate: reject if sparse design removes commercial clarity.

### Example 4: Local service business

- Business model: local appointment/quote service.
- Conversion goal: call/quote request.
- Archetype: local service business.
- Visual family: clean conversion utility with local trust/service clarity.
- Section sequence: hero -> services -> service areas -> trust badges/reviews -> FAQ -> contact CTA.
- Launch-kit output plan: light version (positioning, offer ladder, CTA copy, proof checklist).
- Critique gate: reject if contact path is not obvious in first screen.

### Example 5: Creator/course launch

- Business model: education product enrollment.
- Conversion goal: enroll/waitlist.
- Archetype: creator/course launch.
- Visual family: playful creator energy with bold campaign secondary cues.
- Section sequence: hero -> who this is for -> transformation -> curriculum proof -> outcomes/testimonials -> pricing -> FAQ -> enroll CTA.
- Launch-kit output plan: course brief, module framing, pricing narrative, launch copy pack, campaign angles.
- Critique gate: reject if hype replaces concrete curriculum/proof.

## Final operating note

This workflow is a required orchestration layer across architecture, launch-kit planning, research, taste, critique, and build validation.

It increases the probability of business-fit, conversion-fit, and visual differentiation. It does not remove the need for strong references, disciplined implementation, and honest critique.
