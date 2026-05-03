# AI Web Factory Front Door Concept v1 — Intake Flow

## Intake principles

1. Ask business-shaping questions before visual style questions.
2. Capture constraints that improve downstream agent output quality.
3. Show why each answer changes what gets generated.
4. Keep the flow guided, not open-ended prompt chaos.

## Flow overview

1. Business context
2. Conversion and offer strategy
3. Audience and trust signals
4. Visual direction controls
5. Output package and delivery constraints
6. Preferences and guardrails
7. Generated Launch Brief preview

## Step-by-step questions and why they matter

## Step 1 — Business context

### 1) Industry selector
- Question: "Which industry/category best matches your business?"
- Why it matters:
  - Tunes buyer psychology assumptions.
  - Adapts language and proof style.
  - Shapes recommended site sections and campaign angles.

### 2) Business maturity selector
- Options: idea, new business, existing business, rebrand, launch campaign
- Why it matters:
  - Changes how much positioning/offer invention is needed.
  - Determines whether output should prioritize foundation or optimization.
  - Adjusts risk notes and QA expectations.

## Step 2 — Conversion and offer strategy

### 3) Primary conversion goal selector
- Options:
  - book demo
  - start trial
  - collect leads
  - sell product
  - sell service
  - WhatsApp/contact
  - waitlist
  - app download
- Why it matters:
  - Defines CTA architecture and funnel logic.
  - Controls recommended page sequence.
  - Influences copy pack and campaign channel suggestions.

### 4) Offer type selector
- Options:
  - service
  - SaaS
  - ecommerce product
  - local business
  - creator product
  - course
  - agency offer
  - real estate/listing
  - personal brand
- Why it matters:
  - Determines pricing format and proof type.
  - Selects launch-kit templates and objection handling patterns.
  - Changes output priority (for example, product PDP assets vs lead-gen copy).

## Step 3 — Audience and trust

### 5) Audience selector
- Question: "Who should convert first?"
- Why it matters:
  - Aligns message tone, section hierarchy, and campaign angle.
  - Helps avoid broad generic copy.

### 6) Trust priority selector
- Options:
  - credibility
  - speed
  - luxury
  - clarity
  - authority
  - friendliness
  - technical confidence
- Why it matters:
  - Drives proof strategy and visual language choices.
  - Influences testimonials/case-study emphasis and QA criteria.

## Step 4 — Visual direction controls

### 7) Visual Boldness Level
- Levels:
  1. Clean/basic/trustworthy
  2. Premium/polished
  3. Bold/memorable
  4. Experimental/campaign-grade
  5. Wild/cinematic/high-risk high-reward
- Why it matters:
  - Sets acceptable design risk and brand differentiation pressure.
  - Constrains layout and motion recommendations.

### 8) Optional Motion/3D layer
- Options:
  - none
  - subtle motion
  - premium motion
  - 3D product/object scenes
  - cinematic interactive experience
- Why it matters:
  - Impacts implementation complexity and performance requirements.
  - Defines fallback expectations and risk notes.

## Step 5 — Output and constraints

### 9) Output package selector
- Options:
  - website only
  - website + copy pack
  - launch kit
  - growth kit
  - agency/client handoff kit
- Why it matters:
  - Sets artifact scope and execution timeline assumptions.
  - Determines which modules are required in generated output.

### 10) Budget/urgency selector
- Question: "What budget and urgency profile should the plan respect?"
- Why it matters:
  - Adjusts recommended depth and execution sequencing.
  - Prevents unrealistic output promises.

## Step 6 — Preferences and exclusions

### 11) Reference preferences
- Fields:
  - examples they like
  - examples they dislike
- Why it matters:
  - Provides preference anchors and anti-pattern boundaries.
  - Improves direction fit while preserving originality constraints.

### 12) Must-have sections
- Question: "Which sections are mandatory on day one?"
- Why it matters:
  - Prevents under-scoped output.
  - Increases practical launch readiness.

### 13) Must-avoid styles
- Question: "What styles should be avoided?"
- Why it matters:
  - Explicitly blocks poor-fit aesthetics.
  - Reduces revision loops caused by taste mismatch.

## Step 7 — Launch Brief generation

The system synthesizes answers into a structured Launch Brief preview with:
- product summary
- audience profile
- offer model
- conversion plan
- trust strategy
- visual direction
- output package
- recommended pages/assets
- risks
- next agent actions

## Data quality rules (for future implementation)

1. At least one primary conversion goal is required.
2. Offer type + audience + trust priority cannot be empty.
3. Visual controls are required even for conservative builds.
4. Output package must map to explicit asset checklist.
5. Must-avoid styles should always be preserved as hard constraints.
