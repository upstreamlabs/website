import { getPermalink } from './utils/permalinks';

// Helper to add locale prefix to paths
const localizePath = (path: string, locale: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `/${locale}${path}`;
};

// Get locale-aware header data
export const getHeaderData = (locale: string = 'en') => ({
  links: [
    {
      text: locale === 'cn' ? '首页' : 'Home',
      link: localizePath('/', locale),
    },
    {
      text: locale === 'cn' ? '关于' : 'About',
      link: localizePath('/about', locale),
    },
    {
      text: locale === 'cn' ? '源起之道' : 'Upstream 2025',
      link: 'https://camp.upstreamlabs.org',
      openInNewTab: true,
    },
    {
      text: locale === 'cn' ? 'GOBI 大会' : 'GOBI Conference',
      link: 'https://gobi.upstreamlabs.org',
      openInNewTab: true,
    },
    {
      text: locale === 'cn' ? '联系' : 'Contact',
      link: localizePath('/contact', locale),
    },
  ],
  cta: {
    text: locale === 'cn' ? '加入我们' : 'Join Us',
    link: localizePath('/contact', locale),
  },
});

// Get locale-aware footer data
export const getFooterData = (locale: string = 'en') => ({
  links: [
    {
      title: locale === 'cn' ? '项目' : 'Programs',
      links: [
        {
          text: locale === 'cn' ? 'Upstream 训练营' : 'Upstream 2025',
          href: 'https://camp.upstreamlabs.org'
        },
        {
          text: locale === 'cn' ? 'GOBI 大会' : 'GOBI Conference',
          href: 'https://gobi.upstreamlabs.org'
        },
      ],
    },
    {
      title: locale === 'cn' ? '社区' : 'Community',
      links: [
        { text: locale === 'cn' ? '关于我们' : 'About Us', href: localizePath('/about', locale) },
        { text: locale === 'cn' ? '成为导师' : 'Become a Mentor', href: localizePath('/contact', locale) },
        { text: locale === 'cn' ? '联系我们' : 'Contact', href: localizePath('/contact', locale) },
      ],
    },
    {
      title: locale === 'cn' ? '资源' : 'Resources',
      links: [
        { text: locale === 'cn' ? '常见问题' : 'FAQs', href: localizePath('/faq', locale) },
        { text: locale === 'cn' ? '隐私政策' : 'Privacy Policy', href: localizePath('/privacy', locale) },
        { text: locale === 'cn' ? '服务条款' : 'Terms of Service', href: localizePath('/terms', locale) },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/UpstreamLabs_X' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/upstreamlabs' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Upstream Labs. ${locale === 'cn' ? '保留所有权利。' : 'All rights reserved.'}
  `,
});

// Legacy exports for backward compatibility
export const headerData = getHeaderData('en');
export const footerData = getFooterData('en');
