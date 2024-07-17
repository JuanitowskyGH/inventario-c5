const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.jsx",
    flowbite.content(),
    ],
  theme: {
    colors: {
      'blue-tlax': '#0B1556',
      'blue-tlax-light': '#293583',
    },
    extend: {
      screens:{
        'xsm': '767px',
      
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}