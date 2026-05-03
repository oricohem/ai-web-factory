---
name: ai-website-architecture-prompt-composer
description: Mandatory architecture and internal prompt composer engine for full website, landing page, launch kit site, and front-door generation. Select archetype, section sequence, visual ambition, and conversion strategy before implementation.
---

# AI Website Architecture + Prompt Composer Engine v1

## 1. Purpose

Use this engine before any:

- full website generation
- landing page generation
- launch kit site generation
- product front-door generation

This engine exists to stop agents from starting with arbitrary screen design, generic section stacks, or repetitive SaaS templates.

Future agents must decide architecture first, then generate an internal production prompt, and only then implement.

## 2. Input model (minimum brief fields)

Use these required fields before architecture selection:

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

If fields are missing, infer reasonable assumptions and label assumptions explicitly in the architecture decision table.

## 3. Website archetype library

Pick one primary archetype and optionally one secondary support archetype.
Do not mix more than two without a clear conversion reason.

### A) AI/SaaS product site

- When to use: Productized software with recurring usage and repeatable workflow value.
- Primary conversion goal: Trial, demo, or self-serve sign-up.
- Ideal page structure: Home, Product, Pricing, Proof/Customers, Contact or Demo.
- Hero strategy: Outcome-first promise plus one concrete product artifact.
- Proof strategy: Use cases, measurable outcomes, trust badges, integration/security cues.
- Visual strategy: Clear hierarchy, product artifact-led, restrained premium system.
- Sections that usually work: Hero, problem framing, workflow, use cases, proof, pricing, FAQ, CTA.
- Sections to avoid: Generic card-wall feature dumps with no buyer journey.
- Common failure modes: Buzzword-heavy hero, no trust story, copied SaaS section stack.
- Example self-prompt pattern: "Build a conversion-first AI product site where hero proves outcome with one artifact, then guides from trust to trial."

### B) Guided intake/productized service site

- When to use: Business sells a structured service delivered through intake + outputs.
- Primary conversion goal: Start intake or request proposal.
- Ideal page structure: Home, How It Works, Outputs, Pricing/Packages, Intake.
- Hero strategy: Promise specific deliverables and reduced client effort.
- Proof strategy: Before/after output examples, process reliability, turnaround proof.
- Visual strategy: Process-visible layouts, artifact previews, confidence-oriented pacing.
- Sections that usually work: Hero, intake preview, workflow, generated output preview, packages, testimonials, final CTA.
- Sections to avoid: Purely aspirational hero with no process transparency.
- Common failure modes: Looks like SaaS app store, hides service mechanics.
- Example self-prompt pattern: "Design a guided-service front door that sells certainty via intake clarity and output proof, not generic feature cards."

### C) Local service business

- When to use: Geography-based service with high intent and urgent lead capture.
- Primary conversion goal: Call, quote request, booking.
- Ideal page structure: Home, Services, Service Areas, Reviews, Contact.
- Hero strategy: Immediate trust + response speed + service region.
- Proof strategy: Ratings, certifications, local proof, before/after jobs.
- Visual strategy: Clear utility, high readability, trust-forward, low ambiguity.
- Sections that usually work: Hero, services, emergency/availability, testimonials, FAQ, contact.
- Sections to avoid: Abstract product metaphors disconnected from local trust.
- Common failure modes: Fancy visuals with unclear phone/contact path.
- Example self-prompt pattern: "Create a local conversion page where contact action is obvious in 3 seconds and trust signals are visible above fold."

### D) Luxury service / premium brand

- When to use: High-ticket service where perceived quality drives conversion.
- Primary conversion goal: Consultation booking or private inquiry.
- Ideal page structure: Home, Signature Offerings, Craft/Method, Stories/Press, Inquiry.
- Hero strategy: Controlled, high-impact statement with premium visual anchor.
- Proof strategy: Craft story, selective testimonials, outcomes, provenance.
- Visual strategy: Sparse rhythm, strong typography, material/atmosphere discipline.
- Sections that usually work: Hero, transformation story, method, proof stories, final CTA.
- Sections to avoid: Dense utility tables and bargain-style pricing blocks.
- Common failure modes: Empty minimalism with no concrete trust proof.
- Example self-prompt pattern: "Build a premium conversion experience that signals caliber through restraint while still proving measurable client outcomes."

### E) Real estate/listing launch

- When to use: Listing marketing system, agent/broker launch operations, property go-live workflows.
- Primary conversion goal: Book demo, start listing intake, or agency onboarding.
- Ideal page structure: Home, Listing Launch Process, Package/Pricing, Proof, Contact.
- Hero strategy: Faster listing launch and higher listing quality promise.
- Proof strategy: Channel outputs, compliance readiness, before/after listing assets.
- Visual strategy: Market-specific visual language tied to listing operations.
- Sections that usually work: Hero, intake preview, launch workflow, campaign pack preview, testimonials, FAQ, CTA.
- Sections to avoid: Generic AI marketing hero with no listing specificity.
- Common failure modes: No channel/output detail, no operational credibility.
- Example self-prompt pattern: "Design a listing-launch site that sells market-ready outputs and compliance confidence, not generic AI productivity."

### F) Creator/course launch

- When to use: Knowledge product, cohort, training, or creator-led program.
- Primary conversion goal: Enroll, join waitlist, buy course.
- Ideal page structure: Home, Program/Curriculum, Proof/Results, Pricing, Enrollment.
- Hero strategy: Clear transformation + who it is for + deadline/urgency.
- Proof strategy: Student outcomes, syllabus preview, instructor authority.
- Visual strategy: Energetic but credible, narrative progression, clarity over hype.
- Sections that usually work: Hero, problem framing, transformation story, curriculum, proof, pricing, FAQ, CTA.
- Sections to avoid: Overlong personal story before offer clarity.
- Common failure modes: Motivation copy without structured offer proof.
- Example self-prompt pattern: "Create a course launch page where transformation, curriculum, and proof create a confident enrollment path."

### G) Ecommerce product launch

- When to use: Single product or focused SKU collection with direct purchase intent.
- Primary conversion goal: Purchase, add to cart, subscribe-and-save.
- Ideal page structure: Home/Product, Benefits, Proof/Ingredients/Specs, Reviews, Purchase CTA.
- Hero strategy: Product value + differentiation in one screen.
- Proof strategy: UGC, reviews, testing/certification, before/after.
- Visual strategy: Product-led composition, tactile detail, purchase-path clarity.
- Sections that usually work: Hero, benefit breakdown, comparison, proof, FAQ, final CTA.
- Sections to avoid: Software-style feature grids and jargon-heavy copy.
- Common failure modes: Beautiful visuals with unclear buy rationale.
- Example self-prompt pattern: "Build a product-launch page that moves from product desire to confidence to immediate checkout intent."

### H) Agency/studio site

- When to use: Service business selling strategic/creative execution and outcomes.
- Primary conversion goal: Inquiry or project brief submission.
- Ideal page structure: Home, Services, Work/Case Studies, Process, Contact.
- Hero strategy: Positioning and differentiated point of view.
- Proof strategy: Case-study outcomes, client logos with context, methodology.
- Visual strategy: Brand-distinct, memorable, outcome-first, not portfolio clutter.
- Sections that usually work: Hero, value proposition, case studies, process, testimonials, CTA.
- Sections to avoid: Gallery-only pages with no business outcomes.
- Common failure modes: Style-heavy site with weak conversion intent.
- Example self-prompt pattern: "Create an agency front door where proof-rich case outcomes and a clear process drive qualified inquiries."

### I) Marketplace/platform

- When to use: Two-sided network, discovery platform, or catalog with trust mediation.
- Primary conversion goal: Browse/list/join/request access.
- Ideal page structure: Home, How Marketplace Works, Categories/Inventory, Trust/Safety, Join.
- Hero strategy: Clarify both sides of value exchange.
- Proof strategy: Verification, quality controls, transaction trust mechanisms.
- Visual strategy: Discovery-first IA with clear trust rails.
- Sections that usually work: Hero, audience segmentation, workflow, trust/security, FAQ, CTA.
- Sections to avoid: Single-sided value proposition that ignores other side.
- Common failure modes: Card-grid without trust narrative.
- Example self-prompt pattern: "Design a two-sided platform site where trust mechanisms and value exchange are clear before join CTAs."

### J) Mobile app launch

- When to use: App-first product emphasizing habit loops and app-store conversion.
- Primary conversion goal: App download, pre-register, or waitlist.
- Ideal page structure: Home, App Experience, Use Cases, Social Proof, Download CTA.
- Hero strategy: One core use case + real app experience preview.
- Proof strategy: Screens, testimonials, usage metrics, store trust cues.
- Visual strategy: Product-in-context storytelling and focused mobile hierarchy.
- Sections that usually work: Hero, workflow/process, use cases, reviews, FAQ, CTA.
- Sections to avoid: Desktop SaaS layouts pretending to be app launch.
- Common failure modes: No credible app behavior demonstration.
- Example self-prompt pattern: "Build a mobile launch page that shows real usage moments and drives app install confidence."

### K) Event/campaign microsite

- When to use: Time-bound activation, conference, campaign, or launch event.
- Primary conversion goal: Register, RSVP, join campaign, claim offer.
- Ideal page structure: Home, Agenda/Offer, Speakers/Proof, Logistics, Registration.
- Hero strategy: Event value + urgency + date/location clarity.
- Proof strategy: Speaker quality, sponsor proof, past outcomes.
- Visual strategy: High-energy but legible campaign system.
- Sections that usually work: Hero, launch plan, campaign pack preview, proof, FAQ, CTA.
- Sections to avoid: Evergreen product architecture without urgency cues.
- Common failure modes: No urgency mechanics or registration clarity.
- Example self-prompt pattern: "Create a campaign microsite that turns urgency and credibility into immediate registration action."

### L) Personal brand/authority site

- When to use: Expert-led business, thought leadership, speaking, advisory offers.
- Primary conversion goal: Book call, subscribe, hire, or speaking inquiry.
- Ideal page structure: Home, Authority/Story, Offers, Proof, Contact.
- Hero strategy: Credibility and promise in one direct statement.
- Proof strategy: Results, appearances, testimonials, media, case examples.
- Visual strategy: Distinct but professional; personality with trust.
- Sections that usually work: Hero, transformation story, offers, case studies, FAQ, CTA.
- Sections to avoid: Overly abstract personal manifesto with no offer clarity.
- Common failure modes: Vanity site with weak conversion architecture.
- Example self-prompt pattern: "Design an authority site where credibility and offer clarity guide high-intent inquiries."

### M) B2B enterprise product

- When to use: Complex organizational buying with procurement/security concerns.
- Primary conversion goal: Demo request, sales conversation, enterprise trial.
- Ideal page structure: Home, Platform, Solutions, Security/Compliance, Contact.
- Hero strategy: High-stakes outcome with low-risk adoption message.
- Proof strategy: Case outcomes, compliance/security, integrations, enterprise references.
- Visual strategy: Trust-heavy, structured, clarity-first, premium restraint.
- Sections that usually work: Hero, use cases by segment, trust/security, proof, pricing/contact CTA.
- Sections to avoid: Consumer-style hype, flashy motion over trust signals.
- Common failure modes: Pretty site lacking procurement confidence.
- Example self-prompt pattern: "Build an enterprise conversion site that reduces risk anxiety before requesting demo commitment."

### N) Portfolio/case-study-led site

- When to use: Conversion depends on demonstrating prior work quality.
- Primary conversion goal: Qualified inquiry based on fit and outcomes.
- Ideal page structure: Home, Selected Work, Case Studies, Services, Contact.
- Hero strategy: Positioning plus best-fit outcomes, not just aesthetics.
- Proof strategy: Before/after, measurable impact, process credibility.
- Visual strategy: Case-led storytelling with strong narrative hierarchy.
- Sections that usually work: Hero, gallery/examples, case studies, workflow, CTA.
- Sections to avoid: Endless thumbnails with no context or results.
- Common failure modes: Portfolio theater with no conversion logic.
- Example self-prompt pattern: "Create a case-led site where each section filters for fit and builds confidence to inquire."

### O) Waitlist/prelaunch site

- When to use: Product not fully released; need momentum and qualified early users.
- Primary conversion goal: Waitlist sign-up, early access request.
- Ideal page structure: Home, Problem/Solution, Preview, Proof/Signals, Waitlist CTA.
- Hero strategy: Future value + launch timing + clear early-access benefit.
- Proof strategy: Founder credibility, prototype previews, roadmap confidence.
- Visual strategy: Focused and concise; ambition balanced with honesty.
- Sections that usually work: Hero, problem framing, generated output preview, FAQ, risk reversal, final CTA.
- Sections to avoid: Full enterprise feature claims without shipping evidence.
- Common failure modes: Hype-heavy copy without believable launch path.
- Example self-prompt pattern: "Build a prelaunch page that earns waitlist trust via clarity, previews, and realistic launch confidence."

## 4. Section pattern library

Use sections intentionally. Do not default to a static template order.

### First-read hero

- Purpose: Establish value proposition and desired action within first screen.
- When to use: Always.
- When not to use: Never omitted; only format changes.
- Design notes: One visual anchor, one primary CTA, no clutter.
- Copy notes: Outcome-first headline, specific subhead, clear next action.

### Problem framing

- Purpose: Name buyer pain and stakes to create relevance.
- When to use: If buyer pain is non-obvious or high-friction.
- When not to use: If hero already carries strong pain clarity and page is short.
- Design notes: Keep concise; avoid heavy text walls.
- Copy notes: Use concrete pains, avoid abstract marketing filler.

### Transformation story

- Purpose: Show before/after state shift the buyer wants.
- When to use: Offers selling identity, confidence, or measurable progression.
- When not to use: Utility-only pages where direct proof is enough.
- Design notes: Can use timeline, side-by-side, or narrative modules.
- Copy notes: Emphasize outcome delta, not feature list.

### Product proof artifact

- Purpose: Show real product/output evidence early.
- When to use: Always for product or output-led businesses.
- When not to use: Never fully omitted; can be simplified for early prelaunch.
- Design notes: Use meaningful artifact, not decorative UI mock.
- Copy notes: Explain artifact relevance to buyer decision.

### Workflow/process

- Purpose: Reduce uncertainty by showing how it works.
- When to use: Complex, trust-sensitive, or service-led offers.
- When not to use: Ultra-simple impulse purchase pages.
- Design notes: 3-6 steps; clear handoff points.
- Copy notes: Use verbs and outcomes per step.

### Use cases

- Purpose: Help buyers map product to their context.
- When to use: Multi-audience or multi-job products.
- When not to use: Single narrow offer with universal use case.
- Design notes: Segment by role/job-to-be-done.
- Copy notes: Role-specific benefit language.

### Audience segmentation

- Purpose: Route different audiences to relevant value paths.
- When to use: Distinct buyer segments or maturity levels.
- When not to use: One homogeneous buyer.
- Design notes: Keep segment count manageable (2-4).
- Copy notes: Label segments in buyer language.

### Offer/pricing

- Purpose: Convert intent into decision with plan clarity.
- When to use: Purchase, subscription, or packaged service decisions.
- When not to use: Lead-gen only pages where pricing is intentionally withheld.
- Design notes: Clear plan contrast, constraints, and CTA.
- Copy notes: Tie price to outcomes and risk reduction.

### Comparison

- Purpose: Differentiate against status quo or alternatives.
- When to use: Competitive market with skeptical buyers.
- When not to use: Early discovery pages where comparison distracts.
- Design notes: Keep honest and specific; avoid bloated tables.
- Copy notes: Frame around buyer jobs, not vague superiority claims.

### Testimonials/proof

- Purpose: Transfer trust from existing users to new buyers.
- When to use: Always, if proof exists.
- When not to use: If no authentic proof; use alternate evidence instead.
- Design notes: Context-rich proof beats anonymous quotes.
- Copy notes: Include outcome, role, and context.

### FAQ/objection handling

- Purpose: Remove conversion friction late in page flow.
- When to use: Most conversion pages.
- When not to use: Very short campaign pages with low commitment action.
- Design notes: Group objections by risk type.
- Copy notes: Answer directly; avoid evasive tone.

### Risk reversal

- Purpose: Reduce fear of commitment.
- When to use: High-price, high-trust, or new-brand offers.
- When not to use: If legal/compliance limits claims.
- Design notes: Keep promises realistic and precise.
- Copy notes: State conditions clearly.

### Final CTA

- Purpose: Capture conversion after trust-building narrative.
- When to use: Always.
- When not to use: Never omitted.
- Design notes: Repeat core promise and next action.
- Copy notes: Reinforce outcome and immediacy.

### Intake preview

- Purpose: Make onboarding feel manageable and transparent.
- When to use: Guided intake, service, onboarding-heavy flows.
- When not to use: Instant purchase products with no intake.
- Design notes: Show sample steps/fields and time expectation.
- Copy notes: Emphasize simplicity and preparation.

### Generated output preview

- Purpose: Prove what buyer receives.
- When to use: AI/service offerings that produce deliverables.
- When not to use: Products with no generated artifacts.
- Design notes: Show output types with context and quality cues.
- Copy notes: Focus on buyer-useful outputs.

### Gallery/examples

- Purpose: Show breadth and quality quickly.
- When to use: Visual, template, or portfolio-dependent offers.
- When not to use: High-complexity B2B pages where galleries weaken clarity.
- Design notes: Curate tightly; avoid noisy walls.
- Copy notes: Caption with business outcome context.

### Case studies

- Purpose: Provide deep trust proof for skeptical buyers.
- When to use: Enterprise, agency, or high-ticket decisions.
- When not to use: Early-stage products with no cases yet.
- Design notes: Structured story: challenge -> solution -> result.
- Copy notes: Include measurable outcomes and constraints.

### Trust/security

- Purpose: Address risk and legitimacy concerns.
- When to use: Regulated, enterprise, financial, or sensitive workflows.
- When not to use: Low-risk consumer pages unless trust issue is clear.
- Design notes: Keep visible but not fear-driven.
- Copy notes: Plain-language trust statements over jargon.

### Before/after

- Purpose: Make transformation tangible.
- When to use: Services/products with clear state change.
- When not to use: If transformation cannot be shown credibly.
- Design notes: Balanced side-by-side or staged timeline.
- Copy notes: Explain delta in decision-relevant terms.

### Launch plan

- Purpose: Show implementation roadmap and readiness.
- When to use: Launch systems, campaign or rollout services.
- When not to use: Instant utility products.
- Design notes: Milestones + deliverables + timeline expectations.
- Copy notes: Emphasize predictability and control.

### Campaign pack preview

- Purpose: Demonstrate promotional output breadth.
- When to use: Marketing, launch kit, campaign orchestration offers.
- When not to use: Technical-only products with no campaign outputs.
- Design notes: Bundle preview by channel/use.
- Copy notes: Tie each asset to business outcome.

## 5. Architecture selection algorithm

Run this sequence before writing implementation code:

1. Classify business model.
   - SaaS, service, marketplace, ecommerce, creator education, local service, authority brand, event/campaign, enterprise B2B, hybrid.
2. Classify primary conversion goal.
   - Purchase, trial, demo, booking, intake, inquiry, waitlist, registration.
3. Classify trust problem.
   - Low trust (known brand/low price), medium trust (new brand/moderate risk), high trust (high ticket, enterprise, regulated, or mission-critical).
4. Classify offer complexity.
   - Simple, moderate, complex (multi-step, multi-role, or custom scope).
5. Classify visual ambition.
   - Use 5-level mapping in section 6.
6. Select archetype.
   - Pick primary archetype from section 3; add one secondary only if needed.
7. Select page count.
   - Single page, compact multipage, or full multipage based on complexity/trust.
8. Select section order.
   - Choose sequence from section library based on conversion path and trust barrier.
9. Select visual language.
   - Palette roles, typography hierarchy, spatial rhythm, motion/3D policy, anchor type.
10. Select proof style.
   - Testimonials, case studies, output artifacts, compliance/security, before/after, comparison.
11. Select CTA strategy.
   - Single CTA, dual CTA, staged CTA (learn -> trust -> convert), or segmented CTA.
12. Generate implementation prompt.
   - Use Prompt Composer template in section 7.

Required output before build:

- architecture decision table
- selected archetype + rationale
- page architecture
- section sequence
- visual anchor rationale
- generated internal production prompt

## 6. Visual ambition mapping (5 levels)

### Level 1: Clean/basic/trustworthy

- When it fits: Local services, high-clarity utility offers, low design risk budgets.
- When it is dangerous: Category where memorability is required to compete.
- Layout implications: Simple grids, direct hierarchy, minimal decorative systems.
- Motion/3D implications: Minimal or none.
- Typography implications: Conservative scale, strong readability.
- Visual anchor types: Real proof block, service photo/context, output snapshot.

### Level 2: Premium/polished

- When it fits: Most B2B, agencies, premium services, credible product launches.
- When it is dangerous: If polish becomes generic sameness.
- Layout implications: Refined spacing rhythm, stronger composition contrast.
- Motion/3D implications: Subtle reveal motion; no spectacle dependency.
- Typography implications: Clear display/body contrast with disciplined rhythm.
- Visual anchor types: Product artifact stage, process visualization, editorial proof module.

### Level 3: Bold/memorable

- When it fits: Crowded categories needing identity differentiation.
- When it is dangerous: Can reduce trust if boldness overrides clarity.
- Layout implications: Distinct hero composition, stronger anchor dominance.
- Motion/3D implications: Targeted hero and section transitions.
- Typography implications: More expressive scale and contrast.
- Visual anchor types: Category-specific visual metaphor, bespoke output showcase.

### Level 4: Experimental/campaign-grade

- When it fits: Event, campaign, creative launch, brand-led activation.
- When it is dangerous: Conversion path confusion or implementation fragility.
- Layout implications: Narrative sequencing, unusual rhythm, richer media choreography.
- Motion/3D implications: Significant motion narrative; fallback states required.
- Typography implications: Editorial expressiveness with strict readability controls.
- Visual anchor types: Campaign world-building artifact, scene-driven modules.

### Level 5: Wild/cinematic/high-risk high-reward

- When it fits: Short lifecycle campaign, high-attention brand moments, experiential pushes.
- When it is dangerous: Enterprise trust pages, accessibility/performance constraints, broad audience clarity.
- Layout implications: Dramatic composition and pacing; high curation burden.
- Motion/3D implications: Cinematic transitions and 3D presence with strict performance budget.
- Typography implications: High-impact display system with careful legibility safeguards.
- Visual anchor types: Cinematic scene, signature object world, high-drama story visual.

## 7. Prompt Composer (internal production prompt template)

Future agents must write this internal prompt before implementation.
Do not start coding until this is complete.

Template:

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

Quality requirement:

- Every line must be business-specific.
- Ban generic placeholders like "modern premium design" without defining what that means.
- The prompt must specify section order and conversion rationale.
- The prompt must specify what proof appears and where.

## 8. Prompt examples (generated internal prompts)

Each example includes archetype selection, rationale, architecture, flow, visual direction, and prompt excerpt.

### Example 1: AI SaaS launch tool

- Selected archetype: AI/SaaS product site.
- Why chosen: Recurring product workflow with trial/demo conversion.
- Recommended page architecture: Home, Product, Pricing, Customers, Demo Contact.
- Section flow: Hero -> problem framing -> workflow -> output proof -> pricing -> FAQ -> final CTA.
- Visual direction: Level 2 premium/polished with artifact-led proof.
- Prompt excerpt: "Build a five-page AI product site for launch managers where the hero promises 'ship launch assets in one guided run,' shows one real output bundle artifact, and drives a primary CTA to start trial plus secondary CTA to see outputs."

### Example 2: Real estate listing launch system

- Selected archetype: Real estate/listing launch.
- Why chosen: Category-specific launch operations, compliance and trust-sensitive buying.
- Recommended page architecture: Home, Launch Process, Pricing, Agent Proof, Contact.
- Section flow: Hero -> intake preview -> workflow/process -> campaign pack preview -> testimonials -> FAQ -> final CTA.
- Visual direction: Level 3 bold/memorable with market-specific anchor.
- Prompt excerpt: "Create a listing-launch website that sells certainty: show intake-to-output workflow in 4 steps, preview MLS/social/email assets, and route CTAs to demo booking for broker teams."

### Example 3: Local plumbing/electrician business

- Selected archetype: Local service business.
- Why chosen: High-intent local leads and urgent trust-based conversion.
- Recommended page architecture: Home, Services, Service Areas, Reviews, Contact.
- Section flow: Hero -> services -> trust/security/certifications -> testimonials -> FAQ -> final CTA.
- Visual direction: Level 1 clean/basic/trustworthy.
- Prompt excerpt: "Design a local service site where above-the-fold includes phone CTA, service area, emergency availability, and trust badges; prioritize fast quote conversion over visual experimentation."

### Example 4: Premium spa/wellness studio

- Selected archetype: Luxury service/premium brand.
- Why chosen: High-ticket experiential service requiring premium trust and aspiration.
- Recommended page architecture: Home, Signature Treatments, Method, Stories, Booking.
- Section flow: Hero -> transformation story -> offer/pricing -> testimonials -> risk reversal -> final CTA.
- Visual direction: Level 2 premium/polished with refined material cues.
- Prompt excerpt: "Build a premium wellness site that signals calm authority through restrained typography and curated imagery while keeping booking CTA explicit and visible in every major section."

### Example 5: Creator course launch

- Selected archetype: Creator/course launch.
- Why chosen: Outcome-focused program enrollment with objection handling.
- Recommended page architecture: Home, Curriculum, Results, Pricing, Enrollment.
- Section flow: Hero -> problem framing -> transformation story -> curriculum -> testimonials/proof -> FAQ -> final CTA.
- Visual direction: Level 3 bold/memorable with strong narrative momentum.
- Prompt excerpt: "Create a course launch page that states who this is for, what transformation occurs by week 6, includes syllabus snapshot, and uses deadline-based CTA to enroll."

### Example 6: Ecommerce skincare product

- Selected archetype: Ecommerce product launch.
- Why chosen: Direct-purchase product with ingredient/proof trust needs.
- Recommended page architecture: Product Home, Benefits, Ingredients/Science, Reviews, Purchase.
- Section flow: Hero -> product proof artifact -> before/after -> comparison -> FAQ -> final CTA.
- Visual direction: Level 2 premium/polished.
- Prompt excerpt: "Design a skincare launch page where hero pairs product shot + skin outcome claim, then proves trust via ingredient science and before/after evidence before purchase CTA."

### Example 7: Boutique agency/studio

- Selected archetype: Agency/studio site.
- Why chosen: Service conversion depends on credibility and case outcomes.
- Recommended page architecture: Home, Services, Case Studies, Process, Contact.
- Section flow: Hero -> use cases -> case studies -> workflow/process -> testimonials -> final CTA.
- Visual direction: Level 3 bold/memorable with distinct editorial rhythm.
- Prompt excerpt: "Create a studio site that filters for fit: show 3 case outcomes with measurable impact, explain method in 4 steps, and drive qualified project inquiries."

### Example 8: AI Web Factory front door / guided launch kit platform

- Selected archetype: Guided intake/productized service site + AI/SaaS product support.
- Why chosen: Users need guided intake plus systemized outputs and trust in generated launch artifacts.
- Recommended page architecture: Home, Intake Flow, Output System, Packages/Pricing, Proof, Start Intake.
- Section flow: Hero -> intake preview -> generated output preview -> launch plan -> trust/security -> FAQ -> final CTA.
- Visual direction: Level 3 bold/memorable with productized output anchor.
- Prompt excerpt: "Build the AI Web Factory front door as a guided launch system: hero promises complete launch kit from one intake, show artifact bundle preview, and route primary CTA to start guided intake."

## 9. Anti-generic gates

Before implementation, answer each gate with Pass/Fail and one-line evidence:

1. Does this look like every SaaS page?
2. Is the hero just text + cards?
3. Is the page structure copied from the last project?
4. Did the agent select an archetype or just start coding?
5. Is the visual anchor business-specific?
6. Is the conversion path clear?
7. Does the structure match the buyer's trust problem?
8. Is the site selling a business outcome, not just features?

If any gate fails, revise architecture and prompt before build.

## 10. Critique learning loop (required)

Future agents must convert critique into durable rules, not one-off edits.

For each critique:

- Mistake observed
- Why it happened
- Rule learned
- Future checklist gate
- Decision: Accept current artifact, revise, or reject

### Critique examples

1. "Looks like a wireframe/spec, not a selling page."
   - Why happened: Agent prioritized structure labels over persuasive hierarchy.
   - Rule learned: Every major section needs buyer-facing value + proof + action logic.
   - Future gate: "Could a buyer make a decision from this section?"
   - Decision: Revise.

2. "Too empty / not enough screen presence."
   - Why happened: Over-correction toward minimalism without anchor depth.
   - Rule learned: Sparse layouts still need one strong visual anchor and proof density.
   - Future gate: "Is there enough visual weight to hold attention?"
   - Decision: Revise.

3. "All designs use the same structure."
   - Why happened: No archetype-driven branching, reused prior sequence.
   - Rule learned: Force archetype + trust-problem specific section order.
   - Future gate: "How is this structure materially different from recent output?"
   - Decision: Reject if repeated.

4. "Hero is text plus cards."
   - Why happened: Defaulted to template hero with no product-specific anchor.
   - Rule learned: Hero must include category-specific proof anchor.
   - Future gate: "What concrete artifact proves value above fold?"
   - Decision: Revise.

5. "Fullscreen means stretched background, not recomposed layout."
   - Why happened: Treated scale as background treatment only.
   - Rule learned: Fullscreen requires composition changes, not just backdrop size.
   - Future gate: "Did layout hierarchy recompose for larger canvas?"
   - Decision: Revise.

6. "Visual style does not match business category."
   - Why happened: Chosen visual direction ignored category trust norms.
   - Rule learned: Visual ambition must be mapped against trust problem and buyer expectations.
   - Future gate: "Would this style help or hurt trust for this buyer?"
   - Decision: Revise or reject.

7. "It generated a website but not a launch system."
   - Why happened: Focused only on page polish, skipped business outputs.
   - Rule learned: For launch tasks, include offers, proof strategy, and campaign output framing.
   - Future gate: "Did output include business launch system, not only pages?"
   - Decision: Revise.

## 11. Future agent workflow (mandatory)

### Before implementation

1. Read brief.
2. Fill architecture decision table.
3. Select archetype.
4. Generate internal production prompt.
5. Check anti-generic gates.
6. Check prior critique lessons if available.
7. Only then build.

### After implementation

1. Score against archetype fit.
2. Score against conversion clarity.
3. Score against visual memorability.
4. Score against business specificity.
5. Explain whether generated prompt was followed.
6. Record critique lessons if human feedback is provided.

## 12. Completion checklist for full-site tasks

Future agents cannot mark full-site work complete unless they include:

- selected archetype
- architecture decision table
- generated internal production prompt
- section sequence
- visual anchor rationale
- anti-generic gate results
- critique learning notes when relevant
- build result
- changed file scope
