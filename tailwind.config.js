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
      },
      screens: {
        'custom': '736px',
      },
    },
  },
  plugins: [],
}

