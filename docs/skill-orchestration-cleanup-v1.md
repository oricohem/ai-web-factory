# AI Web Factory Skill Orchestration Cleanup v1

Date: 2026-05-03

## Purpose

This document clarifies how AI Web Factory orchestration skills are routed, prioritized, and resolved when scopes overlap.

This is a coordination spec for future agents. It does not authorize production UI changes by itself.

## Canonical skill priority order (full-site and front-door scopes)

For full-site, landing page, launch-kit site, front-door, and multi-page website tasks, use this canonical order:

1. **AI Full Site Builder Workflow** (`ai-full-site-builder-workflow`) - top-level controller
2. **AI Website Architecture + Prompt Composer** (`ai-website-architecture-prompt-composer`)
3. **AI Launch Kit Generator** (`ai-launch-kit-generator`)
4. **AI External UI Design Stack Integration** (`ai-external-ui-design-stack-integration`)
5. **AI Factory Taste Engine** (`ai-factory-taste-engine`)
6. **AI Factory Design Research Corpus** (`ai-factory-design-research-corpus`)

Rule: `ai-full-site-builder-workflow` controls sequencing. Agents must not independently combine supporting skills out of order.

## Pure Visual Execution Mode override (minimal)

When the user explicitly asks for pure visual execution, visual redesign, premium UI pass, North Star page, component recipe extraction, high-end landing page visual craft, or improving visual quality without changing strategy:

- Temporarily suspend blocking emphasis on full-site orchestration artifacts, launch-kit documentation packaging, broad architecture rewrites, matrix/scoring expansion, and docs/prototype-first framing.
- Active controllers become: `high-end-visual-design`, `design-taste-frontend`, and `ai-factory-taste-engine` anti-generic gates.
- Strategy/architecture skills are reference-only in this mode unless the user explicitly requests strategy artifacts.
- Do not create new architecture docs/matrices by default.
- Do not let launch-kit packaging make the website feel like an internal spec.
- Start execution from concrete component composition, type scale, spacing, layout, responsive behavior, and interaction states.
- Every major section must be implemented as a designed component, not explanatory documentation.
- Scope safety still applies: this mode does not authorize production UI edits unless the user explicitly requests production work; it only reframes docs/prototype visual craft from prototyper/documenter to production designer.

## Responsibility map

| Skill | Responsibility |
| --- | --- |
| AI Full Site Builder Workflow | Orchestration and process control |
| AI Website Architecture + Prompt Composer | Archetype selection, site structure, internal production prompt |
| AI Launch Kit Generator | Business package outputs beyond website pages |
| AI External UI Design Stack Integration | Optional high-fidelity design/component execution support |
| AI Factory Taste Engine | Visual scoring, anti-pattern detection, premium product-fit quality gate |
| AI Factory Design Research Corpus | Principle/reference library, design genes, style inspiration inputs |

## Use / do not use / expected output

| Skill | Use when | Do not use when | Expected output |
| --- | --- | --- | --- |
| AI Full Site Builder Workflow | Full website, landing, launch-kit site, front-door, multi-page prototype, major redesign | Tiny copy edits, single component fixes, narrow non-website patches | Orchestrated plan with architecture, prompt, visual direction, section plan, launch outputs, build/critique/scope validation |
| AI Website Architecture + Prompt Composer | Need archetype, section order, conversion structure, internal production prompt | Task has no structural site decision (e.g., isolated copy typo) | Archetype decision, architecture table, section sequence, business-specific internal prompt |
| AI Launch Kit Generator | Task asks for launch package, business assets, campaign/positioning outputs, "make this idea real" | Website-only polish task with no broader launch scope | Launch-kit output model (brief, pricing, proof, copy pack, campaigns, evaluation), with website as one output |
| AI External UI Design Stack Integration | High-fidelity visual/component execution support is needed after architecture/launch planning | Docs-only work, backend work, tiny text edits, low-fidelity notes | External support selection, adaptation rules, licensing/anti-copy checks, component/pattern shortlist |
| AI Factory Taste Engine | Need quality scoring, anti-pattern rejection, and direction confidence gates | Pure non-visual docs edits, no direction evaluation needed | Direction score table, rejected options, chosen direction with anti-pattern gate results |
| AI Factory Design Research Corpus | Need broad visual direction exploration and originality safeguards across categories | Docs-only routing updates, tiny implementation patches, no direction research required | Reference category selection, design genes, originality transforms, same-family rejection notes |

## Conflict resolution rules

If instructions conflict, resolve in this order:

1. User prompt wins, unless unsafe or impossible.
2. `AGENTS.md` project rules win over docs.
3. Full Site Builder Workflow controls process for full-site tasks.
4. Website Architecture Composer controls structure and archetype.
5. Launch Kit Generator controls launch-kit and business output scope.
6. External UI Stack controls optional visual execution support.
7. Taste Engine controls quality scoring and anti-pattern gates.
8. Design Research Corpus provides inspiration/principles, not copy targets.
9. Older experiment docs are references only, not style mandates.

## Task routing examples

- "Create a full website" -> run Full Site Builder Workflow first.
- "Create a landing page" -> run Full Site Builder Workflow first.
- "Create a launch kit" -> run Launch Kit Generator, and run Full Site Builder Workflow if a site is included.
- "Improve visual quality" -> use Taste Engine and External UI Stack.
- "Choose site structure" -> use Website Architecture Composer.
- "Research visual directions" -> use Design Research Corpus.
- "Small copy edit" -> no full workflow needed.
- "Single component fix" -> no full workflow needed.

## Prevent skill overload

- Do not read every long design doc unless the task requires it.
- Let the top-level workflow decide which supporting docs to consult.
- Skip optional or older experiment docs unless directly relevant.
- Do not create new skills for every problem; prefer updating orchestration docs or existing skills.
- Do not run browser/Playwright or visual QA unless the task explicitly requires visual QA.

## Docs/skill-only PR merge readiness gate

For docs-only and skill-coordination PRs, include all of:

1. Changed-file scope confirmation.
2. Build result (`npm run build`).
3. Explicit confirmation of no production UI/app/component/data/lib/package/dependency changes.
4. Explanation of what changed and why.
5. Label each updated artifact as either:
   - **must-use rule**, or
   - **reference-only guidance**.

## Current rejected/experimental artifacts

If present, **Front Door Concept v1** is not a customer-facing visual target.

- Allowed use: intake/schema/result-preview reference only.
- Not allowed: copying its visual style as a design target.
- Rejected reason: too much internal spec/wireframe feel, weak commercial homepage quality, and empty visual language.

## Human feedback handling

When human feedback rejects or questions direction quality, classify the outcome as one of:

- accepted
- revise
- rejected as visual target but useful as reference
- archive/close

Then record:

- mistake
- cause
- new rule
- future gate

## Adoption status

- For full-site, landing, launch-kit site, front-door, and multi-page website scopes: this orchestration is **must-use**.
- For small copy/component/docs-only tasks: this document is **reference-only** unless explicitly requested.
