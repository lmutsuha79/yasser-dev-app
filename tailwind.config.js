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
        // "main-blue": "#303F54",
        "main-blue": "#001f2b",
        // "main-blue-hover": "#4B6588",
        "main-blue-hover": "#00415a",
        "nav-border-gray": "#DBE0E7",
        "main-gray": "#C4C4C4",
        "main-green": "#99c9cd",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
