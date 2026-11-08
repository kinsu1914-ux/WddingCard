/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          700: '#7a0515',
          800: '#5c0612',
          900: '#3d020a',
          950: '#230206',
          DEFAULT: '#800020',
        },
        gold: {
          light: '#f9e79f',
          DEFAULT: '#D4AF37',
          dark: '#aa820a',
        },
        cream: '#FFFDD0',
        rose: '#ffebee',
      },
      fontFamily: {
        gujarati: ['"Hind Vadodara"', 'sans-serif'],
        yatra: ['"Yatra One"', 'cursive'],
        rozha: ['"Rozha One"', 'serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        vibes: ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [],
}

