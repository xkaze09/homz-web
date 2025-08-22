/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glassWhite: 'rgba(255, 255, 255, 0.15)',
        glassDark: 'rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
