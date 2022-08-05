/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},

    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "640px",
        xl: "640px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
