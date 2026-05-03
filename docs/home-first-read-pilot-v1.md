# Home Route First-Read Pilot v1

## Scope

- Route: `/` only.
- Zone: first-read/hero only.
- Keep existing dashboard sections below the hero mostly unchanged.

## Anti-repetition note

This pass must avoid the repeated dark-dashboard loop (weak glow, control-room skin, equal-weight panel wall). It should move toward a landing-grade first read with clear brand intent, focused CTA hierarchy, and one visible proof artifact.

## Direction A — Editorial Machine Room Landing Rail

- First-read goal: communicate the product promise in one strong line, then show the operator where to act next.
- Palette roles:
  - Base: graphite canvas (existing app base)
  - Surface: warm charcoal/ink surfaces with restrained edge lighting
  - Text: high-contrast warm neutrals
  - Accent: disciplined amber for primary action only
  - Status: green/amber/red remain status-only and separate from brand accent
- Typography hierarchy:
  - Display statement: dominant, left-rail narrative headline
  - Support copy: medium-length explanatory paragraph
  - CTA labels: compact, explicit verbs
  - Evidence labels: monospace micro-labels for proof metadata
- Anti-patterns intentionally avoided:
  - no generic dark dashboard hero
  - no terminal/blueprint treatment
  - no cards-inside-cards composition
  - no equal-weight dense panel wall in first viewport

## Direction B — Systems Observatory Signal Stage

- First-read goal: show system relationships at a glance through a spatial signal map, then direct action via lightweight controls.
- Palette roles:
  - Base: cool slate field with map-like contour tones
  - Surface: translucent tactical layers
  - Text: neutral bright labels with cyan signal accents
  - Accent: cyan
  - Status: standard green/amber/red
- Typography hierarchy:
  - Mid-size headline with map-first visual priority
  - Technical labels and legend-led structure
  - Compact CTAs integrated with map controls
- Anti-patterns intentionally avoided:
  - no retro HUD imitation
  - no ornamental constellation decoration without utility
  - no over-dense card wall

## Chosen direction

Chosen: **Direction A — Editorial Machine Room Landing Rail**.

Why this one now:

1. Stronger first-read clarity for a homepage pilot; the message lands before metrics.
2. Better CTA hierarchy with minimal structural changes to the existing route.
3. Easier to keep below-the-fold dashboard content unchanged while still creating a material visual and structural break from the current hero pattern.
4. Lower risk of drifting into control-room or blueprint anti-patterns during a focused hero-only pass.

## Intentionally not changed in this pilot

- Route structure and navigation.
- Data models and mock data.
- Component, pipelines, and review-queue pages.
- Existing dashboard modules below the homepage hero, except for minor spacing alignment if required.
