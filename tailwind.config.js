/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          250: "#EAAF9A",
          450: "#DD6A5B",
        },
        gray: {
          450: "#808080",
        },
        cyan: {
          250: "#D6F5F6",
        },
      },
    },
  },
  plugins: [],
};
