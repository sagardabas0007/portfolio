/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ["Michroma", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}

