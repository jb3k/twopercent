/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172026',
        graphite: '#334155',
        mist: '#f5f7f8',
        field: '#e6f0ec',
        pine: '#0f513f',
        coral: '#e56f51',
        gold: '#f0b84f',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 38, 0.09)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
