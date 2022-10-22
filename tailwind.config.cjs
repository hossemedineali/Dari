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
      'primary1':"#6c63ff",
      'primary2':'#cbf3f0',
      'secondary1':'#ff9f1c',
      'secondary2':'#ffbf69',
      'red'       :'#ef2d2d',
      'devider':'#F1F2EC',
      'smallText':'#B5985A'


    },
    extend: {backgroundImage: {
      'search-wrapper': "url('/../public/family.jpg')",
      dropShadow: {
        'top': '35px 0 0 rgba(0, 0, 0, 0.25)',
        
      }
    }},
  },
  plugins: [],
};
