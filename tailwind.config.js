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
        avatarPlaceholder: "#f1603c",
        avatarPlaceholder2: "#6082fa",
        avatarPlaceholder3: "#827cb8",
        avatarPlaceholder4: "#0097a4",
        avatarPlaceholder5: "#ffe066",
        avatarPlaceholder6: "#ffa94d",
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
