module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        designColor: "#ff014f",
      },
      backgroundImage: {
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  safelist: ["active"], // ✅ Добавляем класс в safelist
  plugins: [],
};
