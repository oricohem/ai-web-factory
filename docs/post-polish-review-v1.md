# AI Web Factory Post-Polish Design Review v1

Review date: 2026-05-02

## Scope and evidence

- Reviewed `AGENTS.md`.
- Reviewed `docs/design-audit-v1.md`.
- Reviewed `docs/visual-identity-v1.md`.
- Reviewed `docs/design-skills.md`.
- Reviewed `docs/screenshot-qa.md`.
- Reviewed PR #6, `UI Polish Pass #1: contrast, density, and mobile filter controls`.
- Ran `npm run build`.
- Ran `npm run qa`.
- Inspected generated Playwright screenshots for:
  - `/`
  - `/components`
  - `/pipelines`
  - `/review-queue`
  - Desktop: `1440x1000`
  - Mobile: `390x844`

## Overall verdict

**Proceed to Visual Identity Implementation.**

UI Polish Pass #1 improved the app enough to build on top of it. It did not make the interface premium or ownable yet, but it fixed enough functional design debt that the next pass can focus on identity instead of basic readability and density.

The app now has a stronger working baseline: clearer text contrast, more compact cards, better mobile filter behavior, and more scannable catalog surfaces. Another functional polish pass would likely produce diminishing returns unless it starts making identity-level decisions. The next implementation pass should keep the improved structure from PR #6 and replace the remaining generic visual language with the Industrial AI Factory direction from `docs/visual-identity-v1.md`.

## Score

| State | Score | Notes |
| --- | ---: | --- |
| Before polish | 6.5 / 10 | Based on `docs/design-audit-v1.md`. The app was coherent but generic, with weak mobile density, muted secondary text, oversized component previews, and repetitive dark SaaS card patterns. |
| After polish | 7.4 / 10 | The UI is more readable and more usable on mobile. Component and pipeline cards are easier to scan. The remaining ceiling is identity, preview credibility, badge noise, and product-specific hierarchy. |

## Direct answers

### 1. Did UI Polish Pass #1 improve readability?

Yes. Primary titles, item names, metric values, descriptions, metadata, and badge labels are easier to read than the baseline described in the first audit. The interface still uses many small labels, but secondary copy no longer feels as buried against the dark canvas.

### 2. Did it improve mobile density?

Yes. Mobile views are still long, but they no longer feel as bloated. The biggest improvement is the horizontal filter treatment on catalog and queue pages, which prevents wrapped pill rows from consuming the top of the viewport. Cards also carry more useful information per screen.

### 3. Did it reduce generic AI SaaS tropes?

Partially. The polish pass reduced some neon emphasis and made the UI calmer, but the app still relies on familiar dark SaaS defaults: glowing metric cards, rounded translucent panels, graph-paper component placeholders, pill-heavy metadata, and expected AI-adjacent accent colors.

### 4. Did it make component cards better or just smaller?

Better, not just smaller. The reduced preview area improves the information balance, and titles, scores, categories, status, and recent-change metadata are more available. The cards still need a deeper redesign because the preview art remains decorative rather than credible component evidence.

### 5. Is this UI now a good foundation for Visual Identity Implementation?

Yes. The page structure, route hierarchy, mobile behavior, and card/list information architecture are stable enough for identity work. The next pass can focus on palette, typography, preview language, status taxonomy, and production-floor visual metaphors without first repairing basic layout issues.

### 6. What problems remain before the "wow" pass?

The app still needs a stronger visual system before it can support a true "wow" pass. The identity is not yet ownable, component previews are not convincing artifacts, pipeline metadata is still noisy, status and score treatments compete, and primary actions do not yet feel like part of a distinctive product language.

### 7. What should the next implementation pass keep from PR #6?

- Keep the stronger secondary text contrast.
- Keep the reduced component preview height as a baseline.
- Keep the mobile horizontal filter rows.
- Keep the tighter card spacing and improved metadata order.
- Keep the clearer action hierarchy introduced on list and page controls.
- Keep the current route structure and app shell skeleton.
- Keep all operational data: scores, statuses, dependencies, authors, dates, review needs, and recent run information.

### 8. What should the next implementation pass replace or rethink?

- Replace generic glowing metric-card accents with a sharper factory or control-room status system.
- Replace graph-paper component placeholders with inspection plates, artifact thumbnails, or credible component evidence.
- Rethink badge taxonomy so category, status, score, filters, dependencies, and tags do not all look like similar pills.
- Rethink pipeline cards around production flow, dependency grouping, readiness, and last-run priority.
- Replace the generic AI brand mark treatment with a structural identity that feels specific to AI Web Factory.
- Rethink primary actions using a restrained amber or production accent from the visual identity direction.

## Page-by-page review

| Page | Before score | After score | Review |
| --- | ---: | ---: | --- |
| Home dashboard | 6.5 / 10 | 7.3 / 10 | Readability is clearly better. Stats and recent activity are easier to scan, and list density feels more useful. The page still reads as a dark SaaS dashboard because the metric cards rely on soft colored glow and generic card rhythm instead of a factory-specific system state. |
| Components catalog | 6.0 / 10 | 7.1 / 10 | This improved the most. Cards are denser, mobile filters are no longer taking over the screen, and component metadata is easier to reach. The remaining issue is not size, it is credibility: preview areas still feel like placeholders rather than real inspected artifacts. |
| Pipelines catalog | 6.5 / 10 | 7.2 / 10 | The page is more compact and readable, especially on mobile. Includes and dependencies remain visually noisy because there are many similar chips, and the cards still communicate inventory more than production flow. |
| Review Queue | 7.0 / 10 | 7.7 / 10 | Still the strongest page. The list pattern is compact, task-oriented, and more readable after polish. It is ready for a visual identity layer, but triage signals should become more distinctive and priority-led. |

## Top 8 remaining issues

1. **Identity is still generic.** The product does not yet look like a precision AI production floor.
2. **Component previews lack evidence value.** The grid placeholders are smaller, but still decorative.
3. **Badge noise remains high.** Too many metadata types use similar rounded-pill treatments.
4. **Pipeline cards need production logic.** Includes, dependencies, readiness, and last run should read as process state, not tag inventory.
5. **Brand mark and shell still feel default.** The sidebar is usable but not yet memorable or product-specific.
6. **Primary actions need a stronger system.** Actions are clearer than before, but not yet decisive or identity-aligned.
7. **Mobile is improved but still stack-heavy.** The layout is usable, but several cards still carry desktop ordering rather than fully mobile-prioritized hierarchy.
8. **The palette remains expected for AI.** The app still leans on dark surfaces, cool accents, and soft glows instead of the warmer industrial palette recommended in the identity direction.

## Recommendation

**Proceed to Visual Identity Implementation.**

Do not run another broad functional polish pass first. PR #6 successfully repaired the main readability and density blockers. The next pass should implement the recommended **Industrial AI Factory with Premium Control Room restraint** direction from `docs/visual-identity-v1.md`.

The next implementation should treat PR #6 as the structural baseline, then replace the generic visual layer: brand mark, palette, card material, preview language, badge taxonomy, pipeline hierarchy, and review triage states.

## Visual Identity Implementation readiness checklist

- **Readability:** Ready enough to build on.
- **Mobile density:** Ready enough to build on.
- **Route structure:** Keep.
- **App shell:** Keep as a skeleton, restyle identity.
- **Component cards:** Keep the compactness, redesign the visual language.
- **Pipeline cards:** Keep the content groups, rethink hierarchy and chip volume.
- **Review Queue:** Keep the list model, sharpen triage signals.
- **Generic SaaS reduction:** Not complete, but ready for identity-level replacement.
