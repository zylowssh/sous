/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'rgb(var(--color-cream-rgb) / <alpha-value>)',
        paper: 'rgb(var(--color-paper-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
        coal: 'rgb(var(--color-coal-rgb) / <alpha-value>)',
        flame: 'rgb(var(--color-flame-rgb) / <alpha-value>)',
        olive: 'rgb(var(--color-olive-rgb) / <alpha-value>)',
        butter: 'rgb(var(--color-butter-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 12px 24px -8px rgba(23,19,16,0.12)',
        cardsm: '0 6px 12px -4px rgba(23,19,16,0.1)',
        photo: '0 20px 40px -12px rgba(0,0,0,0.25)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(var(--rot,0deg))' },
          '50%': { transform: 'translateY(-7px) rotate(var(--rot,0deg))' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
