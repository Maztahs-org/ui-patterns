# Roadmap

This document describes the planned phases of development for UI Patterns. Each phase builds on the previous one, progressing from foundational infrastructure through primitive components, advanced patterns, and a dedicated documentation website.

Items are marked ✅ complete, 🚧 in progress, or 🔜 planned.

Have a suggestion? Open a [Feature Request](https://github.com/Maztahs-org/ui-patterns/issues/new?template=feature_request.md) or start a [Discussion](https://github.com/Maztahs-org/ui-patterns/discussions).

---

## Phase 1 — Foundation ✅ Complete

**Goal:** Establish the project infrastructure, tooling, and conventions that all future work builds on.

### Deliverables

- [x] Repository scaffold with concern-based `src/` directory structure
- [x] React 19 + TypeScript 5 + Vite 6
- [x] Tailwind CSS v4 via `@tailwindcss/vite` — no config file required
- [x] ESLint 9 with TypeScript, React Hooks, and Prettier integration
- [x] Prettier 3 code formatting
- [x] Path alias `@/` → `src/`
- [x] `.editorconfig` for cross-editor consistency
- [x] `.gitignore` covering Node, Vite, OS, and editor artifacts
- [x] GitHub issue templates (bug report, feature request, component request)
- [x] GitHub Actions CI workflow — build and type-check on Node 20 and 22
- [x] GitHub Actions lint workflow — ESLint and Prettier check on every push and PR
- [x] GitHub pull request template
- [x] `README.md`, `CONTRIBUTING.md`, `ROADMAP.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `LICENSE`
- [x] Verified clean production build with zero TypeScript or ESLint errors

---

## Phase 2 — Primitive Components 🔜 Planned

**Goal:** Build the foundational, composable UI primitives that all higher-order patterns will be assembled from.

### Design tokens (prerequisite)

Before any components ship, a shared token layer will be established as CSS custom properties consumed by Tailwind's theme system:

- [ ] Colour palette — primary, neutral, and semantic scales (success, warning, error, info)
- [ ] Typography scale — font families, sizes, weights, line-heights
- [ ] Spacing scale — consistent 4 px base grid
- [ ] Border radius tokens
- [ ] Shadow and elevation tokens
- [ ] Animation duration and easing tokens
- [ ] Dark mode via `prefers-color-scheme` and an optional manual toggle

### Target components

**Actions**
- [ ] `Button` — variants (primary, secondary, ghost, destructive), sizes (sm / md / lg), loading state, icon slots
- [ ] `IconButton` — accessible icon-only button with required `aria-label`

**Display**
- [ ] `Badge` — semantic colour variants with optional dot indicator
- [ ] `Avatar` — image with fallback to initials, multiple sizes
- [ ] `Tag` — dismissible label for categories and filters

**Typography**
- [ ] `Heading` — semantic h1–h6 with style decoupled from level
- [ ] `Text` — body copy with size and weight variants
- [ ] `Link` — styled anchor with internal/external detection and icon support

**Layout primitives**
- [ ] `Stack` — flexbox row and column primitive with gap control
- [ ] `Divider` — horizontal and vertical separator with optional label

**Feedback**
- [ ] `Spinner` — accessible loading indicator with ARIA live region
- [ ] `Skeleton` — shimmer placeholder for loading states

### Standards for all Phase 2 components

- Exported TypeScript prop interface (`ComponentNameProps`)
- TSDoc comment on the component and each non-obvious prop
- Keyboard navigation compliance
- ARIA attributes on all interactive elements

---

## Phase 3 — Advanced Patterns 🔜 Planned

**Goal:** Build compound and stateful components that solve common UI problems in production applications.

### Forms

- [ ] `Input` — text, email, password, number with icon slots and character count
- [ ] `Textarea` — auto-resize support
- [ ] `Select` — accessible native and custom-styled variants
- [ ] `Checkbox` — controlled and uncontrolled, with indeterminate state
- [ ] `RadioGroup` — accessible group with vertical and horizontal layouts
- [ ] `Switch` — boolean toggle with accessible label
- [ ] `FormField` — label + input + helper text + error message composition wrapper
- [ ] `FormValidation` — integration pattern for `react-hook-form`

### Feedback

- [ ] `Alert` — inline status messages (info, success, warning, error) with optional dismiss
- [ ] `Toast` — ephemeral notification system with queue, positions, and durations
- [ ] `Progress` — linear bar with determinate and indeterminate variants
- [ ] `EmptyState` — placeholder for zero-data views

### Overlays

- [ ] `Modal` / `Dialog` — focus trap, scroll lock, backdrop dismiss, animation
- [ ] `Drawer` — side panel overlay (left, right, top, bottom)
- [ ] `Tooltip` — on-hover contextual info with safe positioning
- [ ] `Popover` — on-click floating content panel with arrow

### Navigation

- [ ] `Navbar` — top navigation with responsive mobile hamburger menu
- [ ] `Breadcrumb` — hierarchical path navigation
- [ ] `Tabs` — accessible ARIA tab panels
- [ ] `Pagination` — numbered, previous/next, and jump-to-page variants
- [ ] `Sidebar` — collapsible side navigation with nested item support
- [ ] `Stepper` — multi-step progress indicator (horizontal and vertical)

### Data display

- [ ] `Table` — sortable, paginated data tables with sticky headers
- [ ] `Card` — content container with composable header, body, and footer slots
- [ ] `List` — ordered, unordered, and description list variants
- [ ] `Stat` — key metric display block with trend indicator
- [ ] `DataGrid` — advanced grid with column resizing and row selection

---

## Phase 4 — Documentation Website 🔜 Planned

**Goal:** Build a dedicated documentation site that showcases all components with live previews, prop tables, and copy-paste examples.

### Deliverables

- [ ] Documentation site built with [Astro](https://astro.build) or Next.js
- [ ] Live component playground with editable props
- [ ] Auto-generated prop tables from TypeScript interfaces
- [ ] Copy-paste code snippets for every component variant
- [ ] Accessibility audit notes per component (WCAG criteria met)
- [ ] Dark mode toggle on the docs site itself
- [ ] Full-text search across all documentation
- [ ] Versioned docs for stable releases
- [ ] npm package publication (`@ui-patterns/core`)
- [ ] Storybook integration for isolated component development and visual testing
- [ ] Figma component library matching the code components (design ↔ code parity)

---

## Beyond Phase 4

Not committed to a milestone, but on the long-term radar:

- Animation primitives (Motion / Framer Motion integration)
- Theme builder — visual tool for customising design tokens
- `@ui-patterns/icons` — custom SVG icon set with consistent stroke weight
- Right-to-left (RTL) layout support
- Server Component compatibility notes for Next.js App Router users
- React Native component variants
