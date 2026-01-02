/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: "#fff",
        black: "#1B1F23",
        accent: {
          primary: "#FBB03B",
          secondary: "#6FC3DD",
        },
      },
      colors: {
        white: "#fff",
        black: "#1B1F23",
        accent: {
          primary: "#FBB03B",
          secondary: "#6FC3DD",
        },
      },
    },
  },
  plugins: [],
};
