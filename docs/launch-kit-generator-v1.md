# AI Launch Kit Generator v1

## Purpose

AI Launch Kit Generator v1 turns a product idea into a complete launch-ready package. The website is one deliverable inside a larger commercial system that also includes positioning, audience thinking, offer strategy, art direction, pricing, proof, launch copy, campaign angles, evaluation, and next-step guidance.

This workflow codifies the successful `docs/full-website-pilot-v1/` process. The LaunchPilot AI pilot worked because it created a traceable chain from product brief to three art directions, scored winner, full five-page prototype, and honest evaluation. Future launch kits should reuse that process discipline, not the LaunchPilot visual style.

## When to use

Use this workflow when a user asks for:

- A new product launch.
- A landing page.
- A startup website.
- A SaaS site.
- A product marketing site.
- A campaign page.
- A full website prototype.
- Business asset generation.
- Launch strategy.
- "Make this idea real."
- "Create a site for this product."

Do not use it for production UI edits unless the user explicitly asks to convert a launch kit into the app.

## Required input model

Infer these fields from the prompt. Ask only if a missing field would materially change the result:

- Product idea.
- Target audience.
- Offer / promise.
- Business model.
- Desired tone.
- Category / niche.
- Primary conversion goal.
- Constraints.
- Preferred level of visual boldness.

If inputs are missing, make reasonable assumptions and state them clearly in `product-brief.md`.

## Required output model

A complete launch kit includes:

- Product brief.
- Positioning.
- Audience and pain points.
- Offer.
- Brand personality.
- Three materially different art directions.
- Selected winner.
- Full website prototype.
- Pricing model.
- Proof / use cases.
- Launch copy pack.
- Campaign angles.
- FAQ / objection handling.
- Evaluation.
- Self-critique.
- Next iteration plan.

## Art direction process

Before building a prototype:

1. Read `docs/design-research-corpus-v1.md`.
2. Use `ai-factory-design-research-corpus`.
3. Use `ai-factory-taste-engine`.
4. Select two or three reference categories.
5. Select at least eight design genes.
6. Create three materially different art directions.
7. Score each direction honestly.
8. Reject same-family repeats.
9. Choose one winner before implementation.

Materially different means composition, visual anchor, atmosphere, proof strategy, CTA strategy, and section rhythm change in meaningful ways. Palette swaps do not count.

## Website structure

Default website package:

- `index.html` - homepage.
- `product.html` - product / how it works.
- `pricing.html` - pricing model and plan logic.
- `customers.html` - proof / use cases.
- `contact.html` - contact / demo / final CTA.

Use a smaller site only when the user explicitly asks for a lightweight artifact, a campaign splash page, or a quick validation page. Use a larger site when the product requires documentation, marketplace inventory, ecommerce catalog depth, partner pages, enterprise security content, or multiple audience-specific pages.

## Launch copy pack

`launch-copy-pack.md` must include:

- One-line positioning statement.
- Hero headline options.
- CTA options.
- Feature messaging.
- Pricing copy.
- Social launch post ideas.
- Email announcement draft.
- Ad angle ideas.
- FAQ answers.
- Objection handling.

## Quality gates

A launch kit fails if:

- It is only a hero.
- It looks like a dashboard.
- It uses generic SaaS filler.
- It has no clear buyer.
- It has no clear offer.
- Pricing is random or unbelievable.
- Proof is fake-hype.
- Pages do not share a coherent visual system.
- Homepage is polished but other pages are weak.
- Visual direction repeats the previous same-family style without reason.

## Scoring rubric

Score each launch kit from 0 to 1 in each dimension, then total out of 12:

1. Product clarity.
2. Audience fit.
3. Offer strength.
4. Visual memorability.
5. Commercial trust.
6. Full-site coherence.
7. Section rhythm.
8. Copy quality.
9. Pricing believability.
10. Launch usefulness.
11. Originality.
12. Implementation realism.

Decision thresholds:

- Below 8.0: reject and revise.
- 8.0 to 9.5: usable but needs focused iteration.
- 9.5 to 10.5: strong launch-kit foundation.
- 10.5+: high-quality candidate for polish or production conversion.

## Anti-copy / originality rules

- Do not copy real brands.
- Do not copy layouts one-to-one.
- Do not use copyrighted screenshots or assets.
- Use references as principles only.
- Transform every reference principle across product story, layout structure, and visual treatment.
- Reject any direction that can be recognized as a specific reference after swapping the logo.

Supported style families include bright creator-tool, premium editorial, cinematic product, developer tool, luxury product, fintech trust, local business, ecommerce, personal brand, agency offer, and mobile app launch.

## Required folder and file structure

For a launch kit task, create:

```text
docs/launch-kits/[project-name]/
  product-brief.md
  art-directions.md
  launch-copy-pack.md
  evaluation.md
  site/
    index.html
    product.html
    pricing.html
    customers.html
    contact.html
    shared.css
    shared.js if needed
```

Use lowercase kebab-case for `[project-name]`.

## Validation protocol

For docs/prototype launch kits:

- Run `npm run build`.
- Do not run long screenshot QA unless explicitly requested.
- Confirm no production UI changes.
- Confirm no package/dependency changes.
- Do not add dependencies.

For production conversion work, follow `AGENTS.md`, `docs/design-skills.md`, and any applicable frontend QA instructions.

## Review protocol

Future reviewers should check:

- Does this feel like a real product?
- Would the target buyer understand the offer?
- Is the website only one part of a broader launch kit?
- Are all pages coherent?
- Is there a memorable brand direction?
- Is the pricing believable?
- Is the output useful enough to move a business forward?

## Next-step protocol

After creating a launch kit, recommend exactly one next step:

- Polish the winning website.
- Generate campaign assets.
- Adapt to another niche.
- Convert prototype into production.
- Create a variant for a different audience.

## How LaunchPilot AI informs this workflow

The LaunchPilot AI pilot is the process reference:

- `product-brief.md` established buyer, pain, promise, offer, conversion goal, and brand personality.
- `art-directions.md` compared three distinct directions using Design Research Corpus categories, design genes, Taste Engine scoring, corpus scoring, same-family rejection, and a winner.
- `site/` proved a complete five-page prototype is a better test than a hero-only exploration.
- `evaluation.md` reviewed full-site coherence, commercial credibility, visual QA notes, weaknesses, next-pass improvements, and an honest verdict.

Future agents should preserve this sequence while changing the category inputs, commercial strategy, visual system, and page details for each product.
