module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-none': '0.5',
        '12': '3rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'animate-bounce-slow': 'bounce 1.3s infinite'

      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [require('tailwind-scrollbar')],
}