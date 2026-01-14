# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Upstream Labs website, built on the AstroWind template - an Astro 5 site using Tailwind CSS. It's a venture capital / startup incubator marketing website with i18n support (English and Chinese).

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

- `src/config.yaml` - Main site config (SEO metadata, blog settings, analytics, theme)
- `vendor/integration/` - Custom Astro integration that:
  - Reads `src/config.yaml` and exposes it as a virtual module `astrowind:config`
  - Provides `SITE`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS` exports
  - Auto-updates `robots.txt` with sitemap URL on build

### Path Aliases

Use `~/` to import from `src/`:
```typescript
import { something } from '~/utils/blog';
```

### Internationalization

- Default locale: `en` (no URL prefix)
- Additional locale: `cn` (prefix `/cn/`)
- Translation files: `src/i18n/locales/{lang}/{namespace}.json`
- Namespaces: `common`, `nav`, `home`, `footer`
- Use `useTranslations(lang)` from `~/i18n/utils` to get the `t()` function

### Content Collections

Blog posts use Astro's Content Collections with glob loader:
- Posts location: `src/data/post/` (`.md` or `.mdx`)
- Schema defined in `src/content/config.ts`
- Post metadata: `publishDate`, `title`, `excerpt`, `image`, `category`, `tags`, `author`, `draft`

### Component Organization

- `src/components/widgets/` - Page section components (Hero, Features, Pricing, Footer, etc.)
- `src/components/ui/` - Reusable UI primitives
- `src/components/common/` - Shared components
- `src/components/blog/` - Blog-specific components
- `src/layouts/` - Page layouts (Layout, PageLayout, MarkdownLayout, LandingLayout)

### Routing

- `src/pages/` - File-based routing
- `src/pages/cn/` - Chinese locale pages
- `src/pages/[...blog]/` - Dynamic blog routes (posts, categories, tags, pagination)
- `src/navigation.ts` - Header and footer navigation configuration

### Permalink System

The `src/utils/permalinks.ts` module handles URL generation:
- `getPermalink(slug, type)` - Generate URLs for pages, posts, categories, tags
- `getBlogPermalink()` - Blog index URL
- Respects `trailingSlash` setting from config

### Tailwind Theme

Custom theme variables via CSS custom properties:
- Colors: `primary`, `secondary`, `accent`, `default`, `muted`
- Fonts: `sans`, `serif`, `heading`
- Dark mode: class-based (`darkMode: 'class'`)
