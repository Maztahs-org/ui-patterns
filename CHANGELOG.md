# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned

- Design tokens — colour palette, typography scale, spacing, border radius, shadows, dark mode
- Primitive components — Button, Badge, Avatar, Heading, Text, Link, Stack, Spinner, Skeleton

---

## [0.1.0] — 2026-07-04

Initial release. This version establishes the full project foundation: tooling, configuration, directory structure, CI/CD, and documentation. No reusable components are shipped yet — those begin in v0.2.

### Added

**Project scaffold**

- Repository structure organised by UI concern (`components/`, `layouts/`, `forms/`, `feedback/`, `navigation/`, `overlays/`, `data-display/`, `hooks/`, `lib/`, `styles/`, `types/`, `utils/`)
- `index.html` entry point
- `src/main.tsx` — React 19 `createRoot` entry
- `src/App.tsx` — root application component
- `src/index.css` — global stylesheet with Tailwind v4 `@import "tailwindcss"`
- `public/favicon.svg`
- Placeholder directories: `assets/`, `docs/`, `examples/`, `packages/`

**Tooling and configuration**

- React 19 + TypeScript 5 + Vite 6
- Tailwind CSS v4 via `@tailwindcss/vite` plugin — no `tailwind.config.js` required
- ESLint 9 with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-config-prettier`
- Prettier 3 code formatting (`.prettierrc`)
- Path alias `@/` → `src/` in both Vite and TypeScript config
- `@types/node` for Vite config type safety
- `.editorconfig` for cross-editor consistency
- `.gitignore` covering Node, Vite, TypeScript build artifacts, OS files, and editor directories
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — composite project references with strict mode

**GitHub**

- Issue template: Bug Report (`.github/ISSUE_TEMPLATE/bug_report.md`)
- Issue template: Feature Request (`.github/ISSUE_TEMPLATE/feature_request.md`)
- Issue template: Component Request (`.github/ISSUE_TEMPLATE/component_request.md`)
- Pull request template (`.github/pull_request_template.md`)
- CI workflow — type-check and build on Node 20 and 22 (`.github/workflows/ci.yml`)
- Lint workflow — ESLint and Prettier check on every push and PR (`.github/workflows/lint.yml`)

**Documentation**

- `README.md` — overview, goals, features, tech stack, folder structure, installation, scripts, example usage, architecture, roadmap, contributing guide, license
- `CONTRIBUTING.md` — development setup, branch naming, Conventional Commits, coding standards, formatting and linting, PR process, issue reporting guidelines
- `ROADMAP.md` — four-phase plan: Foundation, Primitive Components, Advanced Patterns, Documentation Website
- `CHANGELOG.md` — this file; Keep a Changelog format from v0.1.0
- `CODE_OF_CONDUCT.md` — Contributor Covenant v2.1
- `LICENSE` — MIT License

### Verified

- `pnpm build` completes with zero TypeScript errors and zero ESLint errors
- Production output: `dist/index.html`, CSS bundle ~9 kB, JS bundle ~196 kB (gzipped: ~61 kB)

---

[Unreleased]: https://github.com/Maztahs-org/ui-patterns/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Maztahs-org/ui-patterns/releases/tag/v0.1.0
