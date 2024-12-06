/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010203",
        secondary: "#3b28cc",
        tertiary: "#1c5490",
        custom_blue: "#031a30",
        custom_light_blue: "#0e3963",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          ".no-scrollbar": {
            "-ms-overflow-style": "none", /* IE and Edge */
            "scrollbar-width": "none",    /* Firefox */
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
