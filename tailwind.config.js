/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'eggshell': "#fff2d0",
        'dark-name-red': "#530909",
        'light-name-red': "#e42f2f",
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      fontFamily: {
        'Montserrat-1-9': ['Montserrat-100-900', 'sans-serif'],
        'Montserrat-Italic-1-9': ['Montserrat-Italic-100-900', 'sans-serif'],
        'SourceCodePro-1-9': ['SourceCodePro-100-900', 'sans-serif'],
        'SourceCodePro-Italic-1-9': ['SourceCodePro-Italic-100-900', 'sans-serif'],
        'JosefinSans-1-7': ['JosefinSans-100-700', 'sans-serif'],
        'JosefinSans-Italic-1-7': ['JosefinSans-Italic-100-700', 'sans-serif'],
        'Inter-1-9': ['Inter-100-900', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
