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
        purple: {
          100: "#060226",
          200: "#7857F8",
          300: "#12076B",
          400: "#080433",
          500: "#000044",
          600: "#E0AEFF",

          // ...more shades if needed
        },
        blue: {
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#64B5F6",
          400: "#8AD5FF",
          // ...more shades if needed
        },

        white: {
          100: "#FFFFFF",
          200: "#C8C3DC",

          // ...more shades if needed
        },

        // ...more shades if needed
      },

      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        interlight: ["Inter-Light"],
        intermedium: ["Inter-Medium"],
        intersemibold: ["Inter-SemiBold"],
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
    },
  },
};
