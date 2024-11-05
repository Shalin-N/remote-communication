/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/*.{njk}",
        './src/index.html',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    purge: [ '_site/**/*.html' ],
  };
  