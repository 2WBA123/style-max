/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {screens:{
      'sm': '640px',
  // => @media (min-width: 640px) { ... }

 'md': '768px',
  // => @media (min-width: 768px) { ... }

 'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
   // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
    }},
    colors:{
      "headergrey":"#686A6D",
     "searchBar" :'#CBD5E1',
     "searchText":"#475569",
     "footer1":"#535C3D",
     "footer2":"#686A6D",
    }
  },
  plugins: [],
}
