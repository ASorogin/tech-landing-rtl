/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            dark: '#222831',
            light: '#393E46',
          },
          accent: '#00ADB5',
          background: '#EEEEEE',
        },
        fontFamily: {
          assistant: ['Assistant', 'sans-serif'],
        },
        keyframes: {
          gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          }
        },
        animation: {
          gradient: 'gradient 15s ease infinite',
        }
      },
    },
    plugins: [],
  }