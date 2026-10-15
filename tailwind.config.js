/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "SFMono-Regular", "ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        // Фон из исходного сайта (bodyColor #212428), мягкий светлый текст и зелёный акцент.
        ink: "#212428",
        bone: "#e6eaf0",
        mute: "#98a0ab",
        accent: "#2bff88",
      },
    },
  },
  plugins: [],
};
