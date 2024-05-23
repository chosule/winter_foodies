/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        mapDiv: "calc(100vh - 100px)",
        loginDiv: "calc( 100vh - 97px)",
      },
      colors: {
        color: {
          white: "#fff",
          black: "#000",
          orange: "#db7f36",
          gray: {
            10: "#f1f1f1",
            100: "#e7e7e7",
          },
        },
      },
    },
  },
  plugins: [],
};
