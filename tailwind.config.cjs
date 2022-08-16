/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        0: "1 0 auto",
      },
    },
  },
  plugins: [],
};
