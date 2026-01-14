import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // CSS Variable-based colors (for theme switching)
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',

        // Extended brand palette with shades
        azure: {
          DEFAULT: '#2B74FF',
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADC9FF',
          300: '#85AEFF',
          400: '#5C93FF',
          500: '#2B74FF',
          600: '#0052E6',
          700: '#003DB3',
          800: '#002980',
          900: '#00144D',
        },
        aqua: {
          DEFAULT: '#00C896',
          50: '#E6FFF8',
          100: '#CCFFF1',
          200: '#99FFE3',
          300: '#66FFD5',
          400: '#33FFC7',
          500: '#00C896',
          600: '#00A87D',
          700: '#008864',
          800: '#00684B',
          900: '#004832',
        },
        gold: {
          DEFAULT: '#FFC640',
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE399',
          300: '#FFD566',
          400: '#FFC640',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996E00',
          800: '#664900',
          900: '#332500',
        },
        ink: {
          DEFAULT: '#1C1D24',
          50: '#F5F5F6',
          100: '#E8E8EA',
          200: '#D1D2D5',
          300: '#9A9CA3',
          400: '#636571',
          500: '#3D3F4A',
          600: '#2D2E38',
          700: '#1C1D24',
          800: '#141518',
          900: '#0C0D0F',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        display: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
      },

      borderRadius: {
        '4xl': '28px',
      },

      boxShadow: {
        'glow-azure': '0 0 20px rgba(43, 116, 255, 0.15)',
        'glow-aqua': '0 0 20px rgba(0, 200, 150, 0.15)',
        'glow-gold': '0 0 20px rgba(255, 198, 64, 0.15)',
        'elevated': '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)',
        'elevated-lg': '0 30px 60px rgba(0, 0, 0, 0.12), 0 12px 24px rgba(0, 0, 0, 0.08)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      backgroundImage: {
        'gradient-upstream': 'linear-gradient(135deg, var(--aw-gradient-start) 0%, var(--aw-gradient-mid) 50%, var(--aw-gradient-end) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #2B74FF 0%, #00C896 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFC640 0%, #FF9500 100%)',
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities }) => {
      addVariant('intersect', '&:not([no-intersect])');

      // Custom gradient and glassmorphism utilities
      addUtilities({
        // Gradient backgrounds
        '.bg-gradient-upstream': {
          background: 'linear-gradient(135deg, var(--aw-gradient-start) 0%, var(--aw-gradient-mid) 50%, var(--aw-gradient-end) 100%)',
        },
        '.bg-gradient-hero': {
          background: 'linear-gradient(180deg, rgba(43, 116, 255, 0.08) 0%, rgba(255, 198, 64, 0.05) 100%)',
        },
        '.bg-gradient-cta': {
          background: 'linear-gradient(135deg, #2B74FF 0%, #00C896 100%)',
        },
        '.bg-gradient-gold': {
          background: 'linear-gradient(135deg, #FFC640 0%, #FF9500 100%)',
        },
        '.bg-gradient-radial': {
          background: 'radial-gradient(ellipse at center, rgba(43, 116, 255, 0.12) 0%, transparent 70%)',
        },
        // Glassmorphism utilities
        '.glass': {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-dark': {
          background: 'rgba(28, 29, 36, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
