# Website Architecture + Prompt Composer Engine v1

Date: 2026-05-03

## Why this exists

AI Web Factory can generate pages, but future agents still risk defaulting to:

- generic SaaS structures
- empty layouts
- repeated hero patterns
- feature-first pages that ignore buyer trust logic

This engine solves that by forcing architecture decisions before implementation. Agents must first classify the business and conversion problem, choose an archetype, choose section flow, choose visual ambition level, and generate a high-quality internal production prompt.

The goal is not "one best layout per industry." The goal is better decision quality through a consistent system:

- archetype + conversion goal + trust problem + visual ambition

## Scope and mandate

Use this engine before any:

- full website generation
- landing page generation
- launch kit site generation
- product front-door generation

Do not start with component styling or section coding. Start with architecture and internal prompt composition.

## Required business brief input model

Minimum fields:

- product/business name
- business category
- business model
- target audience
- primary conversion goal
- offer type
- offer complexity
- price/trust level
- proof available
- desired outputs
- visual boldness level
- motion/3D preference
- must-have sections
- must-avoid styles
- reference likes/dislikes
- business maturity
- launch urgency

If fields are missing, state assumptions explicitly and continue.

## Website archetype library

### 1) AI/SaaS product site

- When to use: Productized software with repeat workflow value.
- Primary conversion goal: Trial, demo, or sign-up.
- Ideal page structure: Home, Product, Pricing, Proof, Contact.
- Hero strategy: Outcome claim + visible product artifact.
- Proof strategy: Outcomes, use cases, trust/security cues.
- Visual strategy: Premium restraint, high clarity, product-specific anchor.
- Sections that usually work: Hero, problem, workflow, use cases, proof, pricing, FAQ, CTA.
- Sections to avoid: Generic card-wall feature dump.
- Common failure modes: Buzzword copy, no trust progression, copied SaaS sequence.
- Example self-prompt pattern: "Build a product site that earns trial intent by showing real output proof before pricing."

### 2) Guided intake/productized service site

- When to use: Service delivered through structured intake and repeatable outputs.
- Primary conversion goal: Start intake or request scope.
- Ideal page structure: Home, Intake, Process, Outputs, Pricing, Start.
- Hero strategy: Promise deliverables and reduced effort.
- Proof strategy: Intake clarity, output previews, turnaround confidence.
- Visual strategy: Process-visible composition with tangible output artifacts.
- Sections that usually work: Hero, intake preview, workflow, output preview, packages, proof, CTA.
- Sections to avoid: Vague aspiration with hidden process.
- Common failure modes: Looks like SaaS dashboard, not a service conversion system.
- Example self-prompt pattern: "Design a guided service site where the buyer can predict what they submit and what they receive."

### 3) Local service business

- When to use: Geo-bound service with urgent lead intent.
- Primary conversion goal: Call, book, quote.
- Ideal page structure: Home, Services, Areas, Reviews, Contact.
- Hero strategy: Service + speed + location.
- Proof strategy: Certifications, local testimonials, before/after jobs.
- Visual strategy: Utility first, trust visible, low ambiguity.
- Sections that usually work: Hero, services, availability, reviews, FAQ, CTA.
- Sections to avoid: Abstract brand theater.
- Common failure modes: Stylish but no immediate contact path.
- Example self-prompt pattern: "Prioritize one-tap quote/call conversion with local trust proof above fold."

### 4) Luxury service / premium brand

- When to use: High-ticket service where perceived quality shapes conversion.
- Primary conversion goal: Consultation/inquiry.
- Ideal page structure: Home, Offerings, Method, Stories, Inquiry.
- Hero strategy: High-impact but controlled statement.
- Proof strategy: Transformation stories, craft signals, selective social proof.
- Visual strategy: Material restraint, elegant spacing, trust-through-caliber.
- Sections that usually work: Hero, transformation, method, proof stories, CTA.
- Sections to avoid: Dense comparison tables and bargain framing.
- Common failure modes: Empty minimalism with no decision confidence.
- Example self-prompt pattern: "Signal premium quality through restraint while keeping the path to book obvious."

### 5) Real estate/listing launch

- When to use: Listing launch operations for agents/teams/brokerages.
- Primary conversion goal: Demo or intake start.
- Ideal page structure: Home, Process, Packages, Proof, Contact.
- Hero strategy: Faster listing launch with quality/compliance confidence.
- Proof strategy: Channel-ready output previews and launch outcomes.
- Visual strategy: Category language tied to listing workflow.
- Sections that usually work: Hero, intake preview, workflow, campaign pack preview, testimonials, CTA.
- Sections to avoid: Generic AI marketing layout.
- Common failure modes: No listing-specific proof.
- Example self-prompt pattern: "Sell listing launch certainty by showing intake-to-deliverable process, not generic automation claims."

### 6) Creator/course launch

- When to use: Program/course enrollment with transformation narrative.
- Primary conversion goal: Enroll or join waitlist.
- Ideal page structure: Home, Curriculum, Results, Pricing, Enrollment.
- Hero strategy: Who this is for + transformation + urgency.
- Proof strategy: Student outcomes, curriculum structure, instructor authority.
- Visual strategy: Energetic narrative with trust-bearing proof.
- Sections that usually work: Hero, problem, transformation, curriculum, proof, pricing, FAQ, CTA.
- Sections to avoid: Long founder story before offer clarity.
- Common failure modes: Hype with weak syllabus proof.
- Example self-prompt pattern: "Guide a skeptical learner from pain to program confidence to enrollment."

### 7) Ecommerce product launch

- When to use: Direct purchase product launch.
- Primary conversion goal: Buy/add to cart.
- Ideal page structure: Product Home, Benefits, Proof, Reviews, Purchase CTA.
- Hero strategy: Product differentiation and outcome.
- Proof strategy: Ingredients/specs/testing/reviews/before-after.
- Visual strategy: Product-led visuals, tactile trust, short buying path.
- Sections that usually work: Hero, benefits, comparison, proof, FAQ, final CTA.
- Sections to avoid: SaaS feature grids.
- Common failure modes: Good aesthetics but weak purchase rationale.
- Example self-prompt pattern: "Move from product desire to trust evidence to checkout intent."

### 8) Agency/studio site

- When to use: Outcome-led service selling expertise and execution.
- Primary conversion goal: Qualified inquiry.
- Ideal page structure: Home, Services, Case Studies, Process, Contact.
- Hero strategy: Differentiated POV and buyer-fit clarity.
- Proof strategy: Case outcomes with context and metrics.
- Visual strategy: Distinct identity with conversion discipline.
- Sections that usually work: Hero, value framing, case studies, process, testimonials, CTA.
- Sections to avoid: Portfolio wall without outcomes.
- Common failure modes: Looks cool, converts weakly.
- Example self-prompt pattern: "Use case-led narrative to pre-qualify leads and invite aligned inquiries."

### 9) Marketplace/platform

- When to use: Two-sided value exchange and trust mediation.
- Primary conversion goal: Join, list, browse, request access.
- Ideal page structure: Home, How it Works, Categories, Trust/Safety, Join.
- Hero strategy: Clarify value for both sides quickly.
- Proof strategy: Verification, quality controls, trust mechanics.
- Visual strategy: Discovery clarity with trust rails.
- Sections that usually work: Hero, audience segmentation, workflow, trust/security, FAQ, CTA.
- Sections to avoid: One-sided messaging.
- Common failure modes: Card grid with no trust logic.
- Example self-prompt pattern: "Explain the two-sided exchange and trust model before join CTA."

### 10) Mobile app launch

- When to use: App-first product with install behavior.
- Primary conversion goal: Download/pre-register/waitlist.
- Ideal page structure: Home, App Experience, Use Cases, Proof, Download.
- Hero strategy: Core habit/use moment with app preview.
- Proof strategy: Screens, testimonials, usage outcomes.
- Visual strategy: Product-in-use storytelling and focused mobile hierarchy.
- Sections that usually work: Hero, workflow, use cases, proof, FAQ, CTA.
- Sections to avoid: Desktop-first SaaS layouts.
- Common failure modes: No evidence of app behavior.
- Example self-prompt pattern: "Show the in-app job getting done, then convert to install."

### 11) Event/campaign microsite

- When to use: Time-bound launch, campaign, event, registration.
- Primary conversion goal: Register/RSVP/claim.
- Ideal page structure: Home, Offer/Agenda, Speakers/Proof, Logistics, Register.
- Hero strategy: Value + urgency + timing.
- Proof strategy: Speaker/sponsor/past outcomes credibility.
- Visual strategy: High-energy but legible campaign system.
- Sections that usually work: Hero, launch plan, campaign pack preview, proof, CTA.
- Sections to avoid: Evergreen product architecture without urgency logic.
- Common failure modes: Attractive page with weak registration mechanics.
- Example self-prompt pattern: "Convert campaign urgency into immediate registration action."

### 12) Personal brand/authority site

- When to use: Expert-led offers, speaking, consulting, advisory.
- Primary conversion goal: Book call, subscribe, hire, inquire.
- Ideal page structure: Home, Authority, Offers, Proof, Contact.
- Hero strategy: Credibility + promise + audience fit.
- Proof strategy: Outcomes, appearances, testimonials, media.
- Visual strategy: Professional distinctiveness with trust.
- Sections that usually work: Hero, story, offers, case evidence, FAQ, CTA.
- Sections to avoid: Personal manifesto with no offer path.
- Common failure modes: Vanity presentation with weak conversion.
- Example self-prompt pattern: "Make authority evidence drive clear offer conversion."

### 13) B2B enterprise product

- When to use: Complex buying with risk and procurement pressure.
- Primary conversion goal: Demo/sales conversation.
- Ideal page structure: Home, Platform, Solutions, Security, Contact.
- Hero strategy: High-value outcome and low-risk adoption.
- Proof strategy: Enterprise case outcomes, compliance, integrations.
- Visual strategy: Trust-heavy, structured, restrained premium tone.
- Sections that usually work: Hero, segment use cases, trust/security, proof, CTA.
- Sections to avoid: Flashy consumer launch style.
- Common failure modes: Style without procurement confidence.
- Example self-prompt pattern: "Reduce enterprise risk anxiety before asking for demo commitment."

### 14) Portfolio/case-study-led site

- When to use: Buyers need to inspect work quality deeply.
- Primary conversion goal: Inquire based on fit.
- Ideal page structure: Home, Work, Case Studies, Services, Contact.
- Hero strategy: Positioning + strongest outcome narrative.
- Proof strategy: Challenge/solution/result case structure.
- Visual strategy: Story-led modules with clear decision relevance.
- Sections that usually work: Hero, gallery, case studies, method, CTA.
- Sections to avoid: Endless thumbnails with no context.
- Common failure modes: Portfolio theater, no conversion path.
- Example self-prompt pattern: "Turn each case into proof that this buyer problem can be solved."

### 15) Waitlist/prelaunch site

- When to use: Product not fully shipped; need early momentum.
- Primary conversion goal: Waitlist sign-up/early access.
- Ideal page structure: Home, Problem/Solution, Preview, Trust Signals, Waitlist CTA.
- Hero strategy: Clear future value with realistic launch confidence.
- Proof strategy: Prototype previews, founder credibility, roadmap clarity.
- Visual strategy: Focused and concise with honest ambition.
- Sections that usually work: Hero, problem framing, output preview, FAQ, risk reversal, CTA.
- Sections to avoid: Fully mature product claims without evidence.
- Common failure modes: Overhype and low credibility.
- Example self-prompt pattern: "Earn early trust by showing what exists now and what ships next."

## Section pattern library

Use the pattern that matches decision friction, not a fixed template order.

### Core conversion sections

1. First-read hero  
Purpose: immediate value + action clarity.  
Use: always.  
Avoid: never omit.  
Design notes: one anchor, one primary CTA.  
Copy notes: outcome-first, specific, no filler.

2. Problem framing  
Purpose: establish relevance and stakes.  
Use: when pain is not obvious.  
Avoid: when hero already resolves pain clearly on short pages.  
Design notes: concise, high-signal modules.  
Copy notes: concrete pain statements.

3. Transformation story  
Purpose: show state change.  
Use: offers sold on outcomes/identity shift.  
Avoid: low-consideration utility pages.  
Design notes: before/after or timeline.  
Copy notes: emphasize delta, not features.

4. Product proof artifact  
Purpose: prove capability with tangible output.  
Use: almost always.  
Avoid: only reduce when prelaunch evidence is limited.  
Design notes: meaningful artifact over decorative mockup.  
Copy notes: explain why artifact matters to decision.

5. Workflow/process  
Purpose: reduce uncertainty.  
Use: moderate-to-complex offers.  
Avoid: impulse purchase pages.  
Design notes: 3-6 actionable steps.  
Copy notes: verbs + result per step.

6. Use cases  
Purpose: role/job mapping for broader audiences.  
Use: multi-segment products.  
Avoid: single-use offers.  
Design notes: role-specific modules.  
Copy notes: language by job-to-be-done.

7. Audience segmentation  
Purpose: route different buyers.  
Use: distinct audience clusters.  
Avoid: homogeneous buyer profile.  
Design notes: 2-4 paths max.  
Copy notes: buyer-recognizable labels.

8. Offer/pricing  
Purpose: convert intent to decision.  
Use: commercial decisions.  
Avoid: very early lead-gen if pricing intentionally hidden.  
Design notes: clear contrast and constraints.  
Copy notes: outcome and risk framing.

9. Comparison  
Purpose: reduce status-quo pull.  
Use: competitive markets.  
Avoid: early discovery pages where it distracts.  
Design notes: honest, focused criteria.  
Copy notes: job-based differences.

10. Testimonials/proof  
Purpose: trust transfer from existing users.  
Use: whenever authentic proof exists.  
Avoid: anonymous shallow quotes.  
Design notes: context-rich proof cards.  
Copy notes: include role + result.

11. FAQ/objection handling  
Purpose: lower commitment friction.  
Use: most conversion pages.  
Avoid: low-friction micro-campaigns.  
Design notes: group by risk theme.  
Copy notes: direct and specific.

12. Risk reversal  
Purpose: lower perceived downside.  
Use: high-ticket, new brand, high-stakes offers.  
Avoid: legal/compliance-limited contexts.  
Design notes: precise terms, no vague guarantees.  
Copy notes: condition clarity.

13. Final CTA  
Purpose: close conversion loop.  
Use: always.  
Avoid: never omit.  
Design notes: repeat core promise + action.  
Copy notes: reinforce outcome now.

### Specialized sections

14. Intake preview
15. Generated output preview
16. Gallery/examples
17. Case studies
18. Trust/security
19. Before/after
20. Launch plan
21. Campaign pack preview

Use these only when aligned to business model and trust problem.

## Architecture selection algorithm

Use this exact sequence:

1. Classify business model.
2. Classify primary conversion goal.
3. Classify trust problem (low/medium/high).
4. Classify offer complexity (simple/moderate/complex).
5. Classify visual ambition (levels 1-5).
6. Select primary archetype (+ optional secondary).
7. Select page count strategy:
   - single page
   - compact multipage
   - full multipage
8. Select section order based on conversion risk.
9. Select visual language (palette roles, typography hierarchy, layout rhythm, motion policy).
10. Select proof style (artifact, case, testimonials, security, before/after).
11. Select CTA strategy (single, dual, staged, segmented).
12. Generate internal production prompt using Prompt Composer.

### Decision table template

- Brief field
- Classification result
- Why it matters
- Architecture implication
- Prompt implication

## Visual ambition mapping (levels 1-5)

### Level 1: Clean/basic/trustworthy

- Fits: local, utility, trust-first services.
- Danger: blends in when memorability is required.
- Layout: simple hierarchy, minimal ornament.
- Motion/3D: none or subtle.
- Typography: conservative and clear.
- Anchor examples: proof block, service proof image, output snapshot.

### Level 2: Premium/polished

- Fits: most B2B, agency, premium service launches.
- Danger: can become "generic premium SaaS."
- Layout: refined spacing, stronger composition contrast.
- Motion/3D: micro-reveal and subtle transitions.
- Typography: clear display/body hierarchy.
- Anchor examples: product artifact stage, process map, editorial proof module.

### Level 3: Bold/memorable

- Fits: crowded categories needing stronger identity.
- Danger: style can overpower trust.
- Layout: distinctive hero and section rhythm.
- Motion/3D: targeted moments with restraint.
- Typography: expressive scale and contrast.
- Anchor examples: category-specific visual metaphor, bespoke output system.

### Level 4: Experimental/campaign-grade

- Fits: campaigns, events, experiential launches.
- Danger: conversion clarity and implementation fragility risks.
- Layout: narrative sequencing and unconventional rhythm.
- Motion/3D: substantial motion narrative, robust fallback.
- Typography: editorial expressiveness under strict legibility control.
- Anchor examples: campaign world system, scene-led conversion modules.

### Level 5: Wild/cinematic/high-risk high-reward

- Fits: short lifecycle attention events and brand statements.
- Danger: trust/performance/accessibility collapse on practical buyers.
- Layout: dramatic choreography with heavy curation.
- Motion/3D: cinematic transitions and complex effects with strict budgets.
- Typography: high-impact display with safety constraints.
- Anchor examples: cinematic scene anchors, object-world narratives.

## Prompt Composer (internal prompt that agents must generate)

Before implementation, every agent must write an internal production prompt with this structure:

1. Product summary
2. Target user
3. Business goal
4. Selected archetype
5. Page architecture
6. Section sequence
7. Visual system
8. Visual anchor
9. CTA strategy
10. Proof strategy
11. Copy tone
12. Must-have outputs
13. Must-avoid patterns
14. Implementation constraints
15. Evaluation checklist

### Specificity rules

- No generic phrases without concrete meaning.
- Section order must include rationale.
- Proof placement must be explicit.
- Visual anchor must be business-specific.
- Must-avoid list must include likely failure modes for this category.

## Generated prompt examples (8)

Each example shows archetype choice, rationale, architecture, section flow, visual direction, and internal prompt excerpt.

### 1) AI SaaS launch tool

- Archetype: AI/SaaS product site.
- Why: recurring workflow + trial conversion.
- Architecture: Home, Product, Pricing, Customers, Demo.
- Flow: Hero -> Problem -> Workflow -> Output proof -> Pricing -> FAQ -> CTA.
- Visual direction: Level 2 premium/polished.
- Prompt excerpt: "Create a five-page launch-ops SaaS site that proves output quality above fold, then moves from workflow clarity to trust to trial conversion."

### 2) Real estate listing launch system

- Archetype: Real estate/listing launch.
- Why: category-specific trust and compliance concerns.
- Architecture: Home, Process, Packages, Proof, Contact.
- Flow: Hero -> Intake preview -> Workflow -> Campaign pack preview -> Testimonials -> FAQ -> CTA.
- Visual direction: Level 3 bold/memorable, market-specific anchor.
- Prompt excerpt: "Design a listing-launch website where the buyer sees intake fields, channel outputs, and compliance confidence before booking a demo."

### 3) Local plumbing/electrician business

- Archetype: Local service business.
- Why: urgent local trust + direct lead capture.
- Architecture: Home, Services, Areas, Reviews, Contact.
- Flow: Hero -> Services -> Trust/certifications -> Reviews -> FAQ -> CTA.
- Visual direction: Level 1 clean/trustworthy.
- Prompt excerpt: "Prioritize immediate quote/call conversion with location proof and trust badges above fold."

### 4) Premium spa/wellness studio

- Archetype: Luxury service/premium brand.
- Why: high-ticket service requiring perceived quality trust.
- Architecture: Home, Offerings, Method, Stories, Inquiry.
- Flow: Hero -> Transformation story -> Packages -> Testimonials -> Risk reversal -> CTA.
- Visual direction: Level 2 premium/polished.
- Prompt excerpt: "Signal calm premium quality with restrained composition while maintaining explicit booking CTA throughout."

### 5) Creator course launch

- Archetype: Creator/course launch.
- Why: transformation-led enrollment conversion.
- Architecture: Home, Curriculum, Results, Pricing, Enrollment.
- Flow: Hero -> Problem -> Transformation -> Curriculum -> Proof -> FAQ -> CTA.
- Visual direction: Level 3 bold/memorable.
- Prompt excerpt: "Guide a skeptical learner to enrollment by proving curriculum structure and student outcomes with deadline-backed urgency."

### 6) Ecommerce skincare product

- Archetype: Ecommerce product launch.
- Why: direct purchase with ingredient trust friction.
- Architecture: Product Home, Benefits, Science, Reviews, Buy.
- Flow: Hero -> Product proof -> Before/after -> Comparison -> FAQ -> CTA.
- Visual direction: Level 2 premium/polished.
- Prompt excerpt: "Build purchase confidence through ingredient and outcome proof before asking for checkout commitment."

### 7) Boutique agency/studio

- Archetype: Agency/studio site.
- Why: service conversion needs case-led credibility.
- Architecture: Home, Services, Cases, Process, Contact.
- Flow: Hero -> Use cases -> Case studies -> Process -> Testimonials -> CTA.
- Visual direction: Level 3 bold/memorable.
- Prompt excerpt: "Use business-outcome case narratives to pre-qualify leads and convert aligned inquiries."

### 8) AI Web Factory front door / guided launch kit platform

- Archetype: Guided intake/productized service + AI/SaaS support.
- Why: users need structured intake and visible output bundle trust.
- Architecture: Home, Intake Flow, Output System, Packages, Proof, Start Intake.
- Flow: Hero -> Intake preview -> Generated output preview -> Launch plan -> Trust/security -> FAQ -> CTA.
- Visual direction: Level 3 bold/memorable.
- Prompt excerpt: "Create a front door that sells complete launch kit generation from one intake, with clear artifact bundles and start-intake conversion."

## Anti-generic gates (pre-build)

Answer each with Pass/Fail + one evidence line:

1. Does this look like every SaaS page?
2. Is the hero just text + cards?
3. Is the structure copied from the last project?
4. Did the agent explicitly select archetype before coding?
5. Is the visual anchor business-specific?
6. Is conversion path clear and staged?
7. Does structure match trust problem?
8. Is the site selling business outcome, not feature inventory?

Any Fail means architecture and prompt revision before implementation.

## Critique learning loop (required)

Convert human feedback into durable learning:

- Mistake observed
- Why it happened
- Rule learned
- Future checklist gate
- Decision: accept, revise, or reject current artifact

### Required example critiques

- "Looks like a wireframe/spec, not a selling page."
- "Too empty / not enough screen presence."
- "All designs use the same structure."
- "Hero is text plus cards."
- "Fullscreen means stretched background, not recomposed layout."
- "Visual style does not match business category."
- "It generated a website but not a launch system."

The objective is system learning across future work, not just patching the current page.

## Mandatory future agent workflow

### Before implementation

1. Read brief.
2. Fill architecture decision table.
3. Select archetype.
4. Generate internal production prompt.
5. Run anti-generic gates.
6. Check prior critique lessons.
7. Only then build.

### After implementation

1. Score archetype fit.
2. Score conversion clarity.
3. Score visual memorability.
4. Score business specificity.
5. State whether generated prompt was followed.
6. Record critique lessons if human feedback exists.

## Completion checklist for full-site tasks

A full-site task is incomplete unless output includes:

- selected archetype
- architecture decision table
- generated internal production prompt
- section sequence
- visual anchor rationale
- anti-generic gate results
- critique learning notes when relevant
- build result
- changed file scope

## How this should improve future website generation

This engine should improve outputs by:

- forcing category-fit architecture before styling
- making section order conversion-driven instead of template-driven
- increasing business-specific visual anchors
- reducing repeated generic SaaS hero/card defaults
- generating stronger implementation prompts with clearer constraints
- preserving critique lessons for future tasks

## What this does not solve yet

- It does not auto-generate validated business strategy from weak briefs.
- It does not guarantee copy quality without strong proof inputs.
- It does not replace visual craft review or implementation QA.
- It does not remove the need for category-specific judgment.
- It does not guarantee performance/accessibility quality by itself.

This engine is a planning and prompting system. It improves the odds of differentiated output, but execution quality still depends on implementation discipline and review.
