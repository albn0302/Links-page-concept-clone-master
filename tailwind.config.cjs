/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      'monospace': ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      'abyss': '#141414',
      'white': '#FFFFFF',
      'violet-600': '#7c3aed',
      'violet-600-opacity-50': 'rgba(124, 58, 237, 0.5)',
      'stone-600': '#57534e',
      'stone-700': '#44403c',
      'stone-800': '#292524',
    },
    extend: {
      margin: {
        '78': '310px',
      },
      boxShadow: {
        '2xl-low-opacity': '0 0 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
