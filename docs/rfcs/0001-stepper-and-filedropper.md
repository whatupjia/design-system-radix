# RFC 0001: Stepper and FileDropper

- **Status:** Proposed
- **Author:** Jia Liu
- **Created:** 2026-08-19
- **Reviewers:** Design Systems

## Summary
Add two components — **Stepper** (sequential multi-step progress) and
**FileDropper** (drag-and-drop file input) — to fill gaps in our base
library, Radix Themes. Both are styled exclusively with Radix theme
variables so they inherit the active accent color and light/dark mode with
no hardcoded values.

## Motivation
Radix Themes is comprehensive but ships **no stepper** and **no file
upload/dropzone**. Our first flow needing both is CSV import
(upload → map columns → review → done).

These are not one-off needs — they recur across product surfaces:
- **Stepper:** onboarding, checkout, guided setup, any data-import wizard.
- **FileDropper:** avatars, attachments, bulk import, document upload.

The alternative to promoting them is hand-rolling copies inside each
feature. That path produces un-reusable, undocumented markup that drifts
from the theme the moment someone tweaks a color inline. Promoting them to
first-class, token-driven components is the cheaper long-run choice.

## Goals
- Reusable components with a small, stable API.
- **Visually native to Radix:** consume `--accent-*`, `--gray-*`,
  `--radius-*`, `--focus-*` only. Flip the Theme's `accentColor` and both
  recolor automatically. No literal colors — this is the contract for
  anything we add.
- Accessible: keyboard operable, correct roles and ARIA.

## Non-goals
- Upload orchestration (chunked/resumable uploads, progress-per-file, presigned
  URLs). FileDropper reports the selected `FileList`; the app owns transport.
- Vertical Stepper and async validation gates between steps. Extendable later.

## Detailed design

### Stepper
```ts
type StepperProps = {
  steps: string[];
  currentStep: number;               // 0-indexed
  onStepClick?: (index: number) => void;
  size?: '1' | '2';
};
```
- Per-step status: `complete` | `current` | `upcoming`.
- **Constraint encoded, not documented:** `onStepClick` only fires for
  `index < currentStep`. You can navigate *back* to a finished step, never
  *skip ahead*. A consumer cannot wire up illegal forward jumps.
- Theming: complete = `--accent-9` fill + check; current = `--accent-9`
  ring + `--accent-11` text; upcoming = `--gray-*`. Connectors fill accent
  once the preceding step completes.
- A11y: ordered list, `aria-current="step"` on the current step, real
  buttons for navigable steps, visible `--focus-8` outline.

### FileDropper
```ts
type FileDropperProps = {
  accept?: string;
  multiple?: boolean;
  size?: '1' | '2' | '3';
  disabled?: boolean;
  onFilesSelected?: (files: FileList) => void;
};
```
- Drag-and-drop **and** click-to-browse over a hidden native
  `<input type="file">`. Selected files show as a removable chip.
- Theming: dashed `--gray-6` border; hover → `--accent-8`; active drag →
  `--accent-9` border + `--accent-2` fill.
- A11y: focusable zone (`role="button"`, Enter/Space opens the picker); the
  native input is kept in the DOM for assistive tech and form semantics,
  not replaced.

## Alternatives considered
1. **Inline per feature** — rejected. Duplication, theme drift, no docs, no
   shared a11y guarantees.
2. **Third-party libraries** (`react-dropzone`, a stepper package) —
   rejected for now. They add dependencies and their markup still needs
   wrapping to match our tokens, so we would own a wrapper either way. Our
   implementations are small. Revisit `react-dropzone` if we need advanced
   upload (directory drop, client validation, image previews).
3. **Wait for Radix to add them** — rejected. No roadmap signal, and we
   need them for CSV import now.

## Drawbacks & risks
- Two more components to maintain and keep accessible.
- FileDropper's drag events need care across browsers; covered by the
  demo flow and manual keyboard testing.
- Minimal bundle cost (no new dependencies).

## Adoption & documentation plan
- Storybook docs pages (MDX) for each: anatomy, when to use / not use,
  props, do/don't, a11y notes. Stories live under `Custom/`.
- The **CSV Import** pattern story demonstrates both in composition.
- Exported from the package index (`src/index.ts`).

## Open questions
- Ship a **vertical** Stepper now, or on demand?
- Should FileDropper own client-side validation (size/type), or stay
  unopinionated and let the consumer validate the emitted `FileList`?
  *Proposed:* stay unopinionated.
