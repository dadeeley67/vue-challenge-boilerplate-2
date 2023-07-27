module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00b4ff",
        secondary: "#222222",
        oddRow: "#e8f0fe",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
