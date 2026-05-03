# Design Skills

AI Web Factory keeps design guidance local so agents can improve UI quality without redesigning the product by default. The installed skills live in `.agents/skills/`, with Taste Skill guidance from `Leonxlnx/taste-skill` and Impeccable from `pbakaus/impeccable`.

## What each skill is for

- **Taste Skill:** Use the Taste Skill set to avoid generic AI output, choose stronger visual direction, check spacing and typography decisions, and keep frontend implementation aligned with premium product UI standards.
- **Impeccable:** Use Impeccable-style review to critique, audit, polish, and approve frontend interfaces with stricter attention to hierarchy, responsive behavior, accessibility, interaction states, copy, and visual craft.
- **Visual Research and Atmosphere:** Use `visual-research-and-atmosphere` before app-shell, background, lighting, depth, or material passes. It requires reference research, direction synthesis, anti-repetition checks, desktop/mobile screenshots, build and QA validation, and a self-critique so future atmosphere passes stay varied instead of repeating the same dark-gradient treatment.

## Builder agents

- Use Taste Skill guidance before visual UI work, including dashboards, component catalog updates, pipeline views, review queue changes, empty states, and visual states.
- Use it to pick a clear design direction, reduce generic SaaS defaults, and avoid reflexive purple gradients, glassmorphism, random glow, bounce easing, and cramped padding.
- Use `visual-research-and-atmosphere` when the work changes the app's environmental feel: global backgrounds, page atmosphere, shell framing, lighting, texture, material quality, or route-level visual depth.
- Do not mark any item or component as Featured. The human owner is the only person who can make that call.

## Reviewer agents

- Use Impeccable-style review before approving UI changes.
- Review screenshots at desktop and mobile widths with Playwright.
- Reject UI that looks like a generic AI SaaS template, even if it technically works.
- Confirm the component is reusable, the purpose is obvious, the typography hierarchy is clear, and spacing is consistent.

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
- `npm run qa` passed
