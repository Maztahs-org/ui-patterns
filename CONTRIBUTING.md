# Contributing to UI Patterns

Thank you for taking the time to contribute. UI Patterns is built in public and every contribution — whether a bug fix, a new component, a documentation improvement, or a well-written issue — makes it better for everyone.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Development Setup](#development-setup)
3. [Branch Naming Conventions](#branch-naming-conventions)
4. [Commit Message Conventions](#commit-message-conventions)
5. [Coding Standards](#coding-standards)
6. [Formatting and Linting](#formatting-and-linting)
7. [Pull Request Process](#pull-request-process)
8. [Issue Reporting Guidelines](#issue-reporting-guidelines)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating you agree to uphold these standards. Please report unacceptable behaviour to the project maintainers.

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io) >= 9

If you do not have pnpm installed:

```bash
corepack enable
corepack use pnpm@latest
```

### Clone and install

```bash
# Fork the repository on GitHub first, then clone your fork
git clone https://github.com/<your-username>/ui-patterns.git
cd ui-patterns

# Add the upstream remote to keep your fork in sync
git remote add upstream https://github.com/Maztahs-org/ui-patterns.git

# Install dependencies
pnpm install

# Start the development server
pnpm dev
# → http://localhost:5173
```

### Keeping your fork up to date

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### Available commands

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start the Vite development server        |
| `pnpm build`        | Type-check and build for production      |
| `pnpm preview`      | Serve the production build locally       |
| `pnpm lint`         | Run ESLint                               |
| `pnpm lint:fix`     | Run ESLint with auto-fix                 |
| `pnpm format`       | Format all files with Prettier           |
| `pnpm format:check` | Check formatting without writing changes |
| `pnpm type-check`   | Run TypeScript compiler without emitting |

---

## Branch Naming Conventions

Create all branches from an up-to-date `main`. Use the following prefixes:

| Prefix      | Purpose                                       | Example                    |
| ----------- | --------------------------------------------- | -------------------------- |
| `feat/`     | A new feature or component                    | `feat/button-component`    |
| `fix/`      | A bug fix                                     | `fix/modal-focus-trap`     |
| `docs/`     | Documentation-only changes                    | `docs/update-contributing` |
| `refactor/` | Code refactoring without behaviour change     | `refactor/hooks-cleanup`   |
| `test/`     | Adding or updating tests                      | `test/button-unit-tests`   |
| `chore/`    | Tooling, config, or dependency updates        | `chore/update-eslint`      |
| `style/`    | Formatting or whitespace — no logic changes   | `style/consistent-spacing` |
| `ci/`       | Changes to GitHub Actions or CI configuration | `ci/add-node-22-matrix`    |
| `perf/`     | Performance improvements                      | `perf/reduce-bundle-size`  |

Branch names must be lowercase and use hyphens as word separators.

---

## Commit Message Conventions

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This enables automated changelog generation and semantic versioning.

### Format

```
<type>(<scope>): <short description>

[optional body — explain the why, not the what]

[optional footer — BREAKING CHANGE or issue references]
```

### Rules

- Write the description in **imperative mood**: "add", "fix", "update" — not "added" or "fixes".
- Do not capitalise the description and do not end it with a period.
- Keep the subject line under 72 characters.

### Types

| Type       | When to use                                           |
| ---------- | ----------------------------------------------------- |
| `feat`     | A new feature or component                            |
| `fix`      | A bug fix                                             |
| `docs`     | Documentation-only changes                            |
| `style`    | Formatting, whitespace — no logic changes             |
| `refactor` | Code change that is neither a fix nor a feature       |
| `perf`     | A change that improves performance                    |
| `test`     | Adding or correcting tests                            |
| `chore`    | Tooling, config, build process, or dependency updates |
| `ci`       | Changes to CI/CD configuration                        |
| `revert`   | Reverts a previous commit                             |

### Examples

```
feat(button): add loading state with accessible spinner
fix(modal): resolve focus not restoring on close
docs(readme): add example usage section
chore(deps): upgrade tailwindcss to 4.3.2
ci(workflows): add Node 22 to build matrix
```

### Breaking changes

```
feat(button): remove color prop in favour of variant

BREAKING CHANGE: The `color` prop has been removed. Use `variant` instead.
Closes #42
```

---

## Coding Standards

### TypeScript

- Strict mode is enabled. All code must be fully type-safe. Avoid `any` unless genuinely necessary — add an explanatory comment if you use it.
- Export all component prop interfaces as named types: `ButtonProps`, `BadgeProps`, etc.
- Prefer `interface` for component props. Use `type` for unions, intersections, mapped types, and conditional types.
- Add [TSDoc](https://tsdoc.org/) comments to all exported components and public utility functions.

### React

- Use **functional components** exclusively. No class components.
- Use **named exports** for all components. Avoid default exports except for route-level page components.
- Colocate component-specific hooks and helpers with the component file unless they are reused elsewhere.
- Keep components focused. A component that cannot be described in one sentence is doing too much — split it.
- Avoid prop drilling beyond two levels deep. Use composition or context instead.

### Accessibility

Every interactive component must:

- Be fully operable with a keyboard alone.
- Have a visible focus indicator that meets WCAG 3:1 contrast.
- Use semantically correct HTML elements (`<button>`, `<nav>`, `<dialog>`, etc.).
- Include correct ARIA attributes where native semantics are insufficient.

### Styling

- Use **Tailwind CSS utility classes** for all styling. Avoid inline `style` props unless a value is genuinely dynamic and cannot be expressed with a class.
- Do not use arbitrary Tailwind values (e.g. `w-[347px]`) where a standard scale token works.
- Follow **mobile-first** responsive design — start with the smallest viewport and layer up with breakpoints.

### File naming

- Use `kebab-case` for all file and directory names: `button.tsx`, `use-focus-trap.ts`.
- Each component file exports a single named component in PascalCase matching the filename.

---

## Formatting and Linting

All code must pass formatting and lint checks before a PR can merge. These run automatically in CI on every push and pull request.

### Configuration files

| Tool       | Config file         |
| ---------- | ------------------- |
| ESLint     | `eslint.config.js`  |
| Prettier   | `.prettierrc`       |
| TypeScript | `tsconfig.app.json` |
| Editor     | `.editorconfig`     |

Install the ESLint and Prettier extensions for your editor and enable format-on-save. The `.editorconfig` file ensures consistent indentation and line endings across all editors.

---

## Pull Request Process

### Before opening a PR

- [ ] Branch is up to date with `main`
- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm format:check` passes with no diffs
- [ ] `pnpm type-check` passes with no errors
- [ ] `pnpm build` completes successfully
- [ ] All interactive components include correct accessibility attributes
- [ ] Documentation has been added or updated for any public API changes
- [ ] Screenshots or a short demo are included for visual changes

### Submitting

1. Push your branch to your fork.
2. Open a pull request against `main` on the upstream repository.
3. Fill in the pull request template completely.
4. Link related issues with GitHub keywords: `Closes #42`, `Fixes #17`.

### Review

- Every PR requires at least **one approving review** from a maintainer before merge.
- Address all review comments or explain clearly why a suggestion should not be applied.
- Once all CI checks are green and the PR is approved it will be merged via **squash merge** to keep the history clean.
- Large or complex changes may be asked to be split into smaller, independently reviewable PRs.

---

## Issue Reporting Guidelines

Search existing issues before opening a new one to avoid duplicates. Use the appropriate template:

| Template              | Use for                                        |
| --------------------- | ---------------------------------------------- |
| **Bug Report**        | Something broken or behaving unexpectedly      |
| **Feature Request**   | A new capability or enhancement                |
| **Component Request** | A new UI component you would like to see built |

### Good bug reports include

- A **minimal reproduction** — a CodeSandbox, StackBlitz link, or small repo that isolates the issue.
- The **expected** behaviour and the **actual** behaviour.
- Your environment: OS, browser, Node version, pnpm version, and ui-patterns version.

Reports without a reproduction may be closed if the issue cannot be reproduced.

---

## Questions

If you have a question that is not a bug or feature request, open a [GitHub Discussion](https://github.com/Maztahs-org/ui-patterns/discussions) rather than an issue.
