# Contributing

How a new component gets into this design system. The process exists so the
system stays small, consistent, and accessible — not to slow anyone down.

## 1. Propose (RFC)
Before writing component code, open an RFC:
1. Copy `docs/rfcs/0000-template.md` to `docs/rfcs/NNNN-<name>.md`.
2. Fill in motivation, API, alternatives, a11y, theming. The bar: a
   reviewer could build the component from your RFC alone.
3. Open a PR with just the RFC (status: **Proposed**) for discussion.

A component earns a place when the need is **demonstrated and recurring**,
not hypothetical. "We're copy-pasting this in three flows" is a strong case.

## 2. Implement
On a feature branch:
- One folder per component: `src/components/<Name>/<Name>.tsx` +
  `<Name>.module.css`.
- **Tokens only.** Style with Radix theme variables (`--accent-*`,
  `--gray-*`, `--radius-*`, `--focus-*`). No literal colors or hardcoded
  spacing — the component must follow the active Theme.
- **Encode constraints in the API** where practical (make illegal states
  unrepresentable) rather than documenting them.
- Export from `src/index.ts`.

## 3. Document
- A Storybook docs page (`.mdx`): anatomy, when to use / not use, props,
  do/don't, accessibility notes.
- Stories covering the meaningful states.

## 4. Review checklist
- [ ] RFC linked, status updated
- [ ] Type-checks clean (`npx tsc --noEmit -p tsconfig.app.json`)
- [ ] Production build passes (`npm run build`)
- [ ] Tokens only — no literal colors; follows accent + light/dark
- [ ] Keyboard operable, visible focus, correct roles/ARIA
- [ ] Docs page + stories added
- [ ] Exported from the package index
