/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#080D16',
        navy: '#071A3A',
        primary: {
          DEFAULT: '#145BFF',
          dark: '#0B2A66',
          // Lighter tint used for small/normal-weight text on dark backgrounds.
          // #145BFF fails WCAG AA (4.5:1) at text sizes; this passes on bg/surface/navy.
          text: '#5B8DFF',
        },
        muted: '#8B95A7',
        hairline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(20,91,255,0.12), 0 12px 40px -12px rgba(20,91,255,0.28)',
        'glow-sm': '0 0 0 1px rgba(20,91,255,0.10), 0 6px 20px -8px rgba(20,91,255,0.22)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        feed: '1160px',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        floatBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'float-bounce': 'floatBounce 1.1s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
