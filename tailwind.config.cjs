/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
    "./index.html",
  ],
  theme: {
    screens: {
      '3xl': { 'max': '2140px' },
      '2xl': { 'max': '1440px' },
      xl: { 'max': '1080px' },
      lg: { 'max': '992px' },
      md: { 'max': '768px' },
      sm: { 'max': '640px' },
      xs: { 'max': '568px' },
    },
    extend: {
      backgroundImage: {
        "intro-image": "url('https://i.postimg.cc/qvvqxtMR/pexels-asad-photo-maldives-1591375.jpg')",
      },
      gridTemplateAreas: {
        'layout': [
          'header header header header',
          'first second third fourth',
          'foot foot foot foot',
        ],
        'layout-small': [
          'header header header header',
          'first first second second',
          'third third fourth fourth',
          'foot foot foot foot',
        ],
      },
      gridTemplateColumns: {
        'layout': 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
