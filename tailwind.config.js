/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#f6f7f9',
        'gray-dark': '#596780',
        'gray-darker': '#1a202c',
        'gray-border': '#c3d4e9',
        'gray-light': '#90A3BF',
      },
      screens: {
        'custom': '736px',
        eight_hundred: '800px',
        xs: '350px',
        custom_656: '656px',
      },
    },
  },
  plugins: [],
}

