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
        schoolGpaAboveMoreThan: "#d7737d",
        schoolGpaAboveLessThan: "#c194b5",
        schoolGpaAbove: "#b8a1cb",
        schoolGpaEqual: "#b4a7d6",
        schoolGpaUnder: "#a6a6d2",
        schoolGpaUnderLessThan: "#87abe1",
        schoolGpaUnderMoreThan: "#75ace5",
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
