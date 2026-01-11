/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      boxShadow: {
        tripleTEXT: `
          inset 4px 4px 0 rgba(255,255,255,0.25),
          inset 4px 4px 12px rgba(255,255,255,0.1),
          inset -4px -4px 4px rgba(0,0,0,0.15)
        `,
      },

      fontFamily: {
        kurale: ['var(--font-kurale)', 'serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
        Merriweather: ['var(--font-Merriweather)'],
      },

      translate: {
        17: '4.25rem',
      },

      keyframes: {
        'rotate-center': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        'rotate-center': 'rotate-center 1s linear infinite',
      },
    },
  },

  plugins: [],
}
