module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      rotate: {
        'y-90': 'rotateY(90deg)',
      },
      animation: {
        fadeZoomIn: 'fadeZoomIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeZoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      }
    },
  },
  variants: {
    extend: {
      rotate: ['responsive'],
    },
  },
  plugins: [],
};