/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"Manrope\"", "\"Segoe UI\"", "system-ui", "sans-serif"],
        display: ["\"Fraunces\"", "\"Manrope\"", "Georgia", "serif"],
      },
      colors: {
        palmetto: {
          50: "#f1f6f3",
          100: "#dcebe3",
          200: "#b8d6c5",
          300: "#8abca2",
          400: "#5a9d7e",
          500: "#2f7f5c",
          600: "#1f6348",
          700: "#194f3a",
          800: "#143d2e",
          900: "#0f3d2e",
          950: "#0a2a20",
        },
        sand: {
          50: "#faf7f2",
          100: "#f3ede3",
          200: "#e4d7c1",
        },
        charcoal: {
          50: "#f6f7f8",
          100: "#e8ecee",
          200: "#c9d0d5",
          300: "#9ca3ab",
          400: "#6b7178",
          500: "#4a4f54",
          600: "#353a3f",
          700: "#2a2f33",
          800: "#22262a",
          900: "#1a1d20",
          950: "#131517",
        },
      },
      boxShadow: {
        soft: "0 18px 42px -24px rgba(15, 61, 46, 0.22)",
        panel: "0 28px 80px -42px rgba(15, 61, 46, 0.22)",
        mark: "0 10px 30px -12px rgba(15, 61, 46, 0.45)",
      },
    },
  },
  plugins: [],
};
