/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#0F172A', // Background
          900: '#1E293B', // Card Surface
          800: '#334155', // Hover Surface
        },
        trust: {
          500: '#3B82F6', // Corporate Blue
          600: '#2563EB', // Hover Blue
        }
      }
    },
  },
  plugins: [],
}
