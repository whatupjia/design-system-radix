# design-system-radix

A React design system built on [Radix Themes](https://www.radix-ui.com/themes),
documented in Storybook and ready to prototype with. Radix provides the
styled, accessible base components; this repo adds a small number of
components Radix doesn't ship (see `Custom/` in Storybook) and the patterns
that compose them.

## Quick start

```bash
npm install
npm run storybook   # component gallery + docs at http://localhost:6007
npm run dev         # the demo app at http://localhost:5173
npm run build       # type-check + production build
```

## What's inside

- **`Radix/*`** (Storybook) — the full Radix Themes catalog, grouped by
  category (Typography, Layout, Forms, Actions, Overlays, Navigation, Data
  Display).
- **`Custom/*`** — components that fill Radix gaps (e.g. `Stepper`,
  `FileDropper`), styled with Radix theme variables so they follow the
  active accent color and light/dark mode.
- **`Patterns/*`** — real screens composed from the above.
- **`Playground/Theme Panel`** — tweak accent color, radius, and appearance
  live.

The whole system's look is configured in one place — the `<Theme>` in
`src/main.tsx` (and the Storybook decorator in `.storybook/preview.tsx`).

## Editor setup (VS Code)

Open the folder in VS Code and accept the prompt to install the recommended
extensions (`.vscode/extensions.json`):

- **Oxc** — surfaces `oxlint` diagnostics inline (this project lints with
  oxlint, not ESLint).
- **Prettier** — formats on save (`.prettierrc`).
- **Figma for VS Code** — the design-to-code bridge (below).

Workspace settings (`.vscode/settings.json`) enable format-on-save and the
workspace TypeScript version, so everyone gets the same behavior.

## Design-to-code with Figma

This system is Figma-friendly by design. With **Figma Dev Mode** and the
**Figma for VS Code** extension, the loop is:

1. Open the Figma frame in Dev Mode; inspect specs, variables, and the
   selected layer's generated code — all inside VS Code.
2. Build the matching component here using Radix Themes primitives and
   theme variables, keeping Figma variables and code tokens aligned.
3. Verify in Storybook side-by-side with the Figma frame.

Because both Figma variables and Radix theme tokens describe the same
decisions (accent color, radius, spacing scale), keeping them in sync is the
main design-to-code maintenance task.

## Contributing

New components go through a short RFC-first process — propose (RFC),
implement on a branch, document, review. See the open pull requests for
worked examples.
