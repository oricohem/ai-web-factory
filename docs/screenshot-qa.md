# Screenshot QA

AI Web Factory uses Playwright to capture repeatable screenshots of the main product routes for design review.

## Run screenshots

Install dependencies and download the Playwright browser before first local use:

```bash
npx playwright install
```

Then run the full QA check to build the app and generate fresh screenshots:

```bash
npm run qa
```

The QA command starts the Next.js app with Playwright and writes screenshots to `screenshots/`. Screenshots are generated locally or in CI so each review can inspect current output.

To capture screenshots without running a production build first:

```bash
npm run screenshots
```

## Screenshots for design review

The screenshot suite visits these routes:

- `/`
- `/components`
- `/pipelines`
- `/review-queue`

Each route is captured at two viewports:

- Desktop: `1440x1000`
- Mobile: `390x844`

Reviewers can compare the generated files in `screenshots/` against the intended layout, spacing, content hierarchy, and responsive behavior. Generated screenshot PNGs normally should not be committed; regenerate them with `npm run qa` when reviewing a change.

## Visual failures

A visual failure is any unexpected change that affects the product experience, including:

- Broken layout, overflow, clipping, or missing content.
- Incorrect responsive behavior at desktop or mobile sizes.
- Regressions in spacing, typography, color, or component alignment.
- Unexpected loading, error, or empty states.
- Content changes that make the page harder to scan or review.
