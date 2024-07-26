/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        gray1: "#1a1a1a",
        white1: "#ebebeb",
        white2: "#f1f1f1",
        green2: "#00ff94",
      },
      colors: {
        gray2: "#333",
        yellow1: "#ffdf03",
      },

      fontFamily: {
        Poppins: "Poppins",
        Jost: "jost",
      },
      boxShadow: {
        shapeGreen: "0 0 10px 0 #00ff94, 0 0 20px 0 #00ff94",
        shapeWhite: "0 0 10px 0 #fff, 0 0 20px 0 #fff"
      },
      gradientColorStops: {
        33: "33%",
      },
    },
  },
  plugins: [],
};
