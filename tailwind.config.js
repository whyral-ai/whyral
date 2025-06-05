/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
      xs: '2px',
    },
    spacing: {
        'universal': '2.25rem', //mx-universal
      },
      colors: {
        brand: '#FACC15',
      }
    },
  },
  plugins: [],
}
