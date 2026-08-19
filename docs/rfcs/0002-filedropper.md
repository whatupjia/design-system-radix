# RFC 0002: FileDropper

- **Status:** Proposed
- **Author:** Jia Liu
- **Created:** 2026-08-19
- **Reviewers:** Design Systems

## Summary
Add a **FileDropper** — drag-and-drop file input with click-to-browse —
filling a gap in Radix Themes. Styled with Radix theme variables so its
hover and active-drag states use the Theme's accent color.

## Motivation
Radix Themes ships no file upload. Users bring files in many places: CSV /
bulk import, avatars, attachments, document upload. A shared component gives
one consistent, accessible, on-theme control instead of a bespoke dropzone
per feature. First consumer: the CSV import flow.

## Goals / Non-goals
- **Goals:** reusable, token-driven, keyboard accessible, unopinionated
  about what happens to the files.
- **Non-goals:** upload orchestration (chunked/resumable uploads,
  progress-per-file, presigned URLs), directory drop, image previews, and
  built-in client validation. The consumer owns those.

## Detailed design
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
- **Unopinionated:** emits the raw `FileList`; transport and validation are
  the app's responsibility.
- Theming: dashed `--gray-6` border; hover → `--accent-8`; active drag →
  `--accent-9` border + `--accent-2` fill.
- A11y: focusable zone (`role="button"`, Enter/Space opens the picker); the
  native input stays in the DOM for assistive tech and form semantics.

## Alternatives considered
1. **Inline per feature** — duplication, theme drift, no shared a11y.
2. **`react-dropzone`** — powerful, but adds a dependency and its markup
   still needs wrapping to match our tokens. Revisit if we need directory
   drop, previews, or rich client validation.
3. **A plain `<input type="file">`** — no drag support, hard to style
   on-theme, inconsistent across browsers.

## Adoption & docs
Storybook MDX page + stories under `Custom/`. Demonstrated by the CSV Import
flow (separate, dependent PR).

## Open questions
- Should FileDropper own client-side size/type validation, or stay
  unopinionated and let the consumer validate the emitted files?
  *Proposed:* stay unopinionated.
