/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // <-- Relume Components Path
  ],
  presets: [
    require("@relume_io/relume-tailwind"), // <-- Relume Preset
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};