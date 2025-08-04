import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./client/src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: "#ffffff" },
          black: { value: "#000000" },
          gray: {
            50: { value: "#f9fafb" },
            100: { value: "#f3f4f6" },
            200: { value: "#e5e7eb" },
            300: { value: "#d1d5db" },
            400: { value: "#9ca3af" },
            500: { value: "#6b7280" },
            600: { value: "#4b5563" },
            700: { value: "#374151" },
            800: { value: "#1f2937" },
            900: { value: "#111827" },
          },

          brand: {
            50: { value: "#f0f9ff" },
            100: { value: "#e0f2fe" },
            200: { value: "#bae6fd" },
            300: { value: "#7dd3fc" },
            400: { value: "#38bdf8" },
            500: { value: "#0ea5e9" },
            600: { value: "#0284c7" },
            700: { value: "#0369a1" },
            800: { value: "#075985" },
            900: { value: "#0c4a6e" },
          },
          accent: {
            50: { value: "#fff0f6" },
            100: { value: "#ffdeeb" },
            200: { value: "#fcc2d7" },
            300: { value: "#faa2c1" },
            400: { value: "#f783ac" },
            500: { value: "#f06595" },
            600: { value: "#e64980" },
            700: { value: "#d6336c" },
            800: { value: "#c2255c" },
            900: { value: "#a61e4d" },
          },
        },
      },
    },
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

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
