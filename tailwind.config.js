module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Brand hints: violet + amber; surfaces stay neutral for readability */
        brand: {
          violet: "#5b21b6",
          violetMuted: "#7c3aed",
          amber: "#d97706",
          amberBright: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
}
