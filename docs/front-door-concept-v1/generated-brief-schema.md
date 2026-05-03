# Generated Launch Brief Schema v1

This schema defines the structured output passed from front-door intake to a future AI Web Factory generation agent.

## Design objectives

1. Capture business truth before visual decisions.
2. Preserve strategic context for all downstream assets.
3. Produce explicit generation instructions, not vague prose.
4. Keep enough structure for QA/critic and future recommendation layers.

## Schema shape (human-readable contract)

```text
launchBrief:
  meta:
    briefId: string
    generatedAt: ISO timestamp
    version: "v1"
    source: "front-door-concept-v1"
  business:
    brandName: string
    industry: enum
    businessMaturity: enum
    businessType: enum
    geographyFocus: string
    businessSummary: string
  offer:
    offerType: enum
    coreOfferSummary: string
    offerTieringHint: string
    pricingIntent: enum
    urgencyWindow: enum
  audience:
    primaryAudience: string
    secondaryAudience: string optional
    audienceAwarenessLevel: enum
    topPainPoints: string[]
    topDesiredOutcomes: string[]
  conversion:
    primaryGoal: enum
    secondaryGoals: enum[]
    conversionFrictionNotes: string[]
    preferredCTAMode: enum
  trustAndPositioning:
    trustPriority: enum[]
    proofRequirements: string[]
    objectionThemes: string[]
    complianceOrRiskNotes: string[]
  creativeDirection:
    visualBoldnessLevel: int 1-5
    motion3DPreference: enum
    visualStylePreferencesLiked: string[]
    visualStylePreferencesDisliked: string[]
    mustAvoidStyles: string[]
  scope:
    outputPackage: enum
    desiredOutputs: enum[]
    mustHaveSections: string[]
    mustIncludeChannels: enum[]
  constraints:
    budgetBand: enum
    launchUrgency: enum
    internalCapacity: enum
    technicalConstraints: string[]
    legalConstraints: string[]
  generatedPlan:
    recommendedPages: string[]
    recommendedCopyAssets: string[]
    recommendedCampaignAssets: string[]
    recommendedQACriticChecks: string[]
    knownRisks: string[]
    executionSequence: string[]
  agentInstruction:
    objective: string
    qualityBar: string
    explicitDoNots: string[]
    successDefinition: string
```

## Enumerations

### industry

- real-estate
- healthcare
- legal
- fintech
- ecommerce
- local-services
- education
- creator-media
- b2b-saas
- agency
- manufacturing
- hospitality
- other

### businessMaturity

- idea
- new-business
- existing-business
- rebrand
- launch-campaign

### businessType

- solo-founder
- small-business
- startup
- established-company
- agency
- creator-business

### offerType

- service
- saas
- ecommerce-product
- local-business
- creator-product
- course
- agency-offer
- real-estate-listing
- personal-brand

### pricingIntent

- entry
- mid-market
- premium
- tiered
- custom-quote

### urgencyWindow

- this-week
- this-month
- this-quarter
- no-fixed-date

### audienceAwarenessLevel

- unaware
- problem-aware
- solution-aware
- offer-aware

### primaryGoal and secondaryGoals

- book-demo
- start-trial
- collect-leads
- sell-product
- sell-service
- whatsapp-contact
- waitlist
- app-download

### preferredCTAMode

- direct-booking
- form-capture
- checkout
- chat
- call

### trustPriority

- credibility
- speed
- luxury
- clarity
- authority
- friendliness
- technical-confidence

### motion3DPreference

- none
- subtle-motion
- premium-motion
- scenes-3d-product-object
- cinematic-interactive-experience

### outputPackage

- website-only
- website-plus-copy-pack
- launch-kit
- growth-kit
- agency-client-handoff-kit

### desiredOutputs

- website
- copy-pack
- pricing-offer-structure
- campaign-angles
- email-pack
- social-pack
- ad-copy-pack
- launch-plan
- qa-critic-review
- next-step-recommendations

### mustIncludeChannels

- website
- email
- social
- paid-ads
- sales-assets

### budgetBand

- under-1k
- 1k-5k
- 5k-15k
- 15k-50k
- 50k-plus

### launchUrgency

- immediate
- 30-days
- 60-90-days
- exploratory

### internalCapacity

- founder-only
- small-team
- dedicated-marketing-team
- agency-supported

## Example filled record (abbreviated)

```text
launchBrief.meta.briefId: "lbf_2026_05_03_001"
launchBrief.business.industry: "real-estate"
launchBrief.business.businessMaturity: "existing-business"
launchBrief.offer.offerType: "real-estate-listing"
launchBrief.conversion.primaryGoal: "book-demo"
launchBrief.trustAndPositioning.trustPriority: ["credibility", "authority", "clarity"]
launchBrief.creativeDirection.visualBoldnessLevel: 3
launchBrief.creativeDirection.motion3DPreference: "subtle-motion"
launchBrief.scope.outputPackage: "launch-kit"
launchBrief.generatedPlan.recommendedPages:
  - "Homepage"
  - "How it works"
  - "Pricing"
  - "Proof/Case Studies"
  - "Contact"
```

## Notes for future agent integration

1. All future generators should treat `launchBrief` as source-of-truth.
2. Copy, page structure, pricing logic, and campaign messaging should trace back to explicit schema keys.
3. QA/critic review must verify alignment between generated outputs and `trustPriority`, `primaryGoal`, `outputPackage`, and `mustAvoidStyles`.
