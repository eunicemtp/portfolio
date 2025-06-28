/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jose: ['"Josefin Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // ✅ Tes couleurs personnalisées ici
        purple: {
          light: '#AE3FF',
          dark: '#706CB9',
          form:'#DACEFF',
        },
        green: {
          light: '#E3F8EF',
          dark: '#156C82',
        },
        orange: {
          light: '#F9D6CB',
          dark: '#D16D6A',
        },
        whitey: '#FDFCFF',
        beige: '#FEF9F5',
      },
    },
  },
  plugins: [],
}
