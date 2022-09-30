/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black':'#000000',
      'primary1':"#2ec4b6",
      'primary2':'#cbf3f0',
      'secondary1':'#ff9f1c',
      'secondary2':'#ffbf69',
      'red'       :'#ef2d2d',


    },
    extend: {backgroundImage: {
      'search-wrapper': "url('/../public/family.jpg')",
      
    }},
  },
  plugins: [],
};
