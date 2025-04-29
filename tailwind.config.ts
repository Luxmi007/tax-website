/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a9d8f",
        secondary: "#264653",
        background: "#f4f4f4",
        text: "#333",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "5px",
      },
    },
  },
  plugins: [],
};
