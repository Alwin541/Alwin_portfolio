/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F5FF',
        navy: {
          900: '#14123A',
          800: '#1E1B4B',
          700: '#2E2868',
          600: '#433C85',
          500: '#5F57A4',
          400: '#857DC2',
          300: '#B0A9E2',
          200: '#D8D4F3',
          100: '#EFEFFC',
          50: '#F7F5FF',
        },
        accent: {
          purple: '#7C5CFF',
          blue: '#4F8BFF',
          pink: '#FF7AC6',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(124, 92, 255, 0.07), 0 20px 25px -5px rgba(20, 18, 58, 0.04)',
        'soft-hover': '0 20px 40px -10px rgba(124, 92, 255, 0.16), 0 10px 20px -5px rgba(20, 18, 58, 0.08)',
        '3d': '0 12px 24px -6px rgba(124, 92, 255, 0.12), 0 4px 6px -2px rgba(20, 18, 58, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)',
        'glossy': '0 8px 32px 0 rgba(124, 92, 255, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
}
