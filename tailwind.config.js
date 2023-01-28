/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16B573",
        secondary: "#F94D1F",
        backgroundColor: {
          DEFAULT:"#07111A",
          light: "#232C34"
        },
      },
    },
  },
  plugins: [],
}
