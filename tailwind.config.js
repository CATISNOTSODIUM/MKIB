/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#897730 ",
        primarySubTitle: "#b59e48  ",
        primaryBase: "black",
      }
    },
  },
  plugins: [],
}

