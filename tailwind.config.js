/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      "2md": "991px",

      lg: "1199px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // Define your colors here
        primary: {
          50: "#EBE7FF",
          100: "#DFD6FF",
          200: "#AA97FF",
          300: "#9273FF",
          400: "#733FFF",
          500: "#5605FF",
          600: "#5300EA",
          700: "#4B00CC",
          800: "#3C01A2",
          900: "#2F027E",
          950: "#220066",
        },
        secondary: {
          50: "#F9F4FF",
          100: "#F0E6FF",
          200: "#E3D2FF",
          300: "#CDAEFF",
          400: "#AE7AFF",
          500: "#8F48FF",
          600: "#7724F9",
          700: "#6414DC",
          800: "#5716B3",
          900: "#3F117D",
          950: "#2E006B",
        },

        gray: {
          50: "#EAEBF4",
          100: "#D6D8EB",
          200: "#B5BAD9",
          300: "#8E93C3",
          400: "#6C71B1",
          500: "#5559A4",
          600: "#4E519A",
          700: "#45478E",
          800: "#3E3D81",
          900: "#373177",
          950: "#332E6A",
        },

        white: {
          50: "#FFFFFF",
          100: "#FBFBFB",
        },

        black: {
          800: "#2E275A",
          900: "#03093F",
          950: "#060226",
          1000: "#000044",
        },

        gradient: {
          1: "#8AD5FF",
          2: "#E0AEFF",
        },
      },

      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        interlight: ["Inter-Light"],
        intermedium: ["Inter-Medium"],
        intersemibold: ["Inter-SemiBold"],
        interbold: ["Inter-Bold"],
        worksanslight: ["WorkSans-Light"],
      },

      fontSize: {
        xs: "12px", // Extra Small
        sm: "14px", // Small
        base: "16px", // Default/Base
        lg: "20px", // Large
        xl: "38px", // Extra Large
        // "2xl": "1.5rem", // 2 Extra Large
        // "3xl": "1.875rem", // 3 Extra Large
        // Add more sizes as needed
      },

      letterSpacing: {
        // Define your letter-spacing values here
        // tight: "-0.0em",
        // normal: "0",
        wide: "0.03em",
        // ...more values if needed
      },

      borderWidth: {
        1: "0.12em",
      },
    },
  },
};
