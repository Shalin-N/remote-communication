/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/_includes/components/*.{njk}",
        './src/index.html',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    purge: [ '_site/**/*.html' ],
  };
  