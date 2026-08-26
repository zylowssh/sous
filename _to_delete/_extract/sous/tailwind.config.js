/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Fonds */
        cream: '#F4F0E7',
        paper: '#FBF8F2',
        chalk: '#EAE4D7',
        /* Encre */
        ink: '#17150F',
        coal: '#0C0B08',
        /* Accent unique : vert profond = « validé, en ligne » */
        sauge: '#2E4B3C',
        sauged: '#20362B',
        /* Etat « en attente de votre validation » */
        amber: '#B8862F',
        /* Neutre chaud pour les aplats discrets */
        ficelle: '#D6C9AF',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['"Caveat"', 'ui-rounded', 'cursive'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,21,15,0.04), 0 12px 32px -16px rgba(23,21,15,0.28)',
        lift: '0 2px 4px rgba(23,21,15,0.05), 0 28px 60px -28px rgba(23,21,15,0.40)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.85)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
