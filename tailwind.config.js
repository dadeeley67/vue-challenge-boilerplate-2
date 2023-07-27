module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#00b4ff",
        secondary: "#222222",
        oddRow: "#e8f0fe",
      },
      fontSize: {
        xxs: "0.6rem",
        xs: "0.8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
