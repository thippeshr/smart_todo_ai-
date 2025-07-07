import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // ✅ Enables class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ✅ Scans your source files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config