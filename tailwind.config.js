/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        display: [
          "Noto Serif KR",
          "Nanum Myeongjo",
          "Batang",
          "Apple SD Gothic Neo",
          "serif",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#14181B",
          soft: "#4A5257",
          muted: "#7C858A",
        },
        forest: {
          DEFAULT: "#14352D",
          deep: "#0B231E",
          soft: "#2C5449",
        },
        sage: "#8CA294",
        ivory: {
          DEFAULT: "#F7F4ED",
          light: "#FCFAF5",
          deep: "#EFEAE0",
        },
        brass: {
          DEFAULT: "#A9814F",
          light: "#D9BE8A",
          deep: "#8A6739",
        },
        line: "#E3DDD1",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        wrap: "1200px",
        prose2: "68ch",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 1.2s ease both",
      },
      transitionProperty: {
        border: "border-color",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
