# Upstream Labs Website

Bilingual (English/Chinese) corporate website built with Astro 5.0 + Tailwind CSS.

## Overview

Upstream Labs is a unique combination of venture capital, Y Combinator methodology, and incubator resources, dedicated to empowering the next generation of startups.

This website is based on the AstroWind template with bilingual (English/Chinese) support implemented using Astro's built-in i18n routing and i18next for translations.

## Tech Stack

- **Framework**: [Astro 5.0](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **i18n Routing**: Astro built-in i18n
- **Translations**: [i18next](https://www.i18next.com/)
- **TypeScript**: Type-safe development
- **Icons**: Astro Icon (Tabler icons)

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

- English: `http://localhost:4321/`
- Chinese: `http://localhost:4321/cn/`

**Important:** URLs use trailing slashes (e.g., `/cn/` not `/cn`)

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Bilingual Architecture

### URL Structure

- **English (default)**: `/` - No language prefix
- **Chinese**: `/cn/` - Language prefix

Examples:
- Homepage: `/` (English), `/cn/` (Chinese)
- About: `/about/` (English), `/cn/about/` (Chinese)
- Contact: `/contact/` (English), `/cn/contact/` (Chinese)

**Note:** All URLs use trailing slashes due to `trailingSlash: true` configuration.

### How It Works

1. **Routing**: Astro's built-in i18n routing (configured in `astro.config.ts`)
2. **Language Detection**: Automatic detection from URL path
3. **Translations**: JSON files in `src/i18n/locales/{en,zh}/`
4. **SEO**: Automatic hreflang tags for search engines
5. **Language Switcher**: Header component for easy switching

## Project Structure

```
/
├── src/
│   ├── i18n/                      # Translation infrastructure
│   │   ├── locales/               # Translation JSON files
│   │   │   ├── en/               # English translations
│   │   │   │   ├── common.json
│   │   │   │   ├── nav.json
│   │   │   │   ├── home.json
│   │   │   │   └── footer.json
│   │   │   └── zh/               # Chinese translations
│   │   │       ├── common.json
│   │   │       ├── nav.json
│   │   │       ├── home.json
│   │   │       └── footer.json
│   │   ├── utils.ts              # i18n utilities
│   │   └── index.ts              # Exports
│   │
│   ├── pages/                    # English pages (root)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── zh/                   # Chinese pages
│   │       ├── index.astro
│   │       ├── about.astro
│   │       └── contact.astro
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── LanguageSwitcher.astro
│   │   └── widgets/
│   │
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with language detection
│   │
│   └── config.yaml               # Site configuration
│
├── astro.config.ts               # Astro + i18n configuration
├── package.json
└── README.md
```

## Adding Translations

### 1. Add Translation Keys

Edit JSON files in `src/i18n/locales/{en,zh}/`:

**English** (`src/i18n/locales/en/common.json`):
```json
{
  "action": {
    "submit": "Submit"
  }
}
```

**Chinese** (`src/i18n/locales/zh/common.json`):
```json
{
  "action": {
    "submit": "提交"
  }
}
```

### 2. Use in Pages

```astro
---
import { useTranslations } from '~/i18n';

const { t } = await useTranslations('en'); // or 'zh'
---

<button>{t('action.submit', { ns: 'common' })}</button>
```

### 3. Language Detection

The current language is automatically detected from the URL:

```astro
---
import { getLangFromUrl } from '~/i18n';

const currentLang = getLangFromUrl(Astro.url);
const { t } = await useTranslations(currentLang);
---
```

## Adding New Pages

To add a new bilingual page:

1. **Create English version** in `src/pages/`
   ```bash
   touch src/pages/services.astro
   ```

2. **Create Chinese version** in `src/pages/zh/`
   ```bash
   touch src/pages/zh/services.astro
   ```

3. **Use translations** in both files
   ```astro
   ---
   import { useTranslations } from '~/i18n';
   const { t } = await useTranslations('en'); // or 'zh'
   ---
   ```

4. **Add navigation** (if needed) - update navigation configuration

## Translation Namespaces

Translation files are organized by namespace:

- **common.json**: Site-wide content (site name, CTAs, etc.)
- **nav.json**: Navigation labels
- **footer.json**: Footer content
- **home.json**: Homepage-specific content
- **[page].json**: Page-specific content (can be added as needed)

## SEO Features

- **Hreflang tags**: Automatic alternate language links
- **Language-specific meta**: Title, description per language
- **Sitemap**: Includes all language versions
- **OpenGraph**: Correct locale for social sharing

## Development Workflow

### Stage 1 (Current)
- ✅ Bilingual infrastructure
- ✅ Route-based language switching
- ✅ Translation system
- ✅ Language switcher UI
- ✅ SEO optimization (hreflang)
- ✅ Basic pages (home, about, contact)

### Stage 2 (Next)
- Content translation (real Upstream Labs content)
- Custom branding (colors, fonts, logo)
- Additional pages
- Blog translations
- Advanced features (contact forms, newsletter)
- Performance optimization

## Code Quality

```bash
# Run all checks
npm run check

# Type checking
npm run check:astro

# Linting
npm run check:eslint

# Format checking
npm run check:prettier

# Auto-fix issues
npm run fix
```

## Configuration

### Site Configuration

Edit `src/config.yaml` to update:
- Site name and URL
- Metadata (title, description)
- Social media handles
- Analytics
- Blog settings

### i18n Configuration

The bilingual setup is configured in `astro.config.ts`:

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'cn'],
  routing: {
    prefixDefaultLocale: false,  // English at root: /
    redirectToDefaultLocale: false,  // Disable auto-redirect
  }
}
```

**Important Settings:**
- `prefixDefaultLocale: false` - English uses root URLs without `/en/` prefix
- `redirectToDefaultLocale: false` - Prevents automatic redirects based on browser language
- Edit to add new languages, change default language, or modify routing behavior

## Deployment

The site is built as a static site and can be deployed to:

- **Netlify**: Pre-configured (`netlify.toml`)
- **Vercel**: Pre-configured (`vercel.json`)
- **Docker**: Dockerfile included
- Any static hosting service

### Build Output

```bash
npm run build
```

Generates static files in `dist/` directory.

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [i18next Documentation](https://www.i18next.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

See LICENSE.md file for details.

## Support

For issues or questions, please contact the Upstream Labs team.
