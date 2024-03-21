/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"],
        mulish: ["Mulish", "serif"],
      },
      colors: {
        primary: {
          headingColor: "#853036",
          subHeading: "#B21B1B",
          btnColor: "#F38500",
        },
        secondary: {
          activedots: "#853036",
          nonactivedots: "#D9D9D9",
          detailsBackground: "#FFF0E180",
        },
      },
    },
  },
  plugins: [],
};
