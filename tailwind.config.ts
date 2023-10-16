import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        merah: {
          DEFAULT: "#F22727",
          50: "#FCD4D4",
          100: "#FBC1C1",
          200: "#F99A9A",
          300: "#F77474",
          400: "#F44D4D",
          500: "#F22727",
          600: "#D40D0D",
          700: "#9F0A0A",
          800: "#6A0606",
          900: "#350303",
          950: "#1B0202",
        },
        kuning: {
          DEFAULT: "#F2A516",
          50: "#FCE8C4",
          100: "#FBE1B1",
          200: "#F8D28A",
          300: "#F6C363",
          400: "#F4B43D",
          500: "#F2A516",
          600: "#C5840B",
          700: "#906008",
          800: "#5B3D05",
          900: "#261902",
          950: "#0B0701",
        },
      },
      fontFamily: {
        body: ["Rubik", "sans-serif"],
        title: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./storyblok/**/*.{vue,js}",
  ],
};
