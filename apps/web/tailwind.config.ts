import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0E1628',
          gold: '#C9A84C',
          'gold-light': '#E8C96A',
          ivory: '#FAF6EE',
          cream: '#F0E6D3',
          beige: '#E8D5B7',
          'warm-beige': '#EDE0C8',
          sand: '#C4A882',
          taupe: '#8B7355',
          walnut: '#4A3728',
          charcoal: '#1C1C1E',
          'off-white': '#F8F4EE',
          marble: '#E8E4E0',
          'warm-ivory': '#F5EDD6',
          'warm-sand': '#F0EBE1',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'serif'],
      },
      maxWidth: {
        luxury: '1320px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.04' },
          '50%': { transform: 'scale(1.15)', opacity: '0.07' },
        },
      },
    },
  },
  plugins: [],
}

export default config
