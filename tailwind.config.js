/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050810',
          900: '#080d1a',
          850: '#0b1222',
          800: '#0f1830',
          700: '#16213f',
          600: '#1e2b4d',
        },
        brand: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          emerald: '#10b981',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          sky: '#38bdf8',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34, 211, 238, 0.35)',
        'glow-lg': '0 0 80px -12px rgba(34, 211, 238, 0.45)',
        'glow-violet': '0 0 50px -10px rgba(139, 92, 246, 0.45)',
        'glow-emerald': '0 0 50px -10px rgba(16, 185, 129, 0.4)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.7)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(34,211,238,0.15), transparent 60%)',
        'brand-gradient':
          'linear-gradient(120deg, #22d3ee 0%, #2dd4bf 35%, #8b5cf6 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.25)', opacity: '0' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.1)' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.95)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.24,0,0.38,1) infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        'grid-move': 'grid-move 6s linear infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
