import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ocean navy — the wordmark / primary brand
        navy: {
          50: '#eef3f9',
          100: '#d6e1ee',
          200: '#a9bfdb',
          300: '#7896c2',
          400: '#4b73a8',
          500: '#2d588f',
          600: '#1f4475',
          700: '#173660',
          800: '#102648',
          900: '#0b1d36',
          950: '#06122a',
        },
        // Sunset orange — primary accent (sun in logo)
        sunset: {
          50: '#fff4ec',
          100: '#ffe3d0',
          200: '#ffc29c',
          300: '#ff9b5f',
          400: '#ff7a36',
          500: '#f37335', // primary sunset
          600: '#e94e1b',
          700: '#c43712',
          800: '#982a10',
          900: '#76220f',
        },
        // Sun yellow — secondary accent / hover lifts
        sun: {
          400: '#ffd166',
          500: '#fdb813',
          600: '#e09e00',
        },
        // Wave / dolphin blue — secondary brand
        wave: {
          400: '#5fa8d9',
          500: '#3b8fc7',
          600: '#1e6fa6',
        },
        ink: {
          DEFAULT: '#0b1d36',
          muted: '#4a5b73',
        },
        sand: '#fdf7ef',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px -12px rgba(11, 29, 54, 0.18)',
        cardHover: '0 18px 40px -16px rgba(11, 29, 54, 0.28)',
        sunset: '0 12px 30px -12px rgba(243, 115, 53, 0.45)',
      },
      backgroundImage: {
        'sunset-radial':
          'radial-gradient(ellipse at top, #FDB813 0%, #F37335 35%, #E94E1B 65%, #76220F 100%)',
        'ocean-gradient':
          'linear-gradient(135deg, #06122a 0%, #0b1d36 35%, #173660 70%, #1f4475 100%)',
        'sunset-band':
          'linear-gradient(180deg, #FDB813 0%, #F37335 50%, #E94E1B 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
