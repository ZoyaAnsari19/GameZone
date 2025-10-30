// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        accent: '#10B981',
        bgDark: '#1F2937',
        neon: '#A855F7',
      },
      boxShadow: {
        neon: '0 0 20px rgba(168, 85, 247, 0.5)',
      },
      dropShadow: {
        neon: '0 0 10px rgba(168, 85, 247, 0.8)',
      },
    },
  },
  plugins: [],
};