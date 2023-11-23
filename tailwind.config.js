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

          // ...more shades if needed
        },
        blue: {
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#64B5F6",
          // ...more shades if needed
        },
        // Add more colors as needed
      },

      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        interlight: ["Inter-Light"],
      },
    },
  },
};
