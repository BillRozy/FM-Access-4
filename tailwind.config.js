/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'white-off': 'var(--white-off)',
      'orange-soft': 'var(--orange-soft)',
      'red-soft': 'var(--red-soft)',
      'blue-grayish': 'var(--blue-grayish)',
      'blue-grayish-dark': 'var(--blue-grayish-dark)',
      'blue-dark': 'var(--blue-dark)',
      'blue-dark-opaque': 'var(--blue-dark-opaque)',
    },
    spacing: {
      '100': '8px',
      '150': '12px',
      '200': '16px',
      '300': '24px',
      '400': '32px',
      '500': '40px',
      '800': '64px',
      '1600': '128px',
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px'
    },
  },
  plugins: [],
}

