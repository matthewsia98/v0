/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [require("@catppuccin/tailwindcss")({
    prefix: "ctp",
    defaultFlavour: "mocha"
  })],
}

