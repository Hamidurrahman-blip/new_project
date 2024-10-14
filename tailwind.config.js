/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  darkMode:"class",
  theme: {
    extend: {
    colors:{
      primary:"#fea928",
      secondary:"#ed8900",
    },
    container:{
      center:true,
      padding:{
      DEFAULT:"2rem !important",
      sm:"2rem !important",
      }
    },
    },
  },
  plugins: [],
}

