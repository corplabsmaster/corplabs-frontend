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
        "jb-grey-50": "#F6F8F9",
        "jb-grey-100": "#EBF1F5",
        "jb-grey-200": "#DAE1E7",
        "jb-grey-300": "#B8C2CC",
        "jb-grey-400": "#8795A1",
        "jb-grey-500": "#606F7B",
        "jb-grey-600": "#3D4852",
        "jb-grey-700": "#2B343B",
        "jb-grey-800": "#808E9A",
        "jb-grey-900": "#888",
        "jb-grey-1000": "rgba(255, 255, 255, 0.2)",
        "jb-grey-1100": "#4e4e4e",
        "jb-grey-1200": "#E7EAFF",
        "jb-grey-1300": "rgba(255, 255, 255, 0.1)",
        "jb-grey-1400": "#63757D",
        "jb-black": "#000",
        "jb-black-100": "#282828",
        "jb-black-200": "#212529",
        "jb-black-300": "#181818",
        "jb-black-400": "#2a2a2a",
        "jb-white": "#fff",
        "jb-yellow": "#FFDF18",
        "jb-yellow-100": "#FFBD7A",
        "jb-orange-100": "#ffa200",
        "jb-orange-200": "#ffd894",
        "jb-orange-300": "#996100",
        "jb-orange-400": "#ff8a14",
        "jb-orange-500": "#ff8400",
        "jb-orange-600": "#ff9900",
        "jb-orange-700": "#dd5800",
        "jb-orange-800": "#f8931f",
        "jb-gradient":
          "linear-gradient(to right,#ffb533 0,#ffab1a 15%,#ffab1a 30%,#ffb533 55%,#ffb533 100%)",
        "jb-brown-100": "#1a1000",
        "jb-green-100": "#158a39",
        "jb-green-200": "#05571e",
        "jb-green-300": "#0c6c29",
        "jb-green-400": "#1B5E42",
        "jb-green-500": "#00FF6D",
        "jb-green-600": "#024c19",
        "jb-red-100": "#e10035",
        "jb-red-200": "#a30026",
        "jb-blue-100": "#141461",
        "jb-blue-900": "#67670E",
        "jb-blue-200": "#292994",
        "jb-blue-300": "#160D96",
        "jb-blue-400": "#191961",
        "jb-purple": "rgba(104, 62, 254, 0.15)",
        "jb-violet": "#9180FF",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        float: "ripple2Ani 4s linear infinite",
      },
      keyframes: {
        ripple2Ani: {
          "0%": {
            "-webkit-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          },
          "33%": {
            "-webkit-transform": "translate(-5px, -5px)",
            transform: "translate(-5px, -5px)",
          },
          "66%": {
            "-webkit-transform": "translate(5px, 5px)",
            transform: "translate(5px, 5px)",
          },
          "100%": {
            "-webkit-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwindcss"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".jb-bg-gradient": {
          background:
            "linear-gradient(to right,#ffb533 0,#ffab1a 15%,#ffab1a 30%,#ffb533 55%,#ffb533 100%)",
        },
        ".jb-btn-black-gradient": {
          background:
            "linear-gradient(to right,#262626 0,#333 15%,#333 30%,#262626 55%,#262626 100%)",
        },
        ".jb-elipsis": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
        ".jb-animation-float": {
          "-webkit-animation": "ripple2Ani 4s linear infinite",
          animation: "ripple2Ani 4s linear infinite",
          "@keyframes ripple2Ani": {
            "0%": {
              "-webkit-transform": "translate(0px, 0px)",
              transform: "translate(0px, 0px)",
            },
            "33%": {
              "-webkit-transform": "translate(-5px, -5px)",
              transform: "translate(-5px, -5px)",
            },
            "66%": {
              "-webkit-transform": "translate(5px, 5px)",
              transform: "translate(5px, 5px)",
            },
            "100%": {
              "-webkit-transform": "translate(0px, 0px)",
              transform: "translate(0px, 0px)",
            },
          },
        },
        ".jb-section-title": {
          "@apply uppercase font-bold font-chakra text-white": {},
        },
        ".jb-btn-red": {
          "@apply jb-elipsis bg-jb-red-100 py-3 px-[30px] text-base font-black rounded-[28px] shadow-[0_4px_0_#a30026] text-white uppercase":
            {},
        },
        ".jb-btn-green": {
          "@apply jb-elipsis bg-jb-green-100 py-3 px-[30px] text-base font-black rounded-[28px] shadow-[0_4px_0_#05571e] text-white uppercase":
            {},
        },
        ".jb-btn-purple": {
          "@apply jb-elipsis bg-[#7400D3] py-3 px-[30px] text-base font-black rounded-[28px] shadow-[0_4px_0_#7400d3] text-white uppercase":
            {},
        },
        ".jb-btn-purple-active": {
          "@apply jb-elipsis !bg-[#7400D3] rounded-[10px] shadow-[0_4px_0_#7400D3] font-black !text-white uppercase !border-0":
            {},
        },
        ".jb-table-col": {
          "@apply font-bold text-sm text-jb-grey-1200 w-0 !py-[15px] !px-[10px] !pl-[30px]":
            {},
        },
        ".jb-pseudo-before-latest-act": {
          '@apply before:content-[""] before:bg-[url("../images/latest-activites.png")] before:bg-jb-orange-700 before:opacity-30 before:absolute before:w-full before:h-full before:bg-[length:100%] before:bg-no-repeat before:z-[-1] before:h-[560px]':
            {},
        },
        ".jb-tab-shadow": {
          boxShadow: "0px 12px 24px rgb(0 0 0 / 10%)",
        },
        ".jb-table-shadow": {
          background:
            "linear-gradient(180deg, #202020 0%, rgba(0, 0, 62, 0) 100%)",
          padding: "30px 30px 0 30px",
        },
        ".jb-rounded-animation-before": {
          "@apply before:content-[''] before:absolute before:bg-jb-orange-800 before:opacity-30 before:z-[-4] before:rounded-[50%] before:p-[240px] before:left-[-24%] before:top-[-23%]":
            {},
        },
        ".jb-rounded-animation-after": {
          "@apply after:content-[''] after:absolute after:bg-jb-orange-800 after:opacity-30 after:z-[-4] after:rounded-[50%] after:p-[240px] after:left-[-24%] after:top-[-23%]":
            {},
        },
        ".jb-rounded-input": {
          display: "flex",
          alignItems: "center",
          padding: "4px 25px",
          background: "#181868",
          border: "1px solid #4450B8",
          boxShadow: "0px 8px 24px rgb(0 0 0 / 10%)",
          borderRadius: "28px",
        },
        ".jb-jackpot-winner-card": {
          background:
            "radial-gradient(78.16% 122.14% at 50% 54.76%, #FB0078 0%, #3E0B77 63.7%, #2F0C78 100%)",
          borderRadius: "20px",
          padding: "28px 0 59px",
        },
        ".jb-jackpot-winner-btn": {
          background: "#ffd800",
          borderRadius: "20px",
          position: "absolute",
          bottom: "-20px",
          transform: "translate(-38px, 0px)",
          width: "170px",
          padding: "6px 0",
          fontSize: "24px",
        },
        ".jb-jackpot-winner-amount": {
          background: "#480B96",
          borderRadius: "15px",
          padding: "5px 10px",
          boxShadow: "0px 4px 8px rgb(12 23 80 / 80%)",
          fontSize: "13px",
          justifyContent: "center",
        },
        ".jb-game-view-more-btn": {
          background: "transparent",
          border: "1px solid #BE97FF",
          borderRadius: "25px",
          fontSize: "13px",
          textTransform: "uppercase",
          padding: "8px 15px",
          fontWeight: 700,
          color: "#FFFFFF",
        },
        ".jb-border-violet": {
          border: "1px solid #9180FF",
          boxShadow: "0px 4px 10px rgba(39, 39, 138, 0.7)",
        },
        ".jb-btn-link": {
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          textTransform: "uppercase",
        },
        ".jb-btn-link-before": {
          '@apply before:absolute before:content-[""] before:bg-jb-green-600 before:right-0 before:w-[30px] before:h-[30px] before:rounded-[50%]':
            {},
        },
        ".jb-collapsed-btn-link-after": {
          '@apply after:content-[""] after:absolute after:bg-[url("../images/plus-arrow.png")] after:bg-no-repeat after:h-[15px] after:w-[15px] after:right-[8px] after:rotate-[90deg] after:transition-[all_ease_0.3s]':
            {},
        },
        ".jb-btn-link-after": {
          '@apply after:content-[""] after:absolute after:bg-[url("../images/minus-arrow.png")] after:bg-no-repeat after:rounded-[50%] after:h-[15px] after:w-[15px] after:right-[5px] after:rotate-[0deg] after:transition-[all_ease_0.3s]':
            {},
        },
        ".jb-cmn-btn-second": {
          padding: "8px 15px",
          borderRadius: "25px",
          border: "1px solid #BE97FF",
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: "13px",
          lineHeight: "18px",
          color: "#FFFFFF",
          background: "transparent",
          transition: "all ease 0.3s",
        },
        ".jb-counter-area-span": {
          "@apply uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra":
            {},
        },
        ".jb-p": {
          "@apply mt-[24px] text-white leading-6 font-normal text-lg": {},
        },
        ".jb-h4": {
          "@apply mt-[16px] text-white leading-6 font-normal text-[26px] uppercase font-medium font-chakra":
            {},
        },
        ".jb-faq-btn": {
          borderRadius: "10px",
          border: "none !important",
          background: "#ffd800 !important",
          boxShadow: "0px 4px 0px #ffb400",
          fontWeight: "bold",
          fontSize: "13px",
          textTransform: "uppercase",
          color: "#fff",
        },
        ".jb-tournaments-single-item": {
          flex: "0 0 calc(100% / 2 - 15px)",
          maxWidth: "calc(100% / 2 - 15px)",
        },
        ".jb-tournaments-single-item-sm": {
          flex: "0 0 100%",
          maxWidth: "100%",
        },
        ".jb-tournaments-single-item-list": {
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      });
    }),
  ],
};
