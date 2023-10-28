/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        deepPurp: "#61208C",
        lightPurp: "#501D73",
        darkGreen: "#025939",
        springGreen: "#027333",
        highGreen: "#9FF279",
        darkBack : "#000212",
        fontWhite: "#F2EFE9",
        modernBlack: "#28282B"
      },
      fontFamily: {
        oswald: ['Oswald','sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      boxShadow: {
       meteor: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #9FF279"
      },
      fontSize: {
        clampLarge: "clamp(40px, 8vw, 80px)"
      },
      backgroundImage: {
        gradientRadial: 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)'
      }

    }
  },
  plugins: [],
}

