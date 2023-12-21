/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        colors:{
          red:{
            DEFAULT:'#ef4444'
          },
          green:{
            DEFAULT:'#22c55e'
          }
        }

    },
  },
  plugins: [],
}

