# Design Skills

AI Web Factory keeps design guidance local so agents can improve UI quality without redesigning the product by default. The installed skills live in `.agents/skills/`, with Taste Skill guidance from `Leonxlnx/taste-skill` and Impeccable from `pbakaus/impeccable`.

## What each skill is for

- **Taste Skill:** Use the Taste Skill set to avoid generic AI output, choose stronger visual direction, check spacing and typography decisions, and keep frontend implementation aligned with premium product UI standards.
- **Impeccable:** Use Impeccable-style review to critique, audit, polish, and approve frontend interfaces with stricter attention to hierarchy, responsive behavior, accessibility, interaction states, copy, and visual craft.
- **AI Factory Design Intelligence:** Use `ai-factory-design-intelligence` before AI Web Factory-specific dashboard, catalog, review, card, shell, or atmosphere work. It defines the product's operator-grade style taxonomy, palette and typography reasoning, density rules, motion/3D readiness, anti-patterns, acceptance criteria, screenshot QA, and before/after proof requirements.
- **AI Factory Taste Engine:** Use `ai-factory-taste-engine` before non-trivial visual UI work to run a modern premium taste gate, compare 2-3 materially different directions, score each direction, and reject generic dark-dashboard regressions before implementation.
- **AI Factory Design Research Corpus:** Use `ai-factory-design-research-corpus` before major website generation, full-site visual direction, broad landing-page concepting, or hero direction work that risks repeating the same dark geometric/product-object style family. It requires category diversity, design-gene selection, reference-to-originality transformations, three materially different directions, expanded scoring, and same-family rejection before implementation.
- **AI Launch Kit Generator:** Use `ai-launch-kit-generator` when a user asks to turn a product idea into a launch-ready package, landing page, startup/SaaS site, product marketing site, campaign page, full website prototype, business asset set, launch strategy, or "make this idea real" workflow. It codifies the LaunchPilot AI pilot process into positioning, audience, offer, art directions, full prototype, pricing, proof, launch copy, campaign angles, evaluation, and one next step.
- **AI Website Architecture + Prompt Composer Engine:** Use `ai-website-architecture-prompt-composer` before any full website generation, landing page generation, launch kit site generation, or product front-door generation. It requires selecting an archetype, building an architecture decision table, generating a business-specific internal production prompt, running anti-generic gates, and capturing critique lessons before implementation.
- **AI Full Site Builder Workflow:** Use `ai-full-site-builder-workflow` before any full website generation, landing page generation, launch kit site generation, product front-door experience, multi-page prototype, major website redesign, or high-stakes visual direction work. It is the mandatory orchestration workflow that sequences architecture, launch-kit planning, design research corpus selection, taste scoring, internal production prompt finalization, implementation plan, build validation, critique loop, and scope confirmation before completion.
- **AI External UI Design Stack Integration:** Use `ai-external-ui-design-stack-integration` after architecture and launch-kit planning but before implementation for high-fidelity website and front-door work. It defines how to safely use external UI/UX skills, component stacks, motion systems, and reference principles as execution support without replacing AI Web Factory strategy engines, including licensing/attribution checks, anti-copy gates, anti-generic gates, and Site DNA adaptation rules.
- **Visual Research and Atmosphere:** Use `visual-research-and-atmosphere` before app-shell, background, lighting, depth, or material passes. It requires reference research, direction synthesis, anti-repetition checks, desktop/mobile screenshots, build and QA validation, and a self-critique so future atmosphere passes stay varied instead of repeating the same dark-gradient treatment.

## Builder agents

- Use Taste Skill guidance before visual UI work, including dashboards, component catalog updates, pipeline views, review queue changes, empty states, and visual states.
- Use `ai-website-architecture-prompt-composer` before full website generation, landing-page generation, launch kit site generation, or front-door product experience generation so architecture and internal production prompt quality are set before coding.
- Use `ai-full-site-builder-workflow` as the mandatory bridge before any full website, landing page, launch kit site, front-door product experience, multi-page prototype, major website redesign, or high-stakes visual direction task. Do not start coding directly from the user prompt for these scopes.
- For high-fidelity website generation, premium landing pages, customer-facing front doors, launch-kit sites, and major visual redesigns, run `ai-external-ui-design-stack-integration` after architecture/full-site planning and before implementation to choose external execution support safely.
- Use `ai-factory-design-research-corpus` before major website generation, homepage/landing-page art direction, broad hero exploration, or any direction work that must break out of repeated same-family visual concepts.
- Use `ai-launch-kit-generator` before creating launch kits, product launch packages, startup/product marketing sites, campaign pages, or business asset generation so the website remains one output inside a broader commercial launch system.
- Use `ai-factory-taste-engine` before non-trivial visual UI work to enforce premium product taste, anti-generic filtering, and direction scoring before coding.
- Use `ai-factory-design-intelligence` to choose a product-specific direction before changing AI Web Factory dashboards, catalogs, review surfaces, cards, app shell, or atmosphere.
- Keep external stacks in execution scope only: they can inform component quality, layout polish, interaction patterns, and responsive behavior, but cannot decide business positioning, conversion goals, pricing logic, site archetype, product promise, or launch-kit strategy.
- Use it to pick a clear design direction, reduce generic SaaS defaults, and avoid reflexive purple gradients, glassmorphism, random glow, bounce easing, and cramped padding.
- Use `visual-research-and-atmosphere` when the work changes the app's environmental feel: global backgrounds, page atmosphere, shell framing, lighting, texture, material quality, or route-level visual depth.
- Before any new visual implementation, read and align with `docs/design-learning-report-v1.md`.
- For non-trivial UI work, require a short direction brief (named direction, first-read goal, palette roles, typography hierarchy, anti-patterns avoided) before coding.
- Force at least one materially different alternative direction during shaping; reject tiny cosmetic-only passes that preserve the same old dashboard loop.
- Do not mark any item or component as Featured. The human owner is the only person who can make that call.

## Reviewer agents

- Use Impeccable-style review before approving UI changes.
- Confirm submitted work includes the taste score and that weak-scoring directions were rejected.
- Review screenshots at desktop and mobile widths with Playwright.
- Reject UI that looks like a generic AI SaaS template, even if it technically works.
- Confirm the component is reusable, the purpose is obvious, the typography hierarchy is clear, and spacing is consistent.
- Reject work that reintroduces known anti-pattern loops from `docs/design-learning-report-v1.md`: weak-glow dark dashboard, retro control room, terminal/blueprint skinning, dense equal-weight admin panels, generic SaaS hero blocks, nested cards, and tiny low-delta visual diffs.

## Screenshot QA

After visual changes, run `npm run qa` and capture Playwright screenshots for both desktop and mobile. `npm run qa` currently runs build plus Playwright screenshots. Screenshots should show the changed route or component in the state a user will actually see, not just the homepage unless the homepage changed.

Review screenshots for:

- Layout integrity at desktop and mobile widths.
- Clear hierarchy from title to body copy to action.
- Comfortable spacing and alignment.
- Useful interactive, empty, loading, and error states when relevant.
- Visual choices that fit AI Web Factory's operational dashboard/catalog context.

## AI slop in this project

AI slop means work that feels generated instead of designed:

- Generic SaaS hero/card layouts with no product-specific point of view.
- Purple-blue gradients, glass panels, glows, and decorative blobs used without a real purpose.
- Cramped padding, inconsistent gaps, vague labels, or weak typography hierarchy.
- Overanimated bounce easing, arbitrary shimmer, or motion that distracts from product workflows.
- Components that solve only one mocked example instead of becoming reusable product pieces.
- Unreviewed desktop-only UI that breaks or loses hierarchy on mobile.

## Premium UI in this project

Premium UI means restrained, durable product design:

- Clear information hierarchy for dashboards, catalogs, review queues, and operational data.
- Consistent spacing, alignment, and responsive behavior.
- Reusable components with obvious states and purposeful CTAs.
- Color, motion, and depth used sparingly to clarify meaning.
- Copy that explains what the user can do next.
- Screenshots that hold up on desktop and mobile.

## Before approving UI

- Desktop screenshot reviewed
- Mobile screenshot reviewed
- Spacing is consistent
- Typography hierarchy is clear
- Component is reusable
- CTA or purpose is obvious
- No generic AI SaaS look
- Direction is named and first-read intent is explicit
- No repeated anti-pattern loops from `docs/design-learning-report-v1.md`
- The visual pass is materially different, not a tiny cosmetic-only diff
- `npm run qa` passed
