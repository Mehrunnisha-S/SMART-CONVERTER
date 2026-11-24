#Postcss.js
  
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

#Tailwind.Css.js
  
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
