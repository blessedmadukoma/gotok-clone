/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        labilgroteskRegular: ["labilgroteskRegular", "sans-serif"],
        labilgroteskBold: ["labilgroteskBold", "sans-serif"],
        labilgroteskMedium: ["labilgroteskMedium", "sans-serif"],
        rotunda: ["Rotunda", "sans-serif"],
        RotundaExtraLightItalic: ["RotundaExtraLightItalic"],
        RotundaThin: ["RotundaThin"],
        RotundaThinItalic: ["RotundaThinItalic"],
        RotundaLight: ["RotundaLight"],
        RotundaLightItalic: ["RotundaLightItalic"],
        RotundaRegular: ["RotundaRegular"],
        RotundaRegularItalic: ["RotundaRegularItalic"],
        RotundaMedium: ["RotundaMedium"],
        RotundaMediumItalic: ["RotundaMediumItalic"],
        RotundaBold: ["RotundaBold"],
        RotundaBoldItalic: ["RotundaBoldItalic"],
        RotundaExtraBold: ["RotundaExtraBold"],
        RotundaExtraBoldItalic: ["RotundaExtraBoldItalic"],
        RotundaBlack: ["RotundaBlack"],
        RotundaBlackItalic: ["RotundaBlackItalic"],
        text: ["Arial", "sans-serif"],
      },
      colors: {
        "primary-purple": "#6d23f9",
        //   "secondary-blue": "#0098DA",
        // radial-gradient(133.64% 409.58% at 24.66% 0,#702bf8 0,#e69e9e 38%,#f58686 47.92%,#c7c9ff 63.8%,#4714ad 100%)
        //   "orange-primary": "#F64E1F",
        //   "orange-secondary": "#EA8146",
        //   "green-primary": "#1EBF8F",
        //   "red-primary": "#CF0E0E",
        //   "grey-primary": "#E0E0E0",
        //   "grey-secondary": "#F9FAFB",
        //   "grey-bg":"#F1F1F4" ,

        //   pending: "#FFF7CD",
      },
    },
  },
};
