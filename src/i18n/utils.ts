import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export const languages = {
  en: 'English',
  cn: '中文',
};

export const defaultLang = 'en';

// Initialize i18next
i18next
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    lng: defaultLang,
    fallbackLng: defaultLang,
    ns: ['common', 'nav', 'home', 'footer'],
    defaultNS: 'common',
  });

/**
 * Get translation function for a specific language
 */
export async function useTranslations(lang: string = defaultLang) {
  const i18n = i18next.cloneInstance();
  await i18n.changeLanguage(lang);

  return {
    t: (key: string, options?: object) => i18n.t(key, options),
    lang,
  };
}

/**
 * Get current language from URL
 */
export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

/**
 * Convert path to localized URL
 */
export function getLocalizedPath(path: string, lang: string): string {
  // Preserve trailing slash
  const hasTrailingSlash = path.endsWith('/') && path !== '/';
  const cleanPath = path.replace(/\/$/, '') || '/';

  if (lang === defaultLang) {
    return hasTrailingSlash && cleanPath !== '/' ? `${cleanPath}/` : cleanPath;
  }

  const localizedPath = `/${lang}${cleanPath}`;
  return hasTrailingSlash ? `${localizedPath}/` : localizedPath;
}

/**
 * Strip locale prefix from path
 */
export function stripLangFromPath(path: string): string {
  // Preserve trailing slash
  const hasTrailingSlash = path.endsWith('/') && path !== '/';
  const segments = path.split('/').filter(Boolean);

  if (segments[0] && segments[0] in languages) {
    segments.shift();
  }

  const cleanPath = '/' + segments.join('/');
  return hasTrailingSlash && cleanPath !== '/' ? `${cleanPath}/` : cleanPath;
}
