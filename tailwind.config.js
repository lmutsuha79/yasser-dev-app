module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Architects_Daughter: ["Architects Daughter"],
      },
      colors: {
        "dark-bg-blue": "#26354C",
        "main-blue": "#303F54",
        "main-blue-hover": "#4B6588",
        "nav-border-gray": "#DBE0E7",
        "main-gray": "#C4C4C4",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
