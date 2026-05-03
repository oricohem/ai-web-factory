# North Pier v2 Human-Led System Decision Spec

## 1. Executive decision
- North Pier v2 is a new system build and must start from zero composition decisions; do not edit North Pier v1 layout, tokens, or section grammar.
- Mira is a contrast object used to define what not to repeat in North Pier v2; Mira is not a reusable system for this build.
- Structural reference depth for this spec: Soil and Stem Classes is primary for section logic and instructional sequencing; Movement Lab and Boston Tattoo are supporting inputs for restraint and local trust behavior only.

## 2. Anti-Mira system decisions
Exactly 10 decisions; each is observable in a build review.

1. **Hero structure:** Hero must be single-flow, top-down: utility row -> headline block -> operational band. Pass if no two-column split exists in the hero at >=1024px.
2. **Container width:** Primary content container is `80rem` max width, not Mira-like compact center width. Pass if at least 70% of non-full-bleed sections use `max-width: 80rem`.
3. **Section rhythm:** Use fixed rhythm phases: dense (`4rem-5rem`) -> airy (`8.5rem-10.5rem`) -> dense (`4rem-5rem`). Pass if all three phases appear in order at least once.
4. **Card usage:** Do not wrap every section in one repeated rounded shell. Pass if at least 3 major sections render with no outer rounded card container.
5. **CTA pattern:** No primary pill + secondary text-link pair. Pass if major CTA groups use two button-class actions (`solid` + `outlined` or `solid` + `tonal`) and both CTAs use booking/request verbs.
6. **Trust module:** Trust must be operational and local (hours, address, response window, phone). Pass if this module appears before long narrative copy and includes all 4 data points.
7. **FAQ placement:** FAQ must appear before final action dock. Pass if FAQ starts at least one section above final CTA.
8. **Final CTA:** Final CTA is an action dock with immediate operations verbs (`Check openings`, `Request event date`). Pass if no mirrored hero promise sentence appears in final CTA.
9. **Color dominance:** Structural stem/ink colors must carry layout control roles (rules, separators, status chips). Pass if stem+ink occupy >=30% of visible UI tokens across key sections.
10. **Typography behavior:** Display typography is limited to headline/value moments; body and operations metadata use utilitarian sans. Pass if >=80% of paragraph/label text uses body family and not display family.

## 3. Type system spec
- **Display type family behavior:** One serif display family only, used for `h1`, major section openers, and one highlighted phrase per section max.
- **Body type behavior:** One sans family for all paragraphs, labels, nav, table rows, FAQs, and button text.
- **Desktop headline size range:** `h1: 3.5rem-4.5rem` (`56-72px`), `h2: 2.25rem-3rem` (`36-48px`).
- **Mobile headline size range:** `h1: 2.125rem-2.75rem` (`34-44px`), `h2: 1.625rem-2rem` (`26-32px`).
- **Line-height:** Headlines `1.05-1.15`; body copy `1.45-1.6`; labels/tables `1.2-1.35`.
- **Tracking:** Display `-0.02em` to `-0.01em`; labels `0.06em-0.1em` uppercase; body `0em` to `0.01em`.
- **Max-width:** Hero headline max line length `16ch`; section openers `18ch`; body paragraphs `56-66ch`.
- **Label style:** Utility labels are uppercase sans, `0.75rem-0.8125rem` (`12-13px`), medium weight, with `0.08em` tracking.
- **Body copy size:** Desktop `1rem-1.125rem` (`16-18px`); mobile `0.9375rem-1rem` (`15-16px`).
- **Button text behavior:** Sentence case, sans, `0.9375rem-1rem` (`15-16px`), semibold, no all-caps and no text-link-only primary actions.

## 4. Spacing system spec
- **Page margins desktop:** `3rem-4.5rem` (`48-72px`) horizontal gutters.
- **Page margins mobile:** `1.25rem-1.5rem` (`20-24px`) horizontal gutters.
- **Section spacing desktop (default):** `6.5rem-9rem` (`104-144px`) vertical.
- **Section spacing mobile (default):** `4.5rem-6rem` (`72-96px`) vertical.
- **Dense section spacing:** `3.5rem-4.5rem` (`56-72px`) vertical.
- **Airy section spacing:** `8.5rem-10.5rem` (`136-168px`) vertical.
- **Gap values:** Use `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem` (`8/12/16/24/32/40/48px`) only.
- **When full-bleed sections appear:** Minimum one full-bleed band in first three sections and one full-bleed band in final three sections.
- **When narrow rails appear:** Use narrow text rails (`max-width: 42rem`) for service framing copy and FAQ intro copy; do not use narrow rails for ledger data.

## 5. Composition logic spec
1. Start with local utility masthead (no hero split artifact).
2. Follow with availability-first hero in one vertical flow.
3. Include one full-bleed operational band immediately after hero headline block.
4. Include one ledger/table-like workshop date section with row states (`Open`, `Limited`, `Full`).
5. Include one narrow text rail section (`max-width: 42rem`) for service framing.
6. Include at least one major section with no rounded outer shell (for example, service rails on plain substrate with rule separators).
7. Use alternating section structures (rail -> ledger -> strip -> dock), not repeated equal card stacks.
8. No left-copy/right-artifact hero at any breakpoint.

## 6. Palette behavior spec
- **Base background role:** Sea-salt base `#F6F4EE` for global page substrate; target `40-55%` visual area.
- **Structural green/stem color role:** Stem green `#314B3D` for separators, table rules, status chips, and section anchors; target `18-28%` visual area.
- **Slate/ink role:** Ink slate `#1F2522` for text and high-contrast control surfaces; target `15-25%` visual area.
- **Accent color role:** One action accent (`#B8762A` marigold or `#7A3D4E` berry); cap at `<=8%` visual area and reserve for status/action emphasis.
- **Maximum use of warm ivory:** Warm ivory `#EDE3D4` may appear only as secondary zone and must stay `<=20%` visual area.
- **Forbidden color behavior from Mira:** No full-page warm-ivory dominance, no beige-on-beige stacked shells, and no accent-only green that never carries structural separators.

## 7. Component recipe decisions
### 7.1 Local utility masthead
- **Layout structure:** 3 zones in one row at desktop (brand | nav | utility block), 2 rows on mobile (brand/nav then utility block).
- **Typography behavior:** Nav and utility text use label style; brand uses body family at stronger weight, not display.
- **Spacing behavior:** Desktop row height `4.5rem-5rem`; mobile rows `3.5rem` each; bottom rule separates masthead from hero.
- **CTA behavior:** Right utility block has one direct action (`Book`) and one utility action (`Call`).
- **What makes it not Mira:** Starts with operations metadata instead of editorial hero copy block.

### 7.2 Availability-first hero
- **Layout structure:** Vertical stack: utility label -> headline -> short service promise -> two-action row -> availability band.
- **Typography behavior:** `h1` in display family (`56-72px` desktop), support text in body family (`16-18px`).
- **Spacing behavior:** Top padding `6rem-7rem`, headline-to-actions gap `1.5rem-2rem`, hero-to-next section `4rem`.
- **CTA behavior:** Primary `Book a workshop`; secondary `Request event date`; both are button-class elements.
- **What makes it not Mira:** No right-side product artifact panel and no mirrored ecommerce dual intent.

### 7.3 Service rails
- **Layout structure:** Three horizontal rails (`Weekly Arrangements`, `Event Florals`, `Studio Pickup`) with left title column and right detail/action column.
- **Typography behavior:** Rail titles use medium headline scale (`28-36px`); metadata uses label style with tabular numerals where needed.
- **Spacing behavior:** Rail row padding `1.5rem-2rem`; divider line between every rail; no stacked card deck.
- **CTA behavior:** One per rail (`Reserve`, `Start inquiry`, `Schedule pickup`) aligned to row end.
- **What makes it not Mira:** Uses rule-separated operational rows instead of rounded offer cards.

### 7.4 Workshop date ledger
- **Layout structure:** Table-like ledger with columns for date, format, seat state, lead time, action.
- **Typography behavior:** Column headers are uppercase labels; row values are body sans with optional numeric emphasis.
- **Spacing behavior:** Header padding `0.75rem-1rem`; row height `3rem-3.5rem`; section uses dense spacing.
- **CTA behavior:** Row-level `Reserve seat` button appears only for `Open` and `Limited`.
- **What makes it not Mira:** Replaces boutique proof cards with operational inventory states.

### 7.5 Local confidence strip
- **Layout structure:** Full-bleed strip with four blocks: hours, address/map link, response window, recent partners/events.
- **Typography behavior:** Labels in uppercase utility style; values in body sans.
- **Spacing behavior:** Full-bleed vertical padding `2.5rem-3.5rem`; internal block gap `1rem-2rem`.
- **CTA behavior:** Includes one utility CTA (`Get directions` or `Call studio`) only.
- **What makes it not Mira:** Trust is local logistics evidence, not numbered premium claims.

### 7.6 Final action dock
- **Layout structure:** Dock-style closure with concise decision prompt, two primary operational actions, one support line for response timing.
- **Typography behavior:** Prompt uses `h2` display scale; actions and support line use body sans.
- **Spacing behavior:** Top border + `3rem-4rem` vertical padding; button row gap `0.75rem-1rem`.
- **CTA behavior:** Exactly two actions: `Check openings` and `Request event date`; no soft text-link fallback.
- **What makes it not Mira:** Does not restate hero prose and does not use mirrored warm commerce chamber structure.

## 8. Iconic moment placement
- **Selected placement:** Harbor Table Overhead is a **full-width worktable band** directly below hero actions and above service rails.
- **Reason:** This placement turns the moment into practical studio context tied to availability and workshop booking, not a right-side decorative artifact. It also satisfies the full-bleed requirement and keeps the hero grammar operational.

## 9. Cross-comparison checklist
Exactly 12 checks for North Pier v2 vs Mira.

1. **Container width difference:** North Pier primary container is `80rem`; fail if `<=72rem`.
2. **Section spacing difference:** North Pier uses dense (`56-72px`) and airy (`136-168px`) bands; fail if one spacing cadence is used for all major sections.
3. **Hero structure difference:** North Pier hero is vertical flow with operations band; fail if a two-column copy/artifact hero appears at desktop.
4. **Type size difference:** North Pier `h1` desktop minimum is `56px`; fail if hero headline is below `52px` on desktop.
5. **Type pairing difference:** North Pier uses serif display + utilitarian sans body split; fail if display family is used for paragraph text blocks.
6. **Color dominance difference:** Stem+ink combined role is `>=30%`; fail if warm ivory + beige tones exceed `60%`.
7. **Card usage difference:** At least 3 major sections have no rounded outer card shell; fail if most sections are enclosed in matching rounded cards.
8. **CTA pattern difference:** Final and hero CTA groups use two button-class operational verbs; fail if secondary CTA is text-link in either group.
9. **Trust module difference:** Trust strip includes hours, address, response window, and phone before FAQ/final CTA; fail if any field is missing or appears only in footer.
10. **Final CTA difference:** Final dock headline is operational and non-mirrored; fail if final CTA repeats hero promise sentence.
11. **Full-bleed presence:** At least one full-bleed section must appear before the midpoint and one after; fail if all sections stay in one max-width container.
12. **Blink test:** At 1.5-second glance, page should read as local service ledger/workshop booking, not boutique ecommerce object story; fail on confusion.

## 10. Exact next build instruction
Build North Pier v2 from scratch using this system spec. Do not open or edit North Pier v1. Do not reuse Mira CSS variables, spacing rhythm, hero grammar, CTA pattern, or rounded card shell system.
