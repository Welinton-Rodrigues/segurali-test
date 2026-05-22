/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5131E8",
        "primary-hover": "#4127C7",
        background: "#EFF1F3",
        surface: "#FFFFFF",
        "surface-alt": "#F1F1F1",
        footer: "#F9F9F9",
        "text-primary": "#000000",
        "text-secondary": "#656565",
        success: "#0EAD00",
        warning: "#BA861E",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
