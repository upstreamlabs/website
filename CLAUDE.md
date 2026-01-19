# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Upstream Labs website, built on the AstroWind template - an Astro 5 site using Tailwind CSS. Upstream Labs is devoted to building sustainable open-source ecosystems through training, mentorship, and funding.

### Key Programs
- **Upstream 2025** (源起之道) - Flagship training program: https://camp.upstreamlabs.org
- **GOBI Conference** - Global Open Source Business Innovation: https://gobi.upstreamlabs.org

### Social Links
- X (Twitter): https://x.com/UpstreamLabs_X

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Run all checks (astro, eslint, prettier)
npm run check:astro  # TypeScript/Astro validation only
npm run check:eslint # Lint only
npm run fix          # Auto-fix eslint and prettier issues
```

## Architecture

### Configuration System

The site uses a YAML-based configuration loaded via a custom Astro integration:

- `src/config.yaml` - Main site config (SEO metadata, analytics, theme)
- `vendor/integration/` - Custom Astro integration that:
  - Reads `src/config.yaml` and exposes it as a virtual module `astrowind:config`
  - Provides `SITE`, `METADATA`, `UI`, `ANALYTICS` exports
  - Auto-updates `robots.txt` with sitemap URL on build

### Path Aliases

Use `~/` to import from `src/`:
```typescript
import { something } from '~/utils/permalinks';
```

### Internationalization

- English locale: `/en/` prefix
- Chinese locale: `/cn/` prefix
- Pages are duplicated in each locale folder with translated content
- Navigation is locale-aware via `src/navigation.ts`

### Site Structure

Pages (in both `/en/` and `/cn/`):
- `index.astro` - Homepage
- `about.astro` - About Upstream Labs
- `contact.astro` - Contact information
- `faq.astro` - Frequently asked questions
- `privacy.astro` - Privacy policy
- `terms.astro` - Terms of service
- `services.astro` - Programs page (orphaned, not in navigation)

### Component Organization

- `src/components/widgets/` - Page section components (Hero, Features, FeaturesCards, Footer, etc.)
- `src/components/ui/` - Reusable UI primitives
- `src/components/common/` - Shared components
- `src/layouts/` - Page layouts (Layout, PageLayout, LandingLayout)

### Routing

- `src/pages/en/` - English locale pages
- `src/pages/cn/` - Chinese locale pages
- `src/navigation.ts` - Header and footer navigation configuration (locale-aware)

### Tailwind Theme

Custom theme variables via CSS custom properties:
- Colors: `azure`, `aqua`, `gold`, `ink` (brand colors)
- Section backgrounds: `section-bg-azure-glow`, `section-bg-gold-accent`
- Gradients: `hero-gradient`, `cta-gradient`
- Dark mode: class-based (`darkMode: 'class'`)
