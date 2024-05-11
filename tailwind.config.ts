// Example Tailwind configuration snippet
module.exports = {
  darkMode: 'class', // or 'media' based on preference
  theme: {
    extend: {
      colors: {
        dark: '#121212', // Dark background
        primary: '#0070f3', // Primary color
        secondary: '#64ffda', // Secondary color
        accent: '#8892b0', // Accent color
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  // Ensure your purge option is correctly set to remove unused styles in production
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};
