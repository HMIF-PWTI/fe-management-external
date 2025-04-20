/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary1: "#349DC2",
        primary2: "#102D3F",
        dark1: "#282828",
        hitam: "#070504",
        white: "#FAFAFA",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "400",
          src: "url(/src/fonts/Poppins-Regular.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "500",
          src: "url(/src/fonts/Poppins-Medium.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "600",
          src: "url(/src/fonts/Poppins-SemiBold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "700",
          src: "url(/src/fonts/Poppins-Bold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "800",
          src: "url(/src/fonts/Poppins-Black.ttf)",
        },
      });
    }),
  ],
};
