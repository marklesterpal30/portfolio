/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files where you use Tailwind CSS
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
        monte: ["Montserrat", "serif"],
        oswald: ["Oswald", "serif"],
        inter: ["Inter", "serif"],
        karla: ["Karla", "serif"],
      },
      colors: {
        "light-green": "#E8E8E8",
        "light-violet": "#A5A6FF",
        "dark-blue": "#130F49",
        "ligth-orange": "#FF972D",
        "light-gray": "#55527C",
        "light-blue": "#D3F4EC",
        "light-pink": "#FCE8D4",
        "light-brown": "0000EE",
        "light-paragraph": "#7D7B9B",
        "more-light-pink": "#FFF5F6",
        "my-blue": "#5D3BEE",
      },
    }, // Extend the default Tailwind theme if needed
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
