module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"global.out.css": "global.css"});
    eleventyConfig.addPassthroughCopy('src/js/');

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  
    return {
      passthroughFileCopy: true,
      dir: {
        input: 'src',
        output: '_site',
      },
    };
  };