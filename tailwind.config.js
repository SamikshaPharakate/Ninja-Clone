/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',
          primaryDark: '#2563EB',
          primaryLight: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
}
