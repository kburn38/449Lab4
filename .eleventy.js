// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("styles");
};