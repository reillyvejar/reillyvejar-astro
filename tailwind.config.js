/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'eggshell': "#fff2d0",
      'dark-name-red': "#6f0a0a",
      'light-name-red': "#bf2525",
      },
      fontFamily: {
        'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'montserrat-extrabold': ['Montserrat-ExtraBold', 'sans-serif'],
        'sourcecodepro-light': ['SourceCodePro-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
