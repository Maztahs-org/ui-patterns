# UI Patterns

> A modern, open-source collection of reusable UI components, design patterns, and frontend foundations built for React applications.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)

---

## Table of Contents

- [Overview](#overview)
- [Goals](#goals)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Example Usage](#example-usage)
- [Architecture](#architecture)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

UI Patterns is a curated library of production-ready UI components, layouts, and design system primitives built with modern frontend technologies. It provides developers and designers with reusable, accessible, and customizable building blocks for constructing scalable web applications.

Every component is crafted with care for accessibility (WCAG 2.1 AA), keyboard navigation, semantic HTML, and a consistent design language. The project is open-source, MIT-licensed, and built to evolve with the community.

---

## Goals

- Provide a trustworthy, well-documented set of UI building blocks for React applications.
- Enforce accessibility as a first-class requirement, not an afterthought.
- Keep the API surface small, consistent, and easy to reason about.
- Build in the open, with transparent decisions and a welcoming contribution process.

---

## Features

- **React 19 + TypeScript** — Fully typed components with strict type safety and exported prop interfaces.
- **Tailwind CSS v4** — Utility-first styling via the new Vite plugin. No config file required.
- **Vite 6** — Lightning-fast dev server and optimised production builds with code splitting.
- **Modular architecture** — Each pattern category lives in its own directory.
- **Accessible by default** — WCAG 2.1 AA, correct ARIA roles, keyboard navigation, and focus management.
- **Design tokens** — Consistent spacing, colour, and typography shared across all components.
- **Path aliases** — Clean `@/` imports resolving to `src/` throughout the codebase.
- **ESLint + Prettier** — Automated linting and formatting enforced in CI.
- **Open source** — MIT licensed. Community contributions are welcome.

---

## Tech Stack

| Technology   | Version | Purpose                              |
| ------------ | ------- | ------------------------------------ |
| React        | 19      | UI rendering library                 |
| TypeScript   | 5       | Static type safety                   |
| Vite         | 6       | Build tool and dev server            |
| Tailwind CSS | 4       | Utility-first styling                |
| ESLint       | 9       | Code linting                         |
| Prettier     | 3       | Code formatting                      |
| pnpm         | 9       | Fast, disk-efficient package manager |

---

## Project Structure

```text
ui-patterns/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── component_request.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── lint.yml
│   └── pull_request_template.md
│
├── assets/                   # Static assets (images, fonts, icons)
├── docs/                     # Architecture and design documentation
├── examples/                 # Standalone usage examples
├── packages/                 # Future monorepo sub-packages
├── public/                   # Vite public directory (served as-is)
│
└── src/
    ├── components/           # General-purpose UI elements
    ├── layouts/              # Page and section layout components
    ├── forms/                # Inputs, selects, checkboxes, validation wrappers
    ├── feedback/             # Alerts, toasts, spinners, progress bars
    ├── navigation/           # Navbars, breadcrumbs, tabs, pagination
    ├── overlays/             # Modals, drawers, tooltips, popovers
    ├── data-display/         # Tables, cards, lists, stat blocks
    ├── hooks/                # Reusable React hooks
    ├── lib/                  # Third-party integrations and utilities
    ├── styles/               # Global styles and Tailwind theme config
    ├── types/                # Shared TypeScript types and interfaces
    ├── utils/                # Pure utility functions
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io) >= 9

### Clone and install

```bash
git clone https://github.com/Maztahs-org/ui-patterns.git
cd ui-patterns
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `pnpm dev`          | Start the Vite development server                  |
| `pnpm build`        | Type-check and compile a production build          |
| `pnpm preview`      | Serve the production build locally                 |
| `pnpm lint`         | Run ESLint across all source files                 |
| `pnpm lint:fix`     | Run ESLint and auto-fix fixable issues             |
| `pnpm format`       | Format all files with Prettier                     |
| `pnpm format:check` | Check formatting without writing changes           |
| `pnpm type-check`   | Run TypeScript compiler without emitting files     |

---

## Example Usage

Once components are available, import and compose them with full type safety:

```tsx
import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { Alert } from '@/feedback/alert'

interface WelcomeBannerProps {
  username: string
  isNew?: boolean
}

export function WelcomeBanner({ username, isNew = false }: WelcomeBannerProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      {isNew && (
        <Alert variant="info">
          Welcome to the platform! Take a look around.
        </Alert>
      )}

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-gray-900">
          Hello, {username}
        </h1>
        {isNew && <Badge variant="success">New</Badge>}
      </div>

      <Button
        variant="primary"
        size="md"
        onClick={() => console.log('get started clicked')}
      >
        Get Started
      </Button>
    </div>
  )
}
```

---

## Architecture

UI Patterns is organised around **concern-based directories** rather than atomic component types. This keeps related code together and scales well as the library grows.

### Directory conventions

| Directory       | Contains                                                     |
| --------------- | ------------------------------------------------------------ |
| `components/`   | Stateless or lightly stateful general-purpose UI elements    |
| `layouts/`      | Structural layout components (grids, shells, containers)     |
| `forms/`        | Form controls and input primitives                           |
| `feedback/`     | Components that communicate system state to the user         |
| `navigation/`   | Components that help users move through the application      |
| `overlays/`     | Components rendered above the normal document flow           |
| `data-display/` | Components for rendering structured data                     |
| `hooks/`        | Custom React hooks shared across multiple components         |
| `lib/`          | Wrappers around third-party libraries and shared utilities   |
| `styles/`       | Global CSS, Tailwind theme customisation, design tokens      |
| `types/`        | Shared TypeScript interfaces and utility types               |
| `utils/`        | Pure functions with no React dependency                      |

### Component file structure

Each component lives in its own directory:

```text
src/components/button/
├── button.tsx        # Component implementation
├── button.types.ts   # Exported prop interface
└── index.ts          # Public re-export
```

### Design principles

- **Accessibility first** — Every interactive component must be keyboard-navigable and screen-reader compatible.
- **Composability** — Components are small and focused. Complex UIs are assembled from primitives.
- **No unnecessary abstractions** — Prefer clarity over cleverness.
- **Consistency** — Prop names, variant naming, and file structure follow the same conventions everywhere.

---

## Roadmap

| Phase | Focus                 | Status      |
| ----- | --------------------- | ----------- |
| 1     | Project Foundation    | ✅ Complete |
| 2     | Primitive Components  | 🔜 Planned  |
| 3     | Advanced Patterns     | 🔜 Planned  |
| 4     | Documentation Website | 🔜 Planned  |

See [ROADMAP.md](./ROADMAP.md) for detailed milestone descriptions.

---

## Contributing

Contributions are welcome from developers, designers, and open-source enthusiasts of all experience levels.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, branch and commit conventions, coding standards, and the PR process. All contributors are expected to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

### Quick start

```bash
# Fork on GitHub, then:
git clone https://github.com/<your-username>/ui-patterns.git
cd ui-patterns
pnpm install
git checkout -b feat/my-contribution

# After making changes:
pnpm lint && pnpm type-check && pnpm build
git commit -m "feat: describe your change"
git push origin feat/my-contribution
# Open a Pull Request on GitHub
```

---

## License

Released under the [MIT License](./LICENSE).

Copyright © 2026 Maztah
