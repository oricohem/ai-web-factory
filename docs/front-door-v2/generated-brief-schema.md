# AI Web Factory Front Door v2 — Generated Brief Schema

## 1) Intake fields (business brief input)

| Field key | Type | Purpose | Example |
| --- | --- | --- | --- |
| `businessCategory` | enum/string | Defines market context and expectation baseline | "B2B SaaS for operations teams" |
| `businessType` | string | Clarifies business model framing | "Productized AI launch service" |
| `offerDescription` | text | Captures product/service essence | "Guided launch-kit generation from one business brief" |
| `targetCustomer` | text | Identifies buyer segment and context | "Founder-led teams 2-20 people" |
| `primaryConversionGoal` | enum/string | Sets conversion architecture direction | "Start business brief intake" |
| `offerType` | enum/string | Supports output and CTA strategy | "Service with AI-generated outputs" |
| `trustProblem` | text | Surfaces buyer hesitation | "Afraid outputs will be generic and unusable" |
| `visualAmbitionLevel` | enum | Controls visual boldness and risk | "Level 3: Bold/memorable" |
| `motionPreference` | enum/string | Sets motion policy constraints | "Subtle only" |
| `desiredOutputs` | list | Defines required launch-kit artifacts | "Website direction, launch copy, campaign angles" |
| `mustHaveSections` | list | Protects structural requirements | "Hero, process, output proof, CTA" |
| `mustAvoidStyles` | list | Blocks anti-patterns early | "Generic SaaS, dense dashboard wall" |
| `referenceLikes` | text/list | Captures preferred direction signals | "Editorial hierarchy, practical clarity" |
| `referenceDislikes` | text/list | Captures style rejection cues | "Hype copy, random glow effects" |
| `budgetLevel` | enum/string | Helps scope launch recommendation | "MVP constrained" |
| `urgencyLevel` | enum/string | Guides timeline and output prioritization | "Need first launch in 2 weeks" |

## 2) Generated Launch Brief fields (core output)

| Field key | Type | Purpose |
| --- | --- | --- |
| `productSummary` | structured text | Concise business framing and promise |
| `targetAudience` | structured text | Buyer profile, context, and priority segment |
| `primaryConversionGoal` | string | Core conversion action for front-door flow |
| `selectedArchetype` | string | Chosen site archetype with rationale |
| `recommendedArchitecture` | list/table | Page strategy and section responsibilities |
| `sectionSequence` | ordered list | Conversion-oriented narrative order |
| `visualDirection` | object | Direction family, palette roles, type hierarchy, anchor |
| `externalUiStackRecommendation` | object | Execution-support stack type and boundaries |
| `launchKitOutputs` | list | Website + non-website deliverables |
| `copyAssetsToGenerate` | list | Required copy pack outputs |
| `campaignAssetsToGenerate` | list | Required campaign/channel outputs |
| `proofAndQaNotes` | list | Trust cues and review criteria |
| `antiGenericGates` | checklist | Pass/fail evidence before implementation |
| `agentProductionPromptExcerpt` | text | Implementation-ready prompt fragment |
| `nextStepRecommendation` | string | Single high-leverage next action |

## 3) Agent handoff fields (production-ready transfer)

| Field key | Type | Purpose |
| --- | --- | --- |
| `implementationScope` | text/list | Defines exact build boundaries |
| `requiredRoutesOrPages` | list | Lists pages or routes to implement |
| `mustKeepConstraints` | list | Guards against out-of-scope edits |
| `contentPriorityOrder` | ordered list | Tells agent what to complete first |
| `proofRequirements` | list | Specifies proof elements that must appear |
| `ctaRequirements` | list | Clarifies primary and secondary action logic |
| `qualityThresholds` | object | Score targets and rejection thresholds |
| `riskNotes` | list | Known risks and fallback rules |
| `doneCriteria` | checklist | Explicit criteria for task completion |

## 4) Quality gates

### 4.1 Architecture quality gates
- Archetype is selected before implementation.
- Section flow maps to trust and conversion goals.
- Proof strategy is explicit and buyer-relevant.

### 4.2 Visual and anti-generic gates
- Hero is not text plus generic cards.
- Visual anchor is product-specific.
- Style is not generic SaaS template output.
- Page sells outcomes before feature lists.

### 4.3 Launch-kit differentiation gates
- Output includes non-website launch assets.
- Agent prompt excerpt is practical and actionable.
- QA notes include credibility checks beyond aesthetics.

### 4.4 Scope and safety gates
- Files stay within approved docs prototype path.
- No production UI, package, or dependency edits.
- Build command passes.

## 5) Critique learning fields

| Field key | Type | Purpose |
| --- | --- | --- |
| `mistakeObserved` | text | Records what failed in current pass |
| `rootCause` | text | Captures why it failed |
| `newRule` | text | Converts feedback into a durable rule |
| `futureGate` | text | Adds a concrete gate for next iterations |
| `artifactDecision` | enum | `accept`, `revise`, or `reject` |
