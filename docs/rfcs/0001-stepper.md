# RFC 0001: Stepper

- **Status:** Proposed
- **Author:** Jia Liu
- **Created:** 2026-08-19
- **Reviewers:** Design Systems

## Summary
Add a **Stepper** — sequential multi-step progress ("step 2 of 4") — filling
a gap in Radix Themes, styled with Radix theme variables so it follows the
active accent color and light/dark mode.

## Motivation
Radix Themes ships no stepper. Multi-step flows recur across the product —
data import, onboarding, checkout, guided setup — and each needs a consistent
"where am I / how much is left" indicator. Hand-rolling one per flow produces
drift and no shared accessibility. First consumer: the CSV import flow.

## Goals / Non-goals
- **Goals:** reusable, token-driven (no literal colors), keyboard accessible.
- **Non-goals:** vertical orientation and async validation gates between
  steps. Extend later if needed.

## Detailed design
```ts
type StepperProps = {
  steps: string[];
  currentStep: number;               // 0-indexed
  onStepClick?: (index: number) => void;
  size?: '1' | '2';
};
```
- Per-step status: `complete` | `current` | `upcoming`.
- **Constraint encoded in the API:** `onStepClick` fires only for
  `index < currentStep`. Navigate back to a finished step, never skip ahead —
  the illegal state is unrepresentable, not just discouraged.
- Theming: `--accent-9` fill/ring for done/current, `--gray-*` upcoming;
  connectors fill accent once the preceding step completes.
- A11y: ordered list, `aria-current="step"`, real buttons for navigable
  steps, visible `--focus-8` outline.

## Alternatives considered
1. **Inline per feature** — duplication, theme drift, no shared a11y.
2. **Third-party stepper library** — a dependency whose markup still needs
   wrapping to match our tokens.
3. **`Tabs`** — wrong semantics: Tabs is free navigation between panels; a
   stepper is forward motion through a sequence.

## Adoption & docs
Storybook MDX page + stories under `Custom/`. Demonstrated by the CSV Import
flow (separate, dependent PR).

## Open questions
- Ship a vertical variant now, or on demand?
