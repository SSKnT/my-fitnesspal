/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#FFC0CB", // Soft Pink for buttons, accents
        accent: "#2596BE", // Bright Blue for links, CTAs

        // Backgrounds
        darkBackground: "#121212", // Dark background for dark mode

        // Text
        lightText: "#E0E0E0", // Light gray for text on dark background
        primaryText: "#FFFFFF", // White text on dark backgrounds
        darkText: "#212121", // Dark text for light backgrounds
        secondaryText: "#A0A0A0", // Gray for secondary text

        // State colors
        success: "#4CAF50", // Success messages
        error: "#F44336", // Error messages
        warning: "#FFC107", // Warning messages
      },
    },
  },
  plugins: [],
};
