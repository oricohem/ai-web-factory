---
name: ai-external-ui-design-stack-integration
description: Integration layer for safely using external UI/design stacks as optional design execution support after AI Web Factory strategy and architecture decisions are complete.
---

# AI External UI Design Stack Integration v1

## 1. Purpose

This skill is an integration layer that helps future agents use external UI/design stacks to improve visual execution quality without replacing AI Web Factory's own strategy engines.

External stacks are optional execution support. They are not the source of product strategy, conversion intent, or launch logic.

## 2. When to use

Use before:

- high-fidelity website generation
- premium landing pages
- customer-facing product front doors
- launch-kit sites
- major visual redesigns
- projects where visual quality and wow factor materially affect conversion

Do not use for:

- docs-only planning
- tiny copy changes
- backend work
- internal notes
- low-fidelity prototypes unless explicitly requested

## 3. What external stacks are allowed to do

External stacks may help with:

- component quality
- layout polish
- typography pairing
- interaction ideas
- animation and motion patterns
- premium visual references
- section pattern inspiration
- design-system consistency
- responsive behavior patterns

External stacks must not decide:

- business positioning
- offer strategy
- conversion goal
- site archetype
- launch-kit outputs
- pricing logic
- product promise
- customer trust problem

Rule: strategy remains internal to AI Web Factory engines; external stacks are execution support only.

## 4. Licensing and copying rules (strict)

Before any external code, text, component, visual pattern, or skill content reuse:

1. Check license terms and attribution requirements.
2. Prefer principle extraction over direct copying.
3. Do not paste large external skill documentation into this repository.
4. Do not copy branded assets, unique layouts, or recognizable motifs.
5. Attribute external sources when the license requires attribution.
6. If license status is unclear, use inspiration only and do not copy.
7. Keep final output original and business-specific.

## 5. External UI stack selection model

Use this decision model before implementation:

| Input factor | Low-end choice | Mid choice | High-end choice | Main risk to watch |
| --- | --- | --- | --- | --- |
| visual ambition level | utility component stack | balanced component + taste stack | strong reference + motion stack | style overpowering clarity |
| site archetype | local/service utility | SaaS/productized service | premium launch or campaign | wrong pattern fit for trust model |
| business category | trust-first utility | product/service blend | brand-sensitive premium/creator | category mismatch |
| motion or 3D preference | near-static micro-interactions | subtle reveal/hover system | targeted cinematic moments | irrelevant animation noise |
| implementation time budget | component-first assembly | selective customizations | custom language + curated components | overbuilding scope |
| need for components vs full language | component-heavy | mixed | full visual-language support | fragmented identity |
| risk of over-design | keep restrained stack | moderate expression | tightly governed bold stack | conversion friction |
| accessibility/responsive pressure | accessibility-first primitives | audited mixed stack | bespoke with strict QA gates | inaccessible patterns |

## 6. Design execution stack types

### A. UI/UX skill/reference stack

When to use:

- when direction needs stronger taste rules and UX heuristics
- when palette, typography, and hierarchy are underspecified

When not to use:

- when architecture and direction are already precise and validated

Expected output:

- taste rules
- typography and palette constraints
- hierarchy and layout heuristics

Risks:

- over-theoretical outputs without implementation relevance

Integration checklist:

- convert references into explicit design rules
- tie each rule to conversion intent and trust problem
- reject rules that are trendy but business-irrelevant

### B. Component library stack

When to use:

- when high-quality reusable components are needed quickly
- when consistency across sections is weak

When not to use:

- when component style conflicts with selected visual direction

Expected output:

- shortlist of components for nav, hero support, pricing, proof, forms, FAQ, CTA

Risks:

- template-looking assembly
- inconsistent component families

Integration checklist:

- map component jobs to section jobs
- adapt spacing, typography, and states to the chosen visual system
- remove decorative components that do not improve conversion clarity

### C. Motion/interaction stack

When to use:

- when subtle motion can improve hierarchy, focus, and perceived polish

When not to use:

- when trust-first utility pages need maximal clarity and speed

Expected output:

- motion policy for reveal, hover, transitions, and emphasis points

Risks:

- overanimated noise
- accessibility and performance regressions

Integration checklist:

- define motion intent per section
- include reduced-motion safe behavior
- enforce performance and readability constraints

### D. Reference-site principle stack

When to use:

- when agents need stronger precedent for premium composition and rhythm

When not to use:

- when reference pressure causes imitation drift

Expected output:

- extracted principles for composition, proof sequencing, and visual rhythm

Risks:

- accidental copying
- generic same-family repetition

Integration checklist:

- transform principles across story, structure, and treatment
- run anti-copy and anti-generic gates
- reject recognizable one-to-one resemblance

### E. Internal pattern memory stack

When to use:

- when prior AI Web Factory wins and failures can inform the current build

When not to use:

- when prior patterns directly conflict with current business category

Expected output:

- reused success patterns
- explicit rejection list for repeated mistakes

Risks:

- carrying forward stale defaults

Integration checklist:

- list applicable prior wins
- list known anti-pattern loops to block
- verify business-fit before reusing any pattern

## 7. Visual direction adaptation (Site DNA)

External styles must be adapted to Site DNA:

- business model
- target buyer
- trust problem
- conversion goal
- visual boldness level
- proof type
- industry texture

Agents must not apply a style because it looks cool. Every external influence must map to conversion and trust requirements.

## 8. Component sourcing workflow (required)

1. Define required section jobs.
2. Identify component needs for each section job.
3. Select component families that fit the chosen visual direction.
4. Adapt copy and content to the specific business.
5. Match all selected components to the shared visual system.
6. Check responsive behavior and accessibility.
7. Remove unused decorative complexity.
8. Score the result for clarity, trust, and polish.
9. Record adaptation notes and anti-copy gate results before implementation sign-off.

## 9. Anti-copy and anti-generic gates

Answer each gate with pass/fail and one-line evidence:

- Is this just a copied template?
- Does the site still fit the business?
- Did the external style overpower the offer?
- Is the visual anchor business-specific?
- Are components used because they help conversion, not because they look trendy?
- Is the design accessible and responsive?
- Would this still work without the external reference?
- Is the output original enough?

Any failed gate requires adjustment before implementation completion.

## 10. Quality upgrade targets

External stack usage should improve:

- first impression
- visual memorability
- polish
- component quality
- spacing rhythm
- responsive behavior
- interaction feel
- conversion clarity
- perceived trust

It must not create:

- style without strategy
- overanimated noise
- trendy but unclear UI
- inaccessible components
- generic template reuse
- irrelevant 3D or motion
- visual sameness across business categories

## 11. Integration with existing engines

Required sequence:

1. Business brief
2. Website Architecture + Prompt Composer
3. Full Site Builder Workflow
4. Launch Kit output plan
5. External UI Design Stack selection
6. Visual system adaptation
7. Implementation
8. Critique and learning loop

Connection model:

- Architecture engine selects archetype, section logic, and conversion path.
- Full-site workflow orchestrates planning, scoring, and validation.
- Launch-kit generator defines broader commercial outputs beyond pages.
- Design research corpus supplies diverse principle sources.
- Taste engine scores direction quality and blocks generic regressions.
- External UI stack integration then supports execution quality with licensing-safe adaptation.
- Critique loop converts feedback into durable stack-selection and adaptation rules.

## 12. Required output before implementation

Before building with external UI support, agents must produce:

- selected external stack type
- why it fits
- what it will influence
- what it must not influence
- component and pattern shortlist
- visual adaptation rules
- license and copying status
- anti-copy gate results

## 13. Example scenarios

Each scenario includes stack choice, principle borrowing, and anti-generic guardrails.

### 13.1 AI Web Factory Front Door v2

- Chosen external stack type: UI/UX skill/reference + component library + internal pattern memory
- Why: needs premium conversion clarity without repeating generic dashboard defaults
- Borrow as principles: hero hierarchy, proof-led sequencing, high-quality intake and CTA components
- Avoid: dashboard-first hero, card-wall sameness, trendy effects without conversion utility
- Component/pattern candidates: hero support rails, output artifact previews, pricing/plan blocks, FAQ, trust modules
- Visual adaptation notes: prioritize guided intake-to-output proof narrative aligned to launch-kit promise
- Anti-generic warning: if it reads as "generic AI platform," reject and restage around business outcomes

### 13.2 Real estate listing launch system

- Chosen external stack type: component library + reference-site principle stack
- Why: category-specific conversion requires trustworthy operational components and listing-focused rhythm
- Borrow as principles: structured process modules, proof blocks, package comparisons
- Avoid: generic SaaS language and non-listing visual metaphors
- Component/pattern candidates: workflow steps, package cards, listing output galleries, credibility/testimonial rails
- Visual adaptation notes: emphasize listing launch certainty, compliance confidence, and broker/team workflows
- Anti-generic warning: reject if nothing on page signals real-estate-specific value

### 13.3 Local electrician/plumber site

- Chosen external stack type: component library stack
- Why: high-clarity trust-first conversion path matters more than stylistic experimentation
- Borrow as principles: direct CTA placement, trust badges, compact service and FAQ sections
- Avoid: excessive motion, abstract visuals, enterprise-style complexity
- Component/pattern candidates: sticky contact CTA, services list, service area module, reviews, FAQ accordion
- Visual adaptation notes: optimize for immediate call/quote confidence and local trust
- Anti-generic warning: reject if contact action is not obvious in first read

### 13.4 Premium spa/wellness studio

- Chosen external stack type: UI/UX skill/reference + motion/interaction stack
- Why: premium perception and atmosphere need controlled craft and subtle motion polish
- Borrow as principles: typographic restraint, rhythm, tactile material cues, progressive trust reveal
- Avoid: empty minimalism without proof and over-luxury theatrics
- Component/pattern candidates: signature offerings grid, testimonial stories, booking CTA bands, FAQ/refutation blocks
- Visual adaptation notes: pair high-caliber aesthetics with concrete outcome and booking clarity
- Anti-generic warning: reject if it looks pretty but does not convert to consultation intent

### 13.5 Creator course launch

- Chosen external stack type: UI/UX skill/reference + component library
- Why: transformation storytelling plus curriculum-proof components are needed for enrollment trust
- Borrow as principles: momentum section flow, outcome framing, objection handling structure
- Avoid: hype-heavy copy and novelty visuals that weaken credibility
- Component/pattern candidates: curriculum modules, proof/testimonial cards, pricing plans, FAQ, deadline CTA blocks
- Visual adaptation notes: map every section to learner trust progression from uncertainty to enrollment
- Anti-generic warning: reject if energy is high but proof density is low

### 13.6 Ecommerce skincare product

- Chosen external stack type: component library + reference-site principle stack
- Why: product trust depends on clear comparison, evidence, and purchase-path clarity
- Borrow as principles: product-led composition, outcome-proof sequencing, review integration
- Avoid: software-like feature grids and unrelated trend motifs
- Component/pattern candidates: product hero media, benefits/comparison modules, ingredient/spec sections, reviews, FAQ, buy CTA
- Visual adaptation notes: keep tactile product trust and evidence before checkout actions
- Anti-generic warning: reject if product proof is replaced by abstract style

### 13.7 Boutique agency/studio

- Chosen external stack type: UI/UX skill/reference + reference-site principle + internal pattern memory
- Why: differentiation and case-led credibility need stronger editorial composition discipline
- Borrow as principles: case narrative modules, process visualization, typography hierarchy
- Avoid: portfolio walls with weak business outcomes and agency cliches
- Component/pattern candidates: case study cards, process timeline, service framing blocks, inquiry CTA
- Visual adaptation notes: prioritize measurable outcomes and fit-based inquiry conversion
- Anti-generic warning: reject if the site looks impressive but does not pre-qualify leads

### 13.8 Mobile app launch

- Chosen external stack type: component library + motion/interaction stack
- Why: install conversion benefits from product-in-use presentation and polished interaction cues
- Borrow as principles: app behavior storytelling, role-based use case sequencing, proof before install CTA
- Avoid: desktop SaaS structures and decorative motion detached from app behavior
- Component/pattern candidates: app-preview hero modules, use-case carousels, social proof blocks, install CTA strips
- Visual adaptation notes: keep mobile-first hierarchy and clear path to download/pre-register
- Anti-generic warning: reject if app value is not visible in first screen behavior cues

## 14. Critique learning integration

When human feedback is received, agents must convert it into four outputs:

- external stack adjustment
- visual rule learned
- component or pattern rule learned
- future checklist gate

Feedback conversion map:

| Human feedback | External stack adjustment | Visual rule learned | Component/pattern rule learned | Future checklist gate |
| --- | --- | --- | --- | --- |
| "This looks too basic" | increase support from UI/UX reference stack | add stronger visual hierarchy and one anchor | upgrade weak generic sections | does first read feel premium and specific? |
| "This is empty" | rebalance with component stack and proof modules | increase meaningful visual weight | add proof-bearing sections instead of filler space | does each section carry value/proof/action? |
| "This looks like a wireframe" | strengthen reference-principle stack | move from schematic layout to persuasive composition | replace placeholder structures with conversion-ready modules | is this sell-ready or only structure-ready? |
| "This feels like generic SaaS" | switch to stronger business-specific adaptation rules | enforce category-specific visual signals | remove default template sections | can this be confused with an unrelated SaaS template? |
| "This does not have wow factor" | add controlled motion/reference support | improve memorability without harming clarity | upgrade hero and proof staging | is there one memorable, business-fit anchor? |
| "This does not fit the business" | reduce external influence and re-anchor to Site DNA | prioritize trust problem and buyer context | replace mismatched components | does every major module match business model and buyer? |
| "This looks copied" | pull back to principle-only extraction | transform structure/treatment away from source resemblance | replace recognizable modules | would this still be recognizable as a specific source? |
| "This is overdesigned" | reduce motion stack and decorative component count | restore clarity-first rhythm | remove non-converting decorative patterns | does each visual decision improve comprehension or conversion? |

## 15. Completion checklist

High-fidelity visual work is not complete unless all are provided:

- selected architecture
- selected visual direction
- selected external UI stack type or explicit reason none was used
- license and copying status
- component and pattern adaptation notes
- anti-copy gate results
- anti-generic gate results
- visual quality score
- business fit score
- build result
- changed file scope confirmation
