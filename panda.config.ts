import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // Font
  globalFontface: {
    Pretendard: {
      src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');",
      fontWeight: "400",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },

  globalCss: {
    html: {
      fontFamily: "Pretendard, sans-serif",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
