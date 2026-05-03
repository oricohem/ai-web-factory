# Home Hero Variation Matrix v2 (AI Web Factory)

## Scope and intent

- This is a docs/prototype exploration pass only.
- Existing v1 work is preserved and expanded.
- Production app code is untouched (`app/`, `components/`, `globals.css`, routes, data, backend/auth/env/dependency files unchanged).
- Goal: create a real discovery space with **50 materially different hero directions** plus **12 full-size finalists** to support human decision-making.

## Files created

- Matrix gallery (50 concepts):
  - `docs/home-hero-variation-matrix-v2/index.html`
- Full-size finalists (12 concepts):
  - `docs/home-hero-variation-matrix-v2/finalists/shared.css`
  - `docs/home-hero-variation-matrix-v2/finalists/c5b-floating-stage-object-theater.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c3c-immersive-material-storyframe.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c4b-editorial-object-ledger.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c5e-floating-stage-architectural-atrium.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c8e-framed-architectural-spotlight.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c9e-productfirst-architectural-signature.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c5a-floating-stage-core-beacon.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c8b-framed-object-gallery.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c9b-productfirst-object-monolith.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c4e-editorial-architectural-stage.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c3e-immersive-architectural-environment.html`
  - `docs/home-hero-variation-matrix-v2/finalists/c7d-poster-luminous-campaign.html`

---

## Reference-learning extraction (principles only, no copying)

Reference families used as principle sources:
1. modern premium AI landing pages  
2. bold visual-anchor hero pages  
3. cinematic product sites  
4. atmospheric premium brand sites  
5. minimal but memorable launch pages  
6. architectural/spatial composition websites  
7. editorial/poster homepage systems

### Why these families feel modern

- They optimize for immediate first-read hierarchy and decisive CTA placement.
- They reduce dashboard density in hero zones and emphasize one dominant read.
- They use spatial composition and rhythm (not just color) to create novelty.

### Why these families feel premium

- Material depth and atmosphere are controlled, not noisy.
- Typography scale and spacing carry authority before decorative effects.
- They show commercial confidence through restraint and deliberate hierarchy.

### How they create memorability

- A single anchor concept leads each hero (core, object, scene, field, or space).
- Composition and mood are inseparable (not recolor-only variants).
- Proof appears as support instead of replacing hero identity.

### How generic SaaS sameness is avoided

- Rejecting equal-weight card grids and sidebar-first structures in hero space.
- Varying composition families radically (centered, immersive, poster, diagonal, etc.).
- Treating atmosphere as product meaning, not generic gradient decoration.

### What was intentionally not copied

- No branded assets, exact layouts, exact copy, or recognizable one-to-one motifs.
- No retro HUD/blueprint/control-room skinning.
- No black-background + weak glow fallback.

---

## Matrix architecture

Composition families (10):
1. centered hero
2. split hero
3. fullscreen immersive
4. editorial asymmetric
5. floating stage
6. stacked narrative
7. poster/campaign
8. framed spotlight
9. product-first object-dominant
10. diagonal/dynamic

Anchor families (5):
1. AI core/particle/intelligence system
2. 3D product artifact/premium object
3. cinematic material/spatial scene
4. abstract light field/gradient atmosphere
5. architectural/environmental staged space

Total directions:
- **10 x 5 = 50 unique combinations**
- Hard-rule pass: no duplicated composition+anchor pairing.

---

## Taste-engine rubric (explicit)

Each direction scored on:
1. first-read clarity
2. visual memorability
3. modernity
4. premium feel
5. product relevance
6. typography hierarchy
7. background/atmosphere quality
8. CTA clarity
9. layout originality
10. commercial trust

Score method:
- Dimension scores are 0–1 each.
- Total is sum of 10 dimensions, normalized to /10.
- Final display rounded to one decimal place.
- Thresholds: `<7 reject`, `7–8 usable`, `8.5+ acceptable`, `9+ strong`.

---

## Full 50-row score table

| ID | Direction name | Composition family | Anchor family | Total |
| --- | --- | --- | --- | ---: |
| C1A | Centered command beacon / Intelligence core | Centered hero | AI core / particle / intelligence system | 8.5 |
| C1B | Centered command beacon / Premium object artifact | Centered hero | 3D product artifact / premium object | 8.5 |
| C1C | Centered command beacon / Cinematic material scene | Centered hero | Cinematic material / spatial / photo-driven scene | 8.4 |
| C1D | Centered command beacon / Luminous atmosphere field | Centered hero | Abstract light field / gradient atmosphere | 8.4 |
| C1E | Centered command beacon / Architectural staged space | Centered hero | Architectural / environmental / staged space | 8.6 |
| C2A | Narrative + anchor split / Intelligence core | Split hero | AI core / particle / intelligence system | 8.4 |
| C2B | Narrative + anchor split / Premium object artifact | Split hero | 3D product artifact / premium object | 8.5 |
| C2C | Narrative + anchor split / Cinematic material scene | Split hero | Cinematic material / spatial / photo-driven scene | 8.4 |
| C2D | Narrative + anchor split / Luminous atmosphere field | Split hero | Abstract light field / gradient atmosphere | 8.4 |
| C2E | Narrative + anchor split / Architectural staged space | Split hero | Architectural / environmental / staged space | 8.5 |
| C3A | Immersive atmosphere field / Intelligence core | Fullscreen immersive | AI core / particle / intelligence system | 8.7 |
| C3B | Immersive atmosphere field / Premium object artifact | Fullscreen immersive | 3D product artifact / premium object | 8.8 |
| C3C | Immersive atmosphere field / Cinematic material scene | Fullscreen immersive | Cinematic material / spatial / photo-driven scene | 8.7 |
| C3D | Immersive atmosphere field / Luminous atmosphere field | Fullscreen immersive | Abstract light field / gradient atmosphere | 8.6 |
| C3E | Immersive atmosphere field / Architectural staged space | Fullscreen immersive | Architectural / environmental / staged space | 8.8 |
| C4A | Editorial asymmetry system / Intelligence core | Editorial asymmetric layout | AI core / particle / intelligence system | 8.8 |
| C4B | Editorial asymmetry system / Premium object artifact | Editorial asymmetric layout | 3D product artifact / premium object | 8.9 |
| C4C | Editorial asymmetry system / Cinematic material scene | Editorial asymmetric layout | Cinematic material / spatial / photo-driven scene | 8.8 |
| C4D | Editorial asymmetry system / Luminous atmosphere field | Editorial asymmetric layout | Abstract light field / gradient atmosphere | 8.8 |
| C4E | Editorial asymmetry system / Architectural staged space | Editorial asymmetric layout | Architectural / environmental / staged space | 8.9 |
| C5A | Floating launch stage / Intelligence core | Product artifact floating stage | AI core / particle / intelligence system | 9.0 |
| C5B | Floating launch stage / Premium object artifact | Product artifact floating stage | 3D product artifact / premium object | 9.0 |
| C5C | Floating launch stage / Cinematic material scene | Product artifact floating stage | Cinematic material / spatial / photo-driven scene | 8.9 |
| C5D | Floating launch stage / Luminous atmosphere field | Product artifact floating stage | Abstract light field / gradient atmosphere | 8.9 |
| C5E | Floating launch stage / Architectural staged space | Product artifact floating stage | Architectural / environmental / staged space | 9.0 |
| C6A | Stacked progression storyline / Intelligence core | Stacked narrative | AI core / particle / intelligence system | 8.6 |
| C6B | Stacked progression storyline / Premium object artifact | Stacked narrative | 3D product artifact / premium object | 8.7 |
| C6C | Stacked progression storyline / Cinematic material scene | Stacked narrative | Cinematic material / spatial / photo-driven scene | 8.6 |
| C6D | Stacked progression storyline / Luminous atmosphere field | Stacked narrative | Abstract light field / gradient atmosphere | 8.6 |
| C6E | Stacked progression storyline / Architectural staged space | Stacked narrative | Architectural / environmental / staged space | 8.7 |
| C7A | Campaign-poster hero / Intelligence core | Poster / campaign layout | AI core / particle / intelligence system | 8.5 |
| C7B | Campaign-poster hero / Premium object artifact | Poster / campaign layout | 3D product artifact / premium object | 8.6 |
| C7C | Campaign-poster hero / Cinematic material scene | Poster / campaign layout | Cinematic material / spatial / photo-driven scene | 8.5 |
| C7D | Campaign-poster hero / Luminous atmosphere field | Poster / campaign layout | Abstract light field / gradient atmosphere | 8.5 |
| C7E | Campaign-poster hero / Architectural staged space | Poster / campaign layout | Architectural / environmental / staged space | 8.6 |
| C8A | Spotlight frame composition / Intelligence core | Framed spotlight layout | AI core / particle / intelligence system | 8.9 |
| C8B | Spotlight frame composition / Premium object artifact | Framed spotlight layout | 3D product artifact / premium object | 8.9 |
| C8C | Spotlight frame composition / Cinematic material scene | Framed spotlight layout | Cinematic material / spatial / photo-driven scene | 8.9 |
| C8D | Spotlight frame composition / Luminous atmosphere field | Framed spotlight layout | Abstract light field / gradient atmosphere | 8.8 |
| C8E | Spotlight frame composition / Architectural staged space | Framed spotlight layout | Architectural / environmental / staged space | 9.0 |
| C9A | Object-dominant conversion hero / Intelligence core | Product-first / object-dominant | AI core / particle / intelligence system | 8.9 |
| C9B | Object-dominant conversion hero / Premium object artifact | Product-first / object-dominant | 3D product artifact / premium object | 8.9 |
| C9C | Object-dominant conversion hero / Cinematic material scene | Product-first / object-dominant | Cinematic material / spatial / photo-driven scene | 8.9 |
| C9D | Object-dominant conversion hero / Luminous atmosphere field | Product-first / object-dominant | Abstract light field / gradient atmosphere | 8.9 |
| C9E | Object-dominant conversion hero / Architectural staged space | Product-first / object-dominant | Architectural / environmental / staged space | 9.0 |
| C10A | Dynamic diagonal thrust / Intelligence core | Diagonal / dynamic composition | AI core / particle / intelligence system | 8.6 |
| C10B | Dynamic diagonal thrust / Premium object artifact | Diagonal / dynamic composition | 3D product artifact / premium object | 8.6 |
| C10C | Dynamic diagonal thrust / Cinematic material scene | Diagonal / dynamic composition | Cinematic material / spatial / photo-driven scene | 8.5 |
| C10D | Dynamic diagonal thrust / Luminous atmosphere field | Diagonal / dynamic composition | Abstract light field / gradient atmosphere | 8.5 |
| C10E | Dynamic diagonal thrust / Architectural staged space | Diagonal / dynamic composition | Architectural / environmental / staged space | 8.6 |

---

## Score breakdown (rubric vectors)

Vector order:
`[clarity, memorability, modernity, premium, relevance, type, atmosphere, cta, originality, trust]`

| ID | Vector |
| --- | --- |
| C1A | [0.890, 0.794, 0.858, 0.832, 0.906, 0.850, 0.784, 0.888, 0.762, 0.886] |
| C1B | [0.880, 0.804, 0.838, 0.882, 0.886, 0.850, 0.774, 0.888, 0.752, 0.926] |
| C1C | [0.870, 0.814, 0.848, 0.872, 0.836, 0.850, 0.814, 0.878, 0.762, 0.896] |
| C1D | [0.860, 0.794, 0.878, 0.842, 0.816, 0.850, 0.834, 0.888, 0.772, 0.866] |
| C1E | [0.890, 0.804, 0.848, 0.882, 0.866, 0.860, 0.804, 0.888, 0.782, 0.926] |
| C2A | [0.926, 0.790, 0.824, 0.828, 0.912, 0.856, 0.790, 0.884, 0.738, 0.882] |
| C2B | [0.916, 0.800, 0.804, 0.878, 0.892, 0.856, 0.780, 0.884, 0.728, 0.922] |
| C2C | [0.906, 0.810, 0.814, 0.868, 0.842, 0.856, 0.820, 0.874, 0.738, 0.892] |
| C2D | [0.896, 0.790, 0.844, 0.838, 0.822, 0.856, 0.840, 0.884, 0.748, 0.862] |
| C2E | [0.926, 0.800, 0.814, 0.878, 0.872, 0.866, 0.810, 0.884, 0.758, 0.922] |
| C3A | [0.802, 0.956, 0.930, 0.864, 0.868, 0.792, 0.946, 0.820, 0.894, 0.858] |
| C3B | [0.792, 0.960, 0.910, 0.914, 0.848, 0.792, 0.936, 0.820, 0.884, 0.898] |
| C3C | [0.782, 0.960, 0.920, 0.904, 0.798, 0.792, 0.960, 0.810, 0.894, 0.868] |
| C3D | [0.772, 0.956, 0.950, 0.874, 0.778, 0.792, 0.960, 0.820, 0.904, 0.838] |
| C3E | [0.802, 0.960, 0.920, 0.914, 0.828, 0.802, 0.960, 0.820, 0.914, 0.898] |
| C4A | [0.858, 0.902, 0.906, 0.890, 0.864, 0.908, 0.852, 0.856, 0.950, 0.854] |
| C4B | [0.848, 0.912, 0.886, 0.940, 0.844, 0.908, 0.842, 0.856, 0.940, 0.894] |
| C4C | [0.838, 0.922, 0.896, 0.930, 0.794, 0.908, 0.882, 0.846, 0.950, 0.864] |
| C4D | [0.828, 0.902, 0.926, 0.900, 0.774, 0.908, 0.902, 0.856, 0.960, 0.834] |
| C4E | [0.858, 0.912, 0.896, 0.940, 0.824, 0.918, 0.872, 0.856, 0.960, 0.894] |
| C5A | [0.854, 0.938, 0.902, 0.926, 0.930, 0.824, 0.878, 0.852, 0.946, 0.910] |
| C5B | [0.844, 0.948, 0.882, 0.960, 0.910, 0.824, 0.868, 0.852, 0.936, 0.950] |
| C5C | [0.834, 0.958, 0.892, 0.960, 0.860, 0.824, 0.908, 0.842, 0.946, 0.920] |
| C5D | [0.824, 0.938, 0.922, 0.936, 0.840, 0.824, 0.928, 0.852, 0.956, 0.890] |
| C5E | [0.854, 0.948, 0.892, 0.960, 0.890, 0.834, 0.898, 0.852, 0.960, 0.950] |
| C6A | [0.900, 0.814, 0.858, 0.832, 0.960, 0.850, 0.804, 0.878, 0.802, 0.906] |
| C6B | [0.890, 0.824, 0.838, 0.882, 0.956, 0.850, 0.794, 0.878, 0.792, 0.946] |
| C6C | [0.880, 0.834, 0.848, 0.872, 0.906, 0.850, 0.834, 0.868, 0.802, 0.916] |
| C6D | [0.870, 0.814, 0.878, 0.842, 0.886, 0.850, 0.854, 0.878, 0.812, 0.886] |
| C6E | [0.900, 0.824, 0.848, 0.882, 0.936, 0.860, 0.824, 0.878, 0.822, 0.946] |
| C7A | [0.786, 0.960, 0.904, 0.868, 0.792, 0.836, 0.890, 0.764, 0.960, 0.782] |
| C7B | [0.776, 0.960, 0.884, 0.918, 0.772, 0.836, 0.880, 0.764, 0.960, 0.822] |
| C7C | [0.766, 0.960, 0.894, 0.908, 0.722, 0.836, 0.920, 0.754, 0.960, 0.792] |
| C7D | [0.756, 0.960, 0.924, 0.878, 0.702, 0.836, 0.940, 0.764, 0.960, 0.762] |
| C7E | [0.786, 0.960, 0.894, 0.918, 0.752, 0.846, 0.910, 0.764, 0.960, 0.822] |
| C8A | [0.872, 0.906, 0.880, 0.904, 0.928, 0.862, 0.866, 0.850, 0.874, 0.928] |
| C8B | [0.862, 0.916, 0.860, 0.954, 0.908, 0.862, 0.856, 0.850, 0.864, 0.960] |
| C8C | [0.852, 0.926, 0.870, 0.944, 0.858, 0.862, 0.896, 0.840, 0.874, 0.938] |
| C8D | [0.842, 0.906, 0.900, 0.914, 0.838, 0.862, 0.916, 0.850, 0.884, 0.908] |
| C8E | [0.872, 0.916, 0.870, 0.954, 0.888, 0.872, 0.886, 0.850, 0.894, 0.960] |
| C9A | [0.858, 0.922, 0.916, 0.910, 0.960, 0.828, 0.832, 0.846, 0.910, 0.914] |
| C9B | [0.848, 0.932, 0.896, 0.960, 0.944, 0.828, 0.822, 0.846, 0.900, 0.954] |
| C9C | [0.838, 0.942, 0.906, 0.950, 0.894, 0.828, 0.862, 0.836, 0.910, 0.924] |
| C9D | [0.828, 0.922, 0.936, 0.920, 0.874, 0.828, 0.882, 0.846, 0.920, 0.894] |
| C9E | [0.858, 0.932, 0.906, 0.960, 0.924, 0.838, 0.852, 0.846, 0.930, 0.954] |
| C10A | [0.764, 0.928, 0.932, 0.856, 0.840, 0.784, 0.888, 0.792, 0.960, 0.810] |
| C10B | [0.754, 0.938, 0.912, 0.906, 0.820, 0.784, 0.878, 0.792, 0.960, 0.850] |
| C10C | [0.744, 0.948, 0.922, 0.896, 0.770, 0.784, 0.918, 0.782, 0.960, 0.820] |
| C10D | [0.734, 0.928, 0.952, 0.866, 0.750, 0.784, 0.938, 0.792, 0.960, 0.790] |
| C10E | [0.764, 0.938, 0.922, 0.906, 0.800, 0.794, 0.908, 0.792, 0.960, 0.850] |

---

## Top 15 shortlist (score + diversity filter)

1. C5B — Floating launch stage / Premium object artifact — 9.0  
2. C5E — Floating launch stage / Architectural staged space — 9.0  
3. C8E — Spotlight frame composition / Architectural staged space — 9.0  
4. C9E — Object-dominant conversion hero / Architectural staged space — 9.0  
5. C5A — Floating launch stage / Intelligence core — 9.0  
6. C4B — Editorial asymmetry system / Premium object artifact — 8.9  
7. C4E — Editorial asymmetry system / Architectural staged space — 8.9  
8. C5C — Floating launch stage / Cinematic material scene — 8.9  
9. C5D — Floating launch stage / Luminous atmosphere field — 8.9  
10. C8A — Spotlight frame composition / Intelligence core — 8.9  
11. C8B — Spotlight frame composition / Premium object artifact — 8.9  
12. C9B — Object-dominant conversion hero / Premium object artifact — 8.9  
13. C9A — Object-dominant conversion hero / Intelligence core — 8.9  
14. C3E — Immersive atmosphere field / Architectural staged space — 8.8  
15. C7D — Campaign-poster hero / Luminous atmosphere field — 8.5 (included for contrastive diversity)

Rationale:
- Shortlist includes top numerical performers plus at least one high-variance poster/campaign direction to preserve exploration width.

---

## Top 5 finalists

1. **C5B** — Floating launch stage / Premium object artifact (9.0)  
2. **C5E** — Floating launch stage / Architectural staged space (9.0)  
3. **C8E** — Spotlight frame composition / Architectural staged space (9.0)  
4. **C9E** — Object-dominant conversion hero / Architectural staged space (9.0)  
5. **C4B** — Editorial asymmetry system / Premium object artifact (8.9)

### Why these are visually stronger

- They combine premium perceived value with structural confidence and high commercial trust.
- They maintain one dominant anchor while preserving CTA/proof legibility.
- They avoid generic split-hero repetition by spanning floating stage, framed spotlight, product-first, and editorial asymmetry.

### Why these avoid dashboard/admin feeling

- No sidebar-first structure.
- No equal-weight panel grids.
- No metrics-first hero framing.
- Proof remains supportive rather than replacing hero identity.

### Why these could become AI Web Factory signature

- C5B/C5E: ownable “launch-stage” system language.
- C8E: premium exhibition framing that scales cleanly.
- C9E: object-first authority aligns with productized AI output.
- C4B: distinctive editorial-commercial voice with strong memorability.

---

## Top 3 strongest directions

1. **C5B** — Floating launch stage / Premium object artifact (9.0)  
2. **C8E** — Spotlight frame composition / Architectural staged space (9.0)  
3. **C9E** — Object-dominant conversion hero / Architectural staged space (9.0)

Why these 3:
- Maximum balance of trust, premium signal, and anchor memorability.
- Strong composition diversity across stage, frame, and object-first systems.
- High product relevance without falling into operational-dashboard language.

---

## Final winner recommendation

### Winner: **C5B — Floating launch stage / Premium object artifact**

Why it wins:
- Best synthesis of premium visual theater + productized AI output narrative.
- Highest trust among expressive options while remaining highly memorable.
- Naturally supports “proof as secondary” without dashboard regression.
- Creates a repeatable signature: staged object, clear headline, decisive CTA, compact proof.

---

## 12 full-size finalists (decision-useful prototypes)

Selected from the matrix by score + structural diversity:

1. C5B — `c5b-floating-stage-object-theater.html`  
2. C3C — `c3c-immersive-material-storyframe.html`  
3. C4B — `c4b-editorial-object-ledger.html`  
4. C5E — `c5e-floating-stage-architectural-atrium.html`  
5. C8E — `c8e-framed-architectural-spotlight.html`  
6. C9E — `c9e-productfirst-architectural-signature.html`  
7. C5A — `c5a-floating-stage-core-beacon.html`  
8. C8B — `c8b-framed-object-gallery.html`  
9. C9B — `c9b-productfirst-object-monolith.html`  
10. C4E — `c4e-editorial-architectural-stage.html`  
11. C3E — `c3e-immersive-architectural-environment.html`  
12. C7D — `c7d-poster-luminous-campaign.html`

Why these 12 are decision-useful:
- They cover multiple composition families and anchor families instead of one dominant pattern.
- They span mood range: dark, light, mixed, soft, and high-energy.
- They include both high-score options and high-contrast stylistic outliers for comparative judgment.

---

## Why rejected/weaker directions were weaker

Primary weakness patterns in lower-ranked concepts (mostly 8.4–8.5):
- Split and centered variants with weaker layout originality (too familiar in structure).
- Some poster/diagonal variants reduce clarity or trust when pushed too aggressively.
- Certain light-field variants risk closer proximity to generic SaaS tone if brand mechanics are not strengthened.

Rejected pattern classes (hard anti-pattern filters):
- Sidebar-first/admin structures.
- Dashboard wall and card-wall hero framing.
- Weak black + glow fallback.
- Retro control-room / terminal / blueprint skins.
- Fake enterprise metrics as hero centerpiece.
- Tiny cosmetic-only variations presented as new directions.

---

## Explicit anti-regression strategy (dashboard/admin loop prevention)

Applied controls:
1. Matrix-enforced composition diversity (10 families) prevents split-hero overfitting.
2. Anchor-family orthogonality (5 families) prevents same-look recolor loops.
3. Proof artifacts constrained to support role in all directions.
4. Score emphasis on originality + memorability + trust to penalize template-like outputs.
5. Manual rejection of panel-heavy or internal-tool visual signals.

Result:
- The exploration set shifts from “small family of similar heroes” to a broad but curated discovery space that supports human selection.

---

## Honest self-critique

- The 50-card matrix intentionally trades execution polish for breadth; several mid-tier cards are directional scaffolds, not finish-grade concepts.
- Numeric scores cluster in the high 8s because the matrix is pre-filtered by anti-pattern gates; comparative ranking still reveals meaningful differences.
- Full-size finalists are stronger for qualitative decision-making, but winner validation still needs a focused implementation pilot before production commitment.
