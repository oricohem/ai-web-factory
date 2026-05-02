# AI Web Factory Design Audit v1

Audit date: 2026-05-02

## Scope and evidence

- Reviewed `AGENTS.md`.
- Reviewed `docs/screenshot-qa.md`.
- Attempted to review `docs/design-skills.md`; the file is not present in this checkout.
- Attempted to review installed skills under `.agents/skills`, including `impeccable`, `design-taste-frontend`, `high-end-visual-design`, `gpt-taste`, and `stitch-design-taste`; `.agents/skills` is not present in this checkout.
- Ran Playwright screenshot QA for:
  - `/`
  - `/components`
  - `/pipelines`
  - `/review-queue`
  - Desktop: `1440x1000`
  - Mobile: `390x844`

## Overall score

**6.5 / 10**

The current UI is coherent and usable, but it reads as a generic dark SaaS dashboard rather than a premium internal AI factory tool. It uses familiar Tailwind-era patterns: dark panels, translucent borders, purple gradients, rounded cards, small status pills, and generic glowing AI branding. The strict scoring cap applies because the interface looks generic, mobile density is weak, spacing rhythm is inconsistent, and the visual system does not yet feel distinctive or premium.

## Approval status

**Needs Polish**

Do not mark this as an Approved Candidate yet. Under the requested standard, approval requires an 8.5+ overall score, and this build is meaningfully below that bar.

## Page-by-page scores

| Page | Score | Rationale |
| --- | ---: | --- |
| Home dashboard | 6.5 / 10 | Clear structure and useful summary content, but the stat cards and list panels feel template-like. The page has reasonable scan flow, yet the repeated panel treatment keeps it flat. |
| Components catalog | 6.0 / 10 | The weakest page visually. Large placeholder previews dominate both desktop and mobile while actual component metadata is pushed down. It feels more like a mock catalog than a production-quality internal tool. |
| Pipelines catalog | 6.5 / 10 | Better density than Components and the two-column desktop layout works, but the many chips create visual noise. The page communicates inventory, not operational command. |
| Review Queue | 7.0 / 10 | The strongest page because the list/table pattern is compact and task oriented. It still inherits low-contrast metadata, small badges, and generic dark-SaaS styling. |

## Desktop issues

- The sidebar has correct navigation structure, but the brand area is generic and the lower "Local catalog" note feels like scaffolding rather than a polished product surface.
- Page headers are serviceable but not memorable; titles, descriptions, and controls share too similar a visual weight.
- Component cards dedicate too much vertical space to abstract placeholder art, creating low information density above the fold.
- Many surfaces use the same rounded dark card, faint border, and subtle hover treatment, making pages feel visually flat.
- The content max width is sensible, but several desktop layouts have large areas where visual weight is spent on chrome instead of decision-critical information.

## Mobile issues

- Mobile pages are functional but vertically bloated. The Components page is especially weak because each placeholder preview consumes too much scroll height.
- Filter pills wrap into multiple lines on mobile, crowding the top of catalog pages and delaying access to content.
- The mobile header combines a hamburger icon with the word "Menu"; this is redundant and adds low-value weight.
- Cards mostly stack desktop content instead of using mobile-specific prioritization.
- Metadata and badges become small and visually busy on narrow screens, especially in card footers and dense chip groups.

## Typography issues

- Secondary text is frequently too muted against the dark background, especially descriptions, dates, authors, helper text, and labels.
- The type scale lacks enough contrast between page intent, section labels, item names, and metadata.
- Many labels use very small sizes (`10px`-like utility classes), which hurts legibility on mobile and lower-density screens.
- Mono numerals and tags are appropriate for an operations product, but they are overused enough that they stop feeling intentional.

## Spacing issues

- Section spacing is generous, but internal card spacing is not always tuned to content priority.
- Component cards have excessive preview-to-content imbalance.
- Pipeline cards have disconnected vertical groups: description, includes, dependencies, and last-run metadata read as stacked fragments.
- Home dashboard panels are evenly spaced but not sufficiently differentiated by task importance.
- Mobile spacing should be denser and more deliberate; current stacking makes pages feel longer than their information content requires.

## Visual hierarchy issues

- The strongest visual elements are decorative glows, borders, and score bars, not the highest-value operational information.
- Primary actions do not feel primary. Links and outline-style buttons are quiet, so users do not get a strong next-action cue.
- Status, category, score, and tag pills compete with each other because they share similar size, shape, and contrast.
- The Review Queue has the clearest hierarchy, but mobile hides status and score below item metadata, reducing fast triage value.
- The product lacks a distinct "factory control room" hierarchy: there is no obvious system state, operational priority, or urgency model.

## Generic AI/SaaS design tells

- Purple/fuchsia gradient AI logo with "AI" initials.
- Dark zinc background with translucent white cards and borders.
- Neon violet, emerald, sky, and amber accent colors.
- Abstract grid placeholder previews instead of real component evidence.
- Rounded pill tags for nearly every classification.
- Copy such as "AI pipelines", "quality signals", and "mock data" feels plausible but not yet product-specific.

## Reusability issues

- `CategoryPill` is used for both static category labels and interactive filters, which makes interactivity ambiguous.
- Component and pipeline cards share broad visual patterns but not a clear reusable content hierarchy.
- Score, status, category, and tag treatments are all separate visual primitives without a stronger taxonomy for priority.
- Placeholder previews are reusable, but they are too generic to support a premium catalog experience.
- The shell and header are reusable, but the brand and page-level action areas are underdeveloped.

## Accessibility concerns

- Several secondary text colors likely need stronger contrast against the dark background.
- Very small text in tags, labels, metadata, and score labels can become difficult to read on mobile.
- Score bars rely heavily on color. The numeric score helps, but the bar meaning is still color-led.
- Color distinctions between statuses may not be enough for colorblind users without stronger iconography or text hierarchy.
- The mobile menu trigger is accessible by label, but the visible "Menu" copy adds redundancy rather than clarity.

## Top 10 exact improvements to make next

1. Replace the generic AI mark with a sharper internal-tool identity system: stronger wordmark, less neon, more operational specificity.
2. Increase secondary text contrast and define accessible text color tokens for labels, descriptions, metadata, and disabled/helper copy.
3. Redesign component cards to reduce placeholder height and prioritize name, category, status, score, and recent change information above decorative preview space.
4. Convert mobile filter pills into a horizontally scrollable control row or compact segmented filter to prevent multi-line wrapping.
5. Create a stronger action hierarchy for page-level actions and list actions, including a true primary button style.
6. Separate static labels from interactive filter pills so users can immediately distinguish data from controls.
7. Tighten mobile card spacing and reorder mobile content so the most decision-critical fields appear first.
8. Reduce chip noise in pipeline cards by grouping includes and dependencies into summarized counts with expandable/detail states later.
9. Introduce a more distinctive factory-system visual language: queues, runs, approvals, dependencies, health, and risk should have purpose-built treatments.
10. Establish a stricter spacing rhythm for page headers, cards, lists, and mobile stacks so density feels intentional instead of template-derived.

## Things that should not be changed yet

- Do not change the route structure; Home, Components, Pipelines, and Review Queue are the right primary sections.
- Do not add auth, database, or backend state as part of visual polish.
- Do not rewrite the app shell before the visual direction is defined; the current sidebar/content skeleton is usable.
- Do not remove scores, statuses, dependencies, authors, or dates; these are valuable for an internal AI factory tool.
- Do not replace mock data yet; first improve how the existing information is prioritized and presented.
- Do not chase animation or decorative effects before fixing density, contrast, hierarchy, and mobile behavior.
- Do not mark the UI as approved until it clears the generic-SaaS cap and reaches at least 8.5 / 10.
