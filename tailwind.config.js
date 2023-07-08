const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '../layouts/**/*.html',
    '../assets/**/*.js',
    './content/**/*.md',
    './hugo_stats.json',
  ],
  theme: {
    fontFamily: {
      sans: [ '"Noto Sans KR"', ...fontFamily.sans],
    },
  }
};

