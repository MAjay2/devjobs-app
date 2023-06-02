/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        test: "url('/src/assets/desktop/bg-pattern-header.svg')",
        tablet: "url('/Users/mickey/Desktop/devjob-app-main/src/assets/tablet/bg-pattern-header.svg')",
        mobile: "url('/Users/mickey/Desktop/devjob-app-main/src/assets/mobile/bg-pattern-header.svg')"
      }
 
  },
  plugins: [],
  }
}
