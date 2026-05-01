/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06091F',
        'primary-light': '#0A1029',
        secondary: '#0A1029',
        accent: '#FFC107',
        orange: '#FFA500',
      },
    },
  },
  plugins: [],
}

