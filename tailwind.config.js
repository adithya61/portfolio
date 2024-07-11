/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mango: "#fcba28",
        charcol: "#100D0E",
        beige: "#f9f4da",
        mediumPurple: "#9370DB",
        peachPuff: "#FFDAB9",
        honeyDew: "#F0FFF0",
        plum: "#dda0dd",
        paleGreen: "#98FB98",
      },
    },
    fontFamily: { signature: ["Great Vibes"] },
  },
  plugins: [],
};
