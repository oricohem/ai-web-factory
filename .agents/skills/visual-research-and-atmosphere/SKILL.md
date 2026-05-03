---
name: visual-research-and-atmosphere
description: Research-led workflow for creating varied, premium AI Web Factory background and atmosphere systems. Use before visual passes that change app shell, page backgrounds, ambient depth, lighting, material feel, or overall visual direction.
---

# Visual Research and Atmosphere Skill

Use this skill when improving AI Web Factory's visual atmosphere, background system, shell framing, depth, lighting, material quality, or overall environmental feel. The goal is not to apply a fixed look. The goal is to repeatedly generate fresh, premium, product-appropriate visual directions that avoid the same generic dark dashboard treatment.

## Core mandate

AI Web Factory should feel operator-grade, precise, engineered, modern, industrial, and high-end. Each atmosphere pass must create a visible step forward while preserving readability, hierarchy, and usefulness.

Do not ship "just nicer gradients." Build an atmospheric system: composition, framing, texture, light, depth, material, and responsive behavior working together.

## Required workflow

### 1. Establish the current baseline

Before researching or coding, inspect the current app in desktop and mobile.

Identify what is already present and what is overused:

- plain black or near-black canvas
- weak radial or linear gradients
- generic SaaS dark mode
- decorative glow without spatial logic
- glass effects used as default styling
- "premium" polish that lacks visible atmosphere
- background layers that do not frame content
- desktop atmosphere that collapses poorly on mobile

Write a short anti-repetition note: "This pass must avoid repeating X and should move toward Y."

### 2. Research 8-15 strong visual references

Collect 8-15 references before coding. Use web search, design galleries, product sites, screenshots, physical environment references, or generated concept boards when appropriate.

Good source categories:

- premium dashboards and operator consoles
- editorial product sites with strong art direction
- immersive SaaS interfaces
- futuristic control-room UIs
- high-end visual systems and identity decks
- cinematic lighting, architecture, hardware, and material references
- industrial monitoring, robotics, manufacturing, aerospace, logistics, security, and observability interfaces
- atmospheric compositions from film stills, installations, studios, control rooms, and product photography

Prefer references with strong:

- atmosphere and depth
- intentional framing
- lighting direction
- material quality
- surface texture
- tonal separation
- foreground/background hierarchy
- readable interfaces inside visually rich environments

Avoid copying layouts, colors, assets, or identifiable brand details. Extract principles only.

### 3. Analyze reference principles

For each reference or reference cluster, extract:

- spatial structure: flat, layered, framed, console-like, room-like, orbital, sectional, cinematic, editorial
- lighting: source direction, falloff, rim light, pools of light, emissive panels, backlight, reflected light
- material: matte metal, smoked glass, phosphor display, paper, ceramic, carbon fiber, brushed aluminum, frosted acrylic
- texture: grain, scanline, mesh, contour, blueprint, dust, noise, halftone, subtle pattern
- composition: central aperture, side rail, topographic field, horizon line, machine bay, stage, command table
- color logic: restrained accent, warm/cool split, desaturated industrial tones, signal color, ambient wash
- readability techniques: scrims, matte panels, dividers, inner strokes, negative space, contrast zones

### 4. Synthesize 2-4 possible directions

Group the references into 2-4 possible atmosphere directions. For each direction, briefly document:

- visual mood
- what makes it strong
- why it fits AI Web Factory
- risks, such as too noisy, too dark, too decorative, too similar to past work, too hard to maintain, too heavy for mobile, or too far from product UI

Then choose one direction for implementation and explain why it is the best next step for this iteration.

### 5. Anti-repetition rule

The chosen direction must be visibly different from the current app and from the previous atmosphere pass.

Before implementation, compare the chosen direction against the current UI:

- If the app already uses a dark canvas, do not rely on plain dark plus glow.
- If the app already uses gradients, add structure, material, framing, or texture instead of stronger gradients.
- If the app already uses soft SaaS polish, move toward engineered specificity.
- If the app already feels dense, add controlled depth and breathing room.
- If the app already feels decorative, reduce effects and make the atmosphere support content.

The chosen direction should be describable in one sentence without mentioning "gradient" or "glow."

### 6. Translate the direction into implementation

Convert the chosen direction into code-level changes. Focus on reusable systems, not one-off decoration.

Implementation targets may include:

- global background layers
- app shell framing
- route-level atmosphere wrappers
- ambient lighting layers
- fixed texture overlays
- depth rails or edge vignettes
- content stage or command-surface framing
- page-specific tonal zones
- material tokens and CSS variables
- subtle motion-ready layers using transform and opacity only

Use layered background systems:

1. substrate: the base color or material field
2. structural layer: grid, contour, aperture, rail, horizon, bay, or shell framing
3. lighting layer: directional ambient light with clear source logic
4. texture layer: grain, noise, scanline, brushed surface, or printed pattern at low opacity
5. content protection layer: scrims, matte surfaces, or contrast zones where text lives

Keep layers maintainable:

- prefer CSS variables and named utility classes for repeated atmosphere primitives
- keep decorative layers `pointer-events: none`
- isolate fixed overlays from scrolling containers
- avoid excessive DOM nodes
- avoid large backdrop blurs on scrolling content
- animate only `transform` and `opacity`
- respect `prefers-reduced-motion`
- avoid random visual clutter

### 7. Product fit guardrails

The final result must feel:

- precise
- intentional
- premium
- engineered
- visually striking
- readable
- appropriate for an operational AI product

It must not feel:

- generic SaaS dark mode
- neon cyberpunk wallpaper
- a decorative Dribbble shot pasted behind data
- noisy, low-contrast, or visually exhausting
- copied from a single reference
- overbuilt with effects that the product does not need

### 8. Readability and UX guardrails

Preserve or improve:

- text contrast
- card and panel separation
- focus states
- content hierarchy
- data legibility
- navigation clarity
- mobile scanning

Decorative visuals must support the product, not compete with it. If a background layer makes real content harder to read, reduce, mask, relocate, or remove that layer.

### 9. Desktop and mobile rules

Think separately about desktop and mobile.

Desktop may carry more:

- spatial depth
- side framing
- large atmospheric fields
- peripheral lighting
- technical grid or rail systems
- layered shell architecture

Mobile should be cleaner:

- fewer layers
- softer contrast shifts
- less peripheral decoration
- stronger content surfaces
- simpler framing
- no horizontal overflow
- no tiny atmospheric details that become noise

Preserve the same design language across breakpoints, but reduce atmosphere intensity on small screens.

### 10. Quality gates every time this skill is used

Each use of this skill must provide:

- researched references or a concise inspiration summary
- 2-4 synthesized directions
- chosen direction and rationale
- anti-repetition note
- what was intentionally not changed
- before and after screenshots for desktop and mobile
- validation results for `npm run build`
- validation results for `npm run qa`
- short self-critique:
  - what improved
  - what still feels weak
  - what should be the next visual pass

For AI Web Factory, `npm run qa` includes build and Playwright screenshots. Still run `npm run build` separately when this skill is used because the quality gate requires explicit build evidence.

## Reusable implementation checklist

Before editing:

- [ ] Read the relevant local design skills: `design-taste-frontend`, `high-end-visual-design`, and `impeccable`.
- [ ] Inspect the current app on desktop and mobile.
- [ ] Collect 8-15 references.
- [ ] Group references into 2-4 directions.
- [ ] Choose one direction that avoids the current visual overuse.
- [ ] Define the background layer stack.
- [ ] Define mobile simplification rules.

While coding:

- [ ] Keep atmosphere layers reusable and named.
- [ ] Keep content surfaces readable.
- [ ] Use off-black or tinted neutrals instead of pure black.
- [ ] Use one disciplined accent family unless the direction explicitly requires a broader palette.
- [ ] Do not use default purple-blue AI gradients.
- [ ] Do not use random glow, blobs, or glass as a substitute for art direction.
- [ ] Keep decorative layers non-interactive.
- [ ] Avoid layout-triggering animations.
- [ ] Avoid heavy blur on scrolling content.

Before approval:

- [ ] Compare before and after screenshots.
- [ ] Check desktop visual impact.
- [ ] Check mobile readability.
- [ ] Run `npm run build`.
- [ ] Run `npm run qa`.
- [ ] Write a self-critique.

## First recommended direction for AI Web Factory

Recommended first pass: **Precision Ambient Lab**.

Mood: an engineered dark laboratory interface with matte graphite substrate, shallow depth rails, restrained amber-white task lighting, faint technical contour texture, and content panels that feel mounted on a calibrated command surface.

Why it fits:

- It moves beyond plain black plus weak glow.
- It supports AI Web Factory's operator-grade product identity.
- It creates atmosphere through shell framing, material, and lighting rather than decorative blobs.
- It can scale across dashboard, component catalog, pipeline catalog, and review queue.
- It can be simplified cleanly on mobile.

Implementation outline:

- replace flat page darkness with tinted graphite and subtle material noise
- add fixed, pointer-safe atmospheric layers for contour texture and directional light
- introduce edge framing or shallow command-surface rails on desktop
- protect content with matte panels and tonal separation
- use a restrained signal accent, such as warm amber, oxide, or calibrated green, below 10% of the surface
- reduce mobile to substrate, subtle top light, and stronger content panels

Risks:

- Amber can become "warning UI" if overused.
- Technical texture can reduce readability if opacity is too high.
- Shell framing can feel heavy if it competes with route content.

What not to change in the first pass:

- Do not redesign every component.
- Do not introduce heavy 3D, WebGL, or animation.
- Do not alter data models or page functionality.
- Do not mark anything Featured.
- Do not add decorative layers inside every card.

## Suggested naming structure for future atmosphere directions

Use names that combine material, environment, and operational mood. Keep names specific enough that agents can avoid repeating the same idea.

Examples:

- Precision Ambient Lab
- Editorial Machine Room
- Industrial Control Glow
- Graphite Command Bay
- Phosphor Audit Chamber
- Calibrated Signal Field
- Carbon Drafting Table
- Smoked Glass Operations Deck
- Blueprint Assembly Floor
- Quiet Telemetry Studio
- Monolith Review Console
- Amber Circuit Atrium
- Tactile Pipeline Foundry
- Frosted Systems Observatory
- Oxide Control Surface

For each new pass, record the chosen name and avoid reusing the same material, color logic, and spatial composition in the next pass.

## Future-facing path

This skill prepares AI Web Factory for later advanced passes without requiring them now:

- 3D-feeling visual layers
- cinematic motion systems
- richer interactive atmospheres
- route-specific environment modes
- scroll-linked depth
- procedural textures
- responsive parallax shells
- higher-fidelity command-room visuals

Add those only when the product surface can support them without harming performance, readability, or maintainability.
