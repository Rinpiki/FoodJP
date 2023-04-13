/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cinza: '#292929',
        red: '#DA2535',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
        Inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
