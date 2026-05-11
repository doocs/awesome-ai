/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          card: 'var(--bg-card)',
          hover: 'var(--bg-hover)',
          nav: 'var(--bg-nav)',
        },
        border: 'var(--border)',
        text: {
          DEFAULT: 'var(--text)',
          dim: 'var(--text-dim)',
          muted: 'var(--text-muted)',
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
