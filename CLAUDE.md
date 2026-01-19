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

## JavaScript & View Transitions

This site uses Astro's View Transitions (`ClientRouter`). **This affects how scripts work:**

### The Problem
When users navigate between pages, the DOM is swapped but inline scripts may not re-run. Event listeners attached to elements become orphaned.

### The Solution Pattern
For any script that attaches event listeners to DOM elements:

```javascript
<script is:inline>
  // ONE-TIME SETUP (runs once, persists across navigations)
  (function() {
    if (window._myFeatureInitialized) return;
    window._myFeatureInitialized = true;

    // Global event listeners (scroll, keydown, resize, etc.)
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeydown);
  })();

  // PER-PAGE SETUP (runs on each page load/navigation)
  function initMyFeature() {
    const element = document.querySelector('.my-element');
    if (element) {
      // Use onclick/onchange instead of addEventListener to avoid duplicates
      element.onclick = () => { /* handler */ };
    }
  }

  // Run on initial load
  initMyFeature();

  // Re-run after View Transitions
  document.addEventListener('astro:after-swap', initMyFeature);
</script>
```

### Key Rules
1. **Use `onclick`/`onchange` properties** instead of `addEventListener` for element-specific handlers (avoids stacking listeners)
2. **Always handle `astro:after-swap`** for any script that needs to run on every page
3. **Use a guard flag** (`window._featureInitialized`) for one-time global listeners
4. **Query elements fresh** in the per-page function (don't cache references at top level)

### Existing Scripts
- `BasicScripts.astro` - Handles theme toggle, scroll behavior (uses `window.onload` + `astro:after-swap`)
- `HeaderNew.astro` - Handles mobile nav, scroll detection (uses the pattern above)

## Common Pitfalls & Best Practices

### CSS Scoping
- Astro scopes `<style>` blocks to the component using `data-astro-cid-*` attributes
- **Child component elements won't match scoped selectors** - use `:global(.class)` to style them
- Example: Styling a button from `ToggleTheme.astro` inside `HeaderNew.astro` requires `:global(.theme-toggle-btn)`

### Z-Index Stacking
- Header (`.main-nav-bar`): `z-index: 40`
- Hero sections: `z-index: 0` (use `z-0` class)
- Overlays that shouldn't block clicks: add `pointer-events: none`

### Mobile Responsiveness
- Hero components need `pt-10` on mobile to clear the fixed header
- Desktop uses `md:pt-[76px]` or `md:pt-[120px]` depending on hero type
- Always test navigation and interactive elements on mobile viewport

### Image Handling
- Use local images from `src/assets/images/` instead of external URLs (Unsplash, etc.)
- Import images in frontmatter: `import heroImage from '~/assets/images/hero.jpg'`
- Use consistent border-radius: `rounded-2xl` for hero/content images

### Dark Mode
- Theme toggle saves to `localStorage.theme`
- Use `:global(.dark)` prefix for dark mode CSS in scoped styles
- Test both light and dark modes when making visual changes
