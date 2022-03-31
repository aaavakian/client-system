const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({addVariant}) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
