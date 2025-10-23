/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        accent: "#00D4FF",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(10,10,12,0.25)",
      },
    },
  },
  plugins: [],
};
