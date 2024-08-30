/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Colors used in the app
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
        success: "#28a745",
        danger: "#dc2626",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40",
      },
    },
  },
  plugins: [],
};
