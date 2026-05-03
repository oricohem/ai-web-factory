# Visual Research-led Atmosphere Pass #1

Date: 2026-05-03

## 1) Baseline and anti-repetition note

### Baseline read
- Current app atmosphere was clean but still read as a flat dark dashboard.
- Visual depth existed mostly inside cards, not as a coherent shell-level environment.
- Global background relied on dark gradients and small accent glows, without strong staging or structural framing.

### Anti-repetition note
This pass avoids "dark canvas + glow accents" and moves toward "a calibrated command-surface environment with material substrate, structural rails, directional task lighting, and restrained texture."

## 2) Inspiration and reference summary (12)

References were used for principles only, not for copying brand-specific visuals or layouts.

1. ESA mission control rooms  
   https://www.esa.int/ESA_Multimedia/Images/2017/03/Mission_control_room  
   Principle: calm operational staging, clear console hierarchy, room-scale framing.

2. NASA/Apollo control-room historical analysis  
   https://www.bbc.com/future/story/20190320-is-this-the-space-races-most-important-room  
   Principle: structured bays, authority through composition, utility-first spatial rhythm.

3. TRILUX control-room lighting guidance  
   https://www.trilux.com/en/lighting-practice/indoor-lighting/specific-lighting-requirements/lighting-of-traffic-zones-and-general-areas-in-buildings/control-rooms/  
   Principle: layered ambient + task lighting and glare-aware contrast zones.

4. BAW control-room lighting practice  
   https://bawarchitecture.com/expertise/control-room-interior-design/control-room-lighting/  
   Principle: directional light strategy, operator legibility first.

5. Honeywell Operations Center of the Future (BAW)  
   https://bawarchitecture.com/project/operations-center-future/  
   Principle: engineered interior character and modular control surfaces.

6. Linear UI redesign notes  
   https://www.linear.app/now/how-we-redesigned-the-linear-ui  
   Principle: reduced visual noise, softened separators, content-priority focus.

7. Linear refresh rationale  
   https://linear.app/now/behind-the-latest-design-refresh  
   Principle: dimmed chrome, stronger foreground hierarchy, calmer dark usage.

8. Codrops editorial interaction reference (Pell Mell)  
   https://tympanus.net/codrops/2026/03/27/pell-mell-crafting-a-visual-exploration-platform-with-editorial-rhythm/  
   Principle: atmosphere via composition rhythm instead of decorative effects.

9. Codrops cinematic web art direction reference  
   https://tympanus.net/codrops/2026/02/20/cinematic-presence-the-directors-cut-of-the-jason-bergh-experience/  
   Principle: source-driven lighting and restrained tonal transitions.

10. Brushed steel texture reference  
    https://texturize.app/texture/metal-brushed-steel  
    Principle: low-opacity directional material texture for premium substrate.

11. Topographic contour pattern references  
    https://stock.adobe.com/search?k=topographic+pattern+seamless  
    Principle: technical contour fields as subtle structural background language.

12. Apple Pro Display XDR material/reflectance notes  
    https://www.apple.com/pro-display-xdr/  
    Principle: controlled reflectance and high-contrast legibility on dark surfaces.

## 3) Synthesized atmosphere directions

### Direction A — Precision Ambient Lab
- Mood: engineered dark laboratory with matte graphite substrate, contour structure, and restrained warm/cool task lighting.
- Strength: introduces real shell atmosphere (material + framing), not only panel polish.
- Fit: aligns with operator-grade AI workspace and existing factory metaphor.
- Risk: could become too subtle if texture and rail contrast are under-tuned.

### Direction B — Blueprint Assembly Floor
- Mood: heavier structural grid and drafting-table overlays with stronger linear technical marks.
- Strength: very ownable factory language.
- Fit: supports pipeline and component catalog semantics.
- Risk: can feel too busy and mechanical for daily reading workload.

### Direction C — Quiet Telemetry Studio
- Mood: calmer control-room environment with minimal structure and soft tonal staging.
- Strength: readability-first and easy to maintain.
- Fit: broad compatibility across routes.
- Risk: could remain too close to generic premium dark dashboards.

## 4) Chosen direction

Chosen: **Precision Ambient Lab**.

Why this direction:
- It creates the largest visible atmosphere change while preserving readability.
- It avoids repeating previous glow-led dark treatment.
- It scales across all routes via global substrate + shell framing, without route rewrites.
- It keeps mobile cleaner by reducing structural layer intensity at smaller breakpoints.

One-line direction statement (non-gradient/glow wording):
**Build a calibrated command-surface environment around the product, using structural rails, directional task light, and subtle technical material texture.**

## 5) What changed

- Added a global atmosphere layer stack in root layout:
  - lighting layer
  - structural contour/grid layer
  - material grain layer
- Reworked base palette to tinted graphite neutrals (no pure black canvas).
- Added desktop command-surface shell framing with peripheral rails and inner stage.
- Increased panel material separation and depth while preserving content contrast.
- Reduced atmospheric complexity on mobile for cleaner scanning.

## 6) What was intentionally not changed

- Routes, data loading, filtering logic, and interactions were not changed.
- No backend, auth, API, env, or dependency changes.
- No component architecture redesign of cards/lists/tables in this pass.
- No feature flags, no new libraries, no route additions.

## 7) Validation and evidence

Validation commands and screenshot comparisons are provided in PR notes and final task summary:
- `npm run build`
- `npm run qa`
- Playwright desktop/mobile screenshots for `/`, `/components`, `/pipelines`, `/review-queue`.

## 8) Self-critique

### What improved
- Atmosphere now reads as a staged environment, not flat dark canvas.
- Desktop has visible shell identity and stronger depth framing.
- Visual language is more ownable and less generic AI SaaS dark.

### What is still weak
- Route-specific atmosphere tuning remains uniform; pages can still feel similar.
- Some panel internals remain conservative relative to the upgraded shell.

### Next pass recommendation
- Introduce subtle route-specific tonal zoning (still global-system based) to differentiate dashboard, catalog, pipelines, and review spaces without adding decorative clutter.
