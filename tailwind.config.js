const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './layouts/**/*.{html,js}',
    './plugins/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.disable-scrollbars': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *': {
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          },
        },
      }

      addUtilities(newUtilities)
    }),
  ],

  daisyui: {
    styled: true,
    themes: ['dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
