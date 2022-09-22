/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        MobileBg: "url('./assests/bg-main-mobile.png')",
        DesktopBg: "url('./assests/bg-main-desktop.png')",
        CardBack: "url('./assests/bg-card-back.png')",
        CardFront: "url('./assests/bg-card-front.png')",
        Correct: "url('./assests/icon-complete.svg')",
      },
    },
  },
  plugins: [],
};
