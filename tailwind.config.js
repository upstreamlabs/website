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
          DEFAULT: '#2563EB',
          50: '#EEF4FF',
          100: '#DDE9FF',
          200: '#BFD5FF',
          300: '#93B7FF',
          400: '#6797FF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1C3FAA',
          800: '#1C347F',
          900: '#182753',
        },
        aqua: {
          DEFAULT: '#0FB79A',
          50: '#E8FFF8',
          100: '#CBFBEF',
          200: '#96F4DD',
          300: '#5EE8C7',
          400: '#2FD2AF',
          500: '#0FB79A',
          600: '#0C987F',
          700: '#0B7A67',
          800: '#0B5D50',
          900: '#0A453D',
        },
        gold: {
          DEFAULT: '#FF8A4C',
          50: '#FFF2EA',
          100: '#FFE3D2',
          200: '#FFC6A7',
          300: '#FFA173',
          400: '#FF8A4C',
          500: '#F97316',
          600: '#DD5E0D',
          700: '#B4470D',
          800: '#8D350F',
          900: '#65260F',
        },
        ink: {
          DEFAULT: '#0F172A',
          50: '#F5F7FB',
          100: '#E6EBF5',
          200: '#CCD5E5',
          300: '#A8B4CA',
          400: '#6D7A96',
          500: '#44516B',
          600: '#25324A',
          700: '#0F172A',
          800: '#0A1220',
          900: '#070C18',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        display: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      borderRadius: {
        '4xl': '28px',
      },

      boxShadow: {
        'glow-azure': '0 0 24px rgba(37, 99, 235, 0.18)',
        'glow-aqua': '0 0 24px rgba(15, 183, 154, 0.18)',
        'glow-gold': '0 0 24px rgba(255, 138, 76, 0.18)',
        elevated: '0 24px 60px rgba(15, 23, 42, 0.10), 0 10px 24px rgba(15, 23, 42, 0.06)',
        'elevated-lg': '0 34px 80px rgba(15, 23, 42, 0.14), 0 14px 30px rgba(15, 23, 42, 0.08)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
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
        'gradient-upstream':
          'linear-gradient(135deg, var(--aw-gradient-start) 0%, var(--aw-gradient-mid) 50%, var(--aw-gradient-end) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #2563EB 0%, #0FB79A 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FF8A4C 0%, #FDBA74 100%)',
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
          background:
            'linear-gradient(135deg, var(--aw-gradient-start) 0%, var(--aw-gradient-mid) 50%, var(--aw-gradient-end) 100%)',
        },
        '.bg-gradient-hero': {
          background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 138, 76, 0.06) 100%)',
        },
        '.bg-gradient-cta': {
          background: 'linear-gradient(135deg, #2563EB 0%, #0FB79A 100%)',
        },
        '.bg-gradient-gold': {
          background: 'linear-gradient(135deg, #FF8A4C 0%, #FDBA74 100%)',
        },
        '.bg-gradient-radial': {
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
        },
        // Glassmorphism utilities
        '.glass': {
          background: 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.55)',
        },
        '.glass-dark': {
          background: 'rgba(7, 17, 31, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.10)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
