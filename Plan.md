# Visual Differentiation Plan for Upstream Labs Website

## Goal
Transform the website from standard AstroWind styling to a distinctive, gradient-rich design inspired by beijing2025 and origin2025 reference sites.

---

## Status: ✅ COMPLETE

All 6 phases of the visual differentiation plan have been successfully implemented.

---

## Key Changes Overview

| Area | Original State | Current State | Status |
|------|--------------|--------------|--------|
| Section Backgrounds | Repetitive `bg-blue-50` on 3 sections | 4 distinct multi-layered radial gradients | ✅ Complete |
| Features Widget | Plain icon grid | Glassmorphism card grid (FeaturesCards) | ✅ Complete |
| Stats Widget | Sparse horizontal layout | Elevated cards with gradient numbers | ✅ Complete |
| Timeline/Steps | Basic vertical line | Gradient connector with pulsing markers | ✅ Complete |
| Content Sections | Two identical layouts | Differentiated with unique treatments | ✅ Complete |

---

## Completed Work

### ✅ Phase 1: Section Background System

**File:** `src/assets/styles/tailwind.css`

Added 4 new gradient utility classes:

1. **`.section-bg-azure-glow`** - Blue top-left + aqua bottom-right ellipses (for Features, Steps)
2. **`.section-bg-gold-accent`** - Gold top-right + blue bottom-left (for Content #1)
3. **`.section-bg-aqua-flow`** - Aqua bottom-center + blue left (available, not currently used)
4. **`.section-bg-tri-color`** - Three-way blue/gold/aqua gradient (for Stats)

Each utility uses multi-layered `radial-gradient()` with:
- Opacity range: 0.06-0.15 (light mode), 0.10-0.20 (dark mode)
- `::before` pseudo-element pattern
- `pointer-events: none` for interaction passthrough

---

### ✅ Phase 2: Features Widget Upgrade

**New File:** `src/components/widgets/FeaturesCards.astro`

Created a card-based variant of Features that uses:
- ItemGrid2 for card layout (3 columns)
- Glassmorphism styling: `backdrop-blur-sm`, `bg-white/90 dark:bg-ink-800/80`
- Elevated shadows: `shadow-[0_8px_30px_rgba(43,116,255,0.08)]`
- Hover effect: `-translate-y-1` with shadow increase
- Large border-radius: `rounded-2xl` (16px)

**Usage in index.astro:**
Mission section now uses `<FeaturesCards>` with `section-bg-azure-glow` background.

---

### ✅ Phase 3: Stats Widget Enhancement

**File:** `src/components/widgets/Stats.astro`

Transformed from horizontal flex to card grid:
- Individual stat cards with `rounded-[28px]` border-radius
- Gradient numbers: `bg-gradient-to-r from-azure-500 to-aqua-500` with `bg-clip-text`
- Icon badge: circular gradient background (`from-azure-500 to-aqua-500`)
- Card hover effect with shadow elevation
- Section background: `.section-bg-tri-color`

---

### ✅ Phase 4: Timeline Enhancement

**File:** `src/components/ui/Timeline.astro`

Enhanced the Steps widget connector:
- Gradient vertical line with `.timeline-connector` class
- Gradient connector: `linear-gradient(180deg, rgb(56 189 248), rgb(14 165 233))`
- Marker styling: gradient background + white/dark border
- Icons: gradient filled circles (`from-azure-500 to-aqua-500`)

---

### ✅ Phase 5: Content Section Differentiation

**File:** `src/pages/index.astro`

**Content #1 (Our Approach):**
- Background: `.section-bg-gold-accent`
- Decorative left border: `border-l-4 border-azure-500` on content slot

**Content #2:**
- Not implemented - decided page flow was complete without it
- `section-bg-aqua-flow` utility remains available for future use

---

### ✅ Phase 6: Tailwind Config Extensions

**File:** `tailwind.config.js`

Added design tokens:
```javascript
borderRadius: {
  '4xl': '28px',
},
boxShadow: {
  'elevated': '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)',
  'elevated-lg': '0 30px 60px rgba(0, 0, 0, 0.12), 0 12px 24px rgba(0, 0, 0, 0.08)',
},
animation: {
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
```

---

## Current Section Background Mapping

| Section | Background Class | Status |
|---------|-----------------|--------|
| Hero | `hero-gradient` | ✅ Active |
| Note | none | ✅ Active (clean break) |
| Features/Mission | `section-bg-azure-glow` | ✅ Active |
| Content #1 (Our Approach) | `section-bg-gold-accent` | ✅ Active |
| Steps | `section-bg-azure-glow` | ✅ Active |
| Features2/Programs | none | ✅ Active (cards provide interest) |
| Stats | `section-bg-tri-color` | ✅ Active |
| CallToAction | `cta-gradient` | ✅ Active |

---

## Additional Work Completed

### ✅ FAQ Migration to Dedicated Pages

**New Files:**
- `src/pages/faq.astro` - English FAQ page
- `src/pages/cn/faq.astro` - Chinese FAQ page

**Changes:**
- Moved FAQs from homepage sections to dedicated pages for better UX
- Added FAQ links to header navigation (under "About" dropdown)
- Added FAQ links to footer (under "Company" section)
- Removed FAQ widgets from `index.astro` and `cn/index.astro`
- FAQ pages use Hero widget with `/images/hero-image.jpg`

---

## Modified Files Summary

| File | Changes |
|------|---------|
| `src/assets/styles/tailwind.css` | ✅ Added 4 section-bg-* utilities, timeline styles |
| `tailwind.config.js` | ✅ Added borderRadius, boxShadow, animation tokens |
| `src/components/widgets/FeaturesCards.astro` | ✅ NEW - Card-based features variant |
| `src/components/widgets/Stats.astro` | ✅ Redesigned with gradient cards |
| `src/components/ui/Timeline.astro` | ✅ Added gradient connector and markers |
| `src/pages/index.astro` | ✅ Applied backgrounds, swapped Features, removed FAQs |
| `src/pages/cn/index.astro` | ✅ Removed FAQs section |
| `src/pages/faq.astro` | ✅ NEW - English FAQ page |
| `src/pages/cn/faq.astro` | ✅ NEW - Chinese FAQ page |
| `src/navigation.ts` | ✅ Added FAQ links to header and footer |

---

## Next Steps (Optional)

If needed, consider:
1. Adding a second Content section with `section-bg-aqua-flow` background
2. Creating additional language variations for FAQ pages
3. Adding more FAQ items based on user inquiries
4. Running `npm run check:eslint` and `npm run fix` for code quality
