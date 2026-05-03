---
name: ai-launch-kit-generator
description: Reusable AI Web Factory workflow for turning a product idea into a complete launch kit: positioning, audience, offer, art direction, full website prototype, pricing, proof, launch copy, campaigns, evaluation, and next iteration guidance.
---

# AI Launch Kit Generator Skill v1

## 1. Purpose

Use this skill to turn a product idea into a launch-ready commercial package, not just a website.

The LaunchPilot AI full website pilot proved that full launch-system generation works better than hero-only exploration because it created a product brief, diverse art directions, scoring, a coherent multi-page prototype, and an honest evaluation. Use that pilot as a process reference only. Do not copy its beige editorial style, page copy, pricing, layout, or visual identity.

The output should make the product feel real enough to evaluate: who buys it, what they get, why it matters, how it is priced, how it proves value, how it launches, and what should improve next.

## 2. When to use

Use this skill when a user asks for:

- a new product launch
- a landing page
- a startup website
- a SaaS site
- a product marketing site
- a campaign page
- a full website prototype
- business asset generation
- launch strategy
- "make this idea real"
- "create a site for this product"

Use it for many categories, including bright creator tools, premium editorial products, cinematic products, developer tools, luxury products, fintech trust products, local businesses, ecommerce, personal brands, agency offers, and mobile app launches.

Do not use this skill as permission to edit production UI unless the user explicitly asks for production implementation. For docs/prototype launch kits, work under `docs/launch-kits/[project-name]/`.

## 3. Required input model

Infer these fields from the prompt. Ask only when the missing information would materially block the launch kit:

- product idea
- target audience
- offer / promise
- business model
- desired tone
- category / niche
- primary conversion goal
- constraints
- preferred level of visual boldness

If inputs are missing, make reasonable assumptions and state them clearly in `product-brief.md`. Do not block progress for normal launch ambiguity.

## 4. Required output model

A complete launch kit includes:

- product brief
- positioning
- audience and pain points
- offer
- brand personality
- 3 materially different art directions
- selected winner
- full website prototype
- pricing model
- proof / use cases
- launch copy pack
- campaign angles
- FAQ / objection handling
- evaluation
- self-critique
- next iteration plan

The website is one output inside the launch kit, not the whole deliverable.

## 5. Art direction process

Before implementation:

1. Use `ai-factory-design-research-corpus` and read `docs/design-research-corpus-v1.md`.
2. Use `ai-factory-taste-engine` for scoring and anti-pattern checks.
3. Select 2-3 reference categories from the corpus.
4. Select at least 8 design genes.
5. Create 3 materially different art directions.
6. Score each direction honestly.
7. Reject same-family repeats, especially directions that only change color or copy.
8. Choose one winner before creating prototype pages.

Material difference means the directions vary by composition, visual anchor, atmosphere, proof strategy, section flow, and buyer psychology, not merely palette.

## 6. Website structure

Default website package:

- homepage
- product / how it works
- pricing
- customers / proof / use cases
- contact / demo / final CTA

Use a smaller site only when the product is intentionally narrow, early, or single-conversion. Minimum smaller package: homepage, proof/pricing section, and final CTA.

Use a larger site when the product requires regulated trust, marketplace education, multiple audiences, technical documentation, ecommerce catalog depth, partner pages, or content-led acquisition. Add pages only when they improve buyer understanding or conversion.

## 7. Launch copy pack

Include these copy outputs in `launch-copy-pack.md`:

- one-line positioning statement
- hero headline options
- CTA options
- feature messaging
- pricing copy
- social launch post ideas
- email announcement draft
- ad angle ideas
- FAQ answers
- objection handling

Copy should be specific to the buyer, category, offer, and conversion goal. Reject generic SaaS filler such as "unlock your potential" or "all-in-one AI platform" unless the surrounding proof makes it concrete.

## 8. Quality gates

A launch kit fails if:

- it is only a hero
- it looks like a dashboard
- it uses generic SaaS filler
- it has no clear buyer
- it has no clear offer
- pricing is random or unbelievable
- proof is fake-hype
- pages do not share a coherent visual system
- homepage is polished but other pages are weak
- visual direction repeats the previous same-family style without reason

## 9. Scoring rubric

Score the final launch kit from 0 to 1 on each dimension, then total the score out of 12:

1. product clarity
2. audience fit
3. offer strength
4. visual memorability
5. commercial trust
6. full-site coherence
7. section rhythm
8. copy quality
9. pricing believability
10. launch usefulness
11. originality
12. implementation realism

Decision thresholds:

- below 8.0 = reject and revise
- 8.0-9.5 = usable but needs a sharper pass
- 9.5-10.8 = strong v1 launch kit
- 10.8+ = excellent candidate for polish or production conversion

## 10. Anti-copy / originality rules

- Do not copy real brands.
- Do not copy layouts one-to-one.
- Do not use copyrighted screenshots or assets.
- Use references as principles only.
- Transform any reference principle across product story, layout, and visual treatment.
- Reject any result that would still be recognizable as a specific reference after swapping the logo.

## 11. Required folder/file structure

For a launch kit task, create:

```text
docs/launch-kits/[project-name]/
- product-brief.md
- art-directions.md
- launch-copy-pack.md
- evaluation.md
- site/
  - index.html
  - product.html
  - pricing.html
  - customers.html
  - contact.html
  - shared.css
  - shared.js if needed
```

Use URL-safe, lowercase kebab-case for `[project-name]`.

## 12. Validation protocol

For docs/prototype launch kits:

- run `npm run build`
- do not run long screenshot QA unless explicitly requested
- confirm no production UI changes
- confirm no package/dependency changes

For production UI conversion work, follow `AGENTS.md`, `docs/design-skills.md`, and the relevant UI/design skills.

## 13. Review protocol

Future reviewers should check:

- Does this feel like a real product?
- Would the target buyer understand the offer?
- Is the website only one part of a broader launch kit?
- Are all pages coherent?
- Is there a memorable brand direction?
- Is the pricing believable?
- Is the output useful enough to move a business forward?

## 14. Next-step protocol

After creating a launch kit, recommend exactly one next step:

- polish the winning website
- generate campaign assets
- adapt to another niche
- convert prototype into production
- create a variant for a different audience

Choose the one next step that best matches the evaluation. Do not list multiple optional next steps.
