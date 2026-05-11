/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          card: '#12121a',
          hover: '#1a1a25',
          nav: 'rgba(10, 10, 15, 0.85)',
        },
        border: '#1e1e2e',
        text: {
          DEFAULT: '#e2e2e8',
          dim: '#7a7a8e',
          muted: '#4a4a5e',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        green: '#22c55e',
        orange: '#f59e0b',
        pink: '#ec4899',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans SC', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
