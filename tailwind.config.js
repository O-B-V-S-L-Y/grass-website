/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grass': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#0c8d62',
          700: '#07533a',
          800: '#064e3b',
          900: '#022c22',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'default': '0px -18px 170px rgba(0, 0, 0, 0.05), 0px -7.51997px 71.0219px rgba(0, 0, 0, 0.0359427), 0px -4.02054px 37.9717px rgba(0, 0, 0, 0.0298054), 0px -2.25388px 21.2866px rgba(0, 0, 0, 0.025), 0px -1.19702px 11.3052px rgba(0, 0, 0, 0.0201946), 0px -0.498106px 4.70434px rgba(0, 0, 0, 0.0140573)',
        'lg': '0px -18px 170px rgba(0, 0, 0, 0.05), 0px -7.51997px 71.0219px rgba(0, 0, 0, 0.0359427), 0px -4.02054px 37.9717px rgba(0, 0, 0, 0.0298054), 0px -2.25388px 21.2866px rgba(0, 0, 0, 0.025), 0px -1.19702px 11.3052px rgba(0, 0, 0, 0.0201946), 0px -0.498106px 4.70434px rgba(0, 0, 0, 0.0140573)',
        'md': '0px -7.51997px 71.0219px rgba(0, 0, 0, 0.0359427), 0px -4.02054px 37.9717px rgba(0, 0, 0, 0.0298054), 0px -2.25388px 21.2866px rgba(0, 0, 0, 0.025), 0px -1.19702px 11.3052px rgba(0, 0, 0, 0.0201946), 0px -0.498106px 4.70434px rgba(0, 0, 0, 0.0140573)',
        'sm': '0px -4.02054px 37.9717px rgba(0, 0, 0, 0.0298054), 0px -2.25388px 21.2866px rgba(0, 0, 0, 0.025), 0px -1.19702px 11.3052px rgba(0, 0, 0, 0.0201946), 0px -0.498106px 4.70434px rgba(0, 0, 0, 0.0140573)',
        'xl': '0px -18px 170px rgba(0, 0, 0, 0.07), 0px -7.51997px 71.0219px rgba(0, 0, 0, 0.0559427), 0px -4.02054px 37.9717px rgba(0, 0, 0, 0.0498054), 0px -2.25388px 21.2866px rgba(0, 0, 0, 0.045), 0px -1.19702px 11.3052px rgba(0, 0, 0, 0.0401946), 0px -0.498106px 4.70434px rgba(0, 0, 0, 0.0340573)',
        'none': 'none',
      },
    },
  },
  plugins: [],
} 