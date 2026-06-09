/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        gray: {
          50:  '#faf8f5',
          100: '#f2ede6',
          200: '#e5dbd1',
          300: '#d1c3b5',
          400: '#b0998a',
          500: '#8c7567',
          600: '#6e5a4e',
          700: '#564538',
          800: '#3a2e25',
          900: '#231b14',
          950: '#120d09',
        },
        brand: {
          50:  '#fff6ea',
          100: '#fde3d0',
          200: '#f9c4ae',
          300: '#f4a598',
          400: '#f19383',
          500: '#dc7a6a',
          600: '#c67061',
          700: '#a5594b',
          800: '#7c3e2e',
          900: '#593b1c',
          950: '#3a2410',
        },
        warm: {
          100: '#fff6ea',
          200: '#fde3d0',
          300: '#f9c4ae',
          400: '#f19383',
          500: '#c67061',
          600: '#a5594b',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
