/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3182F6',
          light: '#5BA0FF',
          dark: '#1B64DA',
        },
        accent: {
          orange: '#FF8A3D',
          pink: '#FF5C93',
          yellow: '#FFD66B',
          blue: '#69B3FF',
        },
        neutral: {
          black: '#191F28',
          gray: {
            50: '#F9FAFB',
            100: '#F2F4F6',
            200: '#E5E8EB',
            300: '#D1D6DB',
            400: '#B0B8C1',
            500: '#8B95A1',
            600: '#6B7684',
            700: '#4E5968',
            800: '#333D4B',
            900: '#191F28',
          },
          white: '#FFFFFF',
        },
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'hero': ['56px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h1': ['48px', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1100px',
        'narrow': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'lg': '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
