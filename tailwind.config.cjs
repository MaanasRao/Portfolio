/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f0f2e",        // deep dark blue-violet
        secondary: "#8b5cf6",      // vibrant violet
        tertiary: "#1f1f47",       // slate-purple for contrast
        accent: "#22d3ee",         // neon cyan
        highlight: "#f43f5e",      // bright pink-red
        "black-100": "#1a1a2e",
        "black-200": "#121220",
        "white-100": "#f1f5f9",    // soft white-blue
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(139, 92, 246, 0.4)", // purple glow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
