import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'racing-red': '#dc2626',
        'racing-black': '#000000',
        'carbon-gray': '#2d2d2d',
        'carbon-gray-light': '#4a4a4a',
      },
      fontFamily: {
        'racing': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'telemetry': ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': {
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
          },
          'to': {
            boxShadow: '0 0 30px rgba(220, 38, 38, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 