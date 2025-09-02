
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gap: { 32: "32px" },
      width: { 300: "300px" },
      screens: { xs: "360px", xm: "768px", xl: "1280px" },
      colors: {
        "main-btn-bg": "var(--main-btn-bg)",
        "second-text-color": "var(--second-text-color)",
      },
    },
  },
  plugins: [],
};
