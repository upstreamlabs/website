import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Programs',
      links: [
        {
          text: 'Upstream Training Camp',
          href: 'https://origin2025.upstreamlabs.org',
        },
        {
          text: 'GOBI Conference',
          href: 'https://beijing2025.upstreamlabs.org',
        },
        {
          text: 'All Programs',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Our Mission',
          href: getPermalink('/#mission'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Blog',
          href: getPermalink('/blog'),
        },
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Terms of Service',
          href: getPermalink('/terms'),
        },
      ],
    },
  ],
  actions: [{ text: 'Join Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Programs',
      links: [
        { text: 'Upstream Training', href: 'https://origin2025.upstreamlabs.org' },
        { text: 'GOBI Conference', href: 'https://beijing2025.upstreamlabs.org' },
        { text: 'Ecosystem Grants', href: getPermalink('/services') },
        { text: 'Mentorship Network', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Partner Projects', href: getPermalink('/about') },
        { text: 'Become a Mentor', href: getPermalink('/contact') },
        { text: 'Join Our Events', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/upstreamlabs' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nicebins' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Upstream Labs. All rights reserved.
  `,
};
